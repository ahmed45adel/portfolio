import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'

export function MotionCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  )
}