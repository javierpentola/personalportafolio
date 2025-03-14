"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { DiplomaModal } from "./diploma-modal"
import { useLanguage } from "@/contexts/LanguageContext"
import { Footer } from "./footer"

// Import UI translations
import enUI from "@/data/educationUI/en"
import esUI from "@/data/educationUI/es"
import zhUI from "@/data/educationUI/zh"
import itUI from "@/data/educationUI/it"
import frUI from "@/data/educationUI/fr"

// Import education data
import enData from "@/data/education/en"
import esData from "@/data/education/es"
import zhData from "@/data/education/zh"
import itData from "@/data/education/it"
import frData from "@/data/education/fr"

const uiTranslations = { en: enUI, es: esUI, zh: zhUI, it: itUI, fr: frUI }
const educationTranslations = { en: enData, es: esData, zh: zhData, it: itData, fr: frData }

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [selectedDiploma, setSelectedDiploma] = useState<string | null>(null)
  const { language } = useLanguage()
  const [ui, setUi] = useState(uiTranslations.en)
  const [educationData, setEducationData] = useState(educationTranslations.en)

  useEffect(() => {
    setUi(uiTranslations[language as keyof typeof uiTranslations] || uiTranslations.en)
    setEducationData(educationTranslations[language as keyof typeof educationTranslations] || educationTranslations.en)
  }, [language])

  // Smooth spring physics for mouse movement
  const springConfig = { damping: 25, stiffness: 200 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    handleResize()
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [mouseX, mouseY])

  // Generate background patterns inspired by Bauhaus
  const patterns = Array.from({ length: 12 }, (_, i) => ({
    type: i % 4,
    position: {
      x: `${(i % 4) * 25}%`,
      y: `${Math.floor(i / 4) * 30}%`,
    },
    rotation: (i * 45) % 360,
    scale: 0.5 + (i % 3) * 0.5,
    delay: i * 0.1,
  }))

  return (
    <>
      <div
        ref={containerRef}
        className="relative min-h-screen bg-[#F5F5EB] overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {/* Bauhaus-inspired background patterns */}
        <div className="fixed inset-0 overflow-hidden">
          {patterns.map((pattern, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: pattern.position.x,
                top: pattern.position.y,
              }}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: 0.1,
                scale: pattern.scale,
                rotate: pattern.rotation,
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                delay: pattern.delay,
                ease: "linear",
              }}
            >
              {pattern.type === 0 && <div className="w-40 h-40 border-8 border-[#E53935]" />}
              {pattern.type === 1 && <div className="w-40 h-40 bg-[#1E88E5] rounded-full" />}
              {pattern.type === 2 && (
                <div
                  className="w-40 h-40 bg-[#FDD835]"
                  style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                />
              )}
              {pattern.type === 3 && <div className="w-40 h-8 bg-black" />}
            </motion.div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 container mx-auto px-8 py-16">
          {/* Title */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <h2 className="text-6xl font-mono font-bold tracking-tighter">
                {ui.title.split("+").map((part, index) => (
                  <motion.span
                    key={index}
                    className={`inline-block ${index === 1 ? "text-[#E53935]" : ""}`}
                    animate={{
                      rotate: index === 1 ? [0, 5, -5, 0] : [0, 0, 0, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    {part}
                  </motion.span>
                ))}
              </h2>
            </div>
          </motion.div>

          {/* Degrees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {educationData.degrees.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: item.rotate }}
              >
                <div
                  className="p-8 border-2 border-black bg-white"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)",
                  }}
                >
                  <motion.div
                    className="h-2 mb-4"
                    style={{ background: item.color }}
                    whileHover={{ width: "100%" }}
                    initial={{ width: "20%" }}
                  />
                  <h3 className="text-2xl font-mono font-bold mb-2">{item.degree}</h3>
                  <p className="font-mono text-gray-600">{item.institution}</p>
                  <p className="font-mono text-gray-600 mb-4">{item.period}</p>
                  <motion.button
                    className="px-4 py-2 bg-black text-white font-mono text-sm relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDiploma(item.diploma)}
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                    }}
                  >
                    <span className="relative z-10">{ui.viewDiploma}</span>
                    <motion.div
                      className="absolute inset-0"
                      style={{ backgroundColor: item.color }}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-4xl font-mono font-bold mb-8">
              {ui.languages.split("×").map((part, index) => (
                <motion.span
                  key={index}
                  className={`inline-block ${index === 1 ? "text-[#FDD835]" : ""}`}
                  animate={{
                    rotate: index === 1 ? [0, 10, -10, 0] : [0, 0, 0, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  {part}
                </motion.span>
              ))}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {educationData.languages.map((lang, index) => (
                <motion.div key={index} className="relative" whileHover={{ scale: 1.1, rotate: lang.rotate }}>
                  <div
                    className="p-6 border-2 border-black bg-white"
                    style={{
                      clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 10%)",
                    }}
                  >
                    <motion.div
                      className="w-2 h-full absolute left-0 top-0"
                      style={{ background: lang.color }}
                      whileHover={{ height: "100%" }}
                      initial={{ height: "20%" }}
                    />
                    <h4 className="text-xl font-mono font-bold mb-2">{lang.name}</h4>
                    <p className="font-mono text-gray-600">{lang.level}</p>
                    {lang.diploma && (
                      <motion.button
                        className="mt-4 px-4 py-2 bg-black text-white font-mono text-sm relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedDiploma(lang.diploma)}
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                        }}
                      >
                        <span className="relative z-10">{ui.viewCertificate}</span>
                        <motion.div
                          className="absolute inset-0"
                          style={{ backgroundColor: lang.color }}
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mouse follower */}
        <motion.div
          className="fixed w-20 h-20 pointer-events-none mix-blend-multiply"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-[#1E88E5] opacity-20"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </motion.div>

        {/* Diploma Modal */}
        <DiplomaModal
          selectedDiploma={selectedDiploma}
          onClose={() => setSelectedDiploma(null)}
          diplomaData={educationData.diplomaData}
        />
      </div>
      <Footer />
    </>
  )
}

