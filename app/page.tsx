'use client'

import { motion } from 'framer-motion'
import { QrCode, Users, Clock, Heart, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-pink-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >

          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight tracking-tight">
            CampusQ
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Revolutionary queue management for modern campuses.
            <span className="text-purple-300 font-medium"> No more waiting in lines!</span>
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Real-time updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <span>No registration required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
              <span>Free forever</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-sm sm:max-w-4xl lg:max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10, rotateY: 5 }}
            className="group"
          >
            <Link href="/create" className="block">
              <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <QrCode className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-200 transition-colors">
                    Create Queue
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                    Generate beautiful QR codes for your service counters. Perfect for libraries, canteens, and administrative offices.
                  </p>
                  
                  <div className="flex items-center text-purple-300 font-medium group-hover:text-purple-200 transition-colors">
                    <span>Get started</span>
                    <motion.div 
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -10, rotateY: -5 }}
            className="group"
          >
            <Link href="/join" className="block">
              <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-green-200 transition-colors">
                    Join Queue
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                    Scan QR codes to join queues instantly. Get real-time position updates and estimated wait times.
                  </p>
                  
                  <div className="flex items-center text-green-300 font-medium group-hover:text-green-200 transition-colors">
                    <span>Join now</span>
                    <motion.div 
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
        
        {/* Inline Footer */}
        <div className="mt-16 sm:mt-24 lg:mt-32 pb-8 sm:pb-12 lg:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
                <span className="text-sm sm:text-base font-medium">Made with</span>
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 animate-pulse" />
                <span className="text-sm sm:text-base font-medium">by</span>
                <span className="font-bold text-white text-base sm:text-lg">Ashwin Asthana</span>
              </div>
              
              <div className="flex items-center space-x-4 sm:space-x-6">
                <motion.a
                  href="https://github.com/ashwinasthana"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/ashwinasthanax/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                </motion.a>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-400 text-center font-medium px-4">
                © 2024 CampusQ. Built for efficient campus queue management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}