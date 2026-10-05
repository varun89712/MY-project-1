import React from 'react';
import { PROFESSIONAL_MEMBERS } from '../data/teamData';
import { Linkedin, GraduationCap, Award } from 'lucide-react';

export const ProfessionalTeamSection: React.FC = () => {
  const facultySponsor = PROFESSIONAL_MEMBERS.find((m) => m.role === 'Faculty Sponsor');
  const otherMembers = PROFESSIONAL_MEMBERS.filter((m) => m.role !== 'Faculty Sponsor');

  return (
    <section id="professional-team" className="py-20 md:py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#8B2635] tracking-tight relative inline-block">
          ACM Professional Members
          <span
            className="block h-1.5 w-24 bg-gradient-to-r from-[#D4AF37] to-[#E6C547] rounded-full mx-auto mt-3 shadow-sm"
            aria-hidden="true"
          />
        </h2>
        <p className="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto font-normal">
          Experienced faculty mentors, researchers, and professional members of ACM supporting the student chapter’s academic excellence.
        </p>
      </div>

      {/* Featured Faculty Sponsor Banner */}
      {facultySponsor && (
        <div className="max-w-2xl mx-auto mb-14 bg-gradient-to-br from-white via-[#FBF8F1] to-[#F4E4BC]/30 border-2 border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(212,175,55,0.2)] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#D4AF37] to-[#8B2635] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-xs flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            Chapter Mentor
          </div>

          <div className="w-32 h-32 rounded-full p-1.5 bg-gradient-to-tr from-[#D4AF37] to-[#8B2635] shadow-lg mx-auto mb-4">
            <img
              src={facultySponsor.image}
              alt={facultySponsor.name}
              className="w-full h-full object-cover rounded-full bg-white"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo.png';
              }}
            />
          </div>

          <h3 className="text-2xl font-bold text-[#8B2635] mb-1">
            {facultySponsor.name}
          </h3>
          <div className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
            {facultySponsor.role}
          </div>
          <p className="text-xs text-slate-500 font-medium mb-4 flex items-center justify-center gap-1">
            <GraduationCap className="w-4 h-4 text-[#8B2635]" />
            Faculty of Computer Science & Engineering, GM University
          </p>

          {facultySponsor.linkedin && (
            <a
              href={facultySponsor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-[#0077b5] hover:bg-[#005f93] shadow-md transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
          )}
        </div>
      )}

      {/* Grid of Other Professional Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {otherMembers.map((member) => (
          <div
            key={member.id}
            role="article"
            aria-label={`Professional member ${member.name}`}
            className="group relative bg-white/95 border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 rounded-2xl p-6 text-center shadow-[0_4px_16px_rgba(212,175,55,0.12)] hover:shadow-[0_12px_32px_rgba(139,38,53,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col items-center justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B2635]" />

            <div className="relative mb-4 mt-2">
              <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] to-[#F4E4BC] shadow-md group-hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full bg-[#FBF8F1]"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.png';
                  }}
                />
              </div>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center shadow-md hover:bg-[#005f93] hover:scale-110 transition-all"
                  title={`Connect with ${member.name} on LinkedIn`}
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="w-full mb-3">
              <h3 className="text-base sm:text-lg font-bold text-[#8B2635] line-clamp-1">
                {member.name}
              </h3>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] mt-1">
                {member.role}
              </div>
              {member.department && (
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                  {member.department}
                </div>
              )}
            </div>

            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full py-1.5 px-3 rounded-lg text-xs font-semibold text-[#0077b5] hover:text-white bg-[#0077b5]/10 hover:bg-[#0077b5] transition-colors flex items-center justify-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
            ) : (
              <div className="mt-2 text-[11px] text-slate-400 italic">
                ACM Faculty Member
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
