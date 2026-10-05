import React, { useState, useEffect } from 'react';
import { BATCH_TEAMS, TeamMember } from '../data/teamData';
import { Linkedin, Search, UserCheck, X, Sparkles, ExternalLink, Check, Calendar } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<'2026' | '2027'>('2027');
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'member'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    // Check if the page loaded or navigated to #team
    if (window.location.hash === '#team') {
      setIsHighlighted(true);
      const timer = setTimeout(() => setIsHighlighted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const currentBatchTeam = BATCH_TEAMS[selectedBatch];

  const filteredMembers = currentBatchTeam.filter((member) => {
    const matchesCategory =
      activeCategory === 'all' ? true : member.category === activeCategory;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="team"
      className={`py-20 md:py-24 px-4 max-w-7xl mx-auto scroll-mt-20 transition-all duration-700 ${
        isHighlighted ? 'ring-4 ring-[#D4AF37]/50 rounded-3xl' : ''
      }`}
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#8B2635] tracking-tight relative inline-block">
          Meet Our Leadership Team
          <span
            className="block h-1.5 w-24 bg-gradient-to-r from-[#D4AF37] to-[#E6C547] rounded-full mx-auto mt-3 shadow-sm"
            aria-hidden="true"
          />
        </h2>
        <p className="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto font-normal">
          The passionate student leaders guiding initiatives, technical challenges, and community workshops at GM University ACM Chapter.
        </p>
      </div>

      {/* Batch Switcher Banner (2026 \ 2027) */}
      <div className="max-w-xl mx-auto mb-8 bg-[#8B2635] p-3 sm:p-4 rounded-2xl shadow-lg border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
            <Calendar className="w-5 h-5 text-[#E5AC39]" />
          </div>
          <div className="text-left">
            <span className="text-[11px] uppercase tracking-wider text-[#F4E4BC] font-semibold block">Academic Batch</span>
            <span className="text-sm sm:text-base font-bold text-white">Select Batch (2026 \ 2027)</span>
          </div>
        </div>

        {/* Buttons styled directly after the user's reference */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSelectedBatch('2026')}
            aria-pressed={selectedBatch === '2026'}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              selectedBatch === '2026'
                ? 'bg-[#E5AC39] text-[#2A1517] shadow-md ring-2 ring-[#D4AF37]'
                : 'bg-white text-[#2A1517] hover:bg-slate-100 shadow-xs'
            }`}
          >
            {selectedBatch === '2026' && <Check className="w-4 h-4 stroke-[3]" />}
            <span>2026</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedBatch('2027')}
            aria-pressed={selectedBatch === '2027'}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              selectedBatch === '2027'
                ? 'bg-[#E5AC39] text-[#2A1517] shadow-md ring-2 ring-[#D4AF37]'
                : 'bg-white text-[#2A1517] hover:bg-slate-100 shadow-xs'
            }`}
          >
            {selectedBatch === '2027' && <Check className="w-4 h-4 stroke-[3]" />}
            <span>2027</span>
          </button>
        </div>
      </div>

      {/* Controls: Search and Category Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mb-10">
        {/* Category Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-white/90 border border-[#D4AF37]/30 rounded-xl shadow-xs w-full sm:w-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`flex-1 sm:flex-none px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#8B2635] to-[#A0303E] text-white shadow-xs'
                : 'text-[#2D1B1B] hover:bg-[#F4E4BC]/30'
            }`}
          >
            All Members ({currentBatchTeam.length})
          </button>
          <button
            onClick={() => setActiveCategory('core')}
            className={`flex-1 sm:flex-none px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeCategory === 'core'
                ? 'bg-gradient-to-r from-[#8B2635] to-[#A0303E] text-white shadow-xs'
                : 'text-[#2D1B1B] hover:bg-[#F4E4BC]/30'
            }`}
          >
            Executive Council ({currentBatchTeam.filter((m) => m.category === 'core').length})
          </button>
          <button
            onClick={() => setActiveCategory('member')}
            className={`flex-1 sm:flex-none px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeCategory === 'member'
                ? 'bg-gradient-to-r from-[#8B2635] to-[#A0303E] text-white shadow-xs'
                : 'text-[#2D1B1B] hover:bg-[#F4E4BC]/30'
            }`}
          >
            Chapter Members ({currentBatchTeam.filter((m) => m.category === 'member').length})
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search member or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#D4AF37]/30 rounded-xl text-[#2D1B1B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8B2635]/50 shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            role="article"
            aria-label={`Team member ${member.name}, ${member.role}`}
            className="group relative bg-white/95 border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 rounded-2xl p-6 text-center shadow-[0_4px_16px_rgba(212,175,55,0.12)] hover:shadow-[0_12px_32px_rgba(139,38,53,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col items-center justify-between"
          >
            {/* Top red accent ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B2635] via-[#D4AF37] to-[#8B2635]" />

            {/* Avatar container */}
            <div className="relative mb-4 mt-2">
              <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] to-[#F4E4BC] shadow-md group-hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full bg-[#FBF8F1]"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if image fails
                    (e.target as HTMLImageElement).src = '/logo.png';
                  }}
                />
              </div>

              {/* LinkedIn icon badge */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center shadow-md hover:bg-[#005f93] hover:scale-110 transition-all"
                  title={`Connect with ${member.name} on LinkedIn`}
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Name and Role */}
            <div className="w-full mb-3">
              <h3 className="text-lg font-bold text-[#8B2635] group-hover:text-[#A0303E] transition-colors line-clamp-1">
                {member.name}
              </h3>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] mt-1">
                {member.role}
              </div>
            </div>

            {/* Quick action / details button */}
            <button
              onClick={() => setSelectedMember(member)}
              className="mt-2 w-full py-1.5 px-3 rounded-lg text-xs font-semibold text-[#2D1B1B] bg-[#FBF8F1] hover:bg-[#F4E4BC]/40 border border-[#D4AF37]/20 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#8B2635]" />
              <span>View Profile</span>
            </button>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12 bg-white/70 rounded-2xl border border-dashed border-slate-300">
          <p className="text-slate-500 font-medium">No team members match your filter query.</p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 px-4 py-1.5 text-xs font-semibold text-[#8B2635] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Member Detail Spotlight Modal */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative max-w-md w-full bg-[#FBF8F1] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D4AF37]/40 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-32 h-32 rounded-full p-1.5 bg-gradient-to-tr from-[#D4AF37] to-[#8B2635] shadow-lg mx-auto mb-4">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>

            <h3 className="text-2xl font-bold text-[#8B2635] mb-1">
              {selectedMember.name}
            </h3>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#8B2635] bg-[#F4E4BC]/50 border border-[#D4AF37]/30 mb-4">
              {selectedMember.role}
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
              {selectedMember.bio ||
                `${selectedMember.name} is an active officer of the GM University ACM Student Chapter, dedicated to technical education and community events.`}
            </p>

            <div className="flex flex-col gap-2">
              {selectedMember.linkedin ? (
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#0077b5] hover:bg-[#005f93] shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              ) : (
                <div className="text-xs text-slate-500 italic">
                  LinkedIn profile coming soon
                </div>
              )}

              <button
                onClick={() => setSelectedMember(null)}
                className="w-full py-2 px-4 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
