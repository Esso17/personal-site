'use client'

import { motion } from 'framer-motion'
import { MessageCircle, FileText, Users, BookOpen, GitPullRequest, Ear } from 'lucide-react'
import { softSkills } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, FileText, Users, BookOpen, GitPullRequest, Ear,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export function SoftSkills() {
  return (
    <section id="skills" className="py-14 sm:py-16">
      <div className="section-max-width section-padding">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-center"
        >
          <p className="section-label mb-2">People skills</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Communication &amp; <span className="gradient-text">Collaboration</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {softSkills.map((skill) => {
            const Icon = iconMap[skill.icon] ?? MessageCircle
            return (
              <motion.div
                key={skill.label}
                variants={cardVariants}
                className="glass-card-hover rounded-xl p-5 flex flex-col gap-3"
              >
                <Icon size={18} className="text-indigo-500 dark:text-indigo-400" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{skill.label}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{skill.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
