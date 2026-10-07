import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[90] w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-900/50">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xl font-mono font-bold tracking-tighter text-zinc-100 uppercase">
          RAHUL JANGRA
        </Link>
        <span className="hidden sm:inline-block border border-zinc-800 bg-zinc-900 text-zinc-400 text-xs px-2 py-0.5 font-mono">
          AI & SYSTEMS
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-150">About</a>
        <a href="#competencies" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-150">Competencies</a>
        <a href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-150">Projects</a>
        <a href="#education" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-150">Education</a>
      </nav>

      <button 
        className="md:hidden flex items-center justify-center p-2 border border-zinc-800 rounded-sm bg-transparent text-zinc-400 hover:text-white transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-full left-6 right-6 mt-2 bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-sm p-4 flex flex-col gap-4 shadow-xl md:hidden z-50">
          <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#competencies" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Competencies</a>
          <a href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#education" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Education</a>
        </div>
      )}
    </header>
  );
}
