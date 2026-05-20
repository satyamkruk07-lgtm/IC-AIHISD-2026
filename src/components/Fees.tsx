'use client';

import { motion } from 'motion/react';
import { CreditCard, CheckCircle, Info } from 'lucide-react';

const feeData = [
  { category: "Faculty members / PHD Scholars", amount: "10,000", currency: "INR" },
  { category: "Industry Delegates", amount: "12,000", currency: "INR" },
  { category: "UG/PG Scholars", amount: "8,000", currency: "INR" },
  { category: "Foreign Authors (Outside India)", amount: "150", currency: "USD" },
  { category: "Co-authors/Participants", amount: "2,500", currency: "INR" },
];

export default function Fees() {
  return (
    <section id="fees" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">Registration <span className="text-med-blue">Fees</span></h2>
          <p className="text-slate-500 text-lg">Secure your spot at IC-AIHISD 2026. Choose the category that best represents your professional standing.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm max-w-5xl mx-auto border-t-[6px] border-t-med-blue">
          <div className="hidden md:grid md:grid-cols-2 px-10 py-6 items-center">
            <div className="text-lg font-bold text-slate-900">Participant Category</div>
            <div className="text-right text-lg font-bold text-med-blue">Fee Amount</div>
          </div>
          
          <div className="divide-y divide-slate-100">
            {feeData.map((fee, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid md:grid-cols-2 px-10 py-8 items-center hover:bg-slate-50/50 transition-colors"
              >
                <div className="mb-2 md:mb-0">
                  <h3 className="font-medium text-slate-700 text-xl">{fee.category}</h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-slate-900">
                    {fee.currency === 'INR' ? `${fee.amount}/- INR` : `${fee.amount} USD`}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Included in Registration Section */}
          <div className="bg-slate-50/50 px-10 py-10 border-t border-slate-100">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">
              INCLUDED IN REGISTRATION:
            </h4>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Conference Kit",
                "Access to all Technical Sessions",
                "Publication in Proceedings",
                "Certificate of Participation",
                "Networking Lunch & Refreshments"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-med-blue shrink-0" />
                  <span className="text-slate-600 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
