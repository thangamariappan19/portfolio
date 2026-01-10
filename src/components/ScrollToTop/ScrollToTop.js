import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return isVisible ? (
    <a 
      href='#top'
      className='scroll-top'
      onClick={handleClick}
      aria-label='Scroll to top'
      title='Scroll to top'
    >
      <ArrowUp size={24} strokeWidth={2.5} />
    </a>
  ) : null
}

export default ScrollToTop
