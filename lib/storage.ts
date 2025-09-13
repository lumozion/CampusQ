import { supabase } from './supabase'
import { Queue, QueueItem } from './types'

export const storage = {
  createQueue: async (queue: Queue): Promise<Queue> => {
    const { data, error } = await supabase
      .from('queues')
      .insert([queue])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  getQueue: async (id: string): Promise<Queue | null> => {
    const { data, error } = await supabase
      .from('queues')
      .select('*, queue_items(*)')
      .eq('id', id)
      .single()
    
    if (error) return null
    
    return {
      ...data,
      items: data.queue_items || []
    }
  },

  updateQueue: async (id: string, updates: Partial<Queue>): Promise<Queue | null> => {
    const { data, error } = await supabase
      .from('queues')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) return null
    return data
  },

  addToQueue: async (queueId: string, item: QueueItem): Promise<Queue | null> => {
    // Get current queue to calculate position
    const queue = await storage.getQueue(queueId)
    if (!queue) return null

    const newItem = { ...item, queue_id: queueId, position: queue.items.length + 1 }
    
    const { error } = await supabase
      .from('queue_items')
      .insert([newItem])
    
    if (error) return null
    return storage.getQueue(queueId)
  },

  removeFromQueue: async (queueId: string, itemId: string): Promise<Queue | null> => {
    const { error } = await supabase
      .from('queue_items')
      .delete()
      .eq('id', itemId)
    
    if (error) return null
    
    // Reorder positions
    const queue = await storage.getQueue(queueId)
    if (queue) {
      const updates = queue.items.map((item, index) => ({
        id: item.id,
        position: index + 1
      }))
      
      for (const update of updates) {
        await supabase
          .from('queue_items')
          .update({ position: update.position })
          .eq('id', update.id)
      }
    }
    
    return storage.getQueue(queueId)
  },

  deleteQueue: async (id: string): Promise<boolean> => {
    const { error } = await supabase
      .from('queues')
      .delete()
      .eq('id', id)
    
    return !error
  },

  getAllQueues: async (): Promise<Queue[]> => {
    const { data, error } = await supabase
      .from('queues')
      .select('*')
    
    if (error) return []
    return data
  }
}