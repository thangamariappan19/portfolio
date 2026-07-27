import { useState, useEffect, useRef } from 'react'
import { Eye } from 'lucide-react'
import './VisitorCounter.css'

const VisitorCounter = () => {
  const [count, setCount] = useState(null)
  const called = useRef(false)

  useEffect(() => {
    if (called.current) return
    called.current = true
    fetch('https://api.counterapi.dev/v1/thangamariappan/portfolio-visits/up')
      .then(r => r.ok ? r.json() : null)
      .then(d => d?.count != null && setCount(d.count))
      .catch(() => {})
  }, [])

  if (count === null) return null

  return (
    <span className='visitor-counter' title='Total portfolio visits'>
      <Eye size={13} aria-hidden='true' />
      {count.toLocaleString()} visitors
    </span>
  )
}

export default VisitorCounter
