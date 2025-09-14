import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'
import { QueueItem } from '@/lib/types'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { name, service, details, id, timestamp } = await request.json()

    if (!name || !service) {
      return NextResponse.json({ error: 'Name and service are required' }, { status: 400 })
    }

    const queueItem: QueueItem = {
      id: id || crypto.randomUUID(),
      name,
      service,
      details: details || '',
      timestamp: timestamp || Date.now(),
      position: 0 // Will be set by storage.addToQueue
    }

    const updatedQueue = await storage.addToQueue(params.id, queueItem)
    
    if (!updatedQueue) {
      return NextResponse.json({ error: 'Queue not found' }, { status: 404 })
    }

    return NextResponse.json(queueItem)
  } catch (error) {
    console.error('Join queue error:', error)
    return NextResponse.json({ error: 'Failed to join queue' }, { status: 500 })
  }
}