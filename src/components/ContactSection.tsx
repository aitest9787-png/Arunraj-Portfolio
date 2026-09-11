import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ExternalLink,
  Film
} from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Full-Time AI / RAG Role');
  const [message, setMessage] = useState('');
  const [dispatchStatus, setDispatchStatus] = useState<'idle' | 'encrypting' | 'dispatching' | 'sent'>('idle');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail && !message) return;

    setDispatchStatus('encrypting');
    
    // Simulate real-time pipeline dispatch with feedback
    setTimeout(() => {
      setDispatchStatus('dispatching');
      setTimeout(() => {
        setDispatchStatus('sent');
        // Trigger mailto client
        const subject = encodeURIComponent(`[${inquiryType}] Inquiring with Arunraj S`);
        const body = encodeURIComponent(
          `Hello Arunraj,\n\nName: ${senderName || 'Hiring Team'}\nEmail: ${senderEmail}\nTopic: ${inquiryType}\n\nMessage:\n${message}`
        );
        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      }, 1200);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-100 relative overflow-hidden">
      
      {/* Ambient background blur */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tl from-purple-100/40 via-blue-50/30 to-transparent rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Direct Channels</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-2">
              Get In Touch &amp; Professional Channels
            </h2>
            <p className="text-sm sm:text-base text-slate-500">
              Reach out directly for full-time opportunities, technical advisory, agentic automation discussions, or enterprise infrastructure systems.
            </p>
          </div>

          {/* Real-time Status Badge */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div>
                <span className="text-[11px] font-bold text-slate-900 block leading-tight">
                  Actively Reviewing Inquiries
                </span>
                <span className="text-[10px] text-slate-500 block leading-tight">
                  Guaranteed SLA: &lt; 24h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Channels & Direct Contact Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/80 transition-all duration-150 inline-flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-all duration-150 inline-flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Repositories</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-all duration-150 inline-flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>AI Engineer Email ({PERSONAL_INFO.email})</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.creatorEmail || 'kuttyeditsofc@gmail.com'}`}
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-200 transition-all duration-150 inline-flex items-center gap-1.5"
          >
            <Film className="w-3.5 h-3.5 text-pink-600" />
            <span>Creator Edits Email ({PERSONAL_INFO.creatorEmail || 'kuttyeditsofc@gmail.com'})</span>
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 transition-all duration-150 inline-flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call / WhatsApp ({PERSONAL_INFO.phone})</span>
          </a>
        </div>

        {/* Main Content: Left Real-time Form & Right Workspace Element */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Real-Time Message Dispatcher (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span>Message Dispatcher</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                &lt; 24hr Direct Response
              </span>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g., Sarah Chen"
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="sarah@enterprise.com"
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Inquiry Focus
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                >
                  <option value="Full-Time AI / RAG Role">Full-Time AI / RAG Engineer Opportunity</option>
                  <option value="DevOps & Ansible Automation">DevOps &amp; Ansible Automation (AWX / Self-Healing)</option>
                  <option value="Enterprise LangGraph Advisory">Enterprise LangGraph / Multi-Agent Advisory</option>
                  <option value="ServiceNow & Incident Management">ServiceNow &amp; Incident Management Automation</option>
                  <option value="Technical Collaboration">Technical Collaboration / Research</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message Details *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell Arunraj about the opportunity or technical project..."
                  className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                />
              </div>

              {/* Real-Time Dispatch Status Feedback */}
              {dispatchStatus !== 'idle' && (
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {dispatchStatus === 'sent' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <span className="w-3 h-3 rounded-full border-2 border-violet-600 border-t-transparent animate-spin" />
                    )}
                    <span className="font-medium text-slate-800">
                      {dispatchStatus === 'encrypting' && 'Validating payload schema...'}
                      {dispatchStatus === 'dispatching' && 'Routing directly to arunrajselvarasu@gmail.com...'}
                      {dispatchStatus === 'sent' && 'Dispatched! Opening your email client to complete transmission.'}
                    </span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={dispatchStatus === 'encrypting' || dispatchStatus === 'dispatching'}
                className="w-full py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{dispatchStatus === 'sent' ? 'Message Transmitted' : 'Dispatch Message Directly'}</span>
              </button>
            </form>
          </div>

          {/* Right Column: Workspace Element */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-tr from-slate-200 via-purple-100 to-amber-100 shadow-xl overflow-hidden flex items-center justify-center relative">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80"
                  alt="Modern developer workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating ambient badge 1: Location */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 left-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-md flex items-center gap-1.5 text-xs font-semibold text-slate-800"
              >
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Chennai / Remote</span>
              </motion.div>

              {/* Floating ambient badge 2: Active SLA */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 right-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-md flex items-center gap-1.5 text-xs font-semibold text-slate-800"
              >
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                <span>Direct SLA &lt;24h</span>
              </motion.div>
            </div>

            <div className="mt-6 text-center max-w-xs">
              <h4 className="text-sm font-bold text-slate-900 font-display">
                Available for AI Engineering Roles
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Full-time roles, technical consultations, and creative collaborations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
