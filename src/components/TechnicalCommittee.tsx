
import { motion } from 'motion/react';

export default function TechnicalCommittee() {
  const sections = [
    {
      title: "Technical Commitee",
      members: [
        "Kushpreet Singh",
        "Kumar Rethik",
        "pradeep chahuhan",
        "Vipin Uniyal",
        "More to be added"
      ]
    },
    {
      title: "Registeration",
      members: [
        "Akansha Pundir",
        "Swati Kashyap",
        "vandana bansal"
      ]
    },
    {
      title: "Reviewers",
      members: [
        "Dr. Santosh Joshi",
        "Dr. Surmadhur pant",
        "Dr. Dev Baluni",
        "Dr. Syatnam Mukhopadhya",
        "Dr. UC Gupta"
      ]
    },
    {
      title: "Track Session",
      members: [
        "Brijesh",
        "Rajkumar",
        "Mohit",
        "Abhishek",
        "Syed",
        "Shivali"
      ]
    }
  ];

  return (
    <div id="technical-committee-section" className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-black text-[#C83E34] mb-10 uppercase tracking-tight italic font-display">
                {section.title}
              </h3>
              
              <div className="space-y-4">
                {section.members.map((member, mIdx) => (
                  <motion.p 
                    key={mIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: mIdx * 0.1 }}
                    className="text-xl md:text-2xl font-bold text-slate-800"
                  >
                    {mIdx + 1}. {member}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
