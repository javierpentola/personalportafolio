"use client"

import { useEffect, useState, useRef } from "react"
import { useAnimationFrame, motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

const translations = {
  en: "DESIGN",
  es: "DISEÑO",
  fr: "DESIGN",
  it: "DESIGN",
  zh: "设计",
}

export const DesignBanner = () => {
  const { language } = useLanguage()
  const content = translations[language as keyof typeof translations] || translations.en
  const [width, setWidth] = useState(0)
  const bannerRef = useRef<HTMLDivElement>(null)
  const [scrollX, setScrollX] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      if (bannerRef.current) {
        setWidth(bannerRef.current.scrollWidth / 2)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  useAnimationFrame((t) => {
    const newScrollX = (t / 50) % width
    setScrollX(newScrollX)
  })

  const bannerContent = (
    <>
      <motion.span
        className="text-5xl font-bold text-[#E53935]"
        whileHover={{ rotate: 180, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        ●
      </motion.span>
      <motion.span
        className="text-3xl font-bold tracking-wider bg-[#1E88E5] text-white px-4 py-2 transform -skew-x-12"
        whileHover={{ skewX: 0, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.span>
      <motion.span
        className="text-5xl font-bold text-[#FDD835]"
        whileHover={{ rotate: 90, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        ■
      </motion.span>
      <motion.span
        className="text-3xl font-bold tracking-wider bg-[#E53935] text-white px-4 py-2 transform skew-x-12"
        whileHover={{ skewX: 0, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.span>
      <motion.span
        className="text-5xl font-bold text-[#43A047]"
        whileHover={{ rotate: -90, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        ▲
      </motion.span>
      <motion.span
        className="text-3xl font-bold tracking-wider bg-[#1565C0] text-white px-4 py-2 transform -rotate-3"
        whileHover={{ rotate: 0, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.span>
      <motion.span
        className="text-5xl font-bold text-[#1E88E5]"
        whileHover={{ rotate: 45, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        ◆
      </motion.span>
      <motion.span
        className="text-3xl font-bold tracking-wider bg-[#FDD835] text-black px-4 py-2 transform rotate-3"
        whileHover={{ rotate: 0, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.span>
    </>
  )

  return (
    <div className="relative overflow-hidden bg-[#F5F5EB] py-12 my-12">
      <motion.div className="relative h-24" ref={bannerRef} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
        <div
          className="flex whitespace-nowrap absolute top-1/2 transform -translate-y-1/2"
          style={{ transform: `translateX(-${scrollX}px) translateY(-50%)` }}
        >
          <motion.div
            className="flex items-center space-x-12 px-6"
            whileHover={{
              rotateX: 5,
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
          >
            {bannerContent}
          </motion.div>
          <motion.div
            className="flex items-center space-x-12 px-6"
            whileHover={{
              rotateX: 5,
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
          >
            {bannerContent}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

