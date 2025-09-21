'use client'

import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeIn, 
  staggerContainer, 
} from '@/utils/animations'
import { cert } from '@/content/certifications'
import DateWithVerification from '../components/DateWithVerification'

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
            <p className="font-semibold text-title mb-2">Zid(ksa) / Inovola(eg) • 2022/1 - 2024/2</p>
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
            <p className="font-semibold text-title mb-2">Winfi • 2021/6 - 2021/12</p>
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
            <p className="font-semibold text-title mb-2">Upwork • 2021/1 - 2021/6</p>
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
            <p className="mb-1 font-semibold text-title">Foundations of user dxperience design</p>
            <DateWithVerification date={'2022/9'} link={cert.google.foundations} />
            <p className="font-semibold text-title mb-1">Start the UX Design Process: Empathize, Define, and Ideate</p>
            <DateWithVerification date={'2022/10'} link={cert.google.empathizeDefineIdeate} />
            <p className="font-semibold text-title mb-1">Build Wireframes and Low-Fidelity Prototypes</p>
            <DateWithVerification date={'2022/10'} link={cert.google.wireframesLowFidelity} />
            <p className="font-semibold text-title mb-1">Conduct UX Research and Test Early Concepts</p>
            <DateWithVerification date={'2022/11'} link={cert.google.uxResearchTesting} />
            <p className="font-semibold text-title mb-1">Create High-Fidelity Designs and Prototypes in Figma</p>
            <DateWithVerification date={'2022/11'} link={cert.google.highFidelityFigma} />
            <p className="font-semibold text-title mb-1">Build Dynamic User Interfaces</p>
            <DateWithVerification date={'2022/12'} link={cert.google.dynamicui} />
            <p className="font-semibold text-title mb-1">Design a User Experience for Social Good</p>
            <DateWithVerification date={'2022/12'} link={cert.google.socialGood} />
            <p className="font-semibold text-title mb-1">Google UX design professional certificate</p>
            <DateWithVerification date={'2022/12'} link={cert.google.socialGood} />
            <p className="font-semibold text-title mb-1">Google UX Badge</p>
            <DateWithVerification date={'2022/12'} link={cert.google.googlebadge} />
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Front-end web development (ITP)</h3>
            <p className="font-semibold text-title mb-2">Information Technology Institute (ITI)</p>
            <DateWithVerification date={'2021/8 - 2021/12'} link={cert.iti.frontendWebDev} />
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md  mt-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">CS50 Introduction to Computer Science</h3>
            <p className="font-semibold text-title mb-2">harvard University - EDX</p>
            <DateWithVerification date={'2021/5 - 2021/9'} link={cert.harvard.cs50} />
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md  mt-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Meta frontend developer certification - Coursera</h3>
            <p className="font-semibold text-title mb-1">Introduction to frontend</p>
            <DateWithVerification date={'2022/9'} link={cert.meta.intro} />
            <p className="font-semibold text-title mb-1">Html and css in depth</p>
            <DateWithVerification date={'2022/9'} link={cert.meta.htmlcss} />
            <p className="font-semibold text-title mb-1">Programming with javascript</p>
            <DateWithVerification date={'2022/9'} link={cert.meta.javascript} />
            <p className="font-semibold text-title mb-1">Version control</p>
            <DateWithVerification date={'2022/9'} link={cert.meta.versionControl} />
            <p className="font-semibold text-title mb-1">React basics</p>
            <DateWithVerification date={'2022/10'} link={cert.meta.reactBasics} />

          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md  mt-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Egypt Future Work is Digital (EGFWD) - Udacity</h3>
            <p className="font-semibold text-title mb-1">Advanced web development track</p>
            <DateWithVerification date={'2021/10'} link={cert.egfwd.advanced} />
            <p className="font-semibold text-title mb-1">Professional web development track</p>
            <DateWithVerification date={'2021/7'} link={cert.egfwd.professional} />
            <p className="font-semibold text-title mb-1">Challenger web development track</p>
            <DateWithVerification date={'2021/3'} link={cert.egfwd.challenger} />
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md  mt-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Engineering</h3>
            <p className="font-semibold text-title mb-2">Facutly of Engineering | Alexandria University</p>
            <p className="text-secondary">2014-2019</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 