import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RecruiterDrawer } from './components/RecruiterDrawer';
import { ResumeModal } from './components/ResumeModal';
import { IntroAnimation } from './components/IntroAnimation';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [recruiterDrawerOpen, setRecruiterDrawerOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative selection:bg-blue-100 selection:text-blue-900">
      {/* Animated Intro for Arunraj */}
      <IntroAnimation
        show={showIntro}
        onComplete={() => setShowIntro(false)}
      />

      {/* Main Navigation Header */}
      <Navbar 
        onOpenRecruiterDrawer={() => setRecruiterDrawerOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onPlayIntro={() => setShowIntro(true)}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero
          onOpenRecruiterDrawer={() => setRecruiterDrawerOpen(true)}
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onPlayIntro={() => setShowIntro(true)}
        />
        <MetricsBar />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationCertifications />
        <ContactSection />
      </main>

      {/* Footer */}
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
