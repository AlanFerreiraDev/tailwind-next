import { Button } from '@/components/button'
import Image from 'next/image'
import { ComponentProps, ElementType } from 'react'

interface ProfileRootProps extends ComponentProps<'div'> {}

function ProfileRoot(props: ProfileRootProps) {
  return (
    <div className="grid grid-cols-profile items-center gap-3" {...props} />
  )
}

interface ProfileIconProps extends ComponentProps<typeof Image> {}

function ProfileIcon(props: ProfileIconProps) {
  return (
    <Image
      width={40}
      height={40}
      src={props.src}
      alt={props.alt}
      className="h-10 w-10 rounded-full"
    />
  )
}

interface ProfileInfoProps extends ComponentProps<'div'> {
  name: string
  email: string
}

function ProfileInfo({ name, email, ...props }: ProfileInfoProps) {
  return (
    <div className="flex flex-col truncate" {...props}>
      <span className="text-sm font-semibold text-zinc-700">{name}</span>
      <span className="truncate text-sm text-zinc-500">{email}</span>
    </div>
  )
}

interface ProfileLogoutButtonProps extends ComponentProps<'button'> {
  icon: ElementType
}

function ProfileLogoutButton({
  icon: Icon,
  ...props
}: ProfileLogoutButtonProps) {
  return (
    <Button type="button" variant="ghost" {...props}>
      <Icon className="h-5 w-5 text-zinc-500" />
    </Button>
  )
}

export const Profile = {
  Root: ProfileRoot,
  Icon: ProfileIcon,
  Info: ProfileInfo,
  LogoutButton: ProfileLogoutButton,
}
