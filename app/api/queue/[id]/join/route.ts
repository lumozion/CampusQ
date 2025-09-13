import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'
import { QueueItem } from '@/lib/types'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { name, service, details } = await request.json()

    if (!name || !service) {
      return NextResponse.json({ error: 'Name and service are required' }, { status: 400 })
    }

    const queueItem: QueueItem = {
      id: Math.random().toString(36).substring(2, 15),
      name,
      service,
      details: details || '',
      timestamp: Date.now(),
      position: 0 // Will be set by storage.addToQueue
    }

    const updatedQueue = storage.addToQueue(params.id, queueItem)
    
    if (!updatedQueue) {
      return NextResponse.json({ error: 'Queue not found' }, { status: 404 })
    }

    return NextResponse.json(queueItem)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to join queue' }, { status: 500 })
  }
}