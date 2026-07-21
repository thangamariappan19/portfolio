import { useRef, useEffect } from 'react'
import { motion, animate, useInView } from 'framer-motion'
import { skills } from '../../../data/portfolio'
import SectionContainer from '../../ui/SectionContainer/SectionContainer'
import './Skills.css'

const CATEGORY_META = {
  'Frontend Ecosystem':    { icon: '⚛️', accent: 'var(--clr-primary)' },
  'Backend & APIs':        { icon: '⚙️', accent: 'var(--clr-accent)' },
  'AI & Agentic Systems':  { icon: '🤖', accent: '#818cf8' },
  'Architecture & DevOps': { icon: '🏗️', accent: '#f59e0b' },
  'Tools & Methods':       { icon: '🛠️', accent: '#f59e0b' },
}

// Counts a number up from 0 when scrolled into view
const AnimatedStat = ({ value, label }) => {
  const match = String(value).match(/^([\d.]+)(.*)$/)
  const num = match ? parseFloat(match[1]) : null
  const extra = match ? match[2] : value
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const started = useRef(false)

  useEffect(() => {
    if (!num || !inView || started.current || !ref.current) return
    started.current = true
    const ctrl = animate(0, num, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent =
            (Number.isInteger(num) ? Math.round(v) : v.toFixed(1)) + extra
      },
    })
    return () => ctrl.stop()
  }, [inView, num, extra])

  return (
    <div className='skills__stat'>
      <span className='skills__stat-value' ref={ref}>{value}</span>
      <span className='skills__stat-label'>{label}</span>
    </div>
  )
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
      {/* Animated stats row */}
      <div className='skills__stats'>
        <AnimatedStat value={`${totalSkills}+`} label='Technologies' />
        <div className='skills__stat-divider' aria-hidden='true' />
        <AnimatedStat value='10+' label='Years' />
        <div className='skills__stat-divider' aria-hidden='true' />
        <AnimatedStat value='100k+' label='Users Served' />
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
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.08, y: -2 }}
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
