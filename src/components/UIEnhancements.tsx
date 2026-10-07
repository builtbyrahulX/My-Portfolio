import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageSquare, X, Eye, EyeOff, CheckCircle2, AlertCircle } from 'lucide-react';

export function UIEnhancements() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCookie, setShowCookie] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Search Index
  const searchIndex = [
    { title: "Engineering & AI Projects", description: "View my live GitHub repositories and production deployments.", link: "#projects" },
    { title: "Technical Competencies", description: "Skills including Python, Kotlin, TensorFlow, React, and Linux.", link: "#competencies" },
    { title: "Academic Background", description: "Education details, BCA in AI & ML, St. Agnes College.", link: "#education" },
    { title: "Frequently Asked Questions", description: "Answers to common questions about my experience and stack.", link: "#faq" },
    { title: "Contact & Email", description: "Get in touch with me directly via email or form.", action: () => setShowContact(true) },
    
    // Skills
    { title: "Programming Languages", description: "Python, Kotlin, C, Bash / Shell Scripting, HTML5, CSS3, JavaScript", link: "#competencies" },
    { title: "AI / ML & Data Science", description: "TensorFlow, Scikit-Learn, Audio Processing, Statistical Analysis, Pandas, NumPy", link: "#competencies" },
    { title: "Platforms & Development", description: "Android Studio, WSL 2 (Ubuntu & Kali), Git & GitHub, VS Code", link: "#competencies" },
    { title: "Developer Workflows", description: "On-device Model Deployment (TFLite), Android Background Services, REST APIs, Linux Admin", link: "#competencies" },
    
    // FAQs
    { title: "FAQ: Technologies you specialize in?", description: "Python (TensorFlow, Scikit-Learn), Kotlin (Android/TFLite), React, TypeScript.", link: "#faq" },
    { title: "FAQ: Open to freelance or full-time?", description: "Currently focused on BCA studies, but open to freelance, hackathons, or future full-time roles.", link: "#faq" },
    { title: "FAQ: How do you handle edge ML inference?", description: "TensorFlow Lite quantization and Android background services for low-power continuous inference.", link: "#faq" }
  ];

  const searchResults = searchIndex.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Form states
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(Number(scroll));
      setShowBackToTop(totalScroll > 500);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowSearch(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      // Simulate random error or success
      if (Math.random() > 0.5) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  return (
    <>
      {/* 8. Scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-emerald-500 origin-left z-[100]"
        style={{ scaleX: scrollProgress, width: '100%' }}
      />

      <div className={`fixed right-6 flex flex-col gap-3 z-50 transition-all duration-300 ${showCookie ? 'bottom-28' : 'bottom-6'}`}>
        {/* 1. Dark mode toggle */}
        <button 
          onClick={handleThemeToggle}
          className="p-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-full shadow-lg transition-colors flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        {/* 3. Site search */}
        <button 
          onClick={() => setShowSearch(true)}
          className="p-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-full shadow-lg transition-colors flex items-center justify-center"
          aria-label="Search site"
        >
          🔍
        </button>

        {/* 4. Back to top button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg transition-colors flex items-center justify-center"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* 20. Floating contact button */}
      <button 
        onClick={() => setShowContact(true)}
        className={`fixed left-6 p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg z-50 transition-all duration-300 flex items-center justify-center ${showCookie ? 'bottom-28' : 'bottom-6'}`}
        aria-label="Contact me"
      >
        <MessageSquare size={20} />
      </button>

      {/* 2. Simple cookie banner */}
      <AnimatePresence>
        {showCookie && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-zinc-900 border-t border-zinc-800 z-40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
          >
            <p className="text-sm text-zinc-400">
              We use cookies to improve your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end mt-2 sm:mt-0">
              <button onClick={() => setShowCookie(false)} className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors">Decline</button>
              <button onClick={() => setShowCookie(false)} className="px-4 py-2 text-sm bg-zinc-100 text-zinc-900 font-medium rounded-sm hover:bg-white transition-colors">Accept All</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal (covers 13, 15, 16, 17) */}
      <AnimatePresence>
        {showContact && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => showConfirm ? null : setShowConfirm(true)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-zinc-800 rounded-sm p-6 shadow-2xl"
            >
              <button onClick={() => setShowConfirm(true)} className="absolute top-4 right-4 text-zinc-500 hover:text-white">
                <X size={20} />
              </button>
              
              <h2 className="text-xl font-semibold text-zinc-100 mb-6">Get in touch</h2>

              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8 text-emerald-400">
                  <CheckCircle2 size={48} className="mb-4" />
                  <p className="font-medium">Message sent successfully!</p>
                  <button onClick={() => { setFormStatus('idle'); setShowContact(false); }} className="mt-6 px-4 py-2 bg-zinc-800 text-white rounded-sm text-sm">Close</button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-1">Email</label>
                    <input type="email" required className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500" />
                  </div>
                  
                  {/* 13. Password visibility toggle (For demonstration of checklist item) */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-1">Access Code (Demo)</label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-3 py-2 pr-10 text-sm text-white focus:outline-none focus:border-emerald-500" 
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-1">Message</label>
                    <textarea required rows={4} className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 resize-none"></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-950/30 border border-red-900 rounded-sm">
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-2 bg-zinc-100 text-zinc-900 font-medium rounded-sm hover:bg-white transition-colors disabled:opacity-50 mt-2"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}

              {/* 17. Confirmation modal */}
              <AnimatePresence>
                {showConfirm && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-[#0a0a0a] border border-zinc-800 z-50 flex flex-col items-center justify-center p-6 text-center"
                  >
                    <AlertCircle size={32} className="text-amber-500 mb-4" />
                    <h3 className="text-lg font-medium text-white mb-2">Discard message?</h3>
                    <p className="text-sm text-zinc-400 mb-6">Are you sure you want to close this form? Your message will be lost.</p>
                    <div className="flex items-center gap-3 w-full">
                      <button onClick={() => setShowConfirm(false)} className="flex-1 py-2 border border-zinc-700 text-zinc-300 rounded-sm text-sm hover:bg-zinc-800">Cancel</button>
                      <button onClick={() => { setShowConfirm(false); setShowContact(false); }} className="flex-1 py-2 bg-red-600 text-white rounded-sm text-sm hover:bg-red-500">Discard</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. Site Search Modal */}
      <AnimatePresence>
        {showSearch && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowSearch(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-zinc-800 rounded-sm overflow-hidden shadow-2xl"
            >
              <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
                <span className="text-zinc-500">🔍</span>
                <input 
                  autoFocus
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects, skills, and FAQs..." 
                  className="w-full bg-transparent border-none text-zinc-100 placeholder-zinc-600 focus:outline-none"
                />
                <button onClick={() => setShowSearch(false)} className="text-zinc-500 hover:text-white px-2 py-1 bg-zinc-900 rounded-sm text-xs border border-zinc-800">
                  ESC
                </button>
              </div>
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  <div className="p-8 text-center text-zinc-500 text-sm flex flex-col items-center justify-center min-h-[200px]">
                    <p>Start typing to search...</p>
                  </div>
                ) : searchResults.length === 0 ? (
                  <div className="p-8 text-center text-zinc-500 text-sm flex flex-col items-center justify-center min-h-[200px]">
                    <p>No results found for "{searchQuery}"</p>
                  </div>
                ) : (
                  <div className="flex flex-col p-2">
                    {searchResults.map((result, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setShowSearch(false);
                          if (result.action) result.action();
                          else if (result.link) {
                            const el = document.querySelector(result.link);
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-left px-4 py-3 hover:bg-zinc-900 rounded-sm transition-colors group flex items-start justify-between"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">{result.title}</span>
                          <span className="text-xs text-zinc-500 mt-1">{result.description}</span>
                        </div>
                        <span className="text-zinc-600 group-hover:text-emerald-500 transition-colors opacity-0 group-hover:opacity-100">&rarr;</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
