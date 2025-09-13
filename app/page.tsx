'use client'

import { motion } from 'framer-motion'
import { QrCode, Users, Clock, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <Sparkles className="w-20 h-20 text-purple-400" />
              <div className="absolute inset-0 w-20 h-20 bg-purple-400/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight tracking-tighter">
            CampusQ
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionary queue management for modern campuses. 
            <span className="text-purple-300 font-semibold">No more waiting in lines!</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10, rotateY: 5 }}
            className="group"
          >
            <Link href="/create" className="block">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <QrCode className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors tracking-tight">
                    Create Queue
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
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
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-green-200 transition-colors tracking-tight">
                    Join Queue
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
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
      </div>
    </div>
  )
}