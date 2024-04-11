import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface UsedSpaceWidgetRootProps extends ComponentProps<'div'> {}

function UsedSpaceWidgetRoot(props: UsedSpaceWidgetRootProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5',
        'dark:bg-zinc-800',
        props.className,
      )}
      {...props}
    />
  )
}

interface UsedSpaceWidgetTitleProps extends ComponentProps<'div'> {
  title: string
  description: string
}

function UsedSpaceWidgetTitle({
  title,
  description,
  ...props
}: UsedSpaceWidgetTitleProps) {
  return (
    <div className="space-y-1" {...props}>
      <span className="text-sm/5 font-medium text-violet-700 dark:text-zinc-100">
        {title}
      </span>
      <p className="text-sm/5 text-violet-500 dark:text-zinc-400">
        {description}
      </p>
    </div>
  )
}

interface UsedSpaceWidgetPercentBarProps extends ComponentProps<'div'> {
  value: string
}

function UsedSpaceWidgetPercentBar({
  value,
  ...props
}: UsedSpaceWidgetPercentBarProps) {
  return (
    <div
      className={twMerge(
        'h-2 rounded-full bg-violet-100',
        'dark:bg-zinc-600',
        props.className,
      )}
      {...props}
    >
      <div
        className="h-2 rounded-full bg-violet-500 hover:text-violet-700 dark:bg-violet-400"
        style={{ width: value }}
      />
    </div>
  )
}

interface UsedSpaceWidgetActionsProps extends ComponentProps<'div'> {
  titleLeft: string
  titleRight: string
}

function UsedSpaceWidgetActions({
  titleLeft,
  titleRight,
  ...props
}: UsedSpaceWidgetActionsProps) {
  return (
    <div className="space-x-3" {...props}>
      <button
        type="button"
        className="text-sm font-medium text-violet-700 hover:text-violet-700 dark:text-violet-300 dark:hover:text-violet-200"
      >
        {titleLeft}
      </button>

      <button
        type="button"
        className="text-sm font-medium text-violet-700 hover:text-violet-900 dark:text-zinc-300 dark:hover:text-zinc-100"
      >
        {titleRight}
      </button>
    </div>
  )
}

export const UsedSpaceWidget = {
  Root: UsedSpaceWidgetRoot,
  Title: UsedSpaceWidgetTitle,
  PercentBar: UsedSpaceWidgetPercentBar,
  Actions: UsedSpaceWidgetActions,
}
