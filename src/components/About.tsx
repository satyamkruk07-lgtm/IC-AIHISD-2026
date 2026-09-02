'use client';

import { motion } from 'motion/react';
import { Target, Award, BookOpen, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-med-blue font-bold tracking-widest uppercase text-xs mb-4">
              <Target size={16} />
              <span>About the Conference</span>
            </div>
            <h2 className="heading-lg mb-8">
              Nurturing Scientific Talent for <span className="text-med-blue">Intelligence Solutions</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                1st International Conference on Artificial Intelligence in Healthcare and Intelligent System Development 2026 (IC-AIHISD 2026) is a premier platform for global researchers to share cutting-edge findings.
              </p>
              <p>
                Our mission is to bridge the gap between advanced algorithmic precision and medical wisdom. By highlighting the latest frontiers in Science, Engineering, and Technology, we aim to foster an environment where intelligent systems solve real-world healthcare challenges.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                <div className="flex gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-med-light-blue flex items-center justify-center text-med-blue">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Excellence</h4>
                    <p className="text-xs">UGC Autonomous Standards</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-med-light-blue flex items-center justify-center text-med-blue">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Publication</h4>
                    <p className="text-xs">Springer & Scopus Indexing</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <div className="flex items-center gap-2 text-med-blue font-bold tracking-widest uppercase text-xs mb-4">
              <GraduationCap size={16} />
              <span>Organized By</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-snug">
              Department of CSE in collaboration with School of Pharmacy, Shivalik University
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Established in 2008, Shivalik University Dehradun is a leading institution dedicated to academic excellence. As a UGC Autonomous institute, it has consistently nurtured scientific talent across engineering disciplines.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              The Department of Computer Science and Engineering is at the forefront of this initiative, organizing IC-AIHISD 2026 to foster international collaboration and technological growth.
            </p>
            <div className="p-4 sm:p-6 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 text-center sm:text-left">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Established</p>
                <p className="text-xl font-bold text-med-blue">2008</p>
              </div>
              <div className="h-px w-full sm:h-8 sm:w-px bg-slate-200" />
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Status</p>
                <p className="text-xl font-bold text-med-blue">UGC Autonomous</p>
              </div>
              <div className="h-px w-full sm:h-8 sm:w-px bg-slate-200" />
               <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Location</p>
                <p className="text-xl font-bold text-med-blue">Dehradun</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
