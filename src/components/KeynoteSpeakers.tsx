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
      role: "",
      college: "",
      location: "",
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {speakers.map((speaker, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col text-center group hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center border-4 border-white shadow-md ring-1 ring-slate-200">
                  {speaker.image ? (
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserCircle size={60} className="text-slate-300" />
                  )}
                </div>
                <h4 className="text-[16px] sm:text-[18px] font-black text-slate-900 tracking-tight leading-tight uppercase font-sans">
                  {speaker.name}
                </h4>
                <p className="text-[13px] sm:text-[14px] font-bold text-slate-800 mt-1 uppercase tracking-wide">
                  {speaker.role}
                </p>
                <div className="mt-2 space-y-0.5">
                  <p className="text-[13px] sm:text-[14px] text-slate-600 font-medium">
                    {speaker.college}
                  </p>
                  {speaker.location && (
                    <p className="text-[12px] sm:text-[13px] text-slate-500 italic">
                      {speaker.location}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
