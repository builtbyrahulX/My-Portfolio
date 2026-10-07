import { Code2, Database, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const competencies = [
  {
    title: "Core Engineering",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "Kotlin", level: 85 },
      { name: "C / C++", level: 70 },
      { name: "Bash / Shell", level: 80 },
      { name: "HTML / CSS / JS", level: 65 }
    ]
  },
  {
    title: "AI & Data Science",
    icon: Database,
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-Learn", level: 80 },
      { name: "Pandas & NumPy", level: 90 },
      { name: "Signal Processing", level: 75 },
      { name: "Predictive Modeling", level: 80 }
    ]
  },
  {
    title: "Platforms & Workflows",
    icon: Cpu,
    skills: [
      { name: "Android Architecture", level: 85 },
      { name: "TFLite / Edge ML", level: 90 },
      { name: "Linux / WSL 2", level: 80 },
      { name: "Git & Version Control", level: 85 },
      { name: "REST APIs", level: 75 }
    ]
  }
];

export function Competencies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="competencies" className="relative w-full min-h-screen snap-start snap-always flex flex-col justify-center border-t border-zinc-900 bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <p className="text-xs font-mono font-medium text-emerald-400 tracking-widest mb-4 uppercase">
            Technical Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-zinc-100 tracking-tight mb-4">
            Skills & Technologies
          </h2>
          <p className="text-zinc-400 max-w-2xl leading-relaxed text-sm">
            Core technologies I use to build scalable machine learning pipelines and native Android applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {competencies.map((group, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-[#0f1115] border border-zinc-800 hover:border-emerald-500/50 rounded-sm p-6 flex flex-col transition-colors shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800/50">
                <div className="p-2 bg-emerald-900/20 text-emerald-400 rounded-sm">
                  <group.icon size={18} />
                </div>
                <h3 className="text-zinc-100 font-semibold">{group.title}</h3>
              </div>
              
              <div className="flex flex-col gap-5">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-zinc-300">{skill.name}</span>
                      <span className="font-mono text-emerald-500/70">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                        className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
