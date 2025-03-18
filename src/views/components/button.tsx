'use client'

type ButtonProps = {
  label: string
  onClick: () => void
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="main-button">
      {label}
    </button>
  )
}
