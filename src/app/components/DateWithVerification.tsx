import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function DateWithVerification({ date, link }: { date: string; link: string }) {
  return (
    <div className="flex items-start justify-start gap-3 mb-3">
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-secondary"
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaExternalLinkAlt className="h-4 w-4" />
        <p className="text-secondary">{date}</p>
      </motion.a>
    </div>
  )
}