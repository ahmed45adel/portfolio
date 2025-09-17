'use client'

import Image from 'next/image';
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeIn, 
  staggerContainer, 
} from '@/utils/animations'
import { FaCode, FaLinkedin, FaGithub, FaPalette, FaTools, FaProjectDiagram, FaDatabase, FaServer } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="py-10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className='flex justify-center items-center mb-4'
            transition={{ delay: 0.2 }}
          >
            <Image src="/profile.avif" alt="Profile" width={100} height={100} priority={true} className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary" />
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
                  Innovative Front End Developer with a passion for designing, building, and maintaining responsive
                  websites. Skilled in modern web technologies, performance optimization, and creating 
                  seamless user experiences that enhance usability and support business growth.                
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
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaCode className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Core</h3>
                    <ul className="text-secondary space-y-2">
                      <li>React</li>
                      <li>Next.js</li>
                      <li>Vue.js</li>
                      <li>TypeScript</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>React Router</li>
                      <li>Vite</li>
                      <li>npm</li>
                      <li>yarn</li>
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaPalette className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Styling & UI</h3>
                    <ul className="text-secondary space-y-2">
                      <li>Tailwind CSS</li>
                      <li>Styled Components</li>
                      <li>Sass</li>
                      <li>HTML5</li>
                      <li>Bootstrap</li>
                      <li>Material UI</li>
                      <li>Chakra UI</li>
                      <li>Shadcn/ui</li>
                      <li>Framer Motion</li>
                      <li>Next-Themes</li>
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaTools className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Tools</h3>
                    <ul className="text-secondary space-y-2">
                      <li>Git</li>
                      <li>GitHub</li>
                      <li>GitLab</li>
                      <li>GitHub Pages</li>
                      <li>Vercel</li>
                      <li>Netlify</li>
                      <li>Heroku</li>
                      <li>Webpack</li>
                      <li>Babel</li>
                      <li>ESLint</li>
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaProjectDiagram className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">APIs</h3>
                    <ul className="text-secondary space-y-2">
                      <li>Next.js API Routes</li>
                      <li>Axios</li>
                      <li>Ajax</li>
                      <li>Zod</li>
                      <li>Dotenv</li>
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaDatabase className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Storage</h3>
                    <ul className="text-secondary space-y-2">
                      <li>MongoDB</li>
                      <li>Prisma</li>
                      <li>Neon</li>
                      <li>Redis (Upstash)</li>
                      <li>Appwrite</li>
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaServer className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Services</h3>
                    <ul className="text-secondary space-y-2">
                      <li>Clerk Auth</li>
                      <li>Bcryptjs</li>
                      <li>Cloudinary</li>
                      <li>Stripe</li>
                      <li>Ably</li>
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.section>
        </div>
      </div>
    </section>
  );
} 