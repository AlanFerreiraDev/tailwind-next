import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputPrefixProps extends ComponentProps<'div'> {}

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

interface InputControlProps extends ComponentProps<'input'> {}

function InputControl(props: InputControlProps) {
  return (
    <input
      className={twMerge(
        'w-full border-0 bg-transparent text-zinc-900 placeholder-zinc-600 outline-none',
        'dark:text-zinc-100 dark:placeholder-zinc-400',
      )}
      {...props}
    />
  )
}

interface InputRootProps extends ComponentProps<'div'> {}

function InputRoot(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        'flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 focus-within:duration-150',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
        props.className,
      )}
      {...props}
    />
  )
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}
