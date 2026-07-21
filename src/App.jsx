import { useContext, useEffect, useRef, Suspense, lazy } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/layout/Header/Header'
import Navbar from './components/layout/Navbar/Navbar'
import ScrollToTop from './components/layout/ScrollToTop/ScrollToTop'
import Footer from './components/layout/Footer/Footer'
import SectionLoader from './components/ui/SectionLoader/SectionLoader'
import './App.css'

const Projects = lazy(() => import('./components/sections/Projects/Projects'))
const Skills = lazy(() => import('./components/sections/Skills/Skills'))
const Contact = lazy(() => import('./components/sections/Contact/Contact'))

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const appRef = useRef(null)

  // Write CSS vars directly — zero React re-renders per mousemove
  useEffect(() => {
    const el = appRef.current
    const onMove = (e) => {
      el?.style.setProperty('--mouse-x', `${e.clientX}px`)
      el?.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={appRef} id='top' className={`${themeName} app`}>
      <div className='spotlight' aria-hidden='true' />
      <div className='orb orb--1' aria-hidden='true' />
      <div className='orb orb--2' aria-hidden='true' />
      <div className='orb orb--3' aria-hidden='true' />

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
