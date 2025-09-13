export interface QueueItem {
  id: string
  name: string
  service: string
  details: string
  timestamp: number
  position: number
}

export interface Queue {
  id: string
  title: string
  category: 'library' | 'canteen' | 'academic'
  services: string[]
  items: QueueItem[]
  isActive: boolean
  createdAt: number
  estimatedTimePerPerson: number
}

export const SERVICE_CATEGORIES = {
  library: {
    name: 'Library Services',
    icon: '📚',
    services: ['Borrow Book', 'Return Book', 'Research Help', 'Computer Access', 'Study Room Booking']
  },
  canteen: {
    name: 'Canteen Services', 
    icon: '🍽️',
    services: ['Order Food', 'Pick Up Order', 'Special Diet Request', 'Feedback', 'Catering Inquiry']
  },
  academic: {
    name: 'Academic Office',
    icon: '🎓', 
    services: ['Transcript Request', 'Certificate Collection', 'Enrollment', 'Fee Payment', 'Document Verification']
  }
} as const

export const PATIENCE_QUOTES = [
  "Great things take time ⏰",
  "Patience is a virtue 🌟", 
  "Good things come to those who wait 🎯",
  "Your turn is coming soon! 🚀",
  "Stay calm and queue on 😌",
  "Almost there! Keep going 💪",
  "Time flies when you're patient ⚡",
  "You're doing great! 🌈"
]