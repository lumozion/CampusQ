'use client'

import QRCode from 'qrcode.react'
import { motion } from 'framer-motion'
import { Download, Printer, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface QRCodeDisplayProps {
  queueId: string
  title: string
}

export default function QRCodeDisplay({ queueId, title }: QRCodeDisplayProps) {
  const [copied, setCopied] = useState(false)
  const queueUrl = `${window.location.origin}/join?id=${queueId}`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(queueUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePrint = () => {
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Queue QR Code - ${title}</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 40px; }
              .qr-container { margin: 20px 0; }
              h1 { color: #333; margin-bottom: 10px; }
              p { color: #666; margin-bottom: 30px; }
            </style>
          </head>
          <body>
            <h1>${title}</h1>
            <p>Scan to join the queue</p>
            <div class="qr-container">
              <svg width="300" height="300">${document.querySelector('.qr-code-svg')?.innerHTML}</svg>
            </div>
            <p>Or visit: ${queueUrl}</p>
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="card text-center"
    >
      <h3 className="text-xl font-bold mb-4">Queue QR Code</h3>
      
      <div className="bg-white p-6 rounded-xl inline-block mb-6">
        <QRCode
          value={queueUrl}
          size={200}
          level="M"
          includeMargin
          className="qr-code-svg"
        />
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Students can scan this QR code to join your queue
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrint}
          className="btn-secondary flex items-center"
        >
          <Printer className="w-4 h-4 mr-2" />
          Print
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopy}
          className="btn-secondary flex items-center"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Link
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  )
}