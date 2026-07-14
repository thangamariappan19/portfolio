import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../../../data/portfolio'
import SectionContainer from '../../ui/SectionContainer/SectionContainer'
import Badge from '../../ui/Badge/Badge'
import { Github, ExternalLink } from 'lucide-react'
import './Projects.css'

const FILTERS = [
  { key: 'All', label: 'All Work' },
  {
    key: 'AI',
    label: 'AI & ML',
    match: ['AI / Full Stack', 'Machine Learning', 'Health Tech'],
  },
  {
    key: 'Enterprise',
    label: 'Enterprise',
    match: ['Enterprise', 'E-Commerce'],
  },
  { key: 'Open Source', label: 'Open Source', match: ['Open Source'] },
]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredId, setHoveredId] = useState(null)

  if (!projects.length) return null

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => {
          const f = FILTERS.find((f) => f.key === activeFilter)
          return f?.match?.includes(p.category)
        })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  }

  return (
    <SectionContainer
      id='projects'
      title='Architectural Case Studies'
      subtitle='Enterprise-scale systems I designed, led, and shipped.'
      maxWidth='xl'
    >
      {/* Filter tabs */}
      <div
        className='projects__filters'
        role='tablist'
        aria-label='Filter projects'
      >
        {FILTERS.map((f) => (
          <button
            key={f.key}
            role='tab'
            aria-selected={activeFilter === f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`projects__filter-btn ${activeFilter === f.key ? 'projects__filter-btn--active' : ''}`}
          >
            {f.label}
            <span className='projects__filter-count'>
              {f.key === 'All'
                ? projects.length
                : projects.filter((p) => f.match?.includes(p.category)).length}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode='wait'>
        <motion.div
          key={activeFilter}
          className='projects__grid'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              exit='exit'
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -6 }}
              layout
            >
              {/* Card top accent line */}
              <div className='project-card__accent' aria-hidden='true' />

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
                    transition={{ duration: 0.25 }}
                  >
                    {project.name}
                  </motion.h3>
                  <span className='project-card__category'>
                    {project.category}
                  </span>
                </div>

                <div className='project-card__links'>
                  {project.links?.code && (
                    <motion.a
                      href={project.links.code}
                      aria-label='Source code'
                      className='link link--icon project-card__link'
                      target='_blank'
                      rel='noreferrer'
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={17} />
                    </motion.a>
                  )}
                  {project.links?.live && (
                    <motion.a
                      href={project.links.live}
                      aria-label='Live preview'
                      className='link link--icon project-card__link'
                      target='_blank'
                      rel='noreferrer'
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={17} />
                    </motion.a>
                  )}
                </div>
              </div>

              <h4 className='project-card__role'>{project.title}</h4>
              <p className='project-card__description'>{project.description}</p>

              {project.metrics?.length > 0 && (
                <div className='project-card__metrics'>
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className='metric'>
                      <span className='metric__value'>{metric.value}</span>
                      <span className='metric__label'>{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className='project-card__stack'>
                {project.stack.slice(0, 5).map((item) => (
                  <Badge key={item} variant='outline' className='stack-badge'>
                    {item}
                  </Badge>
                ))}
                {project.stack.length > 5 && (
                  <span className='stack-more'>
                    +{project.stack.length - 5}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionContainer>
  )
}

export default Projects
