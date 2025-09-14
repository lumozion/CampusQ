import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    // Delete queues older than 15 hours (54000000 ms)
    const fifteenHoursAgo = Date.now() - (15 * 60 * 60 * 1000)
    
    const { data: oldQueues, error: fetchError } = await supabase
      .from('queues')
      .select('*')
      .lt('createdAt', fifteenHoursAgo)
    
    if (fetchError) {
      console.error('Error fetching old queues:', fetchError)
      return NextResponse.json({ error: 'Failed to fetch old queues' }, { status: 500 })
    }

    if (oldQueues && oldQueues.length > 0) {
      const { error: deleteError } = await supabase
        .from('queues')
        .delete()
        .lt('createdAt', fifteenHoursAgo)
      
      if (deleteError) {
        console.error('Error deleting old queues:', deleteError)
        return NextResponse.json({ error: 'Failed to delete old queues' }, { status: 500 })
      }

      return NextResponse.json({ 
        success: true, 
        deletedCount: oldQueues.length,
        message: 'Cleaned up old queues'
      })
    }

    return NextResponse.json({ 
      success: true, 
      deletedCount: 0,
      message: 'No old queues to clean up' 
    })
  } catch (error) {
    console.error('Cleanup error:', error)
    return NextResponse.json({ error: 'Cleanup failed' }, { status: 500 })
  }
}