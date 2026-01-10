import { useRef, useEffect, useState } from 'react'
import { Github, Linkedin } from 'lucide-react'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id='about' 
      className={`about center ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
      aria-labelledby='about-heading'
    >
      {name && (
        <h1 id='about-heading' className='about__heading'>
          <span className='about__text'>Hi, I am</span>
          <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a 
            href={resume}
            aria-label='Download my resume'
            className='btn btn--outline'
            download
          >
            Resume
          </a>
        )}

        {social && (
          <div className='about__social' role='list' aria-label='Social links'>
            {social.github && (
              <a
                href={social.github}
                aria-label='Visit my GitHub profile'
                className='about__social-link'
                target='_blank'
                rel='noopener noreferrer'
                title='GitHub'
              >
                <Github size={24} strokeWidth={2} />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='Visit my LinkedIn profile'
                className='about__social-link'
                target='_blank'
                rel='noopener noreferrer'
                title='LinkedIn'
              >
                <Linkedin size={24} strokeWidth={2} />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default About
