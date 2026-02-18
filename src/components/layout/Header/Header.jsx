
import { about } from '../../../data/portfolio';
import './Header.css';

const Header = () => {
  const { name, role, headline, description, resume, social } = about;

  return (
    <header id='about' className='header'>
      <div className='header__content'>
        <div className='header__status'>
          <span className='status-dot'></span>
          Available for Leadership Roles
        </div>

        <h1 className='header__name'>
          Hi, I am <span className='text-gradient'>{name}.</span>
        </h1>

        <h2 className='header__role'>
          {role}
        </h2>

        <p className='header__headline'>{headline}</p>
        <p className='header__desc'>{description}</p>

        <div className='header__actions'>
          {resume && (
            <a href={resume} target='_blank' rel="noreferrer" className='btn btn--primary'>
              Resume
            </a>
          )}
          <a href={social.linkedin} target='_blank' rel="noreferrer" className='btn btn--outline'>
            LinkedIn
          </a>
          <a href={social.github} target='_blank' rel="noreferrer" className='btn btn--outline'>
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;