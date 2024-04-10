import { ComponentProps } from 'react'

interface TextAreaProps extends ComponentProps<'textarea'> {}

export function TextAreaControl(props: TextAreaProps) {
  return (
    <textarea
      className="min-h-32 w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 text-zinc-700 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 focus:duration-150 data-[placeholder]:text-zinc-600"
      {...props}
    />
  )
}
