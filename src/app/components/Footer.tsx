"use client";

import { fadeInUp, staggerContainer } from "@/utils/animations";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-6xl mx-auto px-6 py-10 text-center">        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Email */}
          <motion.div
            className="flex flex-col items-center gap-2"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaEnvelope className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a
                href="mailto:ahmed45adel@yahoo.com"
                className="text-secondary hover:text-primary transition-colors"
              >
                ahmed45adel@yahoo.com
              </a>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex flex-col items-center gap-2"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaPhone className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a
                href="tel:+201010891736"
                className="text-secondary hover:text-primary transition-colors"
              >
                (+20) 1010-891-736
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex flex-col items-center gap-2"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaMapMarkerAlt className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-secondary">Alexandria, Egypt</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom note */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
          © {new Date().getFullYear()} Ahmed Adel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}