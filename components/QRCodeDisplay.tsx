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
    // Create print-friendly version
    const originalContent = document.body.innerHTML
    const qrElement = document.querySelector('.qr-code-svg')
    
    if (qrElement) {
      const printContent = `
        <div style="text-align: center; padding: 40px; font-family: Arial, sans-serif;">
          <h1 style="font-size: 28px; margin-bottom: 20px; color: #333;">${title}</h1>
          <p style="font-size: 18px; margin-bottom: 30px; color: #666;">Scan this QR code to join the queue</p>
          <div style="display: inline-block; padding: 20px; border: 2px solid #333; background: white;">
            ${qrElement.outerHTML}
          </div>
          <p style="font-size: 14px; margin-top: 30px; word-break: break-all;"><strong>Or visit:</strong><br/>${queueUrl}</p>
        </div>
      `
      
      document.body.innerHTML = printContent
      window.print()
      document.body.innerHTML = originalContent
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
        <div className="qr-code-svg">
          <QRCode
            value={queueUrl}
            size={200}
            level="M"
            includeMargin={true}
          />
        </div>
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