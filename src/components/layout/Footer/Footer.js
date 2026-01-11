
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/thangamariappan19'
      className='link footer__link'
    >
      &copy; {new Date().getFullYear()} Thanga Mariappan Pandian
    </a>
  </footer>
);

export default Footer;
