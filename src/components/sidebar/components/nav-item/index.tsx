import { ComponentProps, ElementType } from 'react'

interface NavItemPrefixProps extends ComponentProps<'div'> {}

function NavItemPrefix(props: NavItemPrefixProps) {
  return <div {...props} />
}

interface NavItemRootProps extends ComponentProps<'a'> {
  path: string
}

function NavItemRoot({ path, ...props }: NavItemRootProps) {
  return (
    <a
      href={path}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
      {...props}
    />
  )
}

interface NavItemControlProps extends ComponentProps<'span'> {
  title: string
}

function NavItemControl({ title, ...props }: NavItemControlProps) {
  return (
    <span
      className="font-medium text-zinc-800 group-hover:text-violet-500"
      {...props}
    >
      {title}
    </span>
  )
}

interface NavItemIconProps extends ComponentProps<'svg'> {
  icon: ElementType
}

function NavItemIcon({ icon: Icon, ...props }: NavItemIconProps) {
  return (
    <Icon
      className="h-5 w-5 text-zinc-500 group-hover:text-violet-500"
      {...props}
    />
  )
}

interface NavItemRightIconProps extends ComponentProps<'svg'> {
  icon: ElementType
}

function NavItemRightIcon({
  icon: RightIcon,
  ...props
}: NavItemRightIconProps) {
  return (
    <RightIcon
      className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300"
      {...props}
    />
  )
}

export const NavItem = {
  NavItemPrefix,
  NavItemRoot,
  NavItemControl,
  NavItemIcon,
  NavItemRightIcon,
}
