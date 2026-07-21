'use client'

import { motion } from 'framer-motion'
import { Clock, ArrowUpRight } from 'lucide-react'
import { articles, personal } from '@/lib/data'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export function Articles() {
  return (
    <section id="writing" className="py-14 sm:py-16">
      <div className="section-max-width section-padding">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3"
        >
          <div className="text-center sm:text-left">
            <p className="section-label mb-2">Medium</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">Technical Writing</h2>
          </div>
          <a href={personal.links.medium} target="_blank" rel="noopener noreferrer" className="btn-secondary shrink-0 self-start sm:self-auto text-xs">
            All articles <ArrowUpRight size={13} />
          </a>
        </motion.div>

        {/* 2×2 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {articles.map((article) => (
            <motion.a
              key={article.title}
              variants={cardVariants}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover rounded-xl p-5 flex flex-col gap-3 group"
            >
              {/* Tags + arrow */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tech-badge text-xs">{tag}</span>
                  ))}
                </div>
                <ArrowUpRight size={14} className="text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors shrink-0 mt-0.5" />
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed flex-1 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)] pt-2 border-t border-[var(--border)]">
                <span className="flex items-center gap-1"><Clock size={10} />{article.readTime} read</span>
                <span>{article.date}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
