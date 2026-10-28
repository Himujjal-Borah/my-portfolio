import { useState, useEffect } from 'react'

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">Welcome</div>
        <div className="loading-bar">
          <div className="loading-progress" />
        </div>
        <p>Loading Portfolio...</p>
      </div>
    </div>
  )
}
