import { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`project ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='project__header'>
        <h3 className='project__name'>{project.name}</h3>
        {project.category && (
          <span className='project__category'>{project.category}</span>
        )}
      </div>

      <p className='project__description'>{project.description}</p>

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item, index) => (
            <li key={index} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className='project__links'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='project__link'
            target='_blank'
            rel='noopener noreferrer'
            title='View source code'
          >
            <Github size={20} strokeWidth={2} />
            <span>Code</span>
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='project__link'
            target='_blank'
            rel='noopener noreferrer'
            title='View live preview'
          >
            <ExternalLink size={20} strokeWidth={2} />
            <span>Live</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectContainer
