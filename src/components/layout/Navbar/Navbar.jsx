import { useContext, useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { ThemeContext } from '../../../contexts/theme'
import { header } from '../../../data/portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)
  const closeNav = () => setShowNavList(false)

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showNavList) {
        closeNav()
      }
    }

    if (showNavList) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [showNavList])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className='nav' role='navigation' aria-label='Main navigation'>
      <a href='#top' className='nav__brand' aria-current='page'>
        {header.title}
      </a>

      <div className='nav__controls'>
        <ul
          className={`nav__list ${showNavList ? 'nav__list--active' : ''}`}
          role='menubar'
        >
          {navItems.map((item) => (
            <li key={item.href} className='nav__list-item' role='none'>
              <a
                href={item.href}
                onClick={closeNav}
                className='link link--nav'
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
          title={`Switch to ${themeName === 'dark' ? 'light' : 'dark'} theme`}
        >
          {themeName === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          type='button'
          onClick={toggleNavList}
          className='nav__hamburger'
          aria-label='Toggle navigation menu'
          aria-expanded={showNavList}
          aria-controls='nav-menu'
          title='Toggle navigation menu'
        >
          {showNavList ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
