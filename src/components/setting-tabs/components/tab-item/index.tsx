'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ title, value, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none"
      value={value}
    >
      <span className="rounded-lg group-focus-visible:border-violet-300 group-focus-visible:ring-4 group-focus-visible:ring-violet-100 group-focus-visible:ring-offset-4 group-focus-visible:duration-150">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          transition={{ duration: 0.3 }}
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
