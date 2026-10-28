import { TypeAnimation } from 'react-type-animation'

const SEQUENCE = [
  'Software Developer', 1500,
  'AI Automation Developer', 1500,
  'JavaScript', 1500,
  'Data Visualization', 1500,
  'Python', 1500,
]

export function TypingAnimation() {
  return (
    <>
      <TypeAnimation
        sequence={SEQUENCE}
        wrapper="span"
        className="typing-text"
        speed={50}
        deletionSpeed={50}
        repeat={Infinity}
        cursor={false}
      />
      <span className="cursor">|</span>
    </>
  )
}
