
import { contact } from '../../../data/portfolio';
import SectionContainer from '../../ui/SectionContainer/SectionContainer';
import './Contact.css';

const Contact = () => {
  if (!contact.email) return null;

  return (
    <SectionContainer id='contact' title='Work Together' subtitle="Let's build something architecturally sound." className='contact center'>
      <div className='contact__content'>
        <a href={`mailto:${contact.email}`}>
          <button type='button' className='btn btn--primary'>
            Get in Touch
          </button>
        </a>
      </div>
    </SectionContainer>
  );
};

export default Contact;
