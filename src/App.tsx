import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

function App() {
  useEffect(() => {
    // Intercept all anchor clicks for smooth scrolling, which can be buggy with CSS scroll snap
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          // Temporarily disable scroll snapping for a smoother scroll
          const html = document.documentElement;
          const originalSnap = html.style.scrollSnapType;
          html.style.scrollSnapType = 'none';
          
          element.scrollIntoView({ behavior: 'smooth' });
          
          // Re-enable snapping after animation (approx 1s)
          setTimeout(() => {
            html.style.scrollSnapType = originalSnap || 'y mandatory';
          }, 1000);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <BrowserRouter>
      {/* 12. Skip to content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-emerald-600 text-white rounded-sm">
        Skip to content
      </a>
      <Header />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
