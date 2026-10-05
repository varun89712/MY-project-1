/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MottoSection } from './components/MottoSection';
import { TeamSection } from './components/TeamSection';
import { ProfessionalTeamSection } from './components/ProfessionalTeamSection';
import { EventsSection } from './components/EventsSection';
import { DSPModal } from './components/DSPModal';
import { JoinModal } from './components/JoinModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isDspOpen, setIsDspOpen] = useState(false);

  useEffect(() => {
    // Handle hash on initial load (e.g. #team)
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#2D1B1B] flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#8B2635]">
      {/* Top Banner Navigation */}
      <Header onOpenJoin={() => setIsJoinOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section with Live Particles */}
        <Hero onOpenJoin={() => setIsJoinOpen(true)} />

        {/* About ACM Section */}
        <AboutSection />

        {/* Our Motto Section */}
        <MottoSection />

        {/* Meet Our Leadership Team (#team) */}
        <TeamSection />

        {/* ACM Professional Members & Faculty Sponsor */}
        <ProfessionalTeamSection />

        {/* Previous & Upcoming Events */}
        <EventsSection onOpenDsp={() => setIsDspOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <DSPModal isOpen={isDspOpen} onClose={() => setIsDspOpen(false)} />
      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </div>
  );
}
