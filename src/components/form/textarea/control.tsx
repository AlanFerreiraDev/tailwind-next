import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextAreaProps extends ComponentProps<'textarea'> {}

export function TextAreaControl(props: TextAreaProps) {
  return (
    <textarea
      className={twMerge(
        'min-h-32 w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 text-zinc-700 shadow-sm outline-none',
        'focus:border-violet-300 focus:ring-4 focus:ring-violet-100 focus:duration-150 data-[placeholder]:text-zinc-600',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus-within:ring-violet-500/20 dark:focus:border-violet-500',
      )}
      {...props}
    />
  )
}
