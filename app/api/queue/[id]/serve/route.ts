import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { itemId } = await request.json()

    if (!itemId) {
      return NextResponse.json({ error: 'Item ID is required' }, { status: 400 })
    }

    const updatedQueue = await storage.removeFromQueue(params.id, itemId)
    
    if (!updatedQueue) {
      return NextResponse.json({ error: 'Queue or item not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, queue: updatedQueue })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to serve customer' }, { status: 500 })
  }
}