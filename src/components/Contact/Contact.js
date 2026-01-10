import { Mail } from 'lucide-react'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact' id='contact'>
      <h2 className='section__title'>Let&apos;s Work Together</h2>
      <p className='contact__subtitle'>Have an exciting opportunity or want to collaborate? Feel free to reach out!</p>
      
      <div className='contact__content'>
        <a href={`mailto:${contact.email}`} className='contact__link'>
          <span className='contact__icon'>
            <Mail size={28} strokeWidth={2} />
          </span>
          <div className='contact__text'>
            <span className='contact__label'>Send me an email</span>
            <span className='contact__email'>{contact.email}</span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Contact
