'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin, UserCircle } from 'lucide-react';

export default function Hero({ updateNotice }: { updateNotice?: string | null }) {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-11-27T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      date: "Nov 27, 2026",
      title: "Main Conference Day 1"
    },
    {
      date: "Nov 28, 2026",
      title: "Technical Sessions & Valedictory"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/shivalik_college.jpg" 
          alt="Shivalik University Dehradun" 
          className="w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <div className="flex flex-col items-center mb-12">
          {/* Partner Logos */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-8 sm:gap-12 mb-8 flex-wrap"
          >
            <img 
              src="/university_logo.png" 
              alt="Shivalik University Logo" 
              className="h-10 sm:h-20 w-auto object-contain rounded-xl" 
              referrerPolicy="no-referrer"
            />
            <img 
              src="/partner2_logo.jpeg" 
              alt="Partner Logo 2" 
              className="h-14 sm:h-20 w-auto object-contain rounded-lg" 
              referrerPolicy="no-referrer"
            />
            <img 
              src="/logo.png" 
              alt="IC-AIHISD Logo" 
              className="h-14 sm:h-20 w-auto object-contain rounded-lg" 
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-black tracking-tight mb-4 text-shadow"
          >
            IC-AIHISD 2026
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-medium max-w-2xl text-white/90 mb-4 tracking-tight uppercase"
          >
            1<span className="lowercase">st</span> INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE IN HEALTHCARE AND INTELLIGENT SYSTEM DEVELOPMENT 2026
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-white/70 mb-12"
          >
            DEHRADUN, INDIA
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-display font-bold mb-12 text-shadow"
          >
            Conference Dates: November 27-28, 2026
          </motion.h2>

          {/* Cards Section */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20 w-full">
            {/* Main Highlight Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="frosted-glass p-6 sm:p-8 flex flex-col items-center justify-center relative group min-h-[160px] sm:min-h-[180px] overflow-hidden"
            >
              <button 
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 opacity-50 hover:opacity-100 transition-all z-10"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              
              <div className="w-full relative h-[80px] sm:h-[100px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center w-full px-8 sm:px-12"
                  >
                    <h3 className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2">{slides[currentSlide].date}</h3>
                    <p className="text-sm sm:text-lg uppercase tracking-wider font-medium text-white/80 line-clamp-2 md:line-clamp-none">{slides[currentSlide].title}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button 
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 opacity-50 hover:opacity-100 transition-all z-10"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
              
              <div className="flex gap-2 mt-4 relative z-10">
                {slides.map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentSlide ? "bg-white scale-125" : "bg-white/20"
                    }`} 
                  />
                ))}
              </div>
            </motion.div>

            {/* Schedule List Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="frosted-glass p-8 text-left"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center group cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white/50 uppercase tracking-widest leading-none mb-1">November 27, 2026</span>
                    <span className="text-lg font-bold group-hover:text-med-light-blue transition-colors">Inauguration & Keynote Sessions</span>
                  </div>
                  <ChevronRight size={16} className="opacity-40 group-hover:opacity-100 transition-all" />
                </div>
                <div className="h-px bg-white/10 w-full" />
                <div className="flex justify-between items-center group cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white/50 uppercase tracking-widest leading-none mb-1">November 28, 2026</span>
                    <span className="text-lg font-bold group-hover:text-med-light-blue transition-colors">Technical Sessions & Valedictory</span>
                  </div>
                  <ChevronRight size={16} className="opacity-40 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-4 gap-8 max-w-2xl mx-auto pt-10 border-t border-white/10"
        >
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-display font-black leading-none mb-2">
                {(value as number) < 10 ? `0${value}` : value}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Update Notice */}
        <AnimatePresence>
          {updateNotice && (
            <motion.div
              id="update-section"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="mt-20 py-20 max-w-xl mx-auto flex flex-col items-center min-h-[60vh] justify-start"
            >
              <motion.div 
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="bg-gradient-to-r from-[#003360] via-[#556633] to-[#FFCC00] px-10 py-5 rounded-md shadow-2xl mb-12 w-full md:w-auto border-t border-white/20"
              >
                 <h3 className="text-white font-display font-bold text-2xl md:text-3xl lg:text-5xl uppercase tracking-widest text-shadow">
                   {updateNotice}
                 </h3>
              </motion.div>
              {updateNotice === 'CONTACT INFORMATION' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/95 backdrop-blur-xl px-4 py-8 md:px-10 lg:px-16 md:py-12 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mt-8 w-full max-w-4xl mx-auto overflow-hidden"
                >
                  <div className="flex flex-col items-center text-center group w-full lg:w-1/2">
                    <div className="w-16 h-16 bg-[#003360]/5 text-[#003360] rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-[#003360]/10 group-hover:-translate-y-1 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-[#C83E34] text-xs font-black uppercase tracking-[0.25em] mb-2">Primary Contact</span>
                    <a href="tel:+918375052135" className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-700 hover:text-[#003360] transition-colors whitespace-nowrap">
                      +91 83750 52135
                    </a>
                  </div>
                  
                  <div className="hidden lg:block w-px h-32 bg-slate-200"></div>
                  <div className="lg:hidden w-32 h-px bg-slate-200"></div>
                  
                  <div className="flex flex-col items-center text-center group w-full lg:w-1/2">
                    <div className="w-16 h-16 bg-[#003360]/5 text-[#003360] rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-[#003360]/10 group-hover:-translate-y-1 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-[#C83E34] text-xs font-black uppercase tracking-[0.25em] mb-2">Secondary Contact</span>
                    <a href="tel:+919412034458" className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-700 hover:text-[#003360] transition-colors whitespace-nowrap">
                      +91 94120 34458
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.p 
                  animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-[#000066] bg-white/95 backdrop-blur-md px-10 py-4 rounded-full font-black text-2xl md:text-5xl tracking-tight shadow-2xl border border-white/50"
                >
                  To be Updated Soon.
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/* Floating Scroll Indicator */}
       <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
