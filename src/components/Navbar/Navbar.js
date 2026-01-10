import { useContext, useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  const hasProjects = projects && projects.length > 0
  const hasSkills = skills && Object.keys(skills).length > 0
  const hasContact = contact && contact.email

  return (
    <nav className='nav'>
      <ul
        className={`nav__list ${showNavList ? 'nav__list--active' : ''}`}
      >
        {hasProjects && (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={(e) => {
                setShowNavList(false)
              }}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        )}

        {hasSkills && (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={(e) => {
                setShowNavList(false)
              }}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        )}

        {hasContact && (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={(e) => {
                setShowNavList(false)
              }}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        )}
      </ul>

      <div className='nav__controls'>
        <button
          type='button'
          onClick={toggleTheme}
          className='btn btn--icon nav__theme'
          aria-label={`Switch to ${themeName === 'dark' ? 'light' : 'dark'} mode`}
          title={`${themeName === 'dark' ? 'Light' : 'Dark'} mode`}
        >
          {themeName === 'dark' ? (
            <Sun size={20} strokeWidth={2} />
          ) : (
            <Moon size={20} strokeWidth={2} />
          )}
        </button>

        <button
          type='button'
          onClick={toggleNavList}
          className='btn btn--icon nav__hamburger'
          aria-label='toggle navigation menu'
          aria-expanded={showNavList}
        >
          {showNavList ? (
            <X size={24} strokeWidth={2} />
          ) : (
            <Menu size={24} strokeWidth={2} />
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
