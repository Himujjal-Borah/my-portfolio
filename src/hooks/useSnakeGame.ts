import { useRef, useCallback, useEffect, useState } from 'react'

interface SnakeState {
  isRunning: boolean
  score: number
  bestScore: number
  gameOver: boolean
}

const GRID_SIZE = 20
const COLS = 20
const ROWS = 16
const CANVAS_W = COLS * GRID_SIZE // 400
const CANVAS_H = ROWS * GRID_SIZE // 320

export function useSnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const snakeRef = useRef<{ x: number; y: number }[]>([])
  const foodRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const directionRef = useRef<{ x: number; y: number }>({ x: 1, y: 0 })
  const nextDirectionRef = useRef<{ x: number; y: number }>({ x: 1, y: 0 })
  const intervalRef = useRef<number | null>(null)
  const [state, setState] = useState<SnakeState>({
    isRunning: false,
    score: 0,
    bestScore: parseInt(localStorage.getItem('snakeBest') || '0', 10),
    gameOver: false,
  })

  const spawnFood = useCallback(() => {
    const x = Math.floor(Math.random() * COLS)
    const y = Math.floor(Math.random() * ROWS)
    foodRef.current = { x, y }
  }, [])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isLight = document.documentElement.classList.contains('light')
    const bg = isLight ? '#e2e8f0' : '#091318'
    const gridDot = isLight ? '#cbd5e1' : '#1a2a35'
    const snakeHead = '#06b6d4'
    const snakeBody = '#0891b2'
    const foodColor = '#67e8f9'

    // Background
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)

    // Grid dots
    ctx.fillStyle = gridDot
    for (let x = GRID_SIZE; x < CANVAS_W; x += GRID_SIZE) {
      for (let y = GRID_SIZE; y < CANVAS_H; y += GRID_SIZE) {
        ctx.beginPath()
        ctx.arc(x, y, 0.5, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Snake
    const snake = snakeRef.current
    snake.forEach((seg, i) => {
      const alpha = 1 - i / snake.length * 0.7
      ctx.fillStyle = i === 0 ? snakeHead : snakeBody
      ctx.globalAlpha = alpha
      ctx.fillRect(seg.x * GRID_SIZE + 1, seg.y * GRID_SIZE + 1, GRID_SIZE - 2, GRID_SIZE - 2)
    })
    ctx.globalAlpha = 1

    // Snake head glow
    const head = snake[0]
    ctx.shadowBlur = 12
    ctx.shadowColor = '#06b6d4'
    ctx.fillStyle = snakeHead
    ctx.fillRect(head.x * GRID_SIZE + 1, head.y * GRID_SIZE + 1, GRID_SIZE - 2, GRID_SIZE - 2)
    ctx.shadowBlur = 0

    // Food
    ctx.shadowBlur = 12
    ctx.shadowColor = foodColor
    ctx.fillStyle = foodColor
    ctx.beginPath()
    ctx.arc(
      foodRef.current.x * GRID_SIZE + GRID_SIZE / 2,
      foodRef.current.y * GRID_SIZE + GRID_SIZE / 2,
      GRID_SIZE / 2 - 2,
      0,
      Math.PI * 2
    )
    ctx.fill()
    ctx.shadowBlur = 0

    // Game over overlay
    if (state.gameOver) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)
      ctx.fillStyle = '#ef4444'
      ctx.font = 'bold 28px Montserrat, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('GAME OVER', CANVAS_W / 2, CANVAS_H / 2 - 10)
      ctx.fillStyle = '#67e8f9'
      ctx.font = '16px Poppins, sans-serif'
      ctx.fillText(`Score: ${state.score}`, CANVAS_W / 2, CANVAS_H / 2 + 25)
    }
  }, [state.gameOver, state.score])

  const gameLoop = useCallback(() => {
    directionRef.current = nextDirectionRef.current

    const head = snakeRef.current[0]
    const newHead = {
      x: head.x + directionRef.current.x,
      y: head.y + directionRef.current.y,
    }

    // Wall collision
    if (newHead.x < 0 || newHead.x >= COLS || newHead.y < 0 || newHead.y >= ROWS) {
      endGame()
      return
    }

    // Self collision
    if (snakeRef.current.some((seg) => seg.x === newHead.x && seg.y === newHead.y)) {
      endGame()
      return
    }

    snakeRef.current.unshift(newHead)

    // Food
    if (newHead.x === foodRef.current.x && newHead.y === foodRef.current.y) {
      const newScore = state.score + 10
      setState((prev) => ({ ...prev, score: newScore }))
      spawnFood()
    } else {
      snakeRef.current.pop()
    }

    draw()
  }, [state.score, spawnFood, draw])

  const endGame = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setState((prev) => {
      const newBest = Math.max(prev.score, prev.bestScore)
      localStorage.setItem('snakeBest', String(newBest))
      return { ...prev, isRunning: false, gameOver: true, bestScore: newBest }
    })
    draw()
  }, [draw])

  const startGame = useCallback(() => {
    // Reset
    snakeRef.current = [
      { x: 10, y: 8 },
      { x: 9, y: 8 },
      { x: 8, y: 8 },
    ]
    directionRef.current = { x: 1, y: 0 }
    nextDirectionRef.current = { x: 1, y: 0 }
    spawnFood()
    setState((prev) => ({
      ...prev,
      score: 0,
      gameOver: false,
      isRunning: true,
      bestScore: parseInt(localStorage.getItem('snakeBest') || '0', 10),
    }))

    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = window.setInterval(gameLoop, 140)
  }, [gameLoop, spawnFood])

  const changeDirection = useCallback((key: string) => {
    const dir = nextDirectionRef.current
    if (key === 'ArrowUp' || key === 'w' || key === 'W') {
      if (dir.y !== 1) nextDirectionRef.current = { x: 0, y: -1 }
    } else if (key === 'ArrowDown' || key === 's' || key === 'S') {
      if (dir.y !== -1) nextDirectionRef.current = { x: 0, y: 1 }
    } else if (key === 'ArrowLeft' || key === 'a' || key === 'A') {
      if (dir.x !== 1) nextDirectionRef.current = { x: -1, y: 0 }
    } else if (key === 'ArrowRight' || key === 'd' || key === 'D') {
      if (dir.x !== -1) nextDirectionRef.current = { x: 1, y: 0 }
    }
  }, [])

  // Initial draw
  useEffect(() => {
    draw()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [draw])

  return {
    canvasRef,
    state,
    startGame,
    changeDirection,
  }
}
