'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './root'

interface InputControlProps extends ComponentProps<'input'> {}

export function InputControl({
  multiple = false,
  ...props
}: InputControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      className="sr-only"
      id={id}
      type="file"
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}
