import { useContext, useEffect, useState, Suspense, lazy } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/layout/Header/Header'
import Navbar from './components/layout/Navbar/Navbar'
import ScrollToTop from './components/layout/ScrollToTop/ScrollToTop'
import Footer from './components/layout/Footer/Footer'
import SectionLoader from './components/ui/SectionLoader/SectionLoader'
import './App.css'

// Code split heavy sections for better performance
const Projects = lazy(() => import('./components/sections/Projects/Projects'))
const Skills = lazy(() => import('./components/sections/Skills/Skills'))
const Contact = lazy(() => import('./components/sections/Contact/Contact'))

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      id='top'
      className={`${themeName} app`}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      }}
    >
      <div className='spotlight'></div>
      <Navbar />

      <main>
        <Header />
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
