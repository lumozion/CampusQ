'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera, X, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface QRScannerProps {
  onClose: () => void
}

export default function QRScanner({ onClose }: QRScannerProps) {
  const [scanning, setScanning] = useState(false)
  const [error, setError] = useState('')
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const router = useRouter()

  useEffect(() => {
    startCamera()
    return () => {
      stopCamera()
    }
  }, [])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setScanning(true)
        scanQRCode()
      }
    } catch (err) {
      setError('Camera access denied. Please allow camera permissions.')
    }
  }

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach(track => track.stop())
    }
  }

  const scanQRCode = () => {
    if (!videoRef.current || !canvasRef.current) return

    const video = videoRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    if (!ctx) return

    const scan = () => {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        
        // Simple QR detection - look for URL patterns in mock scenario
        // In production, use a proper QR code library like jsQR
        const mockQRDetection = () => {
          // Simulate QR code detection after 3 seconds
          setTimeout(() => {
            const mockQueueId = 'demo-queue-123'
            router.push(`/join?id=${mockQueueId}`)
          }, 3000)
        }

        if (scanning) {
          mockQRDetection()
        }
      }
      
      if (scanning) {
        requestAnimationFrame(scan)
      }
    }

    scan()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-md bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Scan QR Code</h2>
          <p className="text-gray-600">Point your camera at the queue QR code</p>
        </div>

        {error ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={startCamera}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="relative">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-64 bg-gray-100 rounded-2xl object-cover"
            />
            <canvas ref={canvasRef} className="hidden" />
            
            {/* Scanning Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 border-2 border-white/50 rounded-2xl"></div>
                <motion.div
                  animate={{ y: [0, 180, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-2 left-2 right-2 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                />
                
                {/* Corner indicators */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-4 border-t-4 border-blue-500 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-4 border-t-4 border-blue-500 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-4 border-b-4 border-blue-500 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-4 border-b-4 border-blue-500 rounded-br-lg"></div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-blue-600 mb-2">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Scanning...</span>
          </div>
          <p className="text-xs text-gray-500">
            Make sure the QR code is clearly visible and well-lit
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}