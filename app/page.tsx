'use client'

import { motion } from 'framer-motion'
import { QrCode, Users, Heart, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 sm:mb-24 lg:mb-32"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-black mb-6 leading-tight tracking-tight">
            CampusQ
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-4 max-w-4xl mx-auto font-light leading-relaxed">
            Revolutionary queue management
          </p>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            for modern campuses.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-base text-gray-500">
            <span>Real-time updates</span>
            <span>No registration required</span>
            <span>Free forever</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <Link href="/create" className="block">
              <div className="bg-gray-50 rounded-3xl p-12 hover:bg-gray-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-8">
                  <QrCode className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Create Queue
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Generate QR codes for your service counters. Perfect for libraries, canteens, and administrative offices.
                </p>
                
                <div className="text-blue-500 font-medium text-lg">
                  Get started →
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group"
          >
            <Link href="/join" className="block">
              <div className="bg-gray-50 rounded-3xl p-12 hover:bg-gray-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-8">
                  <Users className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Join Queue
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Scan QR codes to join queues instantly. Get real-time position updates and estimated wait times.
                </p>
                
                <div className="text-green-500 font-medium text-lg">
                  Join now →
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
        
        {/* Inline Footer */}
        <div className="mt-32 pb-16">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3 text-gray-500">
              <span className="text-base">Made with</span>
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-base">by</span>
              <span className="font-semibold text-black">Ashwin Asthana</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <motion.a
                href="https://github.com/ashwinasthana"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-gray-700" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/ashwinasthanax/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
              </motion.a>
            </div>
            
            <p className="text-sm text-gray-500 text-center">
              © 2024 CampusQ. Built for efficient campus queue management.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}