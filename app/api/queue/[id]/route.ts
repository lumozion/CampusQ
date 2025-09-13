import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const queue = await storage.getQueue(params.id)
  
  if (!queue) {
    return NextResponse.json({ error: 'Queue not found' }, { status: 404 })
  }

  return NextResponse.json(queue)
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const success = await storage.deleteQueue(params.id)
  
  if (!success) {
    return NextResponse.json({ error: 'Queue not found' }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const updates = await request.json()
    const updatedQueue = await storage.updateQueue(params.id, updates)
    
    if (!updatedQueue) {
      return NextResponse.json({ error: 'Queue not found' }, { status: 404 })
    }

    return NextResponse.json(updatedQueue)
  } catch (error) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }
}