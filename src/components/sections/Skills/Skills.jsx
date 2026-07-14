import { motion } from 'framer-motion'
import { skills } from '../../../data/portfolio'
import SectionContainer from '../../ui/SectionContainer/SectionContainer'
import './Skills.css'

const CATEGORY_META = {
  'Frontend Ecosystem': { icon: '⚛️', accent: 'var(--clr-primary)' },
  'Backend & Data':     { icon: '⚙️', accent: 'var(--clr-accent)' },
  'Architecture & DevOps': { icon: '🏗️', accent: '#818cf8' },
  'Tools & Methods':    { icon: '🛠️', accent: '#f59e0b' },
}

const Skills = () => {
  if (!skills) return null

  const allSkills = Object.values(skills).flatMap((g) => g.items)
  const totalSkills = allSkills.length
  const categories = Object.values(skills).length

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  }

  const groupVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <SectionContainer
      id='skills'
      title='Technical Expertise'
      subtitle={`${totalSkills} skills across ${categories} domains`}
      maxWidth='xl'
    >
      {/* Stats row */}
      <div className='skills__stats'>
        <div className='skills__stat'>
          <span className='skills__stat-value'>{totalSkills}+</span>
          <span className='skills__stat-label'>Technologies</span>
        </div>
        <div className='skills__stat-divider' aria-hidden='true' />
        <div className='skills__stat'>
          <span className='skills__stat-value'>9+</span>
          <span className='skills__stat-label'>Years</span>
        </div>
        <div className='skills__stat-divider' aria-hidden='true' />
        <div className='skills__stat'>
          <span className='skills__stat-value'>100k+</span>
          <span className='skills__stat-label'>Users Served</span>
        </div>
        <div className='skills__stat-divider' aria-hidden='true' />
        <div className='skills__stat'>
          <span className='skills__stat-value'>F500</span>
          <span className='skills__stat-label'>Clients</span>
        </div>
      </div>

      {/* Skill groups grid */}
      <motion.div
        className='skills__grid'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-80px' }}
      >
        {Object.values(skills).map((skillGroup) => {
          const meta = CATEGORY_META[skillGroup.title] || { icon: '💡', accent: 'var(--clr-primary)' }
          return (
            <motion.div
              key={skillGroup.title}
              className='skills__group'
              variants={groupVariants}
              whileHover={{ y: -4 }}
              style={{ '--group-accent': meta.accent }}
            >
              <div className='skills__group-header'>
                <div className='skills__group-icon'>{meta.icon}</div>
                <h3 className='skills__group-title'>{skillGroup.title}</h3>
                <span className='skills__group-count'>{skillGroup.items.length}</span>
              </div>

              <div className='skills__tag-cloud'>
                {skillGroup.items.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    className='skill-tag'
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    whileHover={{ scale: 1.06 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionContainer>
  )
}

export default Skills
