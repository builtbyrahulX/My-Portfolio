import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Competencies } from '../components/Competencies';
import { Projects } from '../components/Projects';
import { Education } from '../components/Education';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { UIEnhancements } from '../components/UIEnhancements';

export function Home() {
  return (
    <main>
      <UIEnhancements />
      <Hero />
      <About />
      <Projects />
      <Competencies />
      <Education />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
