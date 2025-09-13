'use client'

import { motion } from 'framer-motion'
import { QrCode, Users, Clock, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-primary-500" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-6">
            CampusQ
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Smart queue management for your campus. No more waiting in lines!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/create" className="block">
              <div className="card hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <QrCode className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Create Queue</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Generate QR codes for your service counters. Perfect for librarians, canteen staff, and office administrators.
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/join" className="block">
              <div className="card hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <Users className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Join Queue</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Scan QR code to join a queue. Get real-time updates on your position and estimated wait time.
                </p>
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
            <Clock className="w-5 h-5" />
            <span>Real-time updates • No registration required • Free forever</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}