'use client';

import { motion } from 'motion/react';

export default function Partners() {
  const partners = [
    {
      name: "FIC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/FIC_logo.png", // Attempting a representative logo
      width: "w-32",
      subtext: "Federazione Italiana Cineforum"
    },
    {
      name: "NAPCO MEDIA",
      logo: "https://napco.com/wp-content/themes/napco/images/logo.png",
      width: "w-40"
    },
    {
      name: "SPRINGER NATURE",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Springer_Nature_logo.svg/2560px-Springer_Nature_logo.svg.png",
      width: "w-48"
    },
    {
      name: "Scopus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Scopus_logo.svg/2560px-Scopus_logo.svg.png",
      width: "w-32",
      label: "Indexed in"
    }
  ];

  return (
    <section id="partners" className="bg-white">
      {/* Red Header Bar */}
      <div className="bg-partner-red py-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-[0.1em]">
          Publication Partners
        </h2>
      </div>

      {/* Logos Container */}
      <div className="py-12 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-80">
            {/* FIC Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group transition-all cursor-pointer"
            >
              <div className="font-extrabold text-[#0070bb] text-5xl tracking-tighter">fic</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter leading-[1.1]">
                Federazione<br />Italiana<br />Cineforum
              </div>
            </motion.div>

            {/* NAPCO Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border-[6px] border-[#c1272d] border-r-transparent rotate-45" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-black leading-none -tracking-widest">NAPCO</span>
                <span className="text-xl font-bold text-[#c1272d] tracking-[0.4em] leading-none ml-1">MEDIA</span>
              </div>
            </motion.div>

            {/* Springer Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center transition-all cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-[#1e293b] leading-tight">SPRINGER</span>
                <span className="text-2xl font-black text-[#dc2626] leading-tight">NATURE</span>
              </div>
            </motion.div>

            {/* Scopus Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 transition-all cursor-pointer"
            >
              <div className="h-16 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-xs font-serif italic text-slate-500 mb-1">Indexed in</span>
                <div className="flex items-center gap-2">
                   <div className="w-10 h-10 flex items-center justify-center">
                     {/* Tree-like placeholder icon */}
                     <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-900">
                       <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                     </svg>
                   </div>
                   <span className="text-3xl font-bold text-[#f28e2b]">Scopus</span>
                </div>
              </div>
            </motion.div>

            {/* Clarivate Web of Science Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center transition-all cursor-pointer"
            >
              <img 
                src="https://www.image2url.com/r2/default/images/1779255765146-de26fd3a-084d-4e65-b98e-8573d77b256a.png" 
                alt="Clarivate Web of Science" 
                className="h-12 md:h-16 w-auto object-contain mix-blend-multiply"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
