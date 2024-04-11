import { twMerge } from 'tailwind-merge'

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Divider(props: DividerProps) {
  return (
    <div
      className={twMerge('h-px bg-zinc-200 dark:bg-zinc-700', props.className)}
    />
  )
}
