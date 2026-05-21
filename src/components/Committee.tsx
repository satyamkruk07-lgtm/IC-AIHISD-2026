'use client';

import { motion } from 'motion/react';
import { UserCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Committee() {
  const commonInfo = {
    college: "Shivalik College of engineering",
    location: "Dehradun, Uttarakhand, India"
  };

  const committeeData = [
    {
      title: "Chief Patron",
      members: [
        { 
          name: "MR. SUNIL KUMAR", 
          role: "CHAIRMAN",
          image: "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/chairman_img.png"
        },
        { 
          name: "MR. AJAY KUMAR", 
          role: "VICE CHAIRMAN",
          image: "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/ViceChairman_ShivalikCollege.jpg"
        }
      ]
    },
    {
      title: "Patron",
      members: [
        { 
          name: "DR. T.S. SIDHU", 
          role: "DIRECTOR",
          image: "https://shivalikcollege.edu.in/wp-content/uploads/2026/02/dirctor-image-scaled.jpeg"
        }
      ]
    },
    {
      title: "Co-Patron(S)",
      members: [
        { 
          name: "DR. SANTOSH KUMAR JOSHI", 
          role: "PROFESSOR, DEAN R&D",
          image: "https://shivalikcollege.edu.in/wp-content/uploads/2023/11/Santosh-JoshI.jpg"
        },
        { 
          name: "DR. SURMADHUR PANT", 
          role: "DEAN ACADMICS",
          image: "https://shivalikcollege.edu.in/wp-content/uploads/2025/05/PANT-SIR.png"
        }
      ]
    },
    {
      title: "Convener",
      members: [
        { 
          name: "ER. KSHITIJ JAIN", 
          role: "ASSISTANT PROFESSOR",
          image: "https://cbii.shivalikcollege.edu.in/assets/kshitijjain-DvrFwvbC.jpg"
        },
        { name: "DR. DEV BALUNI", role: "HEAD CSE" }
      ]
    },
    {
      title: "Co - Convener",
      members: [
        { 
          name: "ER. AJAY VERMA", 
          role: "ASSOCIATE DEAN, CBII",
          image: "https://cbii.shivalikcollege.edu.in/assets/ak-DP7NnX5A.jpg"
        },
        { 
          name: "ER. KULDEEP GODIYAL", 
          role: "ASSOCIATE DEAN, CBII",
          image: "/kuldeep.png"
        }
      ]
    },
    {
      title: "Organizing Secretary",
      members: [
        { name: "DR. SONO BHARDWAJ", role: "ASSOCIATE PROFESSOR" },
        { 
          name: "ER. ASHISH KUMAR GUPTA", 
          role: "ASSISTANT PROFESSOR",
          image: "https://cbii.shivalikcollege.edu.in/assets/ashishguptasir-APdZX32S.jpg"
        }
      ]
    }
  ];

  const MemberDisplay = ({ person, showImage = true }: { person: any; showImage?: boolean }) => (
    <div className="flex flex-col items-center text-center px-4 py-4 w-full sm:w-[300px]">
      {showImage && (
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-med-blue/20 shadow-sm transition-transform hover:scale-105 flex items-center justify-center bg-slate-50">
          {person.image ? (
            <img 
              src={person.image} 
              alt={person.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <UserCircle size={40} className="text-slate-300" />
          )}
        </div>
      )}
      <h4 className="text-[15px] sm:text-[17px] font-black text-slate-900 tracking-tight leading-tight uppercase font-sans">
        {person.name}
      </h4>
      <p className="text-[13px] sm:text-[14px] font-bold text-slate-800 mt-1 uppercase tracking-wide">
        {person.role}
      </p>
      <div className="mt-2 space-y-0.5">
        <p className="text-[13px] sm:text-[14px] text-slate-600 font-medium">
          {commonInfo.college}
        </p>
        <p className="text-[12px] sm:text-[13px] text-slate-500 italic">
          {commonInfo.location}
        </p>
      </div>
    </div>
  );

  return (
    <section id="committee" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h2 className="heading-lg mb-6 leading-tight">Organizing <span className="text-[#C83E34]">Committee</span></h2>
          <div className="w-24 h-1 bg-[#C83E34] mx-auto opacity-20 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          {committeeData.map((section, idx) => (
            <div key={idx} className="mb-8 last:mb-0">
              {/* Section Header */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-6"
              >
                <h3 className="text-3xl sm:text-5xl font-black text-[#C83E34] tracking-tight uppercase font-display italic">
                  {section.title}
                </h3>
              </motion.div>

              {/* Members Row */}
              <div className="relative flex justify-center">
                {/* Vertical Line for sections with 2 members */}
                {section.members.length === 2 && (
                  <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black hidden sm:block -translate-x-1/2 z-0" />
                )}
                
                <div className={cn(
                  "grid gap-4 w-full max-w-4xl relative z-10",
                  section.members.length === 1 ? "grid-cols-1 justify-items-center" : "grid-cols-1 sm:grid-cols-2"
                )}>
                  {section.members.map((person, pIdx) => (
                    <motion.div
                      key={pIdx}
                      initial={{ opacity: 0, x: pIdx === 0 && section.members.length === 2 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex justify-center"
                    >
                      <MemberDisplay person={person} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Connecting line to next section if not last - Only show below Patron section (idx 1) */}
              {idx === 1 && (
                <div className="w-[2px] h-8 bg-black mx-auto mt-4 mb-2 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
