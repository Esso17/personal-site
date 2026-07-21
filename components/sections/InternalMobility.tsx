'use client'

import { motion } from 'framer-motion'
import { mobilityTargets } from '@/lib/data'

export function InternalMobility() {
  return (
    <section id="mobility" className="py-14 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/8 via-transparent to-transparent" />

      <div className="section-max-width section-padding relative">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 text-center"
          >
            <p className="section-label mb-2">Internal mobility</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
              Where I Can <span className="gradient-text">Contribute</span>
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
              Within R&amp;I, I want to work closer to the business — where the ML and platform work I do has a direct, visible impact on product decisions and outcomes.
            </p>
          </motion.div>

          {/* Targets */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8"
          >
            {mobilityTargets.map((target, index) => (
              <motion.div
                key={target.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                className="gradient-border glass-card rounded-xl p-3.5 text-left"
              >
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-0.5">{target.label}</p>
                <p className="text-sm text-[var(--text-tertiary)]">{target.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
