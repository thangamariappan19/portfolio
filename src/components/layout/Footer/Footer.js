
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__content'>
      <a
        href='https://github.com/thangamariappan19'
        className='link footer__link'
      >
        &copy; {new Date().getFullYear()} Thanga Mariappan Pandian
      </a>
      <span className='footer__legal'>Licensed under MIT</span>
    </div>
  </footer>
);

export default Footer;
