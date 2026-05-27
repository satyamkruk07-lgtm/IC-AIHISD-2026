import { motion } from 'motion/react';
import { UserCircle } from 'lucide-react';

export default function KeynoteSpeakers() {
  const speakers = [
    {
      name: "DR Sudarshan Iyengar",
      role: "HEAD CSE",
      college: "Indian Institute of Technology",
      location: "Ropar, Punjab, India"
    },
    {
      name: "Dr. Rashmi saini",
      role: "Associate Professor (CSE)",
      college: "G. B. Pant Institute of Engineering and Technology,",
      location: "Pauri Garhwal, Uttarakhand"
    },
    {
      name: "Prof (Dr.) Rajeev Tiwari",
      role: "Dean, School of Artificial Intelligence & Head - Industry Partnerships, Engineering Programs",
      college: "Bennett University",
      location: "Noida, Uttarpradesh, India"
    },
    {
      name: "Dr. Ashok Kumar",
      role: "CEO architect consultant",
      college: "ex - outstanding scientist csir-cbri",
      location: ""
    },
    {
      name: "Prof. (Dr.) Rajesh Singh",
      role: "Director, Division of Research & Innovation",
      college: "Uttaranchal University",
      location: "Dehradun, INDIA",
      image: "/rajesh.jpeg"
    }
  ];

  return (
    <section id="keynotes" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h2 className="heading-lg mb-6 leading-tight">Keynote <span className="text-[#C83E34]">Speakers</span></h2>
          <div className="w-24 h-1 bg-[#C83E34] mx-auto opacity-20 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[speakers.slice(0, 2), speakers.slice(2, 4)].map((rowSpeakers, rowIdx) => (
              <div key={rowIdx}>
                <div className="relative flex justify-center">
                  <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black hidden sm:block -translate-x-1/2 z-0 opacity-20" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl relative z-10">
                    {rowSpeakers.map((speaker, idx) => (
                      <div key={idx} className="flex justify-center">
                        <div className="flex flex-col items-center text-center px-4 py-4 w-full sm:w-[300px] group">
                          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#C83E34]/20 shadow-sm transition-transform hover:scale-105 flex items-center justify-center bg-slate-50">
                            {speaker.image ? (
                              <img 
                                src={speaker.image} 
                                alt={speaker.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <UserCircle size={40} className="text-slate-300" />
                            )}
                          </div>
                          <h4 className="text-[15px] sm:text-[17px] font-black text-slate-900 tracking-tight leading-tight uppercase font-sans">
                            {speaker.name}
                          </h4>
                          {speaker.role && (
                            <p className="text-[13px] sm:text-[14px] font-bold text-slate-800 mt-1 uppercase tracking-wide">
                              {speaker.role}
                            </p>
                          )}
                          <div className="mt-2 space-y-0.5">
                            {speaker.college && (
                              <p className="text-[13px] sm:text-[14px] text-slate-600 font-medium">
                                {speaker.college}
                              </p>
                            )}
                            {speaker.location && (
                              <p className="text-[12px] sm:text-[13px] text-slate-500 italic">
                                {speaker.location}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {rowIdx === 0 && (
                  <div className="w-[2px] h-8 bg-black mx-auto mt-4 mb-4 hidden sm:block opacity-20" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
