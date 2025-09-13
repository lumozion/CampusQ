import { Queue, QueueItem } from './types'

// Simple in-memory storage (replace with database in production)
const queues = new Map<string, Queue>()

export const storage = {
  createQueue: (queue: Queue): Queue => {
    queues.set(queue.id, queue)
    return queue
  },

  getQueue: (id: string): Queue | null => {
    return queues.get(id) || null
  },

  updateQueue: (id: string, updates: Partial<Queue>): Queue | null => {
    const queue = queues.get(id)
    if (!queue) return null
    
    const updatedQueue = { ...queue, ...updates }
    queues.set(id, updatedQueue)
    return updatedQueue
  },

  addToQueue: (queueId: string, item: QueueItem): Queue | null => {
    const queue = queues.get(queueId)
    if (!queue) return null

    const newItem = { ...item, position: queue.items.length + 1 }
    const updatedQueue = {
      ...queue,
      items: [...queue.items, newItem]
    }
    
    queues.set(queueId, updatedQueue)
    return updatedQueue
  },

  removeFromQueue: (queueId: string, itemId: string): Queue | null => {
    const queue = queues.get(queueId)
    if (!queue) return null

    const updatedItems = queue.items
      .filter(item => item.id !== itemId)
      .map((item, index) => ({ ...item, position: index + 1 }))

    const updatedQueue = { ...queue, items: updatedItems }
    queues.set(queueId, updatedQueue)
    return updatedQueue
  },

  deleteQueue: (id: string): boolean => {
    return queues.delete(id)
  },

  getAllQueues: (): Queue[] => {
    return Array.from(queues.values())
  }
}