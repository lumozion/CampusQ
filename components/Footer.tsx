'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-16 py-8 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by</span>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Ashwin Asthana</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/ashwinasthana"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/ashwinasthanax/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </motion.a>
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
            © 2024 CampusQ. Built for efficient campus queue management.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}