'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, AlertTriangle, Trash2 } from 'lucide-react'

interface CloseQueueModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  onExport: (format: 'csv' | 'json') => void
  queueItemsCount: number
}

export default function CloseQueueModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  onExport, 
  queueItemsCount 
}: CloseQueueModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=\"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4\"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className=\"bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full mx-4\"
            onClick={(e) => e.stopPropagation()}
          >
            <div className=\"flex items-center justify-between mb-6\">\n              <div className=\"flex items-center\">\n                <AlertTriangle className=\"w-6 h-6 text-orange-500 mr-3\" />\n                <h3 className=\"text-xl font-bold\">Close Queue</h3>\n              </div>\n              <button\n                onClick={onClose}\n                className=\"text-gray-400 hover:text-gray-600 transition-colors\"\n              >\n                <X className=\"w-6 h-6\" />\n              </button>\n            </div>\n\n            {queueItemsCount > 0 ? (\n              <div>\n                <div className=\"bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 mb-6\">\n                  <p className=\"text-yellow-800 dark:text-yellow-200 font-medium mb-2\">\n                    ⚠️ You have {queueItemsCount} people in your queue!\n                  </p>\n                  <p className=\"text-yellow-700 dark:text-yellow-300 text-sm\">\n                    We recommend downloading the queue data before closing to avoid losing information.\n                  </p>\n                </div>\n\n                <div className=\"space-y-3 mb-6\">\n                  <p className=\"text-sm text-gray-600 dark:text-gray-300 mb-3\">\n                    Choose an option:\n                  </p>\n                  \n                  <div className=\"grid grid-cols-2 gap-3\">\n                    <motion.button\n                      whileHover={{ scale: 1.02 }}\n                      whileTap={{ scale: 0.98 }}\n                      onClick={() => onExport('csv')}\n                      className=\"flex items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all\"\n                    >\n                      <Download className=\"w-4 h-4 mr-2\" />\n                      Export CSV\n                    </motion.button>\n                    \n                    <motion.button\n                      whileHover={{ scale: 1.02 }}\n                      whileTap={{ scale: 0.98 }}\n                      onClick={() => onExport('json')}\n                      className=\"flex items-center justify-center p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30 transition-all\"\n                    >\n                      <Download className=\"w-4 h-4 mr-2\" />\n                      Export JSON\n                    </motion.button>\n                  </div>\n                </div>\n\n                <div className=\"flex space-x-3\">\n                  <motion.button\n                    whileHover={{ scale: 1.02 }}\n                    whileTap={{ scale: 0.98 }}\n                    onClick={onClose}\n                    className=\"flex-1 py-3 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all\"\n                  >\n                    Cancel\n                  </motion.button>\n                  \n                  <motion.button\n                    whileHover={{ scale: 1.02 }}\n                    whileTap={{ scale: 0.98 }}\n                    onClick={onConfirm}\n                    className=\"flex-1 py-3 px-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all flex items-center justify-center\"\n                  >\n                    <Trash2 className=\"w-4 h-4 mr-2\" />\n                    Close Anyway\n                  </motion.button>\n                </div>\n              </div>\n            ) : (\n              <div>\n                <p className=\"text-gray-600 dark:text-gray-300 mb-6\">\n                  Are you sure you want to close this queue? This action cannot be undone.\n                </p>\n                \n                <div className=\"flex space-x-3\">\n                  <motion.button\n                    whileHover={{ scale: 1.02 }}\n                    whileTap={{ scale: 0.98 }}\n                    onClick={onClose}\n                    className=\"flex-1 py-3 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all\"\n                  >\n                    Cancel\n                  </motion.button>\n                  \n                  <motion.button\n                    whileHover={{ scale: 1.02 }}\n                    whileTap={{ scale: 0.98 }}\n                    onClick={onConfirm}\n                    className=\"flex-1 py-3 px-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all flex items-center justify-center\"\n                  >\n                    <Trash2 className=\"w-4 h-4 mr-2\" />\n                    Close Queue\n                  </motion.button>\n                </div>\n              </div>\n            )}\n          </motion.div>\n        </motion.div>\n      )}\n    </AnimatePresence>\n  )\n}