import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/layout/Header/Header';
import Navbar from './components/layout/Navbar/Navbar';
import Projects from './components/sections/Projects/Projects';
import Skills from './components/sections/Skills/Skills';
import ScrollToTop from './components/layout/ScrollToTop/ScrollToTop';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer/Footer';
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id='top'
      className={`${themeName} app`}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      }}
    >
      <div className="spotlight"></div>
      <Navbar />

      <main>
        <Header />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
