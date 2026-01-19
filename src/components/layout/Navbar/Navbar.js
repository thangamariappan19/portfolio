
import { useContext, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { ThemeContext } from '../../../contexts/theme';
import { header } from '../../../data/portfolio';
import './Navbar.css';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);
  const closeNav = () => setShowNavList(false);

  return (
    <nav className='nav'>
      <a href="#top" className="nav__brand">
        {header.title}
      </a>

      <div className='nav__controls'>
        <ul
          className={`nav__list ${showNavList ? 'nav__list--active' : ''}`}
        >
          <li className='nav__list-item'>
            <a href='#about' onClick={closeNav} className='link link--nav'>About</a>
          </li>

          <li className='nav__list-item'>
            <a href='#projects' onClick={closeNav} className='link link--nav'>Work</a>
          </li>

          <li className='nav__list-item'>
            <a href='#skills' onClick={closeNav} className='link link--nav'>Skills</a>
          </li>

          <li className='nav__list-item'>
            <a href='#contact' onClick={closeNav} className='link link--nav'>Contact</a>
          </li>
        </ul>

        <button
          type='button'
          onClick={toggleTheme}
          className='nav__theme'
          aria-label='toggle theme'
        >
          {themeName === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          type='button'
          onClick={toggleNavList}
          className='nav__hamburger'
          aria-label='toggle navigation'
        >
          {showNavList ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;