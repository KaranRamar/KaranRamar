import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Braces, 
  Code, 
  CodeXml, 
  Radio, 
  Hammer, 
  Lightbulb, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { Skill } from '../types';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Tech Stack' },
    { value: 'programming', label: 'Programming' },
    { value: 'web-development', label: 'Web Dev' },
    { value: 'hardware-iot', label: 'IoT & Hardware' },
    { value: 'soft-skills', label: 'Essential Skills' },
  ];

  const filteredSkills = SKILLS.filter(skill => {
    if (selectedCategory === 'all') return true;
    return skill.category === selectedCategory;
  });

  // Helper to map icon names to actual Lucide component instances safely
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="h-5 w-5" />;
      case 'Braces':
        return <Braces className="h-5 w-5" />;
      case 'Code':
        return <Code className="h-5 w-5" />;
      case 'CodeXml':
        return <CodeXml className="h-5 w-5" />;
      case 'Radio':
        return <Radio className="h-5 w-5" />;
      case 'Hammer':
        return <Hammer className="h-5 w-5" />;
      case 'Lightbulb':
        return <Lightbulb className="h-5 w-5" />;
      case 'MessageSquare':
        return <MessageSquare className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'programming':
        return 'text-blue-600 bg-blue-50 border-blue-100/70';
      case 'web-development':
        return 'text-emerald-700 bg-emerald-50 border-emerald-100/70';
      case 'hardware-iot':
        return 'text-purple-700 bg-purple-50 border-purple-100/70';
      case 'soft-skills':
        return 'text-amber-800 bg-amber-50 border-amber-100/70';
      default:
        return 'text-slate-600 bg-slate-50 border-slate-150';
    }
  };

  const getProficiencyText = (val: number) => {
    if (val >= 90) return 'Expert';
    if (val >= 80) return 'Highly Proficient';
    if (val >= 70) return 'Proficient';
    return 'Intermediate';
  };

  return (
    <section id="skills" className="py-24 bg-[#f8fafc] relative overflow-hidden border-b border-slate-100">
      {/* Background decoration dots */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-150/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="skills-section-header">
          <span className="text-blue-600 font-sans font-bold text-xs tracking-widest uppercase block mb-1">02 // KNOWLEDGE INDEX</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 tracking-tight text-center">
            Technical & Soft Skills
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-6 font-sans text-sm sm:text-base">
            Curating skills spanning algorithmic code, full-stack client layouts, custom IoT firmware boards, and crucial engineering values.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="skills-tabs-container">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-105 font-bold'
                  : 'bg-white text-slate-600 border-slate-200 hover:text-blue-650 hover:border-slate-350'
              }`}
              id={`skills-tab-btn-${cat.value}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          id="skills-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.2 }}
                key={skill.name}
                id={`skills-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white border border-slate-150 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-100 hover:shadow-md hover:shadow-slate-200/30 group transition-all duration-300"
              >
                <div>
                  {/* Category and Icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border uppercase tracking-wider ${getCategoryColor(skill.category)}`}>
                      {skill.category.replace('-', ' ')}
                    </span>
                    <span className="text-slate-450 group-hover:text-blue-650 transition-colors">
                      {getIcon(skill.iconName)}
                    </span>
                  </div>

                  {/* Name and description */}
                  <h3 className="text-base sm:text-lg font-sans font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed font-sans font-normal">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Meter bar */}
                <div className="mt-6">
                  <div className="flex justify-between items-center text-xs font-sans mb-2">
                    <span className="text-slate-400 text-[10px] font-bold tracking-wide uppercase">Proficiency</span>
                    <span className="text-blue-650 font-bold">{skill.proficiency}%</span>
                  </div>
                  {/* Outer meter */}
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-205">
                    {/* Active inner color fill */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                  {/* Level label */}
                  <div className="flex items-center gap-1 mt-1.5 text-[10px] font-sans font-bold text-slate-400">
                    <Sparkles className="h-2.5 w-2.5 text-amber-500" />
                    <span>{getProficiencyText(skill.proficiency)}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Conceptual visual notice detailing his ECE background */}
        <div className="mt-12 bg-white border border-slate-150 p-6 rounded-2xl flex flex-col sm:flex-row gap-5 items-center justify-between shadow-sm" id="skills-knowledge-summary">
          <div className="text-left space-y-1">
            <h4 className="font-sans text-sm font-bold text-slate-800">
              Why my Hybrid ECE + CSE Toolkit is an Asset to IT Recruiters:
            </h4>
            <p className="text-xs text-slate-500 max-w-4xl leading-relaxed">
              In modern computing, the boundary between edge microcontroller devices and cloud services is disappearing. Because of my academic ECE experience, I have an intuitive grasp of byte arrays, network socket interfaces, thread triggers (RTOS), and hardware logic. I apply this low-overhead efficiency when scripting Python servers or managing high-performance browser states under React.
            </p>
          </div>
          <span className="shrink-0 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-sans font-bold rounded-lg shadow-sm">
            Hardware + Cloud API Integration
          </span>
        </div>

      </div>
    </section>
  );
}
