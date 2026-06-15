import React from 'react';
import { Terminal, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white border-t border-slate-150 py-12 relative overflow-hidden" id="footer">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#eff6ff_0%,transparent_70%)] opacity-35 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo and Tagline */}
          <div className="flex items-center gap-2.5 font-sans text-slate-600 text-sm">
            <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
              <Terminal className="h-4 w-4" />
            </div>
            <span>
              <strong>{PERSONAL_INFO.name}</strong> // Portfolio {currentYear}
            </span>
          </div>

          {/* Social connections bar */}
          <div className="flex items-center gap-5 text-slate-400" id="footer-socials">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
              title="GitHub Profile"
              id="footer-github"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
              title="LinkedIn Profile"
              id="footer-linkedin"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
              title="Email Inquiry"
              id="footer-email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Copyright notice and scroll to top */}
          <div className="text-right text-slate-550 font-sans text-xs space-y-1">
            <p className="flex items-center gap-1.5 md:justify-end">
              Built with <Heart className="h-3.5 w-3.5 text-rose-500 animate-pulse fill-rose-500" /> & React
            </p>
            <p className="text-[10px] text-slate-400">
              © {currentYear} All Rights Reserved. ECE Student Aspiring Software Engineer.
            </p>
          </div>

        </div>

        {/* Back to top absolute anchor */}
        <div className="text-center mt-8 border-t border-slate-100 pt-6">
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="text-[10px] font-sans text-slate-400 hover:text-slate-650 transition-colors inline-flex items-center gap-1 cursor-pointer font-bold tracking-widest uppercase"
            id="back-to-top"
          >
            ▲ Back To Top
          </a>
        </div>

      </div>
    </footer>
  );
}
