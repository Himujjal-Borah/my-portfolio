const CHIPS = [
  { label: 'About', query: 'Tell me about Himujjal' },
  { label: 'Skills', query: 'What skills does Himujjal have?' },
  { label: 'Projects', query: 'What projects has Himujjal built?' },
  { label: 'Experience', query: 'What is Himujjal\'s experience?' },
  { label: 'Education', query: 'What is Himujjal\'s education?' },
  { label: 'Contact', query: 'How can I contact Himujjal?' },
  { label: 'GitHub/LinkedIn', query: 'Show me Himujjal\'s social links' },
  { label: 'Hire', query: 'I want to hire Himujjal' },
  { label: 'Certifications', query: 'What certifications does Himujjal have?' },
  { label: 'Hello', query: 'Hello!' },
]

interface SuggestionChipsProps { onChipClick: (query: string) => void }

export function SuggestionChips({ onChipClick }: SuggestionChipsProps) {
  return (
    <div className="suggestion-chips">
      {CHIPS.map((c) => (
        <button key={c.label} className="chip" onClick={() => onChipClick(c.query)}>
          {c.label}
        </button>
      ))}
    </div>
  )
}
