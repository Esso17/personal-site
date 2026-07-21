'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Contribute', href: '#mobility' },
  { label: 'Impact', href: '#impact' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#writing' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (current) => {
    const diff = current - lastY
    setScrolled(current > 40)
    setHidden(diff > 0 && current > 200)
    setLastY(current)
  })

  return (
    <motion.header
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'py-3 backdrop-blur-xl bg-[var(--background)]/80 border-b border-[var(--border)]'
          : 'py-5'
      )}
    >
      <div className="section-max-width section-padding grid grid-cols-3 items-center">
        <div className="hidden md:flex items-center">
          <span className="text-xs font-bold tracking-widest text-[var(--text-tertiary)] uppercase select-none">AEK</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center justify-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--surface)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}
