import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TechEcosystem } from './components/TechEcosystem';
import { ExperienceSection } from './components/ExperienceSection';
import { CreatorSection } from './components/CreatorSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RecruiterDrawer } from './components/RecruiterDrawer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [recruiterDrawerOpen, setRecruiterDrawerOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative selection:bg-violet-100 selection:text-violet-900">
      
      {/* Main Navigation Header */}
      <Navbar 
        onOpenRecruiterDrawer={() => setRecruiterDrawerOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative">
        {/* 1. Hero: Centered identity, bio & stats */}
        <Hero
          onOpenRecruiterDrawer={() => setRecruiterDrawerOpen(true)}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* 2. Metrics Bar: 4-stat horizontal counter row */}
        <MetricsBar />

        {/* 3. Services I Offer: Consulting & Solutions */}
        <ServicesSection />

        {/* 4. Awesome Projects with Visual Imagery & Architecture Flow */}
        <ProjectsSection />

        {/* 5. Skills & Architecture Blueprints with Visual Domain Banners */}
        <SkillsSection />

        {/* 6. Enterprise Ecosystem & Production Frameworks: Clean geometric logos */}
        <TechEcosystem />

        {/* 7. Enterprise Experience at TCS: Flip card details & production metrics */}
        <ExperienceSection />

        {/* 8. The Creator Studio: Non-Technical Creative & Cinematic Media */}
        <CreatorSection />

        {/* 9. Education & Continuous Mastery: Realtime credential verification */}
        <EducationCertifications />

        {/* 10. Contact & Social Media */}
        <ContactSection />
      </main>

      {/* Footer matching Figma template with 3 link columns & quick back-to-top */}
      <Footer
        onOpenRecruiterDrawer={() => setRecruiterDrawerOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Recruiter 30-Second Fast-Track Briefing Drawer */}
      <RecruiterDrawer
        isOpen={recruiterDrawerOpen}
        onClose={() => setRecruiterDrawerOpen(false)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Full Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}
