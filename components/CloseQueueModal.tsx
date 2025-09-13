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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl p-6 max-w-md w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <AlertTriangle className="w-6 h-6 text-orange-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Close Queue</h3>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {queueItemsCount > 0 ? (
              <div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                  <p className="text-yellow-800 font-medium mb-2">
                    ⚠️ You have {queueItemsCount} people in your queue!
                  </p>
                  <p className="text-yellow-700 text-sm">
                    We recommend downloading the queue data before closing to avoid losing information.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-sm text-gray-600 mb-3">
                    Choose an option:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onExport('csv')}
                      className="flex items-center justify-center p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-700 hover:bg-blue-100 transition-all"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export CSV
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onExport('json')}
                      className="flex items-center justify-center p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 hover:bg-green-100 transition-all"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export JSON
                    </motion.button>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="flex-1 py-3 px-4 bg-white/80 border border-gray-200 text-gray-800 rounded-xl font-medium hover:bg-white transition-all"
                  >
                    Cancel
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onConfirm}
                    className="flex-1 py-3 px-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all flex items-center justify-center"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Close Anyway
                  </motion.button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to close this queue? This action cannot be undone.
                </p>
                
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="flex-1 py-3 px-4 bg-white/80 border border-gray-200 text-gray-800 rounded-xl font-medium hover:bg-white transition-all"
                  >
                    Cancel
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onConfirm}
                    className="flex-1 py-3 px-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all flex items-center justify-center"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Close Queue
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}