'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './components'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('tab1')

  const isTabSelected = (tabItemCurrent: string) =>
    currentTab === tabItemCurrent

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab1"
          title="My details"
          isSelected={isTabSelected('tab1')}
        />
        <TabItem
          value="tab2"
          title="Profile"
          isSelected={isTabSelected('tab2')}
        />
        <TabItem
          value="tab3"
          title="Password"
          isSelected={isTabSelected('tab3')}
        />
        <TabItem value="tab4" title="Team" isSelected={isTabSelected('tab4')} />
        <TabItem value="tab5" title="Plan" isSelected={isTabSelected('tab5')} />
        <TabItem
          value="tab6"
          title="Billing"
          isSelected={isTabSelected('tab6')}
        />
        <TabItem
          value="tab7"
          title="Email"
          isSelected={isTabSelected('tab7')}
        />
        <TabItem
          value="tab8"
          title="Notifications"
          isSelected={isTabSelected('tab8')}
        />
        <TabItem
          value="tab9"
          title="Integrations"
          isSelected={isTabSelected('tab9')}
        />
        <TabItem
          value="tab10"
          title="API"
          isSelected={isTabSelected('tab10')}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
