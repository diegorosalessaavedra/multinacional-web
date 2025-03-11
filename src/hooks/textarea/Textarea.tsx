import '../input/Input.css'
import React from 'react'

interface TextareaProps {
  label: string
  name: string
  id?: string
  isRequired?: boolean
  value: string | number | readonly string[] | undefined
  onChange: (value: string | File | null) => void
}

export default function Textarea({ label, name, id, isRequired, value, onChange }: TextareaProps) {
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  const hasValue = value && value.toString().length > 0

  return (
    <div className={`input__container ${hasValue ? 'input__container-active' : ''}`}>
      <label
        className={`input__label ${hasValue ? 'input__label-active' : ''}`}
        htmlFor={id || name}
      >
        {label}
      </label>
      <textarea
        required={isRequired}
        id={id || name}
        name={name}
        onChange={handleTextareaChange}
        className="input-field"
        rows={5}
      />
    </div>
  )
}
