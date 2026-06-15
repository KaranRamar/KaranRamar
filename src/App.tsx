import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'resume', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset headroom to trigger active highlight

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial trigger

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 relative flex flex-col justify-between selection:bg-blue-600/10 selection:text-blue-700"
      id="root-viewport"
    >
      {/* Background Matrix Mesh Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-45 pointer-events-none z-0" />
      
      {/* sticky navigation bar */}
      <Header activeSection={activeSection} />
      
      {/* main content structure */}
      <main className="flex-grow z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationCertifications />
        <ResumeViewer />
        <Contact />
      </main>
      
      {/* copyright tech footer */}
      <Footer />
    </div>
  );
}
