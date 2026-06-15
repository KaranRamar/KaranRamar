import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// import the generated profile avatar image
import karanAvatar from '../assets/images/karan_avatar_1781525131479.jpg';

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent"
    >
      {/* Abstract Grid and Electronic Circuits Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-55 pointer-events-none" />
      
      {/* Light glow blur backdrops */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Info (Left column 7 indices on wide screens) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left" id="hero-text-container">
            {/* Status indicator pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-sans font-semibold mb-6 shadow-sm"
              id="hero-status-pill"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Actively Seeking IT Internships
            </motion.div>

            {/* Main Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-slate-900 tracking-tight leading-tight"
              id="hero-greeting"
            >
              Hi, I'm <span className="text-blue-600">{PERSONAL_INFO.name}</span>
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-sans text-slate-700 font-bold mt-2"
              id="hero-tagline"
            >
              {PERSONAL_INFO.title}
            </motion.h2>

            {/* Subtitle / Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-500 max-w-xl mt-6 leading-relaxed font-sans"
              id="hero-pitch"
            >
              Junior ECE Undergrad specialized in bridging low-level embedded system nodes with interactive, high-performance web dashboards. Enthusiastic writer of clean algorithms in C and Python, seeking to build interactive, resilient customer tools at top IT organizations.
            </motion.p>

            {/* Quick Metadata Info */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-6 text-xs text-slate-650 font-sans font-medium"
              id="hero-meta"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/70 shadow-sm text-slate-600">
                <MapPin className="h-3.5 w-3.5 text-blue-600" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/70 shadow-sm text-slate-600">
                <Mail className="h-3.5 w-3.5 text-blue-600" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
              id="hero-ctas"
            >
              <button
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans text-sm font-semibold shadow-lg shadow-blue-105/20 hover:scale-105 active:scale-95 transition-all text-center cursor-pointer"
                id="hero-cta-projects"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={(e) => handleScrollTo(e, '#resume')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-sans text-sm font-semibold hover:scale-105 active:scale-95 transition-all text-center shadow-sm cursor-pointer"
                id="hero-cta-resume"
              >
                <FileText className="h-4 w-4 text-blue-600" />
                View Resume
              </button>
            </motion.div>

            {/* Social Icons Link Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-5 mt-10 text-slate-500"
              id="hero-socials"
            >
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-slate-400">Explore Code:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
                title="GitHub Profile"
                id="social-github-btn"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
                title="LinkedIn Profile"
                id="social-linkedin-btn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
                title="Email Me"
                id="social-email-btn"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Hero Profile Photo Illustration (Right column 5 indexes) */}
          <div className="lg:col-span-5 flex justify-center" id="hero-graphic-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', damping: 20 }}
              className="relative w-72 h-72 sm:w-85 sm:h-85"
            >
              {/* Decorative circuit rings revolving in background */}
              <div className="absolute -inset-4 rounded-full border border-blue-200/30 border-dashed animate-[spin_50s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-slate-200/40 animate-[spin_100s_linear_infinite]" />
              
              {/* Outer soft shadow backing */}
              <div className="absolute inset-0 bg-blue-100/10 rounded-3xl blur-md" />

              {/* Main Avatar Card Frame */}
              <div className="relative h-full w-full bg-white border border-slate-100 rounded-3xl overflow-hidden p-3 shadow-xl group">
                <img
                  src={karanAvatar}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                  id="hero-profile-avatar"
                />
                
                {/* Embedded Circuit Badge overlay */}
                <div className="absolute bottom-6 right-6 flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-slate-150 px-3 py-1.5 rounded-full font-sans text-[10px] text-blue-600 font-bold tracking-wider shadow-sm">
                  <span className="inline-block h-1.5 w-1.5 bg-blue-600 rounded-full animate-pulse" />
                  ECE UNDERGRAD
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
