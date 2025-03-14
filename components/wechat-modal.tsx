"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { wechatModalContent } from "@/data/wechatModalContent"

interface WeChatModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WeChatModal({ isOpen, onClose }: WeChatModalProps) {
  const { language } = useLanguage()
  const content = wechatModalContent[language]

  // Prevenir el desplazamiento cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - asegurarse de que cubre toda la ventana */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />

          {/* Modal - posicionado en la parte superior de la pantalla */}
          <motion.div
            className="fixed z-[10000] bg-white p-6 rounded-lg shadow-xl max-w-sm w-full"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            style={{
              position: "fixed",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 font-mono">{content.title}</h3>
              <p className="text-gray-600 mb-4 font-mono">{content.scanText}</p>

              {/* QR Code Image */}
              <div className="bg-[#09B83E] p-4 rounded-lg inline-block mb-4">
                <div className="bg-white p-2 rounded">
                  <img src="/placeholder.svg?height=200&width=200" alt="WeChat QR Code" className="w-48 h-48 mx-auto" />
                </div>
              </div>

              <p className="text-sm text-gray-500 font-mono">{content.idText}</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

