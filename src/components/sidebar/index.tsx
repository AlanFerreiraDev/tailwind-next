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
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo.LogoRoot>
        <Logo.LogoIcon />
        <Logo.LogoText title="Untitled UI" />
      </Logo.LogoRoot>

      <Input.InputRoot>
        <Input.InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.InputPrefix>
        <Input.InputControl placeholder="Search..." />
      </Input.InputRoot>

      <nav className="space-y-0.5">
        <NavItem.NavItemRoot path="/">
          <NavItem.NavItemIcon icon={Home} />
          <NavItem.NavItemControl title="Home" />
          <NavItem.NavItemRightIcon icon={ChevronDown} />
        </NavItem.NavItemRoot>

        <NavItem.NavItemRoot path="/">
          <NavItem.NavItemIcon icon={BarChart} />
          <NavItem.NavItemControl title="Dashboard" />
          <NavItem.NavItemRightIcon icon={ChevronDown} />
        </NavItem.NavItemRoot>

        <NavItem.NavItemRoot path="/">
          <NavItem.NavItemIcon icon={SquareStack} />
          <NavItem.NavItemControl title="Projects" />
          <NavItem.NavItemRightIcon icon={ChevronDown} />
        </NavItem.NavItemRoot>

        <NavItem.NavItemRoot path="/">
          <NavItem.NavItemIcon icon={CheckSquare} />
          <NavItem.NavItemControl title="Tasks" />
          <NavItem.NavItemRightIcon icon={ChevronDown} />
        </NavItem.NavItemRoot>

        <NavItem.NavItemRoot path="/">
          <NavItem.NavItemIcon icon={Flag} />
          <NavItem.NavItemControl title="Reporting" />
          <NavItem.NavItemRightIcon icon={ChevronDown} />
        </NavItem.NavItemRoot>

        <NavItem.NavItemRoot path="/">
          <NavItem.NavItemIcon icon={Users} />
          <NavItem.NavItemControl title="Users" />
          <NavItem.NavItemRightIcon icon={ChevronDown} />
        </NavItem.NavItemRoot>
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem.NavItemRoot path="/">
            <NavItem.NavItemIcon icon={LifeBuoy} />
            <NavItem.NavItemControl title="Support" />
          </NavItem.NavItemRoot>

          <NavItem.NavItemRoot path="/">
            <NavItem.NavItemIcon icon={Settings} />
            <NavItem.NavItemControl title="Settings" />
          </NavItem.NavItemRoot>
        </nav>

        <UsedSpaceWidget.UsedSpaceWidgetRoot>
          <UsedSpaceWidget.UsedSpaceWidgetTitle
            title="Used Space"
            description="Your team used 80% of your available space. Need more?"
          />
          <UsedSpaceWidget.UsedSpaceWidgetBar value="4/5" />
          <UsedSpaceWidget.UsedSpaceWidgetActions
            titleLeft="Dismiss"
            titleRight="Upgrade Plan"
          />
        </UsedSpaceWidget.UsedSpaceWidgetRoot>

        <Divider />

        <Profile.ProfileRoot>
          <Profile.ProfileImage
            src="https://github.com/AlanFerreiraDev.png"
            alt=""
          />
          <Profile.ProfileInfo
            name="Alan Ferreira"
            email="alanjjr83@gmail.com"
          />
          <Profile.ProfileLogoutButton icon={LogOut} />
        </Profile.ProfileRoot>
      </div>
    </aside>
  )
}
