import {
  BarChart,
  CheckSquare,
  ChevronDown,
  Flag,
  Home,
  LifeBuoy,
  LogOut,
  Search,
  Settings,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo, NavItem, Profile, UsedSpaceWidget } from './components'
import { Input, Divider } from '@/components'

export function Sidebar() {
  const percentBar = '80'
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo.Root>
        <Logo.Icon />
        <Logo.Text title="Untitled UI" />
      </Logo.Root>

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search..." />
      </Input.Root>

      <nav className="space-y-0.5">
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
    </aside>
  )
}
