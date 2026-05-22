'use client';

import { MapPin, Phone, Mail, Globe, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo.png" alt="IC-AIHISD Logo" className="h-16 w-auto object-contain" />
              <h3 className="text-2xl font-display font-bold tracking-tight">IC-AIHISD <span className="text-[#C83E34]">2026</span></h3>
            </div>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
              International Conference on Artificial Intelligence in Healthcare and Intelligent System Development. Dedicated to bridging technology and life sciences.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Venue & Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-blue-400" />
                <span>Shivalik College of Engineering, Shimla Bypass Rd, Dehradun, Uttarakhand, 248197.</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-blue-400" />
                <div>
                  <p>+91 83750 52135</p>
                  <p>+91 94120 34458</p>
                </div>
              </li>
              <li className="flex gap-3 text-blue-400">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:contact@icaihisd.edu" className="hover:underline">contact@icaihisd.edu</a>
              </li>
            </ul>
          </div>


        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} IC-AIHISD 2026. Organized by Department of CSE, SGOC.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
