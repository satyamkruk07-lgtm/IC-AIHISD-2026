import { motion } from 'motion/react';
import { UserCircle } from 'lucide-react';

export default function SessionChair() {
  const chairs = [
    {
      name: "DILLI BABU DEVINENI",
      role: "Agentic Al Engineer & LLM Systems Researcher",
      location: "Franklin, TN, USA",
      image: "/dilli_babu_devineni.jpeg"
    }
  ];

  const chunkedChairs = [];
  for (let i = 0; i < chairs.length; i += 3) {
    chunkedChairs.push(chairs.slice(i, i + 3));
  }

  return (
    <section id="session-chair" className="section-padding bg-white overflow-hidden min-h-[60vh]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h2 className="heading-lg mb-6 leading-tight">Session <span className="text-[#C83E34]">Chair</span></h2>
          <div className="w-24 h-1 bg-[#C83E34] mx-auto opacity-20 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {chunkedChairs.map((rowChairs, rowIdx) => (
              <div key={rowIdx}>
                <div className="relative flex justify-center">
                  <div className={"grid gap-8 w-full max-w-6xl relative z-10 " + (rowChairs.length === 1 ? "grid-cols-1 justify-items-center" : rowChairs.length === 2 ? "grid-cols-1 sm:grid-cols-2 justify-items-center max-w-4xl" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")}>
                    {rowChairs.map((chair, idx) => (
                      <div key={idx} className="flex justify-center w-full">
                        <div className="flex flex-col items-center text-center px-2 py-4 w-full max-w-[320px] group">
                          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-5 border-4 border-[#2c9834] shadow-md transition-transform hover:scale-105 flex items-center justify-center bg-slate-50">
                            {chair.image ? (
                              <img 
                                src={chair.image} 
                                alt={chair.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <UserCircle size={80} className="text-slate-300" />
                            )}
                          </div>
                          <h4 className="text-[15px] sm:text-[17px] font-black text-slate-900 tracking-tight leading-tight uppercase font-sans">
                            {chair.name}
                          </h4>
                          {chair.role && (
                            <p className="text-[13px] sm:text-[14px] font-bold text-slate-800 mt-1 tracking-wide">
                              {chair.role}
                            </p>
                          )}
                          <div className="mt-2 space-y-0.5">
                            {chair.college && (
                              <p className="text-[13px] sm:text-[14px] text-slate-600 font-medium">
                                {chair.college}
                              </p>
                            )}
                            {chair.location && (
                              <p className="text-[12px] sm:text-[13px] text-slate-500 italic">
                                {chair.location}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
