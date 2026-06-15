import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Check, 
  Terminal, 
  Cpu, 
  Settings, 
  Play, 
  Pause, 
  RotateCcw, 
  Radio, 
  Zap,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

// Import generated image
import esp32ControlImg from '../assets/images/esp32_iot_control_1781525152758.jpg';

export default function Projects() {
  const [activeProjectTab, setActiveProjectTab] = useState<'overview' | 'features' | 'challenges'>('overview');
  
  // ESP32 Simulator State
  const [simMotorPower, setSimMotorPower] = useState<boolean>(false);
  const [simMotorSpeed, setSimMotorSpeed] = useState<number>(35); // PWM Duty cycle %
  const [simRelay1, setSimRelay1] = useState<boolean>(false);
  const [simRelay2, setSimRelay2] = useState<boolean>(false);
  const [simCurrentAmps, setSimCurrentAmps] = useState<number>(0);
  const [simWarnings, setSimWarnings] = useState<string[]>([]);
  const [simTerminalLogs, setSimTerminalLogs] = useState<string[]>([
    '--- ESP32 Bootloader v1.4.2 ---',
    'INFO: Initializing flash filesystem [SPIFFS] ... OK',
    'INFO: Connecting to Local_Router ... WiFi Connected. IP: 192.168.1.144',
    'INFO: Web Server started on port 80 [HTTP]',
    'STATUS: Sinks established, awaiting user commands.'
  ]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal when logs change
  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [simTerminalLogs]);

  // Handle active telemetry logic simulating real ESP32 sensors
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (simMotorPower) {
      timer = setInterval(() => {
        // Base amps calculate from motor speed, adding a thin layer of noise
        const baseAmps = (simMotorSpeed * 0.08) + 0.1;
        const noisyAmps = parseFloat((baseAmps + (Math.random() * 0.05 - 0.025)).toFixed(2));
        setSimCurrentAmps(noisyAmps);

        // Warning trigger logic
        if (noisyAmps > 6.0) {
          if (!simWarnings.includes('OVER_CURRENT_ALERT')) {
            setSimWarnings(prev => [...prev, 'OVER_CURRENT_ALERT']);
            addTerminalLog('⚠️ WARN: Overcurrent threshold exceeded! Safe cut-off monitoring active.');
          }
        } else {
          if (simWarnings.includes('OVER_CURRENT_ALERT')) {
            setSimWarnings(prev => prev.filter(w => w !== 'OVER_CURRENT_ALERT'));
          }
        }
      }, 600);
    } else {
      setSimCurrentAmps(0);
      if (simWarnings.includes('OVER_CURRENT_ALERT')) {
        setSimWarnings(prev => prev.filter(w => w !== 'OVER_CURRENT_ALERT'));
      }
    }

    return () => clearInterval(timer);
  }, [simMotorPower, simMotorSpeed]);

  const addTerminalLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
    setSimTerminalLogs(prev => [...prev, `[${timestamp}] ${msg}`]);
  };

  const toggleMotorPower = () => {
    const newState = !simMotorPower;
    setSimMotorPower(newState);
    if (newState) {
      addTerminalLog('⚡ GPIO 12: Motor PWM channel STARTED. Frequency: 50Hz, Soft-start active.');
    } else {
      addTerminalLog('🛑 GPIO 12: Motor PWM channel STOPPED. Mechanical coast deceleration initiated.');
    }
  };

  const handleSpeedSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = parseInt(e.target.value);
    setSimMotorSpeed(rawVal);
    // Log occasionally when they release or change speeds significantly
    if (rawVal % 25 === 0 || rawVal === 100 || rawVal === 0) {
      addTerminalLog(`⚙️ PWM Duty Cycle changed: ${rawVal}% (Simulated RPM: ${Math.round(rawVal * 24)} RPM)`);
    }
  };

  const toggleRelay1 = () => {
    const newRelay = !simRelay1;
    setSimRelay1(newRelay);
    if (newRelay) {
      addTerminalLog('🟢 RELAY 1: GPIO 14 set HIGH. Industrial Relay energized [Contacts Logged: closed]');
    } else {
      addTerminalLog('🔴 RELAY 1: GPIO 14 set LOW. Industrial Relay released [Contacts Logged: open]');
    }
  };

  const toggleRelay2 = () => {
    const newRelay = !simRelay2;
    setSimRelay2(newRelay);
    if (newRelay) {
      addTerminalLog('🟢 RELAY 2: GPIO 15 set HIGH. Status AUX Relay engaged [Contacts Logged: closed]');
    } else {
      addTerminalLog('🔴 RELAY 2: GPIO 15 set LOW. Status AUX Relay disengaged [Contacts Logged: open]');
    }
  };

  const triggerReset = () => {
    addTerminalLog('🔃 EVENT: Force hardware restart button clicked. Resetting ESP32 controller...');
    setSimMotorPower(false);
    setSimRelay1(false);
    setSimRelay2(false);
    setSimCurrentAmps(0);
    setSimWarnings([]);
    setTimeout(() => {
      setSimTerminalLogs(prev => [
        ...prev,
        '🔄 REBOOT: ESP32 core woke up from software clean reset.',
        'INFO: Initializing flash filesystem [SPIFFS] ... OK',
        'INFO: Wi-Fi stack connected. IP: 192.168.1.144',
        'STATUS: Awaiting dashboard telemetry subscription...'
      ]);
    }, 1000);
  };

  const featuredProject = PROJECTS.find(p => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-white border-b border-slate-100 relative z-10 overflow-hidden font-sans">
      
      {/* Background aesthetics */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-110/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="projects-section-header">
          <span className="text-blue-600 font-sans font-bold text-xs tracking-widest uppercase block mb-1">03 // PRACTICAL LABS</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 tracking-tight text-center">
            Featured Engineering Projects
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-6 font-sans text-sm sm:text-base">
            Showcasing real, working hardware-meets-software systems that express analytical software planning, algorithmic robustness, and clean customer-centric layout styles.
          </p>
        </div>

        {/* 1. MAJOR FEATURED PROJECT: Smart Motor & Relay Control */}
        <div className="mb-20 bg-white border border-slate-150 rounded-3xl overflow-hidden shadow-sm" id="featured-project-box">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col (6/12) - Detail Description with interactive tabs */}
            <div className="lg:col-span-12 xl:col-span-6 p-6 sm:p-10 border-b xl:border-b-0 xl:border-r border-slate-150 flex flex-col justify-between">
              
              <div>
                {/* Header Flag */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-105 text-blue-600 text-xs font-semibold mb-6">
                  <Sparkles className="h-3 w-3" />
                  Primary Featured Project
                </span>

                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 leading-tight">
                  {featuredProject.title}
                </h3>
                <p className="font-sans text-blue-600 text-sm mt-1 mb-5">{featuredProject.subtitle}</p>

                {/* Sub-tabs row */}
                <div className="flex border-b border-slate-150 gap-6 mb-6 font-sans text-xs">
                  {(['overview', 'features', 'challenges'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveProjectTab(tab)}
                      className={`pb-3 capitalize transition-all relative cursor-pointer ${
                        activeProjectTab === tab 
                          ? 'text-blue-600 font-bold' 
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                      id={`project-tab-btn-${tab}`}
                    >
                      {itemLabel(tab)}
                      {activeProjectTab === tab && (
                        <motion.span 
                          layoutId="projectTabIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" 
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab content renderer with AnimatePresence */}
                <div className="min-h-56">
                  <AnimatePresence mode="wait">
                    {activeProjectTab === 'overview' && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-4"
                      >
                        <p className="text-sm text-slate-550 leading-relaxed font-sans font-normal">
                          {featuredProject.longDescription}
                        </p>
                        <div className="bg-[#f8fafc] border border-slate-100 p-4 rounded-xl flex items-start gap-3">
                          <Cpu className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <p className="text-xs text-slate-500 leading-normal font-sans">
                            <span className="font-bold text-slate-700">Skills Highlighted</span>: Real-time multitasking schedulers via FreeRTOS on dual-cores, analog ADC scaling conversions, low-interference relay protection buffers, and asynchronous network API endpoints.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {activeProjectTab === 'features' && (
                      <motion.div
                        key="features"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-3"
                      >
                        <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-slate-400">Core Functional Assets Included:</h4>
                        <ul className="space-y-2">
                          {featuredProject.keyFeatures.map((f, i) => (
                            <li key={i} className="flex gap-2.5 items-start text-xs text-slate-500 leading-relaxed font-sans">
                              <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {activeProjectTab === 'challenges' && (
                      <motion.div
                        key="challenges"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-4"
                      >
                        <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-slate-400">Hard Engineering Debug Session:</h4>
                        <p className="text-sm text-slate-550 leading-relaxed font-sans">
                          {featuredProject.challengesSolved}
                        </p>
                        <div className="bg-rose-50/50 border border-rose-100 p-4 rounded-xl flex items-start gap-3">
                          <Zap className="h-5 w-5 text-amber-500 shrink-0 mt-0.5 animate-pulse" />
                          <p className="text-[11px] text-slate-550 leading-normal">
                            <span className="font-bold text-slate-700">Debounce Logic</span>: Debounced mechanical relays via a non-blocking software loop inside FreeRTOS task #2, cutting CPU overhead by 94% over traditional delay execution code.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Tag badges footer */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-[#f8fafc] border border-slate-150 text-[10px] font-bold text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-800 border border-slate-205 font-sans text-xs font-semibold transition-colors"
                    id="featured-github-link"
                  >
                    <Github className="h-3.5 w-3.5 text-slate-400" />
                    Inspection Code on GitHub
                  </a>
                  <a
                    href="#simulator"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-bold transition-all shadow-sm"
                    id="featured-sim-trigger"
                  >
                    <Play className="h-3.5 w-3.5" />
                    Launch Live Simulator below
                  </a>
                </div>
              </div>

            </div>

            {/* Right Col (6/12) - Beautiful image and tech specification list */}
            <div className="lg:col-span-12 xl:col-span-6 flex flex-col justify-between bg-[#f8fafc]">
              <div className="relative h-64 sm:h-80 lg:h-1/2 overflow-hidden border-b border-slate-150">
                <img
                  src={esp32ControlImg}
                  alt={featuredProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  id="featured-thumbnail-pic"
                />
                
                {/* Circuit outline matrix layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/10 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-1.5 font-sans text-[9px] font-bold text-slate-550 uppercase tracking-widest bg-white/90 backdrop-blur-md px-3 py-1 rounded-md border border-slate-200">
                  <span>SYSTEM OVERVIEW DIALECT</span>
                </div>
              </div>

              {/* Project Stats Parameters list */}
              <div className="p-6 sm:p-10 space-y-4">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-slate-400">Hardware & Communication Specs:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l border-blue-500/40 pl-3">
                    <p className="text-[10px] font-bold text-slate-405 leading-none uppercase">PROCESSOR</p>
                    <p className="text-xs font-sans font-bold text-slate-700 mt-1">ESP-WROOM-32 (Tensilica Dual Core)</p>
                  </div>
                  <div className="border-l border-blue-500/40 pl-3">
                    <p className="text-[10px] font-bold text-slate-405 leading-none uppercase">COMMUNICATION</p>
                    <p className="text-xs font-sans font-bold text-slate-705 mt-1">802.11 b/g/n WiFi client & server</p>
                  </div>
                  <div className="border-l border-blue-500/40 pl-3">
                    <p className="text-[10px] font-bold text-slate-405 leading-none uppercase">ACTUATOR BUS</p>
                    <p className="text-xs font-sans font-bold text-slate-705 mt-1">PWM Decelerators & Optocoupler Relays</p>
                  </div>
                  <div className="border-l border-blue-500/40 pl-3">
                    <p className="text-[10px] font-bold text-slate-405 leading-none uppercase">CLIENT LAYOUT</p>
                    <p className="text-xs font-sans font-bold text-slate-705 mt-1">Asynchronous Web Sockets console UI</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 2. THE EMBEDDED SYSTEM SIMULATOR PANEL */}
        <div id="simulator" className="mb-24 bg-[#f8fafc] border border-slate-150 rounded-3xl p-6 sm:p-8 shadow-sm relative" >
          {/* Subtle design corners */}
          <div className="absolute top-3 left-3 h-3 w-3 border-t border-l border-blue-400" />
          <div className="absolute top-3 right-3 h-3 w-3 border-t border-r border-blue-400" />
          <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-blue-400" />
          <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-blue-400" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-150 pb-5 mb-6 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-sans text-xs text-slate-400 uppercase font-bold tracking-widest">Interactive Sandbox Hardware</span>
              </div>
              <h4 className="text-lg font-sans font-bold text-slate-800 mt-1">
                Karan's ESP32 Hardware Relay and Motor Control Dashboard
              </h4>
            </div>
            
            {/* Control triggers */}
            <div className="flex gap-2">
              <button
                onClick={triggerReset}
                className="px-3.5 py-1.5 rounded-lg bg-white text-slate-600 hover:text-slate-800 border border-slate-200 hover:border-slate-350 cursor-pointer font-sans text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
                title="Trigger ESP32 Reset"
                id="sim-reset-btn"
              >
                <RotateCcw className="h-3.5 w-3.5 text-slate-400" />
                ESP32 Restart
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Col 5: Microcontroller Control Knobs */}
            <div className="lg:col-span-12 xl:col-span-5 bg-white border border-slate-150 rounded-2xl p-5 flex flex-col justify-between">
              
              <div className="space-y-6">
                <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Dashboard Hardware Controllers</span>
                
                {/* 1. MOTOR MAIN PWM SPEED POWER */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-[#f8fafc] p-3 rounded-xl border border-slate-150">
                    <div>
                      <p className="text-xs font-bold text-slate-700">GPIO 12 // DC Motor Relay</p>
                      <p className="text-[10px] text-slate-400 font-sans">PWM frequency driver line</p>
                    </div>
                    
                    <button
                      onClick={toggleMotorPower}
                      className={`px-4 py-2 rounded-lg font-sans text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        simMotorPower
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                      id="sim-motor-power-btn"
                    >
                      {simMotorPower ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                      {simMotorPower ? 'Motor ON' : 'Motor OFF'}
                    </button>
                  </div>

                  {/* Motor Speed PWM Slider */}
                  <div className={`p-3 bg-[#f8fafc] rounded-xl border transition-all ${simMotorPower ? 'border-slate-150' : 'border-slate-100 opacity-40'}`}>
                    <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                      <span>Speed Config (PWM Duty)</span>
                      <span className="text-blue-600 font-bold">{simMotorSpeed}% ({Math.round(simMotorSpeed * 24)} RPM)</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={simMotorSpeed}
                      onChange={handleSpeedSlider}
                      disabled={!simMotorPower}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      id="sim-speed-slider"
                    />
                  </div>
                </div>

                {/* 2. SECONDARY DIGITAL RELAYS */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Relay 1 Toggle */}
                  <div className="bg-[#f8fafc] p-4 border border-slate-150 rounded-xl flex flex-col justify-between h-32">
                    <div>
                      <p className="font-bold text-xs text-slate-700 leading-tight">GPIO 14 // Relay 1</p>
                      <p className="text-[9px] text-slate-400 mt-1 uppercase font-bold">Actuates High Power</p>
                    </div>
                    <button
                      onClick={toggleRelay1}
                      className={`w-full py-1.5 rounded-lg font-sans text-[10px] font-bold cursor-pointer transition-all ${
                        simRelay1
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-200 text-slate-600 hover:bg-slate-250'
                      }`}
                      id="sim-relay1-btn"
                    >
                      {simRelay1 ? 'RELAY ACTIVE' : 'RELAY STANDBY'}
                    </button>
                  </div>

                  {/* Relay 2 Toggle */}
                  <div className="bg-[#f8fafc] p-4 border border-slate-150 rounded-xl flex flex-col justify-between h-32">
                    <div>
                      <p className="font-bold text-xs text-slate-700 leading-tight">GPIO 15 // Relay 2</p>
                      <p className="text-[9px] text-slate-400 mt-1 uppercase font-bold">Internal Auxiliary Bus</p>
                    </div>
                    <button
                      onClick={toggleRelay2}
                      className={`w-full py-1.5 rounded-lg font-sans text-[10px] font-bold cursor-pointer transition-all ${
                        simRelay2
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-200 text-slate-600 hover:bg-slate-250'
                      }`}
                      id="sim-relay2-btn"
                    >
                      {simRelay2 ? 'RELAY ACTIVE' : 'RELAY STANDBY'}
                    </button>
                  </div>

                </div>

              </div>

              {/* Warning alarm banner */}
              {simWarnings.includes('OVER_CURRENT_ALERT') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 p-3 bg-rose-50 border border-rose-100 text-rose-600 text-xs font-semibold rounded-lg flex items-center gap-2"
                  id="sim-alarm-banner"
                >
                  <Zap className="h-4 w-4 text-rose-500 animate-bounce shrink-0" />
                  <span>CURRENT LIMIT NOTICE! Current draw exceeds 4.5 Amps.</span>
                </motion.div>
              )}

            </div>

            {/* Col 4: Live Simulated Visualization & Gauges */}
            <div className="lg:col-span-12 xl:col-span-4 bg-white border border-slate-150 rounded-2xl p-5 flex flex-col justify-between">
              
              <div className="space-y-4">
                <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest block">System Physical Telemetry</span>
                
                {/* Simulated Motor Graphic Wheel */}
                <div className="flex justify-center items-center h-40 bg-[#f8fafc] rounded-2xl border border-slate-150 overflow-hidden relative">
                  
                  {/* Rotating gear wheel with speed logic */}
                  <motion.div
                    animate={simMotorPower ? { rotate: 360 } : {}}
                    transition={simMotorPower ? {
                      repeat: Infinity,
                      ease: 'linear',
                      duration: Math.max(0.2, 5 - (simMotorSpeed * 0.048)) // speeds up duration as PWM rises
                    } : {}}
                    className="relative w-24 h-24 rounded-full border-4 border-dashed border-blue-600 flex items-center justify-center animate-none"
                    id="sim-motor-gear"
                  >
                    <div className="w-16 h-16 rounded-full border border-slate-200 bg-white flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-slate-400" />
                    </div>
                    {/* Gear vanes */}
                    <div className="absolute top-0 bottom-0 left-1/2 -ml-1 w-2 bg-blue-500/20 rounded" />
                    <div className="absolute left-0 right-0 top-1/2 -mt-1 h-2 bg-blue-500/20 rounded" />
                  </motion.div>

                  {/* Operational indicators floating */}
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-0.5 rounded-full border border-slate-150 text-[9px] font-semibold text-slate-500 shadow-sm">
                    {simMotorPower ? `SPINNING: ${Math.round(simMotorSpeed * 24)} RPM` : 'MOTOR SEIZED STATE'}
                  </div>

                  <div className="absolute bottom-3 right-3 flex gap-1 items-center">
                    <span className={`inline-block h-2 w-2 rounded-full ${simMotorPower ? 'bg-green-500 animate-pulse' : 'bg-slate-350'}`} />
                    <span className="text-[10px] font-bold text-slate-450">{simMotorPower ? 'RUNNING' : 'STANDBY'}</span>
                  </div>

                </div>

                {/* Telemetry data readings */}
                <div className="space-y-3 pt-2">
                  
                  {/* Gauge draw 1: Amperes */}
                  <div className="flex justify-between items-center text-xs font-sans bg-[#f8fafc] p-2.5 rounded-xl border border-slate-150">
                    <span className="text-slate-450 font-bold">CURRENT DRAW (ADC)</span>
                    <span className={`font-bold ${simCurrentAmps > 6.0 ? 'text-rose-600 animate-pulse' : 'text-blue-600'}`}>
                      {simCurrentAmps ? `${simCurrentAmps.toFixed(2)} A` : '0.00 A'}
                    </span>
                  </div>

                  {/* Gauge draw 2: Bus Voltage */}
                  <div className="flex justify-between items-center text-xs font-sans bg-[#f8fafc] p-2.5 rounded-xl border border-slate-150">
                    <span className="text-slate-450 font-bold">OPERATING BUS VOLTS</span>
                    <span className="text-slate-700 font-bold">
                      {simMotorPower ? '12.04 V' : '12.18 V'}
                    </span>
                  </div>

                  {/* Gauge draw 3: Power usages */}
                  <div className="flex justify-between items-center text-xs font-sans bg-[#f8fafc] p-2.5 rounded-xl border border-slate-150">
                    <span className="text-slate-455 font-bold">ACTIVE POWER WATTS</span>
                    <span className="text-slate-700 font-bold">
                      {simMotorPower ? `${(simCurrentAmps * 12).toFixed(1)} W` : '0.00 W'}
                    </span>
                  </div>

                </div>

              </div>

              <div className="text-[10px] text-slate-400 font-sans leading-normal border-t border-slate-150 pt-3.5 mt-4">
                *Toggling speed configs changes ADC current thresholds simulated over real-time firmware loops.
              </div>

            </div>

            {/* Col 3: ESP32 Serial Live Monitor Console Logs */}
            <div className="lg:col-span-12 xl:col-span-3 bg-white border border-slate-150 rounded-2xl p-4 flex flex-col justify-between">
              
              <div className="space-y-3 w-full">
                <div className="flex justify-between items-center border-b border-slate-150 pb-2">
                  <div className="flex items-center gap-1.5 text-slate-500 font-sans text-[10px] font-bold">
                    <Terminal className="h-3.5 w-3.5 text-blue-600" />
                    <span>ESP32 SERIAL COM3</span>
                  </div>
                  <span className="text-[9px] text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-150 font-mono font-bold">
                    115200 BAUD
                  </span>
                </div>

                {/* Output log area */}
                <div 
                  className="bg-slate-950 text-[10px] font-mono text-emerald-400 leading-relaxed overflow-y-auto h-64 border-none rounded-lg p-2.5 space-y-1.5 flex flex-col"
                  id="sim-terminal-logs-window"
                >
                  {simTerminalLogs.map((log, index) => (
                    <div key={index} className="break-all text-left">
                      {log}
                    </div>
                  ))}
                  <div ref={terminalBottomRef} />
                </div>
              </div>

              <div className="bg-[#f8fafc] p-2.5 rounded-xl border border-slate-150 mt-4">
                <p className="text-[9px] font-bold text-slate-400 uppercase leading-none">Simulating Software Rules:</p>
                <p className="text-[10px] text-slate-500 leading-relaxed mt-1 font-sans">
                  Firmware uses FreeRTOS scheduling. Soft PWM limits electrical contact fatigue.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* 3. MASONRY GRID OF OTHER PROJECTS */}
        <h4 className="text-xs font-sans uppercase font-bold text-slate-400 tracking-widest mb-6 px-1">Other IT Development Achievements</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="secondary-projects-grid">
          {secondaryProjects.map((proj) => (
            <motion.div
              key={proj.id}
              whileHover={{ y: -4 }}
              id={`secondary-project-card-${proj.id}`}
              className="bg-[#f8fafc] border border-slate-150 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-blue-100 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Product illustration image block */}
                <div className="h-48 overflow-hidden relative border-b border-slate-150">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    id={`secondary-project-img-${proj.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/10 to-transparent" />
                </div>

                {/* Info and descriptiveness */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {proj.tags.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[9px] font-semibold text-slate-500">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h5 className="font-sans font-bold text-lg text-slate-800 hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h5>
                  <p className="text-xs font-semibold text-blue-600 mt-0.5">{proj.subtitle}</p>

                  <p className="text-xs text-slate-550 mt-4 leading-relaxed font-sans font-normal">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* GitHub Link row */}
              <div className="p-6 border-t border-slate-150 flex items-center justify-between">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
                  id={`secondary-project-github-${proj.id}`}
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
                
                {/* Live Sandbox Alert Modal / trigger */}
                <button
                  onClick={() => alert(`This sandbox simulation for "${proj.title}" is offline by default. Inspect the source archives on GitHub to run it locally!`)}
                  className="font-sans text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer flex items-center gap-1 transition-colors"
                  id={`secondary-project-alert-${proj.id}`}
                >
                  <span>Launch Demo</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Small helper label mapping
function itemLabel(activeTab: 'overview' | 'features' | 'challenges'): string {
  switch (activeTab) {
    case 'overview':
      return 'Overview';
    case 'features':
      return 'Built Architecture';
    case 'challenges':
      return 'Solved Challenges';
    default:
      return '';
  }
}
