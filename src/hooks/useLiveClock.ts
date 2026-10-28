import { useState, useEffect } from 'react'

interface ClockState {
  time: string
  isAvailable: boolean
  availableText: string
}

export function useLiveClock(): ClockState {
  const [state, setState] = useState<ClockState>({
    time: '',
    isAvailable: false,
    availableText: '',
  })

  useEffect(() => {
    function update() {
      const now = new Date()
      const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
      const hours = ist.getHours()

      const timeStr = ist.toLocaleString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      })

      const isAvailable = hours >= 9 && hours < 21
      const availableText = isAvailable
        ? 'Available for work'
        : 'Away — back at 9 AM IST'

      setState({ time: timeStr, isAvailable, availableText })
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return state
}
