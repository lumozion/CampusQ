'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, QrCode, Settings, Clock } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SERVICE_CATEGORIES } from '@/lib/types'

export default function CreateQueuePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    category: '' as keyof typeof SERVICE_CATEGORIES,
    estimatedTimePerPerson: 5
  })
  const [isCreating, setIsCreating] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title || !formData.category) return

    setIsCreating(true)
    
    try {
      const response = await fetch('/api/queue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          category: formData.category,
          estimatedTimePerPerson: formData.estimatedTimePerPerson
        })
      })

      const queue = await response.json()
      router.push(`/queue/${queue.id}`)
    } catch (error) {
      console.error('Failed to create queue:', error)
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="card">
            <div className="text-center mb-8">
              <QrCode className="w-16 h-16 text-primary-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">Create New Queue</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Set up a queue for your service counter
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Queue Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Main Library Counter"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Category</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
                    <motion.button
                      key={key}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, category: key as keyof typeof SERVICE_CATEGORIES })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.category === key
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">{category.icon}</div>
                      <div className="font-medium text-sm">{category.name}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Estimated Time per Person (minutes)
                </label>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={formData.estimatedTimePerPerson}
                  onChange={(e) => setFormData({ ...formData, estimatedTimePerPerson: parseInt(e.target.value) })}
                  className="input-field"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isCreating || !formData.title || !formData.category}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCreating ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Queue...
                  </div>
                ) : (
                  'Create Queue & Generate QR Code'
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}