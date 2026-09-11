import React from 'react';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-700 text-xs font-bold tracking-wider uppercase mb-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Background</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
                Formal Education
              </h2>

              <div className="card-hover p-6 rounded-xl bg-slate-50/80 border border-slate-200/90 shadow-2xs relative overflow-hidden group hover:border-slate-300">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{EDUCATION.period}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors">
                  {EDUCATION.degree}
                </h3>
                <div className="text-slate-700 font-medium text-sm mb-2">
                  {EDUCATION.institution}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{EDUCATION.location}</span>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs uppercase text-slate-700 font-bold block mb-2">
                    Core Coursework & IT Foundation
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {EDUCATION.focusAreas.map((area, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2.5 py-1 rounded bg-white text-slate-800 text-xs font-medium border border-slate-200 shadow-2xs hover:bg-slate-50 hover:border-slate-300 transition-colors"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 p-4 rounded-xl bg-blue-50/90 border border-blue-200/90 text-xs text-blue-900 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                Solid algorithmic foundation in Python, Object-Oriented Design, Relational SQL Databases, and Operating System internals.
              </span>
            </div>
          </div>

          {/* Certifications Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-blue-700 text-xs font-bold tracking-wider uppercase mb-1.5">
              <Award className="w-4 h-4" />
              <span>Professional Credentials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
              Certifications & Continuous Mastery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CERTIFICATIONS.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className={`card-hover p-4 rounded-xl border transition-all flex flex-col justify-between shadow-2xs group ${
                    cert.highlight
                      ? 'bg-white border-blue-300/90 ring-1 ring-blue-100 hover:border-blue-400'
                      : 'bg-white border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-slate-500">
                        {cert.issuer}
                      </span>
                      {cert.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                          {cert.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors">
                      {cert.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                    </span>
                    <span>Credential Achieved</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
