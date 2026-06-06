import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../../../data/portfolio'
import SectionContainer from '../../ui/SectionContainer/SectionContainer'
import Badge from '../../ui/Badge/Badge'
import { Github, ExternalLink } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null)

  if (!projects.length) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <SectionContainer
      id='projects'
      title='Architectural Case Studies'
      maxWidth='xl'
    >
      <motion.div
        className='projects__grid'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className={`project-card ${project.featured ? 'project-card--featured' : ''} project-card--${index % 3}`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            whileHover={{ y: -8 }}
          >
            <div className='project-card__header'>
              <div className='project-card__title-group'>
                <motion.h3
                  className='project-card__title'
                  animate={{
                    color:
                      hoveredId === project.id
                        ? 'var(--clr-primary)'
                        : 'var(--clr-fg)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.name}
                </motion.h3>
                <span className='project-card__category'>
                  {project.category}
                </span>
              </div>
              <motion.div
                className='project-card__links'
                animate={{ scale: hoveredId === project.id ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {project.links?.code && (
                  <motion.a
                    href={project.links.code}
                    aria-label='source code'
                    className='link link--icon'
                    target='_blank'
                    rel='noreferrer'
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                  </motion.a>
                )}
                {project.links?.live && (
                  <motion.a
                    href={project.links.live}
                    aria-label='live preview'
                    className='link link--icon'
                    target='_blank'
                    rel='noreferrer'
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                )}
              </motion.div>
            </div>

            <h4 className='project-card__role'>{project.title}</h4>
            <p className='project-card__description'>{project.description}</p>

            <div className='project-card__metrics'>
              {project.metrics &&
                project.metrics.map((metric, idx) => (
                  <div key={idx} className='metric'>
                    <span className='metric__value'>{metric.value}</span>
                    <span className='metric__label'>{metric.label}</span>
                  </div>
                ))}
            </div>

            <motion.div
              className='project-card__stack'
              animate={{ gap: hoveredId === project.id ? '0.75rem' : '0.5rem' }}
              transition={{ duration: 0.3 }}
            >
              {project.stack.slice(0, 5).map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge variant='outline' className='stack-badge'>
                    {item}
                  </Badge>
                </motion.div>
              ))}
              {project.stack.length > 5 && (
                <span className='stack-more'>+{project.stack.length - 5}</span>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  )
}

export default Projects
