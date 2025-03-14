"use client"

import { useEffect, useState, useRef } from "react"
import { useAnimationFrame, motion } from "framer-motion"
import { useBannerContent } from "../hooks/useBannerContent"

export const InfiniteBanner = () => {
  const content = useBannerContent()
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
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        ●
      </motion.span>
      <motion.span
        className="text-3xl font-bold tracking-wider bg-[#1E88E5] text-white px-4 py-2 transform -skew-x-12"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {content.featured}
      </motion.span>
      <motion.span
        className="text-5xl font-bold text-[#FDD835]"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        ■
      </motion.span>
      <motion.span
        className="text-3xl font-bold tracking-wider bg-[#1565C0] text-white px-4 py-2 transform skew-x-12"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {content.project}
      </motion.span>
      <motion.span
        className="text-5xl font-bold text-[#43A047]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        ▲
      </motion.span>
      <motion.span
        className="text-3xl font-bold tracking-wider bg-[#E53935] text-white px-4 py-2 transform -rotate-3"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {content.design}
      </motion.span>
      <motion.span
        className="text-5xl font-bold text-[#1E88E5]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        ◆
      </motion.span>
      <motion.span
        className="text-3xl font-bold tracking-wider bg-[#FDD835] text-black px-4 py-2 transform rotate-3"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {content.development}
      </motion.span>
    </>
  )

  return (
    <motion.div
      className="relative overflow-hidden py-12 my-12"
      initial={{ backgroundColor: "#F5F5EB" }}
      animate={{
        backgroundColor: ["#F5F5EB", "#F6F6EE", "#F7F7F1", "#F8F8F4", "#F5F5EB"],
      }}
      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <div className="relative h-24" ref={bannerRef}>
        <motion.div
          className="flex whitespace-nowrap absolute top-1/2 transform -translate-y-1/2"
          style={{ transform: `translateX(-${scrollX}px) translateY(-50%)` }}
        >
          <motion.div
            className="flex items-center space-x-12 px-6"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            {bannerContent}
          </motion.div>
          <motion.div
            className="flex items-center space-x-12 px-6"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          >
            {bannerContent}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

