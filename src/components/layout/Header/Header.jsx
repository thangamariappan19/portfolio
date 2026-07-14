import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { about } from '../../../data/portfolio'
import './Header.css'

const ROLES = [
  'Technology Lead',
  'Full-Stack Architect',
  'AI Systems Builder',
  'API & UI Engineer',
]

const Header = () => {
  const { name, headline, description, resume, social, metrics } = about
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <header id='about' className='header'>
      <motion.div
        className='header__content'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* ── Left: Text Content ── */}
        <div className='header__text'>
          <motion.div className='header__status' variants={itemVariants}>
            <span className='status-dot' aria-hidden='true'></span>
            Available for Leadership Roles
          </motion.div>

          <motion.h1 className='header__name' variants={itemVariants}>
            <span className='header__greeting'>Hi, I&apos;m</span>
            <span className='text-gradient'>
              {name.split(' ').slice(0, 2).join(' ')}
            </span>
          </motion.h1>

          <motion.div className='header__role-row' variants={itemVariants}>
            <span className='header__role-prefix'>I&apos;m a&nbsp;</span>
            <div className='header__role-cycle' aria-live='polite'>
              <AnimatePresence mode='wait'>
                <motion.span
                  key={roleIndex}
                  className='header__role-text'
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className='header__role-cursor' aria-hidden='true'>_</span>
          </motion.div>

          <motion.p className='header__headline' variants={itemVariants}>
            {headline}
          </motion.p>
          <motion.p className='header__desc' variants={itemVariants}>
            {description}
          </motion.p>

          {/* Metrics */}
          <motion.div className='header__metrics' variants={itemVariants}>
            {metrics.map((m, i) => (
              <div key={i} className='header__metric'>
                <span className='header__metric-value'>
                  {m.value}
                  <span className='header__metric-suffix'>{m.suffix}</span>
                </span>
                <span className='header__metric-label'>{m.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div className='header__actions' variants={itemVariants}>
            {resume && (
              <a
                href={resume}
                target='_blank'
                rel='noreferrer'
                className='btn btn--primary'
              >
                Resume
                <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'><path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/><polyline points='7 10 12 15 17 10'/><line x1='12' y1='15' x2='12' y2='3'/></svg>
              </a>
            )}
            <a
              href={social.linkedin}
              target='_blank'
              rel='noreferrer'
              className='btn btn--outline'
            >
              LinkedIn
            </a>
            <a
              href={social.github}
              target='_blank'
              rel='noreferrer'
              className='btn btn--ghost'
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* ── Right: Code Terminal Visual ── */}
        <motion.div
          className='header__visual'
          aria-hidden='true'
          variants={itemVariants}
        >
          <div className='terminal'>
            <div className='terminal__bar'>
              <span className='terminal__dot terminal__dot--red'></span>
              <span className='terminal__dot terminal__dot--yellow'></span>
              <span className='terminal__dot terminal__dot--green'></span>
              <span className='terminal__filename'>profile.ts</span>
            </div>
            <div className='terminal__body'>
              <div className='terminal__line'>
                <span className='t-keyword'>const</span>
                {' '}
                <span className='t-var'>architect</span>
                {' '}
                <span className='t-op'>=</span>
                {' {'}
              </div>
              <div className='terminal__line terminal__line--indent'>
                <span className='t-key'>name</span>
                <span className='t-op'>:</span>
                {' '}
                <span className='t-string'>&quot;Thanga Mariappan&quot;</span>
                <span className='t-op'>,</span>
              </div>
              <div className='terminal__line terminal__line--indent'>
                <span className='t-key'>role</span>
                <span className='t-op'>:</span>
                {' '}
                <span className='t-string'>&quot;Full-Stack Architect&quot;</span>
                <span className='t-op'>,</span>
              </div>
              <div className='terminal__line terminal__line--indent'>
                <span className='t-key'>exp</span>
                <span className='t-op'>:</span>
                {' '}
                <span className='t-number'>10</span>
                {' '}
                <span className='t-comment'>{'/* years */'}</span>
                <span className='t-op'>,</span>
              </div>
              <div className='terminal__line terminal__line--indent'>
                <span className='t-key'>stack</span>
                <span className='t-op'>:</span>
                {' ['}
                <span className='t-string'>&quot;UI&quot;</span>
                {', '}
                <span className='t-string'>&quot;API&quot;</span>
                {', '}
                <span className='t-string'>&quot;AI&quot;</span>
                {'],'}
              </div>
              <div className='terminal__line terminal__line--indent'>
                <span className='t-key'>loves</span>
                <span className='t-op'>:</span>
                {' '}
                <span className='t-string'>&quot;Full-Stack Systems&quot;</span>
                <span className='t-op'>,</span>
              </div>
              <div className='terminal__line terminal__line--indent'>
                <span className='t-key'>open</span>
                <span className='t-op'>:</span>
                {' '}
                <span className='t-boolean'>true</span>
                {' '}
                <span className='t-comment'>{'// hire me!'}</span>
              </div>
              <div className='terminal__line'>{'}'}</div>
              <div className='terminal__line'>
                <span className='terminal__cursor'></span>
              </div>
            </div>
          </div>

          {/* Floating tech badges */}
          <motion.div
            className='float-badge float-badge--1'
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            ⚛️ React 18
          </motion.div>
          <motion.div
            className='float-badge float-badge--2'
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            🔥 Angular 19
          </motion.div>
          <motion.div
            className='float-badge float-badge--3'
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            🤖 AI / RAG
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  )
}

export default Header
