'use client'

import { useEffect } from 'react'
import { RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark:dot-grid dot-grid-light opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/8 via-transparent to-transparent pointer-events-none" />

      <div className="relative text-center px-6">
        <p className="section-label mb-4">Error</p>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          Something went <span className="gradient-text">wrong</span>
        </h1>
        <p className="text-sm text-[var(--text-tertiary)] mb-8 max-w-xs mx-auto">
          An unexpected error occurred. Try refreshing the page.
        </p>
        <button onClick={reset} className="btn-primary">
          <RefreshCw size={14} />
          Try again
        </button>
      </div>
    </div>
  )
}
