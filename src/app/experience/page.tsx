'use client'

import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeIn, 
  staggerContainer, 
} from '@/utils/animations'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { cert } from '@/content/certifications'

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
            <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
            <p className="text-primary mb-2">Zid(ksa) / Inovola(eg) • 2022/1 - 2024/2</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Merchant Dashboard (vue jsx)</li>
              <li>Zidpay (vue jsx)</li>
              <li>Zid Finance (vue jsx)</li>
              <li>ZidUI Lib (contributions) (Vue js)</li>
              <li>Back office (contributions) (angular)</li>
              <li>Integration zidpay/core (laravel)</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">React Frontend Developer</h3>
            <p className="text-primary mb-2">Winfi • 2021/6 - 2021/12</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Customer portal (part time)</li>
              <li>Admin dashboard (part time)</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">React Frontend Developer</h3>
            <p className="text-primary mb-2">Upwork • 2021/1 - 2021/6</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Redirect page for STC</li>
              <li>Simple landing page</li>
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
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md  mb-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Google ui/ux certification & Badge- Coursera</h3>
            <p className="text-primary mb-1">Foundations of user dxperience design</p>
            <p className="text-secondary mb-1">2022/9</p>
            <p className="text-primary mb-1">Start the UX Design Process: Empathize, Define, and Ideate</p>
            <p className="text-secondary mb-1">2022/10</p>
            <p className="text-primary mb-1">Build Wireframes and Low-Fidelity Prototypes</p>
            <p className="text-secondary">2022/10</p>
            <p className="text-primary mb-1">Conduct UX Research and Test Early Concepts</p>
            <p className="text-secondary">2022/11</p>
            <p className="text-primary mb-1">Create High-Fidelity Designs and Prototypes in Figma</p>
            <p className="text-secondary">2022/11</p>
            <p className="text-primary mb-1">Responsive Web Design in Adobe XD</p>
            <p className="text-secondary">2022/12</p>
            <p className="text-primary mb-1">Design a User Experience for Social Good</p>
            <p className="text-secondary">2022/12</p>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Front-end web development (ITP)</h3>
            <p className="text-primary mb-2">Information Technology Institute (ITI)</p>
            <p className="text-secondary">2021/8 - 2021/12</p>
            <motion.a
              href={cert.iti.frontendWebDev}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors mt-1"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="h-5 w-5" />
              <span>Verify Here</span>
            </motion.a>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md  mt-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">CS50 Introduction to Computer Science</h3>
            <p className="text-primary mb-2">harvard University - EDX</p>
            <p className="text-secondary">2021/5 - 2021/9</p>
            <motion.a
              href={cert.harvard.cs50}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors mt-1"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="h-5 w-5" />
              <span>Verify Here</span>
            </motion.a>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md  mt-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Meta frontend developer certification - Coursera</h3>
            <p className="text-primary mb-1">Introduction to frontend</p>
            <p className="text-secondary mb-1">2022/9</p>
            <p className="text-primary mb-1">Html and css in depth</p>
            <p className="text-secondary mb-1">2022/9</p>
            <p className="text-primary mb-1">Programming with javascript</p>
            <p className="text-secondary">2022/9</p>
            <p className="text-primary mb-1">Version control</p>
            <p className="text-secondary">2022/9</p>
            <p className="text-primary mb-1">React basics</p>
            <p className="text-secondary">2022/10</p>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md  mt-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Egypt Future Work is Digital (EGFWD) - Udacity</h3>
            <p className="text-primary mb-1">Advanced web development track</p>
            <p className="text-secondary mb-1">2021/10</p>
             <motion.a
              href={cert.egfwd.advanced}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-4"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="h-5 w-5" />
              <span>Verify Here</span>
            </motion.a>
            <p className="text-primary mb-1">Professional web development track</p>
            <p className="text-secondary mb-1">2021/7</p>
             <motion.a
              href={cert.egfwd.professional}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-4"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="h-5 w-5" />
              <span>Verify Here</span>
            </motion.a>
            <p className="text-primary mb-1">Challenger web development track</p>
            <p className="text-secondary">2021/3</p>
             <motion.a
              href={cert.egfwd.challenger}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-4"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="h-5 w-5" />
              <span>Verify Here</span>
            </motion.a>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md  mt-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Engineering</h3>
            <p className="text-primary mb-2">Facutly of Engineering | Alexandria University</p>
            <p className="text-secondary">2014-2019</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 