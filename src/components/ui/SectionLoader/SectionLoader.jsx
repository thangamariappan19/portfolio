import { motion } from 'framer-motion'
import './SectionLoader.css'

const SectionLoader = () => {
  return (
    <div className='section-loader'>
      <motion.div
        className='loader-pulse'
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <p className='loader-text'>Loading...</p>
    </div>
  )
}

export default SectionLoader
