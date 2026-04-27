import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Hero from './sections/Hero';
import About from './sections/About';
import Highlights from './sections/Highlights';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import BackToTopButton from './components/BackToTopButton';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <BackToTopButton />
      <footer className="container-page py-10 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Vamsi Praneeth. Built with React, TypeScript & Tailwind.
      </footer>
    </div>
  );
};

export default App;
