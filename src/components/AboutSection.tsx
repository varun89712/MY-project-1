import React, { useState } from 'react';
import { Award, BookOpen, Globe2, Lightbulb, X, ZoomIn } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const stats = [
    { label: 'Global Society', value: 'ACM Affiliated', icon: Globe2 },
    { label: 'Chartered Chapter', value: 'GM University', icon: Award },
    { label: 'Focus Areas', value: 'AI, Algorithms & Dev', icon: Lightbulb },
    { label: 'Initiatives', value: 'Hackathons & Workshops', icon: BookOpen },
  ];

  return (
    <section id="about" className="py-20 md:py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#8B2635] tracking-tight relative inline-block">
          About ACM Student Chapter
          <span
            className="block h-1.5 w-24 bg-gradient-to-r from-[#D4AF37] to-[#E6C547] rounded-full mx-auto mt-3 shadow-sm"
            aria-hidden="true"
          />
        </h2>
      </div>

      {/* Main Glass Card */}
      <div className="bg-gradient-to-br from-white/95 via-[#FBF8F1]/90 to-[#F4E4BC]/20 border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_8px_30px_rgba(139,38,53,0.08)] backdrop-blur-md">
        <p className="text-lg md:text-xl text-[#2D1B1B] text-center leading-relaxed font-normal max-w-4xl mx-auto mb-10">
          The <strong className="font-semibold text-[#8B2635]">ACM Student Chapter at GM University</strong> is a student-driven tech community committed to fostering innovation, collaboration, and learning. Backed by the world’s largest computing society, we bridge the gap between theory and practice through workshops, hackathons, expert talks, and research-driven initiatives empowering students to become future-ready tech leaders.
        </p>

        {/* Highlight Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white/80 border border-[#D4AF37]/20 rounded-2xl p-4 text-center shadow-xs hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-[#F4E4BC]/40 flex items-center justify-center text-[#8B2635]">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">
                  {item.label}
                </div>
                <div className="text-sm sm:text-base font-bold text-[#2D1B1B]">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* About Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            onClick={() => setSelectedPhoto('/ACM_Photos/ACM_hero.png')}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-[#D4AF37]/30 shadow-md bg-white aspect-[4/3]"
          >
            <img
              src="/ACM_Photos/ACM_hero.png"
              alt="ACM Chapter Workshop and Activities"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-medium">
              <ZoomIn className="w-5 h-5" />
              <span>View Full Banner</span>
            </div>
          </div>

          <div
            onClick={() => setSelectedPhoto('/ACM_Photos/_AN74460.jpg')}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-[#D4AF37]/30 shadow-md bg-white aspect-[4/3]"
          >
            <img
              src="/ACM_Photos/_AN74460.jpg"
              alt="ACM Student Chapter Gathering and Team Session"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-medium">
              <ZoomIn className="w-5 h-5" />
              <span>View Event Moment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto}
              alt="Expanded view of ACM event"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
