import { useState } from 'react';
import { Terminal, Copy, Check, FileText, Code, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText('rahuljangra070407@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <div className="relative min-h-screen snap-start snap-always flex flex-col justify-center border-b border-zinc-900 bg-[#0a0a0a] overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] animate-pulse-glow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] animate-grid-pan [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center justify-center mt-[-4rem]">
        <motion.div 
          className="max-w-4xl flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-xs font-mono font-semibold text-emerald-400 tracking-widest mb-6 uppercase flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-emerald-900/50"></span>
            AI & Systems Engineering
            <span className="w-8 h-[1px] bg-emerald-900/50"></span>
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] mb-6 font-display text-zinc-100">
            Rahul <span className="text-emerald-500">Jangra</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-lg md:text-xl text-zinc-400 font-medium mb-4">
            Bridging applied ML pipelines with production-ready software systems.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-sm md:text-base text-zinc-500 max-w-2xl mb-10 leading-relaxed font-normal">
            BCA (AI & ML) Student specializing in Neural Networks, Android architecture (Kotlin), and Linux environments.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16 justify-center w-full sm:w-auto">
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-600/90 text-white font-semibold hover:bg-emerald-500 rounded-sm text-sm transition-all shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            >
              View Projects
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-emerald-400 font-semibold hover:bg-emerald-900/20 border border-emerald-900/50 rounded-sm text-sm transition-all"
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
