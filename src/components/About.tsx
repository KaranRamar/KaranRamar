import { motion } from 'motion/react';
import { Cpu, Terminal, Laptop, CodeXml } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const values = [
    {
      icon: <Terminal className="h-5 w-5 text-blue-600" />,
      title: 'Logic Over Hacks',
      description: 'Whether it is a microcontroller state machine or a React router state, I prioritize writing clean, self-documenting code with comprehensive unit testing.'
    },
    {
      icon: <Cpu className="h-5 w-5 text-blue-600" />,
      title: 'Hardware Intelligence',
      description: 'My ECE background taught me memory constraints, clock cycles, and digital interfaces, allowing me to write ultra-optimized software structures.'
    },
    {
      icon: <Laptop className="h-5 w-5 text-blue-600" />,
      title: 'Full Stack Vision',
      description: 'I love web engineering because of its global feedback loop. I aspire to couple backends (NodeJS/Python APIs) with stunning user-centered client apps.'
    },
    {
      icon: <CodeXml className="h-5 w-5 text-blue-600" />,
      title: 'Continuous Learner',
      description: 'From learning Git basics to building responsive multi-module client interfaces, I relish mastering frameworks that optimize developer workspaces.'
    }
  ];

  const stats = [
    { label: 'ECE Education Progress', val: 'Year 3 / 4' },
    { label: 'Cumulative CGPA', val: '8.42 / 10' },
    { label: 'Technical Languages', val: 'C, Python, JS' },
    { label: 'IoT Embedded Focus', val: 'ESP32 / Wi-Fi API' }
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="about-section-header">
          <span className="text-blue-600 font-sans font-bold text-xs tracking-widest uppercase block mb-1">01 // MY STORY</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 tracking-tight text-center">
            About Me
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative layout splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="about-story-container">
          
          {/* Detailed Biography Text */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-900">
              Transforming Engineering Principles into Software Solutions
            </h3>
            
            <p className="text-slate-500 leading-relaxed font-sans text-sm sm:text-base">
              {PERSONAL_INFO.bio}
            </p>

            <p className="text-slate-500 leading-relaxed font-sans text-sm sm:text-base">
              While my core curriculum in <span className="text-blue-650 font-bold">Electronics & Communication Engineering</span> covers circuit designs, electromagnetic spectrums, and network layouts, I fell in love with <span className="text-blue-650 font-bold">logic architectures</span> and code instructions. Over the last two years, I have actively transitioned to software development, self-learning web dynamics, modern scripting patterns, and computational algorithmic structures.
            </p>

            <p className="text-slate-500 leading-relaxed font-sans text-sm sm:text-base">
              This hybrid viewpoint gives me a distinctive competitive edge in the IT industry. I understand the hardware layer (microcontrollers, Wi-Fi modules, signals, SPI bus) and how to securely exchange payloads with client-side reactive frameworks in real-time. I build bridges from device nodes to premium digital interfaces.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6" id="about-stats-grid">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8fafc] border border-slate-100 p-4 rounded-xl font-sans shadow-sm"
                  id={`about-stat-${idx}`}
                >
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{s.label}</p>
                  <p className="text-lg sm:text-xl font-bold text-blue-600 mt-1">{s.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillars Cards Stack */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-4" id="about-pillars-stack">
            <h4 className="text-xs font-sans font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Core Engineering Values</h4>
            
            {values.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, borderColor: 'rgba(37, 99, 235, 0.4)' }}
                className="bg-[#f8fafc] border border-slate-150 p-5 rounded-2xl flex gap-4 items-start shadow-sm transition-all duration-300"
                id={`about-pillar-card-${i}`}
              >
                <div className="p-2 bg-white border border-slate-100 rounded-xl mt-0.5 shadow-sm">
                  {v.icon}
                </div>
                <div>
                  <h5 className="font-sans text-sm font-bold text-slate-800">{v.title}</h5>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
