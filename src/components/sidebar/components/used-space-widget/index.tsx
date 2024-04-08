import { ComponentProps } from 'react'

interface UsedSpaceWidgetRootProps extends ComponentProps<'div'> {}

function UsedSpaceWidgetRoot(props: UsedSpaceWidgetRootProps) {
  return (
    <div
      className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5"
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
      <span className="text-sm/5 font-medium text-violet-700">{title}</span>
      <p className="text-sm/5 text-violet-500">{description}</p>
    </div>
  )
}

interface UsedSpaceWidgetBarProps extends ComponentProps<'div'> {
  value: string
}

function UsedSpaceWidgetBar({ value, ...props }: UsedSpaceWidgetBarProps) {
  return (
    <div className="h-2 rounded-full bg-violet-100" {...props}>
      <div
        className={`h-2 w-${value} rounded-full bg-violet-500 hover:text-violet-700`}
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
        className="text-sm font-medium text-violet-700 hover:text-violet-900"
      >
        {titleLeft}
      </button>

      <button type="button" className="text-sm font-medium text-violet-700">
        {titleRight}
      </button>
    </div>
  )
}

export const UsedSpaceWidget = {
  UsedSpaceWidgetRoot,
  UsedSpaceWidgetTitle,
  UsedSpaceWidgetBar,
  UsedSpaceWidgetActions,
}
