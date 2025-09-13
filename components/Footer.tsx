'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mt-20 py-12 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-xl border-t border-purple-500/20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-3 text-gray-200">
            <span className="text-sm">Made with</span>
            <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="text-sm">by</span>
            <span className="font-semibold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ashwin Asthana
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <motion.a
              href="https://github.com/ashwinasthana"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-gray-200" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/ashwinasthanax/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-blue-300" />
            </motion.a>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-400">
              © 2024 CampusQ. Built for efficient campus queue management.
            </p>
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                Real-time
              </span>
              <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                Secure
              </span>
              <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-700"></div>
                Free
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}