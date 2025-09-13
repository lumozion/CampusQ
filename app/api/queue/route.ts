import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'
import { Queue, SERVICE_CATEGORIES } from '@/lib/types'

export async function POST(request: NextRequest) {
  try {
    const { title, category, estimatedTimePerPerson } = await request.json()

    if (!title || !category || !SERVICE_CATEGORIES[category as keyof typeof SERVICE_CATEGORIES]) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }

    const queueId = Math.random().toString(36).substring(2, 15)
    
    const queue: Queue = {
      id: queueId,
      title,
      category,
      services: SERVICE_CATEGORIES[category as keyof typeof SERVICE_CATEGORIES].services,
      items: [],
      isActive: true,
      createdAt: Date.now(),
      estimatedTimePerPerson: estimatedTimePerPerson || 5
    }

    const createdQueue = storage.createQueue(queue)
    return NextResponse.json(createdQueue)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create queue' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (id) {
    const queue = storage.getQueue(id)
    if (!queue) {
      return NextResponse.json({ error: 'Queue not found' }, { status: 404 })
    }
    return NextResponse.json(queue)
  }

  const queues = storage.getAllQueues()
  return NextResponse.json(queues)
}