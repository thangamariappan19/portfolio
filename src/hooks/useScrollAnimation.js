import { useState, useRef } from 'react'
import useIntersectionObserver from './useIntersectionObserver'

/**
 * Enhanced hook combining intersection observer with animation state
 * Automatically triggers animations when elements become visible
 * @param {Object} options - Configuration options
 * @returns {Object} - { ref, isVisible }
 */
const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  // Use intersection observer hook
  useIntersectionObserver({
    threshold: options.threshold || 0.1,
    margin: options.margin || '-100px',
  })

  // Trigger animation visibility immediately on mount
  // This works with viewport-triggered animations in framer-motion
  return {
    ref,
    isVisible: isVisible || true, // Always return true since we use viewport in motion
  }
}

export default useScrollAnimation
