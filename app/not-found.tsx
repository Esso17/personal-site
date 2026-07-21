import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark:dot-grid dot-grid-light opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/8 via-transparent to-transparent pointer-events-none" />

      <div className="relative text-center px-6">
        <p className="section-label mb-4">404</p>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          Page <span className="gradient-text">not found</span>
        </h1>
        <p className="text-sm text-[var(--text-tertiary)] mb-8 max-w-xs mx-auto">
          This page doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          <ArrowLeft size={14} />
          Go home
        </Link>
      </div>
    </div>
  )
}
