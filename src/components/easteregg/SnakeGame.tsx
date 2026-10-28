import { useState, useEffect, useCallback } from 'react'
import { useSnakeGame } from '@/hooks/useSnakeGame'

export function SnakeGame() {
  const { canvasRef, state, startGame, changeDirection } = useSnakeGame()
  const [isOpen, setIsOpen] = useState(false)
  const [buffer, setBuffer] = useState('')

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const target = 'himujjal'
    const newBuffer = (buffer + e.key).slice(-target.length)
    setBuffer(newBuffer)
    if (newBuffer.toLowerCase() === target && !isOpen) {
      setIsOpen(true)
      setTimeout(() => startGame(), 100)
      return
    }
    if (isOpen && state.isRunning) {
      changeDirection(e.key)
    }
  }, [buffer, isOpen, state.isRunning, startGame, changeDirection])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!isOpen) return null

  return (
    <div className={`egg-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}>
      <div className="egg-box">
        <div className="egg-header">
          <div className="egg-dots"><span /><span /><span /></div>
          <span className="egg-title">himujjal@portfolio:~$ play snake</span>
          <button className="egg-close" onClick={() => setIsOpen(false)}>&times;</button>
        </div>
        {!state.isRunning && !state.gameOver && (
          <div className="egg-hint">Use Arrow Keys or WASD to control the snake</div>
        )}
        <canvas ref={canvasRef} id="snakeCanvas" width={400} height={320} />
        <div className="egg-score-row">
          <span>Score: <strong id="snakeScore">{state.score}</strong></span>
          <span>Best: <strong id="snakeBest">{state.bestScore}</strong></span>
          <button className="egg-restart" onClick={startGame}>
            {state.gameOver ? 'Restart' : state.isRunning ? 'Restart' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  )
}
