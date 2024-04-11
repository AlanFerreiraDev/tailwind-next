'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ title, value, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 dark:text-zinc-400 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300"
      value={value}
    >
      <span
        className={twMerge(
          'whitespace-nowrap rounded-lg p-1',
          'group-focus-visible:border-violet-300 group-focus-visible:ring-4 group-focus-visible:ring-violet-100 group-focus-visible:ring-offset-4 group-focus-visible:duration-150',
          'dark:group-focus-visible:border-violet-800 dark:group-focus-visible:ring-2 dark:group-focus-visible:ring-violet-900 dark:group-focus-visible:ring-offset-2',
        )}
      >
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          transition={{ duration: 0.3 }}
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
        />
      )}
    </Tabs.Trigger>
  )
}
