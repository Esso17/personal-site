'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cloudSkills, type CloudSkill } from '@/lib/data'

const sizeClass: Record<CloudSkill['size'], string> = {
  xl: 'text-3xl font-bold',
  lg: 'text-xl font-semibold',
  md: 'text-base font-medium',
  sm: 'text-sm font-normal',
}

const categoryClass: Record<CloudSkill['category'], string> = {
  ml:    'text-indigo-600 dark:text-indigo-400',
  mlops: 'text-violet-600 dark:text-violet-400',
  cloud: 'text-sky-600 dark:text-sky-400',
}

const legend = [
  { label: 'Machine Learning & AI', category: 'ml'    as const },
  { label: 'MLOps & Deployment',    category: 'mlops' as const },
  { label: 'Cloud & Platform',      category: 'cloud' as const },
]

export function TechnicalExpertise() {
  return (
    <section id="expertise" className="py-14 sm:py-16">
      <div className="section-max-width section-padding">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <p className="section-label mb-2">My toolkit</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
            Technical Expertise
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
            The tools and technologies I use to build reliable, production-grade data products.
          </p>
        </motion.div>

        {/* Word cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center items-baseline gap-x-5 gap-y-4 px-4 mb-10"
        >
          {cloudSkills.map((skill, i) => (
            <motion.span
              key={skill.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                sizeClass[skill.size],
                categoryClass[skill.category],
                'cursor-default select-none transition-all duration-200 hover:scale-110 hover:opacity-100 opacity-85'
              )}
            >
              {skill.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-5"
        >
          {legend.map(({ label, category }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span className={cn('text-xs font-bold', categoryClass[category])}>—</span>
              <span className="text-xs text-[var(--text-tertiary)]">{label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
