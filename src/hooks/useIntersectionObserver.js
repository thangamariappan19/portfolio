import { useEffect, useRef } from 'react'

/**
 * Custom hook to trigger animations when elements enter viewport
 * Uses Intersection Observer API for performance-optimized animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - When to trigger (0-1)
 * @param {string} options.margin - Root margin for early/late trigger
 * @returns {Object} - { ref, isVisible }
 */
const useIntersectionObserver = (options = {}) => {
  const {
    threshold = 0.1,
    margin = '-100px',
  } = options

  const ref = useRef(null)
  const isVisibleRef = useRef(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisibleRef.current = true
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: margin,
      }
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, margin])

  return ref
}

export default useIntersectionObserver
