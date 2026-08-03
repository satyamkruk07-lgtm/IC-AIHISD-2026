import { motion } from 'motion/react';
import { UserCircle } from 'lucide-react';

export default function TechnicalCommittee() {
  const sections = [
    {
      title: "Technical Committee",
      members: [
        { name: "Mr. Kushpreet Singh", image: "/kushpreet.jpeg" },
        { name: "Mr. Kumar Rethik", image: "/rethik.jpeg" },
        { name: "Mr. Pradeep Chauhan", image: "/pradeep.jpeg" },
        { name: "Mr. Vipin Uniyal", image: "/vipin.jpeg" },
        { name: "Mr. Avi Vinayak", image: "/vinayak.jpeg" },
        { name: "Sudhir gautam", image: "/sudhir_gautam.jpeg" }
      ]
    },
    {
      title: "Registration Committee",
      members: [
        { name: "Ms. Aakanksha Pundir", image: "/akansha.jpeg" },
        { name: "Ms. Swati Kashyap", image: "/swati.jpeg" },
        { name: "Ms. Vandana Bansla", image: "/vandana.jpeg" }
      ]
    },
    {
      title: "Reviewers Committee",
      members: [
        { name: "Dr. Surmadhur Pant", image: "https://shivalikcollege.edu.in/wp-content/uploads/2025/05/PANT-SIR.png" },
        { name: "Dr. U. C. Gupta", image: "/ucgupta.png" },
        { name: "Dr. Santosh Joshi", image: "https://shivalikcollege.edu.in/wp-content/uploads/2023/11/Santosh-JoshI.jpg" },
        { name: "Prof. (Dr.) Sayantan Mukhopadhyay", image: "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/Dr.-Sayantan.png" },
        { name: "Dr. Dev Baloni", image: "/dev_baloni.jpeg" },
        { name: "Dr Vijaylakshmi Sajwan", image: "/vijaylakshmi.jpeg" },
        { name: "Mr. Sartaj Khan", image: "/sartaj.jpeg" },
        { name: "Dr. Paramendra Kumar", image: "/paramendra.jpeg" },
        { name: "Mrs. Shaista Hasan" },
        { name: "Dr. Ritu Sanwal" },
        { name: "Naga Hemanth Badabagni" },
        { name: "Dr. Mridula Singh" },
        { name: "Er. Vivek Aggarwal" },
        { name: "Dr. Shail Dinkar" },
        { name: "Dr. Brij Mohan Singh" },
        { name: "Dr. Sono Bharadwaj" }
      ]
    },
    {
      title: "Session Committee",
      members: [
        { name: "Mr. Brijesh Kumar", image: "/brijesh.jpeg" },
        { name: "Mr. Raj Kumar Verma", image: "/rajkumar.jpeg" },
        { name: "Mr. Mohit Singh Bisht", image: "/mohit.jpeg" },
        { name: "Mr. Abhishek Kushwaha", image: "/abhishek.jpeg" },
        { name: "Mr. Syed Amaan Hasan", image: "/amaan.jpeg" },
        { name: "Ms. Shivali Pundir", image: "/shivali.jpeg" },
        { name: "Mr. Bhuvan Chandra Bhatt", image: "/bhuvan.png" },
        { name: "Mr. Mohammad Sayeed", image: "/mohammad.png" }
      ]
    },

    { 
      title: "IT Support Committee", 
      members: [
        { name: "Manish Bhatt", image: "/manish_bhatt.jpeg" },
        { name: "Jitender Rawat", image: "/jitender_rawat.jpeg" },
        { name: "Sanjay Chaudhary", image: "/sanjay_chaudhary.jpeg" },
        { name: "Amit Negi", image: "/amit_negi.jpeg" }
      ] 
    },
    { title: "Publicity and Media Committee", members: [] },
    { 
      title: "Hospitality and Accommodation Committee", 
      members: [
        { name: "Dr. Vijay Kumar", image: "/vijay_kumar.jpeg" },
        { name: "Dr. Abhishek Kumar Jha", image: "/abhishek_jha.jpeg" },
        { name: "Sachin Painuli", image: "/sachin_penuly.jpeg" }
      ] 
    },
    { 
      title: "Certificate and Documentation Committee", 
      members: [
        { name: "Manish Gaur", image: "/manish_gaur.jpeg" }
      ] 
    },
    { 
      title: "Transport and Logistics Committee", 
      members: [
        { name: "Aman tejyan", image: "/aman_tejyan.jpeg" },
        { name: "Devdutt Sharma", image: "/devdutt_sharma.jpeg" }
      ] 
    },
    {
      title: "Students Committee",
      members: [
        { name: "Rifat Parvez", role: "Chairperson (ACM)", image: "/rifat.jpeg" },
        { name: "Shivam Kumar", role: "Vice Chairperson (ACM)", image: "/shivam.jpeg" },
        { name: "Aman Bhardwaj", role: "Treasurer (ACM)", image: "/aman_b.jpeg" },
        { name: "Gaurav Kumar", role: "Secretary (ACM)", image: "/gaurav.jpeg" },
        { name: "Kumar Satyam", role: "Graphic Head (ACM)", image: "/kumar_satyam.png" },
        { name: "Prashant Sekhar", role: "C.A Lead (ACM)", image: "/prashant.jpeg" },
        { name: "Ishant", role: "C.R Head (ACM)", image: "/ishant.jpeg" },
        { name: "Himanshu Kumar", role: "Media Head (ACM)", image: "/himanshu.jpeg" },
        { name: "Priyanjali", role: "Media Vice Head (ACM)", image: "/priyanjali.jpeg" },
        { name: "Shubham Shah", role: "ACM Member", image: "/shubham.jpeg" },
        { name: "Prachi Rawat", role: "ACM Member", image: "/prachi.jpeg" },
        { name: "Srishti Raj", role: "ACM Member", image: "/srishti.jpeg" }
      ]
    }
  ];

  return (
    <div id="technical-committee-section" className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {sections.map((section, idx) => (
            <div key={idx} className="text-center">
              <motion.h3 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-black text-[#C83E34] mb-12 uppercase tracking-tight italic font-display"
              >
                {section.title}
              </motion.h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center justify-items-center">
                {section.members.map((member, mIdx) => (
                  <motion.div 
                    key={mIdx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (mIdx % 4) * 0.1, duration: 0.6, type: "spring", stiffness: 50 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group w-full max-w-[280px]"
                  >
                    <div className="w-28 h-28 rounded-full overflow-hidden bg-slate-50 mb-6 border-4 border-slate-100 shadow-sm flex items-center justify-center group-hover:scale-105 group-hover:border-med-blue/20 transition-all duration-300">
                      {/* @ts-ignore - Assuming image might be added later */}
                      {member.image ? (
                        /* @ts-ignore */
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      ) : (
                        <UserCircle size={56} strokeWidth={1.5} className="text-slate-300 group-hover:text-med-blue transition-colors duration-300" />
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 font-sans group-hover:text-[#C83E34] transition-colors duration-300 capitalize">
                      {member.name}
                    </h4>
                    {/* @ts-ignore */}
                    {member.role && (
                      <p className="text-med-blue font-bold text-sm tracking-wide mt-2 uppercase">
                        {/* @ts-ignore */}
                        {member.role}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
