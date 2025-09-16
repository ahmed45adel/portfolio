'use client'

import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeIn, 
  staggerContainer, 
} from '@/utils/animations'

export default function Experience() {
  return (
    <div className="container max-w-7xl mx-auto py-12">

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">frontend web developer</h3>
            <p className="text-primary mb-2">Company • 2020 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>did stuff</li>
              <li>did more stuff</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">frontend web developer</h3>
            <p className="text-primary mb-2">Company • 2020 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>did stuff</li>
              <li>did more stuff</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of </h3>
            <p className="text-primary mb-2">University • 2014 - 2018</p>
            <p className="text-secondary">
              hmmm
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 