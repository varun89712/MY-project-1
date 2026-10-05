import React, { useState } from 'react';
import { EVENTS_DATA, EventItem } from '../data/teamData';
import { Calendar, MapPin, ArrowRight, X, Sparkles, ExternalLink } from 'lucide-react';

interface EventsSectionProps {
  onOpenDsp: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenDsp }) => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const previousEvents = EVENTS_DATA.filter((e) => e.status === 'previous');
  const upcomingEvents = EVENTS_DATA.filter((e) => e.status === 'upcoming');

  const handleCardClick = (event: EventItem) => {
    if (event.isDspWorkshop) {
      onOpenDsp();
    } else {
      setSelectedEvent(event);
    }
  };

  return (
    <section id="events" className="py-20 md:py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      {/* Previous Events Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#8B2635] tracking-tight relative inline-block">
            Previous Events
            <span
              className="block h-1.5 w-24 bg-gradient-to-r from-[#D4AF37] to-[#E6C547] rounded-full mx-auto mt-3 shadow-sm"
              aria-hidden="true"
            />
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto font-normal">
            Take a look at the hackathons, coding challenges, and tech quizzes organized by GMU ACM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previousEvents.map((event) => (
            <div
              key={event.id}
              role="button"
              tabIndex={0}
              onClick={() => handleCardClick(event)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(event);
                }
              }}
              className="group cursor-pointer bg-white/95 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(139,38,53,0.1)] hover:shadow-[0_12px_40px_rgba(139,38,53,0.22)] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter sepia-[15%]"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.png';
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#8B2635]/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
                  Completed
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#8B2635] mb-2 group-hover:text-[#A0303E] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {event.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#8B2635]">
                  <span>Click for Event Recap</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#8B2635] tracking-tight relative inline-block">
            Upcoming Events
            <span
              className="block h-1.5 w-24 bg-gradient-to-r from-[#D4AF37] to-[#E6C547] rounded-full mx-auto mt-3 shadow-sm"
              aria-hidden="true"
            />
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto font-normal">
            Mark your calendar for cutting-edge AI workshops and national-level flagship tech fests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-white/95 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(139,38,53,0.1)] hover:shadow-[0_12px_40px_rgba(139,38,53,0.22)] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.png';
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#D4AF37] text-[#2D1B1B] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  Upcoming
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#8B2635] mb-2 group-hover:text-[#A0303E] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  {event.isDspWorkshop ? (
                    <button
                      onClick={onOpenDsp}
                      className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#2D1B1B] bg-gradient-to-r from-[#D4AF37] to-[#E6C547] hover:from-[#E6C547] hover:to-[#D4AF37] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-[#8B2635]" />
                      Know More & Register
                    </button>
                  ) : event.linkUrl ? (
                    <a
                      href={event.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#2D1B1B] bg-gradient-to-r from-[#D4AF37] to-[#E6C547] hover:from-[#E6C547] hover:to-[#D4AF37] shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <span>{event.linkText || 'Know More'}</span>
                      <ExternalLink className="w-4 h-4 text-[#8B2635]" />
                    </a>
                  ) : (
                    <div className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-500 bg-slate-100 border border-slate-200 text-center uppercase tracking-wider">
                      {event.linkText || 'Coming Soon...'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#FBF8F1] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D4AF37]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full h-48 rounded-2xl overflow-hidden mb-5 border border-[#D4AF37]/30 shadow-md">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-[#8B2635] mb-3">
              {selectedEvent.title}
            </h3>

            {selectedEvent.venue && (
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mb-4">
                <MapPin className="w-4 h-4 text-[#8B2635]" />
                <span>{selectedEvent.venue}</span>
              </div>
            )}

            <p className="text-slate-700 text-sm leading-relaxed mb-4 font-normal">
              {selectedEvent.description}
            </p>

            {selectedEvent.fullDetails && (
              <div className="bg-white/80 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed mb-6">
                <strong className="block font-semibold text-[#8B2635] mb-1">
                  Event Highlights & Outcomes:
                </strong>
                {selectedEvent.fullDetails}
              </div>
            )}

            <button
              onClick={() => setSelectedEvent(null)}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#2D1B1B] bg-gradient-to-r from-[#D4AF37] to-[#E6C547] shadow-sm hover:from-[#E6C547] hover:to-[#D4AF37] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
