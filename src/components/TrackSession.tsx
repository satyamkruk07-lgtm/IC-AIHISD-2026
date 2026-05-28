import { motion } from 'motion/react';
import { Network, Activity, Cpu, Bot, Zap, Leaf } from 'lucide-react';

export default function TrackSession() {
  const tracks = [
    {
      title: "AI in Healthcare and Medical Systems",
      icon: <Activity size={32} className="text-white" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Intelligent Building and Smart Infrastructure Systems",
      icon: <Network size={32} className="text-white" />,
      color: "from-indigo-500 to-purple-400"
    },
    {
      title: "Energy Efficiency & AI for Energy Optimization",
      icon: <Zap size={32} className="text-white" />,
      color: "from-amber-500 to-orange-400"
    },
    {
      title: "AI in Automation, Robotics and Automobiles",
      icon: <Bot size={32} className="text-white" />,
      color: "from-rose-500 to-pink-400"
    },
    {
      title: "Artificial Intelligence and Internet of Things (AIoT)",
      icon: <Cpu size={32} className="text-white" />,
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "AI in Agriculture and Smart Farming Systems",
      icon: <Leaf size={32} className="text-white" />,
      color: "from-green-500 to-lime-400"
    }
  ];

  return (
    <section id="tracks" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-indigo-100/50 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6 leading-tight"
          >
            Conference <span className="text-med-blue">Tracks</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-med-blue mx-auto opacity-20 rounded-full" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 z-0 pointer-events-none" />
              
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${track.color} shadow-lg flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 z-10`}>
                {track.icon}
              </div>
              
              <div className="z-10 flex-1 flex items-center">
                <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-med-blue transition-colors">
                  {track.title}
                </h3>
              </div>
              
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
