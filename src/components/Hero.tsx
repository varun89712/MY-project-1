import React, { useEffect, useRef } from 'react';
import { ArrowDown, Users, Calendar, Compass, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenJoin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoin }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const numberOfParticles = Math.min(80, Math.floor(width / 18));
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }

    let particles: Particle[] = [];

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 1.2,
      speedX: (Math.random() - 0.5) * 1.6,
      speedY: (Math.random() - 0.5) * 1.6,
      opacity: Math.random() * 0.45 + 0.25,
    });

    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(createParticle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(createParticle());
      }
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p, idx) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section
      id="hero"
      role="banner"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden bg-gradient-to-br from-[#0053A0]/95 via-[#004282] to-[#002f60]"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        {/* Animated Central Emblem */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-6">
          <div className="absolute -inset-3 bg-gradient-to-tr from-[#D4AF37] to-white/80 rounded-full blur-md opacity-60 animate-pulse" />
          <div className="relative w-full h-full rounded-full bg-white p-2.5 shadow-[0_10px_35px_rgba(212,175,55,0.4)] flex items-center justify-center animate-float">
            <img
              src="/ACM STUDENT CHAPTER LOGO-01.png"
              alt="ACM Student Chapter GM University Crest"
              className="w-full h-full object-contain rounded-full"
              width={160}
              height={160}
              onError={(e) => {
                // Fallback to logo.png if needed
                (e.target as HTMLImageElement).src = '/logo.png';
              }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4E4BC] to-white drop-shadow-md">
          ACM Student Chapter
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium max-w-3xl mx-auto mb-6 tracking-wide drop-shadow-sm">
          Empowering Innovation Through Computing Excellence
        </p>

        {/* Marquee Banner */}
        <div className="w-full max-w-2xl mx-auto mb-8 bg-[#002b55]/60 border border-white/20 rounded-full py-2.5 px-4 backdrop-blur-md overflow-hidden shadow-inner">
          <div className="animate-marquee text-white font-medium text-sm md:text-base tracking-wide flex items-center gap-3">
            <span>✨ Exciting Events Coming Soon !!</span>
            <span className="text-[#D4AF37]">·</span>
            <span>DSP Workshop on Advanced AI Applications and Agents</span>
            <span className="text-[#D4AF37]">·</span>
            <span>IGNITRON 2K25 Registrations Opening Shortly !!</span>
            <span className="text-[#D4AF37]">·</span>
            <span>Join GM University ACM Chapter Today !!</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
          <button
            onClick={() => scrollTo('about')}
            className="px-6 py-3 rounded-2xl text-sm md:text-base font-semibold text-[#2D1B1B] bg-gradient-to-r from-[#D4AF37] to-[#E6C547] hover:from-[#E6C547] hover:to-[#D4AF37] shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:-translate-y-1 transition-all cursor-pointer flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#8B2635]" />
            About Us
          </button>

          <button
            onClick={() => scrollTo('motto')}
            className="px-6 py-3 rounded-2xl text-sm md:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm shadow-md hover:-translate-y-1 transition-all cursor-pointer flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            Our Motto
          </button>

          <button
            onClick={() => scrollTo('team')}
            className="px-6 py-3 rounded-2xl text-sm md:text-base font-semibold text-[#2D1B1B] bg-gradient-to-r from-[#D4AF37] to-[#E6C547] hover:from-[#E6C547] hover:to-[#D4AF37] shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:-translate-y-1 transition-all cursor-pointer flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-[#8B2635]" />
            Meet The Team
          </button>

          <button
            onClick={() => scrollTo('events')}
            className="px-6 py-3 rounded-2xl text-sm md:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm shadow-md hover:-translate-y-1 transition-all cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            Explore Events
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo('about')}
          className="text-white/60 hover:text-white transition-colors animate-bounce inline-flex items-center gap-1 text-xs uppercase tracking-wider cursor-pointer"
          aria-label="Scroll down to About section"
        >
          <span>Discover Chapter</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
