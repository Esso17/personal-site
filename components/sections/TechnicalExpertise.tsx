'use client'

import { motion } from 'framer-motion'
import { skillGroups } from '@/lib/data'

export function TechnicalExpertise() {
  return (
    <section id="expertise" className="py-14 sm:py-16">
      <div className="section-max-width section-padding">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-center"
        >
          <p className="section-label mb-2">Stack</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">Technical Expertise</h2>
        </motion.div>

        <div className="space-y-5">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: groupIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row sm:items-start gap-3"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)] sm:w-44 shrink-0 pt-0.5">
                {group.name}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.93 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.08 + skillIndex * 0.03, duration: 0.25 }}
                    className="tech-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
