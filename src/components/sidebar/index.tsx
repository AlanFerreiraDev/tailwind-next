'use client'

import {
  BarChart,
  CheckSquare,
  ChevronDown,
  Flag,
  Home,
  LifeBuoy,
  LogOut,
  Menu,
  Search,
  Settings,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo, NavItem, Profile, UsedSpaceWidget } from './components'
import { Input, Divider } from '@/components'

import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../button'

export function Sidebar() {
  const percentBar = '80'

  return (
    <Collapsible.Root className="scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-hidden border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:bottom-0 lg:right-auto lg:h-auto lg:w-80 lg:overflow-auto lg:border-b-0 lg:border-r lg:px-5 lg:py-8 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo.Root>
          <Logo.Icon />
          <Logo.Text title="Untitled UI" />
        </Logo.Root>

        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="data-[state=closed]:animate-slideUpAndFade flex h-screen flex-col data-[state=closed]:hidden data-[state=open]:animate-slideDownAndFade lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search..." />
        </Input.Root>

        <nav className="mt-4 space-y-0.5">
          <NavItem.Root path="/">
            <NavItem.Icon icon={Home} />
            <NavItem.Control title="Home" />
            <NavItem.RightIcon icon={ChevronDown} />
          </NavItem.Root>

          <NavItem.Root path="/">
            <NavItem.Icon icon={BarChart} />
            <NavItem.Control title="Dashboard" />
            <NavItem.RightIcon icon={ChevronDown} />
          </NavItem.Root>

          <NavItem.Root path="/">
            <NavItem.Icon icon={SquareStack} />
            <NavItem.Control title="Projects" />
            <NavItem.RightIcon icon={ChevronDown} />
          </NavItem.Root>

          <NavItem.Root path="/">
            <NavItem.Icon icon={CheckSquare} />
            <NavItem.Control title="Tasks" />
            <NavItem.RightIcon icon={ChevronDown} />
          </NavItem.Root>

          <NavItem.Root path="/">
            <NavItem.Icon icon={Flag} />
            <NavItem.Control title="Reporting" />
            <NavItem.RightIcon icon={ChevronDown} />
          </NavItem.Root>

          <NavItem.Root path="/">
            <NavItem.Icon icon={Users} />
            <NavItem.Control title="Users" />
            <NavItem.RightIcon icon={ChevronDown} />
          </NavItem.Root>
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem.Root path="/">
              <NavItem.Icon icon={LifeBuoy} />
              <NavItem.Control title="Support" />
            </NavItem.Root>

            <NavItem.Root path="/">
              <NavItem.Icon icon={Settings} />
              <NavItem.Control title="Settings" />
            </NavItem.Root>
          </nav>

          <UsedSpaceWidget.Root>
            <UsedSpaceWidget.Title
              title="Used Space"
              description="Your team used 80% of your available space. Need more?"
            />
            <UsedSpaceWidget.PercentBar value={`${percentBar}%`} />
            <UsedSpaceWidget.Actions
              titleLeft="Dismiss"
              titleRight="Upgrade Plan"
            />
          </UsedSpaceWidget.Root>

          <Divider />

          <Profile.Root>
            <Profile.Icon src="https://github.com/AlanFerreiraDev.png" alt="" />
            <Profile.Info name="Alan Ferreira" email="alanjjr83@gmail.com" />
            <Profile.LogoutButton icon={LogOut} />
          </Profile.Root>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
