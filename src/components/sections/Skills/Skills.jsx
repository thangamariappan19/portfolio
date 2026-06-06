import { motion } from 'framer-motion'
import { skills } from '../../../data/portfolio'
import SectionContainer from '../../ui/SectionContainer/SectionContainer'
import Marquee from '../../features/Marquee/Marquee'
import './Skills.css'

const Skills = () => {
  if (!skills) return null

  // Flatten skills for marquees
  const allSkills = Object.values(skills).flatMap((group) => group.items)
  const topSkills = allSkills.slice(0, Math.ceil(allSkills.length / 2))
  const bottomSkills = allSkills.slice(Math.ceil(allSkills.length / 2))

  // Icon mapping for each skill category
  const skillIcons = {
    'Frontend Ecosystem': '⚛️',
    'Backend & Data': '🔧',
    'Architecture & DevOps': '🏗️',
    'Tools & Methods': '🛠️',
  }

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

  const groupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <SectionContainer id='skills' title='Technical Expertise' maxWidth='full'>
      <div className='skills__marquee-wrapper'>
        <Marquee items={topSkills} speed={30} direction='left' />
        <Marquee items={bottomSkills} speed={40} direction='right' />
      </div>

      <motion.div
        className='skills__grid'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
      >
        {Object.values(skills).map((skillGroup) => (
          <motion.div
            key={skillGroup.title}
            className='skills__group'
            variants={groupVariants}
            whileHover={{ y: -5 }}
          >
            <div className='skills__header'>
              <motion.div
                className='skills__icon'
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {skillIcons[skillGroup.title] || '💡'}
              </motion.div>
              <h3 className='skills__title'>{skillGroup.title}</h3>
            </div>
            <motion.div
              className='skills__content'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className='skills__list'>
                {skillGroup.items.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    className='skill-item'
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <span className='skill-item__icon'>▸</span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  )
}

export default Skills
