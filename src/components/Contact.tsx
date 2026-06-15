import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle, Copy, Terminal, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FormMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  timestamp: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCopied, setIsCopied] = useState<string | null>(null);

  // Dynamic local simulated database queue
  const [simulatedInbox, setSimulatedInbox] = useState<FormMessage[]>([
    {
      id: 'msg-demo-1',
      name: 'Google India Recruiters Team',
      email: 'careers@google.com',
      subject: 'Frontend Internship Call',
      content: 'Hello Karan R, your ESP32 Hardware relay dashboard interactive simulator on your portfolio is extremely clever. We would love to discuss a prospective IT systems intern role with you soon!',
      timestamp: 'Today at 09:12 AM'
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear errors when they start typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email structure is invalid (@ domain missing).';
    }
    if (!formData.subject.trim()) errors.subject = 'Please state the inquiry topic.';
    if (!formData.message.trim()) {
      errors.message = 'Please write a message content.';
    } else if (formData.message.trim().length < 15) {
      errors.message = 'Message must be at least 15 characters long.';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    addSimulatedConsoleLog('INFO: Initiating message payload validations...');

    // Simulate thin server routing latency
    setTimeout(() => {
      const timestamp = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
      const newMsg: FormMessage = {
        id: `msg-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        content: formData.message,
        timestamp: `Today at ${timestamp}`
      };

      setSimulatedInbox(prev => [newMsg, ...prev]);
      setIsSubmitting(false);
      setIsSuccess(true);
      addSimulatedConsoleLog(`SUCCESS: Message written to local recruiter state memory buffer. ID: ${newMsg.id}`);

      // Clear formulate inputs
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success indicator after 6 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);

    }, 1500);
  };

  const addSimulatedConsoleLog = (line: string) => {
    console.log(`[Contact ConsoleLog] ${line}`);
  };

  const handleCopyText = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(type);
    setTimeout(() => {
      setIsCopied(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#f8fafc] relative overflow-hidden border-b border-slate-100">
      
      {/* Background vectors */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-section-header">
          <span className="text-blue-600 font-sans font-bold text-xs tracking-widest uppercase block mb-1">07 // ESTABLISH CONNECTION</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-6 font-sans text-sm sm:text-base">
            Have an open internship role, a startup project, or want to discuss electrical controls? Shoot a message down below.
          </p>
        </div>

        {/* Form splits structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* L Col: Contact Information (5 indices) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8" id="contact-identity-column">
            
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-800">
                Let's Build Something Together
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">
                I am actively prepared to step into IT project rooms as a junior developer assistant. Let us connect via direct letters or scheduled online meetings!
              </p>
            </div>

            {/* Direct Badges listings */}
            <div className="space-y-4" id="contact-credentials-matrix">
              
              {/* Box 1: Email */}
              <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl flex items-center justify-between group shadow-sm">
                <div className="flex gap-3.5 items-center">
                  <div className="p-3 bg-[#f8fafc] border border-slate-100 rounded-xl text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans text-slate-400 uppercase tracking-widest font-bold">EMAIL INQUIRY</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-sans font-bold text-slate-800 hover:text-blue-600 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopyText(PERSONAL_INFO.email, 'email')}
                  className="p-1 px-2.5 py-1 text-slate-500 hover:text-blue-600 bg-[#f8fafc] hover:bg-slate-50 border border-slate-200 rounded-lg text-xs font-sans font-semibold flex items-center gap-1 transition-all"
                  title="Copy payload"
                >
                  {isCopied === 'email' ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                  {isCopied === 'email' ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Box 2: Phone */}
              <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl flex items-center justify-between group shadow-sm">
                <div className="flex gap-3.5 items-center">
                  <div className="p-3 bg-[#f8fafc] border border-slate-100 rounded-xl text-blue-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans text-slate-400 uppercase tracking-widest font-bold">PHONE / CONNECT</p>
                    <p className="text-sm font-sans font-bold text-slate-800">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopyText(PERSONAL_INFO.phone, 'phone')}
                  className="p-1 px-2.5 py-1 text-slate-500 hover:text-blue-600 bg-[#f8fafc] hover:bg-slate-50 border border-slate-200 rounded-lg text-xs font-sans font-semibold flex items-center gap-1 transition-all"
                  id="copy-phone-btn"
                >
                  {isCopied === 'phone' ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                  {isCopied === 'phone' ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Box 3: Location */}
              <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl flex items-center justify-start gap-3.5 group shadow-sm">
                <div className="p-3 bg-[#f8fafc] border border-slate-100 rounded-xl text-blue-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-sans text-slate-400 uppercase tracking-widest font-bold">RESIDENCE</p>
                  <p className="text-sm font-sans font-bold text-slate-800">{PERSONAL_INFO.location}</p>
                </div>
              </div>

            </div>

            {/* Micro Social Network box */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <p className="font-sans text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Official Channels</p>
              <div className="flex gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#f8fafc] hover:bg-slate-50 border border-slate-200 text-xs font-sans text-slate-650 hover:text-blue-600 rounded-xl flex items-center gap-2 font-bold transition-colors"
                  id="contact-social-github"
                >
                  <Github className="h-4 w-4 text-blue-600" />
                  GitHub Code
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#f8fafc] hover:bg-slate-50 border border-slate-200 text-xs font-sans text-slate-650 hover:text-blue-600 rounded-xl flex items-center gap-2 font-bold transition-colors"
                  id="contact-social-linkedin"
                >
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  LinkedIn Connect
                </a>
              </div>
            </div>

          </div>

          {/* R Col: Interactive Contact Form (7 indices) */}
          <div className="lg:col-span-12 xl:col-span-12 bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl space-y-6 shadow-sm" id="contact-form-column">
            
            <form onSubmit={handleSubmit} className="space-y-5" id="form-actual">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-wider">Your Name <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-850 text-sm focus:outline-none focus:border-blue-500 transition-colors ${
                      formErrors.name ? 'border-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="flex items-center gap-1 text-[10.5px] font-sans text-rose-600" id="name-error-msg">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-wider">Email Address <span className="text-rose-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-850 text-sm focus:outline-none focus:border-blue-500 transition-colors ${
                      formErrors.email ? 'border-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="flex items-center gap-1 text-[10.5px] font-sans text-rose-600" id="email-error-msg">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-wider">Inquiry Subject <span className="text-rose-500">*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. prospective summer internship/project collaboration"
                  className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-850 text-sm focus:outline-none focus:border-blue-500 transition-colors ${
                    formErrors.subject ? 'border-rose-400' : 'border-slate-200'
                  }`}
                />
                {formErrors.subject && (
                  <p className="flex items-center gap-1 text-[10.5px] font-sans text-rose-600" id="sub-error-msg">
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    {formErrors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-wider">Core Message <span className="text-rose-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Greetings Karan R, I am representing..."
                  className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-850 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none ${
                    formErrors.message ? 'border-rose-400' : 'border-slate-200'
                  }`}
                />
                {formErrors.message && (
                  <p className="flex items-center gap-1 text-[10.5px] font-sans text-rose-600" id="msg-error-msg">
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    {formErrors.message}
                  </p>
                )}
              </div>

              {/* Button block */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-bold transition-all disabled:opacity-50 shadow-md"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block h-3.5 w-3.5 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Seal & Transmit Message</span>
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Successful animation prompt feedback */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl text-left"
                  id="contact-success-banner"
                >
                  <div className="flex gap-3 items-start">
                    <div className="p-1 px-1.5 py-1 text-emerald-600 bg-emerald-100 rounded-lg">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-slate-800 text-sm">Message Dispatched Seamlessly!</h4>
                      <p className="text-xs text-slate-500 leading-normal mt-1.5">
                        Thank you for your contact attempt. The data packet was saved inside our Recruiter Local Memory simulation list (on the bottom) and Karan R will be notified directly at <span className="font-semibold text-blue-600">{PERSONAL_INFO.email}</span>.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* UNIQUE INTERACTIVE ADD-ON: LIVE RECRUITER INBOX LOGGER DISPLAY */}
            <div className="border-t border-slate-100 pt-6 space-y-4" id="simulated-recruiter-mailbox">
              
              <div className="flex justify-between items-center bg-[#f8fafc] p-2 px-3.5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-1.5 font-sans text-[10px] text-slate-500 uppercase font-bold">
                  <Terminal className="h-3.5 w-3.5 text-blue-600" />
                  <span>RECRUITERS DIRECTORY LIVE STORAGE DATABASE</span>
                </div>
                <span className="text-[9px] font-sans px-2 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-105 font-bold uppercase tracking-wide">
                  Memory Cache OK
                </span>
              </div>

              {/* Local inbox rows */}
              <div className="space-y-3 h-48 overflow-y-auto pr-1">
                {simulatedInbox.map((msgItem) => (
                  <div 
                    key={msgItem.id} 
                    id={`inbox-msg-${msgItem.id}`}
                    className="p-3.5 bg-white border border-slate-150 rounded-xl space-y-2 select-text shadow-sm"
                  >
                    <div className="flex justify-between items-start text-[10px] font-sans leading-none text-slate-400">
                      <span>Sender: <strong className="text-slate-700 font-bold">{msgItem.name}</strong> ({msgItem.email})</span>
                      <span>{msgItem.timestamp}</span>
                    </div>
                    <p className="text-xs font-sans font-bold text-blue-600 leading-tight">Subject: {msgItem.subject}</p>
                    <p className="text-xs font-sans text-slate-500 leading-relaxed font-normal">
                      {msgItem.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-150 text-[10px] font-sans text-slate-450 leading-normal">
                *How to check: Change outputs in the form above and click Submit to see your custom inquiry instantly populated inside this developer live-state queue!
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
