
import { useContext } from 'react';
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

  return (
    <div id='top' className={`${themeName} app`}>
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
