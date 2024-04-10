'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './root'

interface InputTriggerSpanProps {
  text: string
}

export function InputTrigger({ text }: InputTriggerSpanProps) {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm outline-none hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 focus:duration-150 data-[placeholder]:text-zinc-600"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-500 group-hover:text-violet-600" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text=sm">
          <span className="font-semibold text-violet-700">Click to upload</span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">{text}</span>
      </div>
    </label>
  )
}
