import { ExternalLink } from 'lucide-react'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <div className='footer__content'>
      <p className='footer__text'>
        Designed & Built by <span className='footer__accent'>Thanga Mariappan</span>
      </p>
      <a
        href='https://twitter.com/iamthangam'
        className='footer__link'
        target='_blank'
        rel='noopener noreferrer'
        title='Follow on Twitter'
      >
        <span>Follow on Twitter</span>
        <ExternalLink size={16} strokeWidth={2} />
      </a>
    </div>
    <p className='footer__copyright'>
      © {new Date().getFullYear()}. All rights reserved.
    </p>
  </footer>
)

export default Footer
