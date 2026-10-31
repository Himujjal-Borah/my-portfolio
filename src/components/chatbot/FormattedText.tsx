import type { ReactNode } from 'react'

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

interface FormattedTextProps {
  text: string
}

/**
 * Renders a lightweight markup for bot messages:
 * - `**bold**` → <strong>
 * - lines starting with `• ` or `- ` → bullet list
 * - `\n` → line/paragraph breaks
 */
export function FormattedText({ text }: FormattedTextProps) {
  const lines = text.split('\n')
  const blocks: ReactNode[] = []
  let bullets: string[] = []

  const flushBullets = (key: number) => {
    if (bullets.length > 0) {
      blocks.push(
        <ul className="chat-list" key={`ul-${key}`}>
          {bullets.map((b, i) => (
            <li key={i}>{renderInline(b)}</li>
          ))}
        </ul>
      )
      bullets = []
    }
  }

  lines.forEach((line, idx) => {
    const trimmed = line.trim()
    if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
      bullets.push(trimmed.slice(2))
    } else {
      flushBullets(idx)
      if (trimmed !== '') {
        blocks.push(
          <p className="chat-para" key={`p-${idx}`}>
            {renderInline(trimmed)}
          </p>
        )
      }
    }
  })
  flushBullets(lines.length)

  return <>{blocks}</>
}
