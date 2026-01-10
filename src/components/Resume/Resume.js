import { Download } from 'lucide-react'
import { about } from '../../portfolio'
import './Resume.css'

const Resume = () => {
  const { resume, name } = about

  const handleResumeDownload = async () => {
    try {
      // Track download event
      const timestamp = new Date().toISOString()
      const userAgent = navigator.userAgent
      const referrer = document.referrer || 'direct'

      // Log to console (for development)
      console.log('Resume Download Event:', {
        timestamp,
        userName: name,
        userAgent,
        referrer,
      })

      // Send tracking data to analytics endpoint (optional)
      if (window.location.hostname !== 'localhost') {
        try {
          await fetch('/api/analytics/resume-download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              timestamp,
              userAgent,
              referrer,
              fileName: 'Thanga_Mariappan.pdf',
            }),
          }).catch(() => {
            // Silently fail if endpoint doesn't exist
          })
        } catch (error) {
          console.log('Analytics tracking not available')
        }
      }

      // Google Analytics Event Tracking (if available)
      if (window.gtag) {
        window.gtag('event', 'file_download', {
          file_name: 'Thanga_Mariappan.pdf',
          file_extension: 'pdf',
          event_category: 'engagement',
          event_label: 'resume_download',
        })
      }

      // Trigger download
      const link = document.createElement('a')
      link.href = resume
      link.download = 'Thanga_Mariappan.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading resume:', error)
    }
  }

  if (!resume) return null

  return (
    <section className='resume section' id='resume'>
      <h2 className='section__title'>Resume</h2>
      
      <div className='resume__container'>
        <div className='resume__card'>
          <div className='resume__icon'>
            <Download size={40} strokeWidth={2} />
          </div>
          
          <div className='resume__content'>
            <h3 className='resume__title'>Download My Resume</h3>
            <p className='resume__description'>
              Get a comprehensive overview of my professional experience, skills, and achievements.
            </p>
          </div>

          <button
            onClick={handleResumeDownload}
            className='btn btn--primary resume__btn'
            aria-label='Download resume'
            title='Download Thanga_Mariappan.pdf'
          >
            <Download size={18} strokeWidth={2} />
            <span>Download PDF</span>
          </button>
        </div>

        <div className='resume__info'>
          <div className='resume__stat'>
            <span className='resume__stat-value'>9+</span>
            <span className='resume__stat-label'>Years Experience</span>
          </div>
          <div className='resume__stat'>
            <span className='resume__stat-value'>10+</span>
            <span className='resume__stat-label'>Technologies</span>
          </div>
          <div className='resume__stat'>
            <span className='resume__stat-value'>3</span>
            <span className='resume__stat-label'>Global Clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
