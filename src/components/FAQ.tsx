import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in bridging machine learning with production systems. My core stack includes Python (TensorFlow, Scikit-Learn) for AI modeling, Kotlin for Android development (including TensorFlow Lite integration), and modern web technologies (React, TypeScript)."
  },
  {
    question: "Are you open to freelance or full-time opportunities?",
    answer: "I am currently focused on my BCA studies and ongoing projects, but I am always open to discussing interesting freelance contracts, hackathon team-ups, or future full-time roles in AI & Systems Engineering."
  },
  {
    question: "How do you handle edge-based ML inference?",
    answer: "I utilize TensorFlow Lite to convert and quantize standard neural network models, allowing them to run efficiently on low-power devices. I also implement Android background services to maintain inference streams without draining battery or RAM."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full min-h-screen snap-start snap-always flex flex-col justify-center border-t border-zinc-900 bg-[#0a0a0a] py-24">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-emerald-500 tracking-tight mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className={`border rounded-md overflow-hidden transition-colors ${isOpen ? 'bg-[#0f1115] border-emerald-900/50 shadow-md' : 'bg-transparent border-zinc-800/50 hover:border-zinc-700'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className={`text-sm md:text-base font-medium transition-colors ${isOpen ? 'text-emerald-400' : 'text-zinc-300'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={18} className={isOpen ? 'text-emerald-500' : 'text-zinc-500'} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4 mt-2 mx-5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
