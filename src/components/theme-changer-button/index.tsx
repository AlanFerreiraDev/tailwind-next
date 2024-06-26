'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export const ThemeChangerButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="flex cursor-pointer items-center justify-between rounded-md"
    >
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}
