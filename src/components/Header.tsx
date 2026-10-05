import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenJoin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenJoin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Our Motto', href: '#motto' },
    { label: 'Team', href: '#team' },
    { label: 'Faculty', href: '#professional-team' },
    { label: 'Events', href: '#events' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#004777]/95 backdrop-blur-md shadow-lg py-2.5 px-4 md:px-8 border-b border-white/10'
          : 'bg-[#005792] backdrop-blur-md py-3 px-4 md:px-8 border-b border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Left: GM University Logo and Title */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-full"
            aria-label="GM University ACM Student Chapter Home"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#5B1F1F] p-1 shadow-[0_4px_16px_rgba(212,175,55,0.35)] border-2 border-[#D4AF37]/80 flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden">
              <img
                src="/gmulogo_crisp.png"
                alt="GM University Logo"
                className="w-full h-full object-cover rounded-xl"
                width={64}
                height={64}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/gmulogo1.png';
                }}
              />
            </div>
            <div className="text-left hidden sm:block">
              <span className="text-white font-bold text-base md:text-lg block tracking-tight leading-tight">
                ACM Student Chapter
              </span>
              <span className="text-[#F4E4BC] text-xs font-medium block">
                GM University, Davanagere
              </span>
            </div>
          </a>
        </div>

        {/* Center / Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/90"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Brand Right & Primary Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenJoin}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold text-[#2D1B1B] bg-gradient-to-r from-[#D4AF37] to-[#E6C547] rounded-xl hover:from-[#E6C547] hover:to-[#D4AF37] shadow-[0_4px_15px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#8B2635]" />
            Join Chapter
          </button>

          {/* Right ACM Logo */}
          <a
            href="https://www.acm.org"
            target="_blank"
            rel="noopener noreferrer"
            title="Association for Computing Machinery"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white p-1.5 shadow-[0_4px_16px_rgba(212,175,55,0.3)] flex items-center justify-center transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label="Official ACM Global Website"
          >
            <img
              src="/logo.png"
              alt="ACM Official Logo"
              className="w-full h-full object-contain"
              width={64}
              height={64}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-white/15 pb-4 px-2 bg-[#004777]/95 rounded-2xl backdrop-blur-lg">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-white font-medium hover:bg-white/10 hover:text-[#D4AF37] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoin();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-[#2D1B1B] bg-gradient-to-r from-[#D4AF37] to-[#E6C547] rounded-xl shadow-md cursor-pointer"
            >
              <Users className="w-4 h-4" />
              Join ACM Student Chapter
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
