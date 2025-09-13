'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Home } from 'lucide-react'
import Link from 'next/link'

interface QueueClosedNotificationProps {
  isVisible: boolean
  onClose: () => void
}

export default function QueueClosedNotification({ isVisible, onClose }: QueueClosedNotificationProps) {
  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl p-6 max-w-md w-full mx-4 text-center shadow-2xl"
      >
        <div className="mb-6">
          <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900">Queue Closed</h3>
          <p className="text-gray-600">
            This queue has been closed by the administrator. You will be redirected to the home page.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
        >
          <Home className="w-4 h-4 mr-2" />
          Go to Home
        </Link>
      </motion.div>
    </motion.div>
  )
}