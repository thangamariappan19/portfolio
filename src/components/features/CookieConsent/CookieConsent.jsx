import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './CookieConsent.css'

const CONSENT_KEY = 'cookie-consent'
const GA_ID = 'G-FC5XKFSLRJ'

const loadGA4 = () => {
  if (window.gtagLoaded) return
  window.gtagLoaded = true
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_ID)
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === 'accepted') {
      loadGA4()
    } else if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const handler = () => { setExpanded(false); setVisible(true) }
    window.addEventListener('openCookieSettings', handler)
    return () => window.removeEventListener('openCookieSettings', handler)
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    loadGA4()
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className='cookie-consent'
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          role='dialog'
          aria-modal='true'
          aria-label='Cookie preferences'
        >
          <div className='cookie-consent__inner'>
            <span className='cookie-consent__icon' aria-hidden='true'>🍪</span>

            <div className='cookie-consent__body'>
              <p className='cookie-consent__title'>Cookie Preferences</p>
              <p className='cookie-consent__text'>
                This portfolio uses Google Analytics to understand visitor interactions.
                Essential cookies are always active; analytics cookies require your consent.
              </p>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    className='cookie-consent__details'
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className='cookie-row'>
                      <div>
                        <span className='cookie-row__name'>Essential</span>
                        <span className='cookie-row__desc'>Theme preference, cookie consent state</span>
                      </div>
                      <span className='cookie-row__badge cookie-row__badge--always'>Always on</span>
                    </div>
                    <div className='cookie-row'>
                      <div>
                        <span className='cookie-row__name'>Analytics</span>
                        <span className='cookie-row__desc'>Google Analytics 4 — page views &amp; interactions</span>
                      </div>
                      <span className='cookie-row__badge'>Optional</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                className='cookie-consent__toggle'
                onClick={() => setExpanded(e => !e)}
                aria-expanded={expanded}
              >
                {expanded ? '▲ Hide details' : '▼ Cookie details'}
              </button>
            </div>

            <div className='cookie-consent__actions'>
              <button className='btn btn--outline cookie-btn--sm' onClick={decline}>
                Decline
              </button>
              <button className='btn btn--primary cookie-btn--sm' onClick={accept}>
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
