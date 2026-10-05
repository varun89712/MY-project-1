import React from 'react';
import { Linkedin, Instagram, MessageSquare, ArrowUp, Heart, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="relative bg-gradient-to-br from-[#8B2635] via-[#701c29] to-[#450e18] text-[#FBF8F1] pt-16 pb-12 px-4 overflow-hidden border-t-4 border-[#D4AF37]"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] tracking-tight">
          Stay Connected !!
        </h3>

        <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
          Join our Discord community, follow our updates on Instagram, and connect with chapter members on LinkedIn.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <a
            href="https://www.linkedin.com/company/acm-student-chapter-gm-university/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#F4E4BC] hover:text-[#2D1B1B] bg-[#F4E4BC]/10 hover:bg-[#D4AF37] border-2 border-[#F4E4BC]/30 hover:border-[#D4AF37] transition-all hover:-translate-y-1 shadow-sm"
            aria-label="GM University ACM Chapter LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/acm.gmu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#F4E4BC] hover:text-[#2D1B1B] bg-[#F4E4BC]/10 hover:bg-[#D4AF37] border-2 border-[#F4E4BC]/30 hover:border-[#D4AF37] transition-all hover:-translate-y-1 shadow-sm"
            aria-label="GM University ACM Chapter Instagram"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>

          <a
            href="https://discord.gg/vQYsBwY7hZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#F4E4BC] hover:text-[#2D1B1B] bg-[#F4E4BC]/10 hover:bg-[#D4AF37] border-2 border-[#F4E4BC]/30 hover:border-[#D4AF37] transition-all hover:-translate-y-1 shadow-sm"
            aria-label="GM University ACM Chapter Discord Server"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discord Server</span>
          </a>
        </div>

        {/* University Info & Address */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-medium max-w-4xl mx-auto">
          <div className="flex items-center gap-1.5 text-center md:text-left">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>GM University, P.B. Road, Davanagere - 577006, Karnataka, India</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://gmu.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>gmu.ac.in</span>
            </a>
            <span>·</span>
            <a
              href="https://www.acm.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              acm.org
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300 pt-4">
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span>ACM Student Chapter - All Rights Reserved</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#F4E4BC] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
