'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div
        className={cn(
          'w-9 h-9 rounded-lg glass-card flex items-center justify-center',
          className
        )}
      />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'w-9 h-9 rounded-lg glass-card flex items-center justify-center',
        'transition-all duration-200 hover:scale-105 active:scale-95',
        'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={15} strokeWidth={2} />
      ) : (
        <Moon size={15} strokeWidth={2} />
      )}
    </button>
  )
}
