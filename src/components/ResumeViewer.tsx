import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Printer, Download, Mail, Phone, MapPin, Globe, Check, Award, Cpu } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION, SKILLS } from '../data/portfolioData';

export default function ResumeViewer() {
  const [activeResumeTab, setActiveResumeTab] = useState<'interactive' | 'text-summary'>('interactive');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      
      {/* Decorative ambient lighting elements */}
      <div className="absolute top-1/2 left-[15%] w-96 h-96 bg-blue-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 right-5 w-72 h-72 bg-emerald-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="resume-section-header">
          <span className="text-blue-600 font-sans font-bold text-xs tracking-widest uppercase block mb-1">06 // PROFESSIONAL DOSSIER</span>
          <h2 className="text-3xl font-sans font-bold text-slate-900 tracking-tight">
            Interactive Resume
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-6 font-sans text-sm sm:text-base">
            Inspect a structured transcript of my academic accomplishments, technological proficiencies, and software projects below.
          </p>
        </div>

        {/* Control toolbar row */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#f8fafc] p-4 border border-slate-200 rounded-2xl mb-8 gap-4" id="resume-toolbar-container">
          
          {/* Tabs switch */}
          <div className="flex bg-white p-1 rounded-xl border border-slate-200" id="resume-tabs">
            <button
              onClick={() => setActiveResumeTab('interactive')}
              className={`px-4 py-2 rounded-lg font-sans text-xs font-bold transition-all ${
                activeResumeTab === 'interactive'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              id="resume-tab-btn-interactive"
            >
              Formatted CV View
            </button>
            <button
              onClick={() => setActiveResumeTab('text-summary')}
              className={`px-4 py-2 rounded-lg font-sans text-xs font-bold transition-all ${
                activeResumeTab === 'text-summary'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              id="resume-tab-btn-text"
            >
              Summary Highlights
            </button>
          </div>

          {/* Action triggers */}
          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-800 border border-slate-200 font-sans text-xs font-bold transition-all shadow-sm active:scale-95"
              id="print-resume-cta"
            >
              <Printer className="h-4 w-4 text-blue-600" />
              <span>Print / Save PDF</span>
            </button>

            {/* Simulated direct doc download with message */}
            <button
              onClick={() => {
                alert('Downloading Karan R Offline Resume Document (DocX/PDF payload)... File successfully exported to dynamic system downloads.');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-bold transition-all shadow-md active:scale-95"
              id="download-resume-cta"
            >
              <Download className="h-4 w-4" />
              <span>Download Word Doc</span>
            </button>
          </div>

        </div>

        {/* ADVISORY ADMONITION */}
        <div className="bg-blue-50 border border-blue-100 px-4 py-3 rounded-xl text-center text-xs text-blue-700 font-sans font-semibold mb-8" id="resume-advisory">
          *Tip: For standard 1-page paper document layout copies, choose "Print" and select "Save as PDF" directly in browser.
        </div>

        {/* 1. COMPREHENSIVE INTERACTIVE FORMATTED DOCUMENT GRID */}
        {activeResumeTab === 'interactive' ? (
          <div 
            className="bg-white text-slate-900 border border-slate-200 p-8 sm:p-12 rounded-3xl shadow-xl space-y-8 print:p-0 print:border-none print:shadow-none" 
            id="print-area-cv"
          >
            
            {/* Header / Name Block */}
            <div className="border-b-2 border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h3 className="text-3xl font-sans font-bold tracking-tight text-slate-900">{PERSONAL_INFO.name}</h3>
                <p className="text-sm font-sans text-blue-600 font-bold tracking-wide mt-1 uppercase">{PERSONAL_INFO.title}</p>
                <p className="text-xs font-sans text-slate-500 mt-2 max-w-lg leading-relaxed">
                  Electronics and Communication undergrad seeking to write high-reliability software scripts & reactive client panels.
                </p>
              </div>

              {/* Badges metadata block */}
              <div className="text-left md:text-right font-sans text-[11px] text-slate-600 space-y-1">
                <p className="flex items-center md:justify-end gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span>{PERSONAL_INFO.email}</span>
                </p>
                <p className="flex items-center md:justify-end gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </p>
                <p className="flex items-center md:justify-end gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </p>
                <p className="flex items-center md:justify-end gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span>github.com/karanr-ece</span>
                </p>
              </div>
            </div>

            {/* Split row content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Profile details (Left column 8/12) */}
              <div className="md:col-span-8 space-y-8">
                
                {/* 1. EDUCATION */}
                <div>
                  <h4 className="font-sans text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-4 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                    Education Details
                  </h4>

                  <div className="space-y-5">
                    {EDUCATION.map((edu, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between items-start text-xs sm:text-sm font-sans font-bold">
                          <p className="text-slate-900">{edu.institution}</p>
                          <span className="text-slate-500 font-sans text-[10px] shrink-0 font-normal">{edu.duration}</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] font-sans leading-none">
                          <p className="text-blue-600 font-bold">{edu.degree}</p>
                          <p className="text-emerald-700 font-bold">{edu.score}</p>
                        </div>
                        <ul className="list-disc pl-4 text-[11px] text-slate-600 space-y-1">
                          {edu.details.slice(0, 2).map((det, dIdx) => (
                            <li key={dIdx} dangerouslySetInnerHTML={{ __html: det.replace(/\*\*/g, '') }} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. SCHOLASTIC PROJECTS */}
                <div>
                  <h4 className="font-sans text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-4 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                    Key Tech Projects Done
                  </h4>

                  <div className="space-y-5">
                    {PROJECTS.map((proj) => (
                      <div key={proj.id} className="space-y-1.5">
                        <div className="flex justify-between items-center font-sans font-bold text-xs sm:text-sm">
                          <p className="text-slate-900">{proj.title}</p>
                          <span className="text-slate-500 font-sans text-[10.5px] font-normal italic">{proj.subtitle}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {proj.tags.map((tg) => (
                            <span key={tg} className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 text-[9px] font-sans font-semibold text-slate-500 rounded">
                              {tg}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Personal skill sets side block (Right column 4/12) */}
              <div className="md:col-span-4 space-y-8 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
                
                {/* 1. STACK STACK KNOWLEDGE */}
                <div>
                  <h4 className="font-sans text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-4 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                    Core Toolkit
                  </h4>

                  <div className="space-y-4">
                    {SKILLS.map((sk) => (
                      <div key={sk.name}>
                        <div className="flex justify-between items-center text-[11px] font-sans">
                          <span className="text-slate-800 font-semibold">{sk.name}</span>
                          <span className="text-slate-500 font-bold">{sk.proficiency}%</span>
                        </div>
                        {/* Bar meter print friendly */}
                        <div className="h-1 bg-slate-100 rounded-full overflow-hidden mt-1">
                          <div className="h-full bg-slate-750 rounded-full" style={{ width: `${sk.proficiency}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. RELEVANT MODULES */}
                <div>
                  <h4 className="font-sans text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-4 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                    Coursework
                  </h4>

                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg space-y-1.5 text-[10.5px] font-sans text-slate-600">
                    <p className="flex items-center gap-1">
                      <span className="h-1 w-1 bg-slate-500 rounded-full" />
                      Data Structures & Algos
                    </p>
                    <p className="flex items-center gap-1">
                      <span className="h-1 w-1 bg-slate-500 rounded-full" />
                      Object-Oriented Coding
                    </p>
                    <p className="flex items-center gap-1">
                      <span className="h-1 w-1 bg-slate-500 rounded-full" />
                      Microcontrollers & RTOS
                    </p>
                    <p className="flex items-center gap-1">
                      <span className="h-1 w-1 bg-slate-500 rounded-full" />
                      Wi-Fi Protocols & Web Sockets
                    </p>
                    <p className="flex items-center gap-1">
                      <span className="h-1 w-1 bg-slate-550 rounded-full" />
                      Digital Signal Processing
                    </p>
                  </div>
                </div>

                {/* 3. CLUBS & STUFF */}
                <div>
                  <h4 className="font-sans text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-4 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                    Positions
                  </h4>

                  <p className="text-[10.5px] font-sans text-slate-600 leading-normal font-normal">
                    • **Executive Core Coordinator**, College Coding & IT Tech forum. Formulated 4 mock code contests for juniors.
                  </p>
                  <p className="text-[10.5px] font-sans text-slate-600 leading-normal font-normal mt-2">
                    • **Active Member**, Robotics and Automated Engineering Guild. Integrated multi-wheel stepper motor setups.
                  </p>
                </div>

              </div>

            </div>

          </div>
        ) : (
          /* TEXT SUMMARY HIGHLIGHTS VIEW */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
            id="text-summary-highlights-grid"
          >
            {/* Box 1: Why Hire */}
            <div className="bg-[#f8fafc] border border-slate-200 p-6 rounded-2xl space-y-4">
              <h4 className="text-sm font-sans text-slate-800 font-bold flex items-center gap-2">
                <Check className="h-4 w-4 bg-blue-50 border border-blue-100 text-blue-600 p-0.5 rounded-full" />
                Why hire Karan R for IT Internships?
              </h4>
              <ul className="space-y-3 text-xs text-slate-600 font-sans marker:text-blue-500 list-disc pl-4">
                <li>**Hybrid edge vision**: Excel at hardware sensor firmware and browser dashboard connection codes.</li>
                <li>**Proven algorithm fundamentals**: Accomplished in standard DSA algorithms in C and Python structure codes.</li>
                <li>**Active PSG club member**: Organized multiple algorithmic hack meetups, highlighting project team spirit.</li>
              </ul>
            </div>

            {/* Box 2: Core Hardware specs */}
            <div className="bg-[#f8fafc] border border-slate-200 p-6 rounded-2xl space-y-4">
              <h4 className="text-sm font-sans text-slate-800 font-bold flex items-center gap-2">
                <Cpu className="h-4 w-4 bg-indigo-50 border border-indigo-100 text-indigo-600 p-0.5 rounded-full" />
                Hardware Interfacing Focus
              </h4>
              <ul className="space-y-3 text-xs text-slate-600 font-sans marker:text-indigo-600 list-disc pl-4">
                <li>**FreeRTOS Multitasking**: Experience managing dual ESP32 cores with semaphores and lock guards.</li>
                <li>**Low Latency Protocol stack**: Competence orchestrating standard MQTT queues and WebSocket pipelines.</li>
                <li>**Failsafe Circuitry**: Logical awareness protecting digital relays from electrical overload feedback spikes.</li>
              </ul>
            </div>

            {/* Box 3: Certifications Summary */}
            <div className="bg-[#f8fafc] border border-slate-200 p-6 rounded-2xl col-span-1 sm:col-span-2 flex justify-between items-center flex-col sm:flex-row gap-4">
              <div className="space-y-1">
                <p className="text-[10px] font-sans text-slate-400 uppercase tracking-widest font-bold">SCHOLASTIC ENDORSEMENTS</p>
                <p className="text-sm font-bold text-slate-800">4 Industry-Recognized Certifications Completed</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 font-sans text-[9px] font-semibold text-slate-600 bg-white border border-slate-200 rounded shadow-sm">METACRAFT</span>
                <span className="px-3 py-1 font-sans text-[9px] font-semibold text-slate-600 bg-white border border-slate-200 rounded shadow-sm">GOOGLE TECH</span>
                <span className="px-3 py-1 font-sans text-[9px] font-semibold text-slate-600 bg-white border border-slate-200 rounded shadow-sm">COURSERA</span>
              </div>
            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
}
