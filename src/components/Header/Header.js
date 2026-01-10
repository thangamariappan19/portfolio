import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header'>
      <div className='header__logo'>
        {homepage ? (
          <a href={homepage} className='header__logo-link'>
            {title}
          </a>
        ) : (
          <span className='header__logo-text'>{title}</span>
        )}
      </div>      <Navbar />
    </header>
  )
}

export default Header