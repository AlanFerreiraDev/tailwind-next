import { ComponentProps } from 'react'

interface InputPrefixProps extends ComponentProps<'div'> {}

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

interface InputControlProps extends ComponentProps<'input'> {}

function InputControl(props: InputControlProps) {
  return (
    <input
      className="w-full border-0 bg-transparent text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

interface InputRootProps extends ComponentProps<'div'> {}

function InputRoot(props: InputRootProps) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}
