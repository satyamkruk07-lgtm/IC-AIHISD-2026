'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar({ onEmptyLinkClick, onRegisterClick }: { onEmptyLinkClick?: (name: string) => void; onRegisterClick?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Authors', href: '#authors', isEmpty: true },
    { 
      name: 'Committee', 
      href: '#committee',
      subLinks: [
        { name: 'Organizing Committee', href: '#committee' },
        { name: 'Technical Committee', href: '#technical-committee' }
      ]
    },
    { name: 'Keynotes', href: '#keynotes', isEmpty: true },
    { name: 'Programme', href: '#programme', isEmpty: true },
    { name: 'Exhibitors', href: '#exhibitors', isEmpty: true },
    { name: 'Travel', href: '#travel', isEmpty: true },
    { name: 'Contact', href: '#contact', isEmpty: true },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isEmpty && onEmptyLinkClick) {
      e.preventDefault();
      const displayNames: { [key: string]: string } = {
        'Programme': 'TECHNICAL PROGRAMME',
        'Authors': 'AUTHOR GUIDELINES',
        'Keynotes': 'KEYNOTES & PLENARY',
        'Travel': 'TRAVEL & ACCOMMODATION',
        'Contact': 'CONTACT INFORMATION'
      };
      onEmptyLinkClick(displayNames[link.name] || link.name);
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        const element = document.getElementById('update-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      setIsMobileMenuOpen(false);
      if (onEmptyLinkClick) onEmptyLinkClick('');
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen ? "bg-white shadow-md py-3" : "bg-transparent py-5 text-white"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0" onClick={() => onEmptyLinkClick?.('')}>
          <img 
            src="/logo.png" 
            alt="IC-AIHISD Logo" 
            className="h-10 sm:h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-4 2xl:gap-8 mx-4">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a 
                href={link.href}
                onClick={(e) => {
                  if (link.subLinks) {
                    e.preventDefault();
                  } else {
                    handleLinkClick(e, link);
                  }
                }}
                className={cn(
                  "text-xs 2xl:text-[13px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1",
                  isScrolled || isMobileMenuOpen ? "text-slate-600 hover:text-med-blue" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
                {link.subLinks && <ChevronDown size={14} className="opacity-50" />}
              </a>

              {link.subLinks && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-lg shadow-xl py-2 min-w-[200px] border border-slate-100">
                    {link.subLinks.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={(e) => {
                          e.preventDefault();
                          onEmptyLinkClick?.(sub.name.toUpperCase());
                          if (sub.name === 'Technical Committee') {
                            setTimeout(() => {
                              const el = document.getElementById('technical-committee-section');
                              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }, 200);
                          }
                        }}
                        className="block px-4 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 hover:text-med-blue transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden sm:block shrink-0">
          <a 
            href="#fees" 
            onClick={(e) => {
              e.preventDefault();
              onRegisterClick?.();
              onEmptyLinkClick?.('');
            }}
            className={cn(
              "px-5 py-2.5 rounded shadow-lg font-bold text-xs 2xl:text-sm uppercase tracking-wider transition-all",
              isScrolled || isMobileMenuOpen
                ? "bg-med-blue text-white hover:bg-med-blue/90" 
                : "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
            )}
          >
            Register
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={cn(
            "p-2 rounded-lg transition-colors",
            isScrolled || isMobileMenuOpen ? "text-slate-900" : "text-white"
          )}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl xl:hidden">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-2">
                <a 
                  href={link.href}
                  className="text-lg font-semibold text-slate-800 hover:text-med-blue flex items-center justify-between"
                  onClick={(e) => {
                    if (!link.subLinks) {
                      handleLinkClick(e, link);
                    }
                  }}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={20} className="text-slate-400" />}
                </a>
                {link.subLinks && (
                  <div className="flex flex-col gap-4 pl-4 mt-2 border-l-2 border-slate-100">
                    {link.subLinks.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          onEmptyLinkClick?.(sub.name.toUpperCase());
                          if (sub.name === 'Technical Committee') {
                            setTimeout(() => {
                              const el = document.getElementById('technical-committee-section');
                              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }, 200);
                          }
                        }}
                        className="text-base font-bold text-slate-600 hover:text-med-blue"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a 
              href="#fees" 
              className="btn-primary text-center"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                onRegisterClick?.();
                onEmptyLinkClick?.('');
              }}
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
