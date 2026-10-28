import { useLiveClock } from '@/hooks/useLiveClock'

export function LiveClock() {
  const { time, isAvailable, availableText } = useLiveClock()

  return (
    <div className="live-badge-row">
      <div className={`availability-badge ${isAvailable ? 'available' : 'away'}`}>
        <span className="avail-dot" />
        <span>{availableText}</span>
      </div>
      <div className="live-clock">
        <i className="fas fa-clock" />
        <span>{time}</span>
        <span className="clock-tz">IST</span>
      </div>
    </div>
  )
}
