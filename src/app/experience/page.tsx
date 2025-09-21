'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, staggerContainer } from '@/utils/animations'
import { experiences } from '@/content/experience'
import { education } from '@/content/education'
import DateWithVerification from '../components/DateWithVerification'
import { MotionCard } from '../components/MotionCard'

export default function ExperienceSection() {
  return (
    <div className="container max-w-7xl mx-auto py-12">

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {experiences.map((exp, i) => (
            <MotionCard key={i}>
              <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
              <p className="font-semibold text-title mb-2">{exp.company} • {exp.date}</p>
              <ul className="text-secondary list-disc list-inside space-y-2">
                {exp.tasks.map((task, j) => <li key={j}>{task}</li>)}
              </ul>
            </MotionCard>
          ))}
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {education.map((edu, i) => (
            <MotionCard key={i}>
              <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
              {edu.institution && <p className="font-semibold text-title mb-2">{edu.institution}</p>}
              {edu.duration && <p className="text-secondary mb-2">{edu.duration}</p>}
              {edu.dateLink && <DateWithVerification {...edu.dateLink} />}
              {edu.certs && edu.certs.map((c, j) => (
                <div key={j}>
                  <p className="font-semibold text-title mb-1">{c.title}</p>
                  <DateWithVerification date={c.date} link={c.link} />
                </div>
              ))}
            </MotionCard>
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}