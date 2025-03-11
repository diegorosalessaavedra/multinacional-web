import './Input.css'
import { onInputNumber } from '@/utils/onInputs'
import React from 'react'

interface InputProps {
  label: string
  name: string
  id?: string
  type?: string
  isRequired?: boolean
  value: string | number | readonly string[] | undefined
  onChange: (value: string | File | null) => void
  onInput?: boolean
  maxLength?: number
  className?: string // Renamed from 'class' to 'className'
  accept?: string
}

export default function Input({
  type = 'text',
  label,
  name,
  id,
  isRequired,
  value,
  onChange,
  onInput,
  maxLength,
  className,
  accept,
}: InputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'file') {
      const files = e.target.files
      if (files && files.length > 0) {
        const file = files[0]
        // Lista de extensiones de código a rechazar
        const disallowedExtensions = ['js', 'ts', 'jsx', 'tsx', 'c', 'cpp', 'py', 'java']
        const fileExtension = file.name.split('.').pop()?.toLowerCase()
        if (fileExtension && disallowedExtensions.includes(fileExtension)) {
          alert('Los archivos de código no están permitidos.')
          return // No actualiza el estado si el archivo es de código
        }
        onChange(file)
      } else {
        onChange(null)
      }
    } else {
      onChange(e.target.value)
    }
  }

  const hasValue = value !== undefined && value !== null && value.toString().length > 0

  return (
    <div
      className={`input__container ${hasValue ? 'input__container-active' : ''} ${className || ''}`}
    >
      <label
        className={`input__label ${hasValue || type === 'date' ? 'input__label-active' : ''}`}
        htmlFor={id || name}
      >
        {label}
      </label>
      <input
        required={isRequired}
        type={type}
        id={id || name}
        name={name}
        {...(type !== 'file' ? { value } : {})}
        onChange={handleInputChange}
        className="input-field"
        onInput={onInput ? onInputNumber : undefined}
        maxLength={maxLength || undefined}
        accept={type === 'file' ? accept || '*' : undefined}
      />
    </div>
  )
}
