'use client'

import { motion } from 'framer-motion'
import { Zap, Monitor, Shield, Rocket } from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { impactMetrics, platformContext, personal } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = { Zap, Monitor, Shield, Rocket }

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export function BusinessImpact() {
  return (
    <section id="impact" className="pt-28 pb-14 sm:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/8 via-transparent to-transparent dark:from-indigo-500/12" />

      {/* Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-max-width section-padding relative">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            {personal.name}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance mb-4">
            Building and{' '}
            <span className="gradient-text">Shipping</span>
            <br />
            <span className="gradient-text">ML Systems</span>{' '}
            <span className="text-[var(--text-secondary)]">in Production</span>
          </h1>
          <p className="max-w-xl mx-auto text-base text-[var(--text-secondary)] leading-relaxed">
            {personal.bio}
          </p>
        </motion.div>

        {/* Impact at scale header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-center"
        >
          <p className="section-label mb-2">Measurable outcomes</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">Impact at Scale</h2>
        </motion.div>

        {/* Platform context */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
        >
          {platformContext.map((platform) => (
            <div key={platform.name} className="glass-card rounded-xl p-4 flex items-start gap-3 border-l-2 border-indigo-500/30">
              <span className="text-xl leading-none shrink-0 mt-0.5">{platform.emoji}</span>
              <div>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">{platform.name}</h3>
                  <span className="text-xs text-[var(--text-tertiary)]">— {platform.role}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{platform.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {impactMetrics.map((metric) => {
            const Icon = iconMap[metric.icon] ?? Zap
            return (
              <motion.div
                key={metric.label}
                variants={cardVariants}
                className="glass-card-hover rounded-xl p-4 flex flex-col gap-2 cursor-default"
              >
                <Icon size={15} className="text-indigo-500 dark:text-indigo-400" />
                <div className="h-0.5 w-6 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
                </span>
                <div>
                  <p className="text-xs font-semibold text-[var(--text-primary)] mb-0.5">{metric.label}</p>
                  <p className="text-xs text-[var(--text-tertiary)] leading-snug">{metric.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
