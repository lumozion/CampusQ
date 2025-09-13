'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Users, Clock, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Queue, QueueItem, PATIENCE_QUOTES } from '@/lib/types'
import { supabase } from '@/lib/supabase'

export default function JoinQueuePage() {
  const searchParams = useSearchParams()
  const queueId = searchParams.get('id')
  const [queue, setQueue] = useState<Queue | null>(null)
  const [loading, setLoading] = useState(true)
  const [joining, setJoining] = useState(false)
  const [joined, setJoined] = useState(false)
  const [userItem, setUserItem] = useState<QueueItem | null>(null)
  const [currentQuote, setCurrentQuote] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    details: ''
  })

  useEffect(() => {
    if (queueId) {
      fetchQueue()
      
      // Set up real-time subscription for queue changes
      const subscription = supabase
        .channel('queue-updates')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'queues',
            filter: `id=eq.${queueId}`
          },
          (payload) => {
            console.log('Queue update:', payload)
            if (payload.eventType === 'DELETE') {
              // Queue was closed, redirect after a moment
              setTimeout(() => {
                window.location.href = '/'
              }, 2000)
            } else {
              // Queue was updated, refresh data
              fetchQueue()
            }
          }
        )
        .subscribe()
      
      // Fallback polling
      const interval = setInterval(fetchQueue, 5000)
      
      // Cleanup check
      const runCleanup = async () => {
        try {
          await fetch('/api/cleanup', { method: 'POST' })
        } catch (error) {
          console.error('Cleanup check failed:', error)
        }
      }
      runCleanup()
      
      return () => {
        clearInterval(interval)
        supabase.removeChannel(subscription)
      }
    }
  }, [queueId])

  useEffect(() => {
    if (joined) {
      const quoteInterval = setInterval(() => {
        setCurrentQuote(prev => (prev + 1) % PATIENCE_QUOTES.length)
      }, 4000)
      return () => clearInterval(quoteInterval)
    }
  }, [joined])

  const fetchQueue = async () => {
    if (!queueId) return
    
    try {
      const response = await fetch(`/api/queue/${queueId}`)
      if (response.ok) {
        const data = await response.json()
        setQueue(data)
        
        // Update user's position if they're in queue
        if (userItem) {
          const updatedItem = data.items.find((item: QueueItem) => item.id === userItem.id)
          if (updatedItem) {
            setUserItem(updatedItem)
          }
        }
      }
    } catch (error) {
      console.error('Failed to fetch queue:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleJoinQueue = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.service || !queueId) return

    setJoining(true)
    
    try {
      const response = await fetch(`/api/queue/${queueId}/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          id: Math.random().toString(36).substring(2, 15),
          timestamp: Date.now()
        })
      })

      if (response.ok) {
        const newItem = await response.json()
        setUserItem(newItem)
        setJoined(true)
        fetchQueue()
      }
    } catch (error) {
      console.error('Failed to join queue:', error)
    } finally {
      setJoining(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!queue) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Queue Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">The queue you're looking for doesn't exist or has been closed.</p>
          <Link href="/" className="btn-primary">Go Home</Link>
        </div>
      </div>
    )
  }

  if (joined && userItem) {
    const currentPosition = queue.items.findIndex(item => item.id === userItem.id) + 1
    const estimatedWaitTime = Math.max(0, (currentPosition - 1) * queue.estimatedTimePerPerson)
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-16 h-16 text-green-500" />
              </motion.div>

              <h1 className="text-3xl font-bold mb-2">You're in!</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Welcome to {queue.title}
              </p>

              <div className="bg-gradient-to-r from-primary-500 to-green-500 text-white rounded-2xl p-6 mb-6">
                <div className="text-4xl font-bold mb-2">#{currentPosition}</div>
                <div className="text-sm opacity-90">Your queue number</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <Users className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                  <div className="font-bold">{queue.items.length}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Total in queue</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="font-bold">{estimatedWaitTime}m</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Est. wait time</div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 mb-6">
                <h3 className="font-medium mb-2">Your Request:</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>{formData.service}</strong>
                  {formData.details && (
                    <span className="block text-gray-600 dark:text-gray-400 mt-1">
                      {formData.details}
                    </span>
                  )}
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuote}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
                    {PATIENCE_QUOTES[currentQuote]}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  This page updates automatically. Keep it open to see your progress!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="card">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">{queue.category === 'library' ? '📚' : queue.category === 'canteen' ? '🍽️' : '🎓'}</div>
              <h1 className="text-2xl font-bold mb-2">{queue.title}</h1>
              <p className="text-gray-600 dark:text-gray-300">
                {queue.items.length} people currently in queue
              </p>
            </div>

            <form onSubmit={handleJoinQueue} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Needed</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="input-field"
                  required
                >
                  <option value="">Select a service</option>
                  {queue.services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Additional Details 
                  <span className="text-gray-500 text-xs">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="e.g., Book title, order number, etc."
                  className="input-field"
                />
              </div>

              <motion.button
                type="submit"
                disabled={joining || !formData.name || !formData.service}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {joining ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Joining Queue...
                  </div>
                ) : (
                  'Join Queue'
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}