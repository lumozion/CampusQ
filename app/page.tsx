'use client'

import { motion } from 'framer-motion'
import { QrCode, Users, Heart, Github, Linkedin, ArrowRight, Zap, Shield, Clock } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 mb-8"
            >
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Revolutionary Queue Management</span>
            </motion.div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Campus<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Q</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform your campus experience with intelligent queue management. 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> No more waiting in lines.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/create">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center">
                    Create Queue
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              
              <Link href="/join">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:bg-white/90 dark:hover:bg-white/20 transition-all duration-300"
                >
                  Join Queue
                </motion.button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Real-time Updates</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Live position tracking and notifications</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">No Registration</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Instant access with QR code scanning</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Timing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">AI-powered wait time predictions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group"
          >
            <Link href="/create" className="block">
              <div className="relative p-8 lg:p-12 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <QrCode className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Create Queue
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Generate beautiful QR codes for your service counters. Perfect for libraries, canteens, and administrative offices with real-time management.
                  </p>
                  
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                    <span>Get started</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="group"
          >
            <Link href="/join" className="block">
              <div className="relative p-8 lg:p-12 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 dark:from-green-500/10 dark:to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    Join Queue
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Scan QR codes to join queues instantly. Get real-time position updates, estimated wait times, and smart notifications.
                  </p>
                  
                  <div className="flex items-center text-green-600 dark:text-green-400 font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                    <span>Join now</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 dark:border-white/5 bg-white/30 dark:bg-white/5 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
              <span className="text-base">Made with</span>
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="text-base">by</span>
              <span className="font-semibold text-gray-900 dark:text-white">Ashwin Asthana</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/ashwinasthana"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/ashwinasthanax/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </motion.a>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              © 2024 CampusQ. Built for efficient campus queue management.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}