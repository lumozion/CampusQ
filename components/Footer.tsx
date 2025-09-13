'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-20 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3 text-gray-300">
            <span className="text-base font-medium">Made with</span>
            <Heart className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-base font-medium">by</span>
            <span className="font-bold text-white text-lg">Ashwin Asthana</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <motion.a
              href="https://github.com/ashwinasthana"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/ashwinasthanax/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
            </motion.a>
          </div>
          
          <p className="text-sm text-gray-400 text-center font-medium">
            © 2024 CampusQ. Built for efficient campus queue management.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}