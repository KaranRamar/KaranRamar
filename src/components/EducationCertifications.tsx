import { motion } from 'motion/react';
import { BookOpen, Award, MapPin, Calendar, ExternalLink, GraduationCap } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 bg-[#f8fafc] relative overflow-hidden border-b border-slate-100">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Grid between Education and Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* L: EDUCATION SECTION (7 indices) */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-12" id="education-container">
            <div>
              <span className="text-blue-600 font-sans font-bold text-xs tracking-widest uppercase block mb-1">04 // ACADEMIC FOUNDATIONS</span>
              <h2 className="text-3xl font-sans font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
                <GraduationCap className="h-8 w-8 text-blue-600 shrink-0" />
                Education Journey
              </h2>
              <div className="h-1 w-12 bg-blue-650 mt-4 rounded-full" />
            </div>

            {/* Vertical timeline timeline */}
            <div className="relative border-l border-slate-200 ml-4 pl-8 space-y-12 py-2" id="education-timeline">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative group" id={`education-timeline-item-${index}`}>
                  
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center group-hover:border-blue-600 transition-colors">
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-all scale-100" />
                  </div>

                  {/* Header metadata row */}
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h4 className="text-lg sm:text-xl font-sans font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                        {edu.institution}
                      </h4>
                      <p className="text-sm font-sans text-blue-600 font-bold mt-1">{edu.degree}</p>
                    </div>
                    {/* Period Badge */}
                    <span className="inline-flex px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-500 shrink-0 shadow-sm">
                      {edu.duration}
                    </span>
                  </div>

                  {/* Location & Score summary */}
                  <div className="flex items-center gap-4 mt-3 text-xs font-sans text-slate-405">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-slate-400" />
                      {edu.location}
                    </span>
                    <span className="h-1 w-1 bg-slate-300 rounded-full" />
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100/70 shadow-sm">
                      {edu.score}
                    </span>
                  </div>

                  {/* Descriptive bullet detail items */}
                  <ul className="mt-5 space-y-2.5 pl-4 list-disc text-slate-500 marker:text-blue-650/50">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs sm:text-sm leading-relaxed font-sans font-normal">
                        {detail}
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </div>

          {/* R: CERTIFICATIONS SECTION (5 indices) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-12" id="certifications-container">
            <div>
              <span className="text-blue-600 font-sans font-bold text-xs tracking-widest uppercase block mb-1">05 // SEALS OF KNOWLEDGE</span>
              <h2 className="text-3xl font-sans font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
                <Award className="h-8 w-8 text-blue-600 shrink-0" />
                Certifications
              </h2>
              <div className="h-1 w-12 bg-blue-650 mt-4 rounded-full" />
            </div>

            {/* Grid display certificates */}
            <div className="space-y-4" id="certifications-grid">
              {CERTIFICATIONS.map((cert, index) => (
                <div
                  key={index}
                  id={`cert-item-${index}`}
                  className="bg-white border border-slate-200/80 p-5 rounded-2xl flex gap-4 items-start hover:border-blue-105 hover:shadow-md transition-all duration-300 group shadow-sm"
                >
                  <div className="p-2.5 bg-[#f8fafc] border border-slate-100 rounded-xl mt-0.5 group-hover:bg-blue-50 group-hover:border-blue-105 transition-all">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>

                  <div className="space-y-2 flex-grow">
                    <p className="text-[10px] font-sans text-slate-400 uppercase tracking-widest font-bold">{cert.issuer}</p>
                    
                    <h4 className="text-sm font-sans font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h4>

                    {/* Skill tags learned */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="px-2 py-0.5 rounded bg-[#f8fafc] border border-slate-150 text-[9px] font-semibold text-slate-500">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Date row */}
                    <div className="flex justify-between items-center pt-2 text-[10px] font-sans text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-slate-400" />
                        Achieved: {cert.date}
                      </span>
                      <span className="text-slate-450 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-0.5">
                        Verify
                        <ExternalLink className="h-2.5 w-2.5" />
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Motivational message banner */}
            <div className="bg-white border border-slate-150 p-5 rounded-2xl shadow-sm" id="academy-achievement-notice">
              <h5 className="font-sans text-xs font-bold text-slate-705 uppercase tracking-widest">Engineering Club Contributions</h5>
              <p className="font-sans text-xs text-slate-500 leading-normal mt-2">
                As a passionate computer student, I systematically challenge concepts in structural algorithm puzzles, competing occasionally across LeetCode profiles to fine-tune loop complexity triggers and scale micro-node solutions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
