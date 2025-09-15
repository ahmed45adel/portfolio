'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  fadeInUp, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
} from '@/utils/animations'
import { FaCode, FaLaptopCode, FaGraduationCap, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className='flex justify-center items-center mb-4'
            transition={{ delay: 0.2 }}
          >
            <Image src="/profile.avif" alt="Profile" width={100} height={100} className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            transition={{ delay: 0.3 }}
          >
            <motion.span 
              className="text-primary"
              transition={{ delay: 0.8 }}
            >
              Ahmed Adel
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            transition={{ delay: 0.4 }}
          >
            Frontend Web Developer
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4 mb-8"
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/ahmed45adel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ahmedadelmuhammed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
              {/* Bio Section */}
              <motion.section 
                className="mb-16"
                {...fadeInUp}
              >
                <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
                  Frontend web dev....
                </p>
              </motion.section>
        
              {/* Skills Section */}
              <motion.section 
                className="mb-16"
                {...fadeIn}
                transition={{ delay: 0.2 }}
              >
                <motion.h2 
                  className="section-title"
                  {...fadeInUp}
                >
                  Skills
                </motion.h2>
                <motion.div 
                  className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div 
                    className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    variants={fadeInUp}
                    {...cardHover}
                  >
                    <FaCode className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                    <ul className="text-secondary space-y-2">
                      <li>React / Next.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>HTML5 / CSS3</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    variants={fadeInUp}
                    {...cardHover}
                  >
                    <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">sec 2</h3>
                    <ul className="text-secondary space-y-2">
                      <li>items</li>
                      <li>items</li>
                      <li>items</li>
                      <li>items</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    variants={fadeInUp}
                    {...cardHover}
                  >
                    <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
                    <ul className="text-secondary space-y-2">
                      <li>Git / GitHub</li>
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.section>
        </div>
      </div>
    </section>
  );
} 