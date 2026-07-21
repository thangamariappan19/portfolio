import { useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useInView } from 'framer-motion'
import './SectionContainer.module.css'

const SectionContainer = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  maxWidth = 'xl',
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} ref={ref} className={`section ${className}`}>
      <div className={`section__content section__content--${maxWidth}`}>
        {(title || subtitle) && (
          <div className='section__header'>
            {title && (
              <motion.h2
                className='section__title'
                initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                animate={
                  isInView
                    ? { opacity: 1, clipPath: 'inset(0 0 0% 0)' }
                    : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }
                }
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className='section__subtitle'
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

SectionContainer.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  maxWidth: PropTypes.oneOf(['md', 'lg', 'xl', 'full']),
}

export default SectionContainer
