'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';

export default function Hero({ updateNotice }: { updateNotice?: string | null }) {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-09-24T00:00:00').getTime();
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
      date: "Sept 24, 2026",
      title: "Main Conference Day 1"
    },
    {
      date: "Sept 25, 2026",
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
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://dehraduncolleges.com/wp-content/uploads/2022/11/246688154_6339289056144995_5858469245325378665_n.jpg" 
          alt="Shivalik College Dehradun" 
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
              src="https://image3.mouthshut.com/images/imagesp/925718552s.png" 
              alt="Partner Logo 1" 
              className="h-10 sm:h-20 w-auto object-contain rounded-xl" 
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://cdn.imageurlgenerator.com/uploads/2626c5ce-8a03-442b-912c-c622f59c4e3c.jpeg" 
              alt="Partner Logo 2" 
              className="h-14 sm:h-20 w-auto object-contain rounded-lg" 
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6"
          >
            <img 
              src="/logo.png" 
              alt="IC-AIHISD Logo" 
              className="h-28 md:h-40 lg:h-48 w-auto object-contain drop-shadow-2xl"
            />
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-shadow text-white text-center md:text-left">
              IC-AIHISD<br />2026
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-medium max-w-2xl text-white/90 mb-4 tracking-tight uppercase"
          >
            THE INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE IN HEALTHCARE AND INTELLIGENT SYSTEM DEVELOPMENT 2026
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
            Conference Dates: September 24-25, 2026
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
                    <span className="text-sm font-bold text-white/50 uppercase tracking-widest leading-none mb-1">September 24, 2026</span>
                    <span className="text-lg font-bold group-hover:text-med-light-blue transition-colors">Inauguration & Keynote Sessions</span>
                  </div>
                  <ChevronRight size={16} className="opacity-40 group-hover:opacity-100 transition-all" />
                </div>
                <div className="h-px bg-white/10 w-full" />
                <div className="flex justify-between items-center group cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white/50 uppercase tracking-widest leading-none mb-1">September 25, 2026</span>
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
              <motion.p 
                animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-[#000066] bg-white/95 backdrop-blur-md px-10 py-4 rounded-full font-black text-2xl md:text-5xl tracking-tight shadow-2xl border border-white/50"
              >
                To be Updated Soon.
              </motion.p>
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
