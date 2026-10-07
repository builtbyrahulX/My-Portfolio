import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    institution: "St. Agnes (Autonomous) College, Mangaluru",
    degree: "BCA — Artificial Intelligence & Machine Learning",
    timeline: "2025 – 2028 (Expected)",
    icon: GraduationCap,
    details: [
      "Foundations of AI & ML, Statistical Applications, Web Technologies, Database Systems.",
      "Maintained 86%+ attendance record and high academic standing."
    ]
  },
  {
    institution: "Army Public School, Chennai",
    degree: "Higher Secondary School Certificate (Class XII)",
    timeline: "Completed 2025",
    icon: Award,
    details: [
      "Humanities with Informatics Practices | Score: 8.3 CGPA",
      "Core expertise in logic, programming, algorithms, and research."
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="relative w-full min-h-screen snap-start snap-always flex flex-col justify-center border-t border-zinc-900 bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <p className="text-xs font-mono font-medium text-emerald-400 tracking-widest mb-4 uppercase">
            Timeline
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-zinc-100 tracking-tight mb-4">
            My <span className="text-emerald-500">Journey</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2"></div>
          
          <div className="flex flex-col gap-12">
            {education.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Node icon on line */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-sm bg-[#0a0a0a] border border-emerald-900/50 flex items-center justify-center transform -translate-x-1/2 z-10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <edu.icon size={14} />
                  </div>
                  
                  {/* Empty spacer for alternating side */}
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* Card Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-[#0f1115] border border-zinc-800 hover:border-emerald-500/30 transition-colors p-6 rounded-sm shadow-lg">
                      <div className="flex flex-col mb-4">
                        <span className="font-mono text-xs text-emerald-500/80 uppercase tracking-widest mb-2">
                          {edu.timeline}
                        </span>
                        <h3 className="text-lg font-semibold text-zinc-100 mb-1 leading-tight">{edu.degree}</h3>
                        <span className="text-sm text-zinc-500 font-medium">{edu.institution}</span>
                      </div>
                      
                      <ul className="flex flex-col gap-2">
                        {edu.details.map((detail, i) => (
                          <li key={i} className="text-xs text-zinc-400 flex items-start gap-2 leading-relaxed">
                            <span className="text-zinc-600 mt-1">&gt;</span> {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
