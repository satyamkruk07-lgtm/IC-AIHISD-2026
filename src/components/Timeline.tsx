'use client';

import { motion } from 'motion/react';
import { CalendarDays, ChevronRight } from 'lucide-react';

const timelineData = [
  { date: "20th July 2026", event: "Call for Papers", type: "submission" },
  { date: "15th September 2026", event: "Last date of Submission", type: "submission" },
  { date: "25th October 2026", event: "Acceptance Notification", type: "notification" },
  { date: "5th November 2026", event: "Registration & Fee Submission", type: "registration" },
  { date: "10th November 2026", event: "Camera Ready Paper Submission", type: "submission" },
  { date: "27th - 28th November 2026", event: "Conference Dates", type: "event" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding bg-[#f8fafc]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
             <CalendarDays size={40} className="text-[#3b82f6]" />
             <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e293b]">Important Dates</h2>
          </div>
          <p className="text-slate-500 text-lg">Mark your calendar for key submission and registration deadlines.</p>
        </div>

        <div className="max-w-5xl mx-auto relative px-4">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {timelineData.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center mb-0 md:mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Content Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`w-full max-w-sm p-8 bg-[#f8fafc] border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow ${
                      index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                    }`}
                  >
                    <p className="text-sm font-bold text-[#3b82f6] uppercase tracking-wider mb-2">{item.date}</p>
                    <h3 className="text-xl md:text-2xl font-black text-[#1e293b] leading-tight">
                      {item.event}
                    </h3>
                  </motion.div>
                </div>

                {/* Central Point */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-3 h-3 rounded-full bg-[#3b82f6] ring-4 ring-white z-10"
                  />
                </div>

                {/* Empty Side (Implicit) */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
