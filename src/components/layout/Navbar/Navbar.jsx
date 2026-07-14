import { useContext, useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { ThemeContext } from '../../../contexts/theme'
import { header } from '../../../data/portfolio'
import './Navbar.css'

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const SECTION_IDS = ['about', 'projects', 'skills', 'contact']

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('about')
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)
  const closeNav = () => setShowNavList(false)

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
      setIsScrolled(scrollTop > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showNavList) closeNav()
    }
    if (showNavList) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [showNavList])

  return (
    <>
      {/* Scroll progress bar */}
      <div className='scroll-progress' aria-hidden='true'>
        <div
          className='scroll-progress__bar'
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}
        role='navigation'
        aria-label='Main navigation'
      >
        <a href='#top' className='nav__brand' aria-current='page'>
          {header.title}
        </a>

        <div className='nav__controls'>
          <ul
            id='nav-menu'
            className={`nav__list ${showNavList ? 'nav__list--active' : ''}`}
            role='menubar'
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className='nav__list-item' role='none'>
                <a
                  href={item.href}
                  onClick={closeNav}
                  className={`link link--nav ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                  role='menuitem'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type='button'
            onClick={toggleTheme}
            className='nav__theme'
            aria-label={`Switch to ${themeName === 'dark' ? 'light' : 'dark'} theme`}
          >
            {themeName === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type='button'
            onClick={toggleNavList}
            className='nav__hamburger'
            aria-label='Toggle navigation menu'
            aria-expanded={showNavList}
            aria-controls='nav-menu'
          >
            {showNavList ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
