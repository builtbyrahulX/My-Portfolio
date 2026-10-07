import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, Brain } from 'lucide-react';

const tenets = [
  {
    icon: Zap,
    title: "Performant",
    description: "Optimized pipelines and low-latency architectures designed for scale."
  },
  {
    icon: Shield,
    title: "Robust",
    description: "Fail-safe system designs with rigorous testing and validation."
  },
  {
    icon: Brain,
    title: "Intelligent",
    description: "Integrating ML models seamlessly into traditional software stacks."
  },
  {
    icon: Cpu,
    title: "Edge-Native",
    description: "Bringing heavy computation directly to low-power edge devices."
  }
];

export function About() {
  return (
    <section id="about-info" className="relative w-full min-h-screen snap-start snap-always flex flex-col justify-center border-t border-zinc-900 bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <p className="text-xs font-mono font-medium text-emerald-400 tracking-widest mb-4 uppercase">
              Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-zinc-100 tracking-tight mb-6 leading-[1.1]">
              Engineering Intelligence, <br/><span className="text-emerald-500">One Model at a Time</span>
            </h2>
            <div className="flex flex-col gap-4 text-zinc-400 text-sm md:text-base leading-relaxed">
              <p>
                I believe that the true power of artificial intelligence is unlocked only when it is seamlessly woven into robust, scalable software architectures.
              </p>
              <p>
                My approach bridges the gap between theoretical data science and pragmatic software engineering. Whether I am fine-tuning a TensorFlow model or architecting a native Android client, my focus remains on shipping intelligent, edge-native systems that solve real-world problems.
              </p>
              <p>
                Beyond code, I value disciplined execution, clear technical communication, and continuous learning in the rapidly evolving AI landscape.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {tenets.map((tenet, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0f1115] border border-zinc-800/50 p-6 rounded-sm shadow-lg hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-sm bg-emerald-900/20 text-emerald-400 flex items-center justify-center mb-4">
                  <tenet.icon size={18} />
                </div>
                <h3 className="text-zinc-100 font-semibold mb-2">{tenet.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {tenet.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
