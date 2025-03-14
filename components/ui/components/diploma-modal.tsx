"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

interface DiplomaModalProps {
  selectedDiploma: string | null
  onClose: () => void
  diplomaData: Record<string, { image: string; caption: string }>
}

export function DiplomaModal({ selectedDiploma, onClose, diplomaData }: DiplomaModalProps) {
  // Verificar si el diploma seleccionado existe y tiene datos
  if (selectedDiploma && !diplomaData[selectedDiploma]) {
    console.error(`No diploma data found for: ${selectedDiploma}`);
    return null;
  }

  return (
    <AnimatePresence>
      {selectedDiploma && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg max-w-3xl w-full relative"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
            <div className="max-h-[70vh] overflow-y-auto">
              {/* Usar una imagen estándar en lugar de Next Image para depurar */}
              <img
                src={diplomaData[selectedDiploma].image}
                alt={`${selectedDiploma} diploma`}
                className="w-full h-auto max-h-[60vh] object-contain mb-4 rounded mx-auto"
              />
              <motion.p
                className="text-center font-mono text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {diplomaData[selectedDiploma].caption}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

