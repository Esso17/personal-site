import { Github, ExternalLink } from 'lucide-react'
import { personal } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="section-max-width section-padding flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-tertiary)]">
          © {year} {personal.name} · {personal.title}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={personal.links.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 text-xs"
            aria-label="Medium"
          >
            Medium
            <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </footer>
  )
}
