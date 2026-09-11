import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Full-Time AI / RAG Engineer Position');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleComposeMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${inquiryType}] Inquiring with Arunraj S`);
    const body = encodeURIComponent(
      `Hello Arunraj,\n\nName: ${senderName || 'Hiring Team'}\nEmail: ${senderEmail || 'N/A'}\nTopic: ${inquiryType}\n\nMessage:\n${message || "We reviewed your portfolio and would like to discuss an opportunity."}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 text-blue-700 text-xs font-bold tracking-wider uppercase mb-1.5">
            <Mail className="w-4 h-4" />
            <span>Direct Channels & Candidate Outreach</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Contact Arunraj S
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            Currently open to full-time AI Engineer, RAG Engineer, and AI Automation Engineer positions. Direct channels with &lt;24hr turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email Card */}
            <div className="card-hover p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs group hover:border-slate-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                  <Mail className="w-4 h-4 text-blue-700" />
                  <span>PRIMARY EMAIL</span>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="btn-hover px-2 py-0.5 rounded bg-slate-100 text-xs font-semibold text-slate-700 hover:bg-slate-200 border border-slate-300 flex items-center gap-1 cursor-pointer"
                >
                  {copiedType === 'email' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedType === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors block break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <span className="text-xs text-slate-500 mt-1 block">
                Direct for technical interview scheduling & opportunities
              </span>
            </div>

            {/* Phone Card */}
            <div className="card-hover p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs group hover:border-slate-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                  <Phone className="w-4 h-4 text-blue-700" />
                  <span>DIRECT MOBILE & WHATSAPP</span>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="btn-hover px-2 py-0.5 rounded bg-slate-100 text-xs font-semibold text-slate-700 hover:bg-slate-200 border border-slate-300 flex items-center gap-1 cursor-pointer"
                >
                  {copiedType === 'phone' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedType === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors block"
              >
                {PERSONAL_INFO.phone}
              </a>
              <span className="text-xs text-slate-500 mt-1 block">
                IST Timezone (UTC +5:30) • Voice calls & WhatsApp
              </span>
            </div>

            {/* Location Card */}
            <div className="card-hover p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs group hover:border-slate-300">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase mb-2">
                <MapPin className="w-4 h-4 text-blue-700" />
                <span>LOCATION & MOBILITY</span>
              </div>
              <div className="text-base font-bold text-slate-900">
                {PERSONAL_INFO.location}
              </div>
              <p className="text-xs text-emerald-700 font-semibold mt-1">
                Open to on-site, hybrid, and remote roles worldwide
              </p>
            </div>

            {/* Professional Profiles */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="card-hover p-4 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs flex items-center justify-between text-xs font-bold text-slate-800 group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-700" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="card-hover p-4 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs flex items-center justify-between text-xs font-bold text-slate-800 group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-slate-900" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

          </div>

          {/* Right Column: Formal Email Dispatcher (7 cols) */}
          <div className="lg:col-span-7">
            <div className="card-hover p-6 sm:p-8 rounded-xl bg-white border border-slate-200/90 shadow-2xs group hover:border-slate-300">
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-700" />
                  <span className="text-xs uppercase text-slate-800 font-bold tracking-wider">
                    Executive Inquiry & Interview Dispatcher
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-medium">Direct Mail Client</span>
              </div>

              <form onSubmit={handleComposeMailto} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Technical Recruiter / Engineering Manager"
                      className="w-full px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 shadow-2xs transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 shadow-2xs transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Subject / Discussion Scope
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 shadow-2xs transition-colors"
                  >
                    <option value="Full-Time AI / RAG Engineer Position">Full-Time AI / RAG Engineer Position</option>
                    <option value="AI Automation Developer Role">AI Automation Developer Role</option>
                    <option value="Technical Interview Request">Technical Interview Request</option>
                    <option value="Agentic Architecture Collaboration">Agentic Architecture Collaboration</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Message / Opportunity Description
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="We reviewed your portfolio and are interested in scheduling an interview for our AI/ML team..."
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 shadow-2xs transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500">
                    Directly pre-fills email to <strong className="text-slate-800">arunrajselvarasu@gmail.com</strong>
                  </span>

                  <button
                    type="submit"
                    className="btn-hover w-full sm:w-auto px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Candidate</span>
                  </button>
                </div>

                {submitted && (
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Your email client has been launched! Looking forward to connecting.</span>
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
