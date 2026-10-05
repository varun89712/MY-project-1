import React from 'react';
import { Quote } from 'lucide-react';

export const MottoSection: React.FC = () => {
  return (
    <section id="motto" className="py-20 md:py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#8B2635] tracking-tight relative inline-block">
          Our Motto
          <span
            className="block h-1.5 w-24 bg-gradient-to-r from-[#D4AF37] to-[#E6C547] rounded-full mx-auto mt-3 shadow-sm"
            aria-hidden="true"
          />
        </h2>
      </div>

      <div className="relative bg-gradient-to-br from-white/95 via-[#FBF8F1]/95 to-[#F4E4BC]/25 border border-[#D4AF37]/35 rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_10px_35px_rgba(212,175,55,0.15)] text-center overflow-hidden">
        {/* Subtle background quote watermark */}
        <Quote className="absolute top-6 left-6 w-20 h-20 text-[#D4AF37]/10 -rotate-12 pointer-events-none" />
        <Quote className="absolute bottom-6 right-6 w-20 h-20 text-[#8B2635]/10 rotate-180 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B2635] mb-6 tracking-tight">
            “Empowering Innovation Through Computing Excellence”
          </h3>

          <div className="w-16 h-1 bg-[#D4AF37] rounded-full mx-auto mb-8" />

          <p className="text-base sm:text-lg md:text-xl text-[#2D1B1B]/90 italic font-medium leading-relaxed">
            At the ACM Student Chapter of GM University, our motto is more than just words — it defines our mission. We strive to ignite innovation, foster creativity, and nurture technical excellence through hands-on learning, collaborative projects, and meaningful engagement with cutting-edge technologies. Every event, workshop, and initiative we host is a step towards building a future-ready generation of technologists and leaders who are driven by purpose and powered by knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};
