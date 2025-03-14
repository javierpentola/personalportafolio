"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Circle, ArrowRight } from "lucide-react"
import { Footer } from "./footer"

// Import UI translations
import enUI from "@/data/experienceUI/en"
import esUI from "@/data/experienceUI/es"
import zhUI from "@/data/experienceUI/zh"
import itUI from "@/data/experienceUI/it"
import frUI from "@/data/experienceUI/fr"

// Import experience data
import enData from "@/data/experience/en"
import esData from "@/data/experience/es"
import zhData from "@/data/experience/zh"
import itData from "@/data/experience/it"
import frData from "@/data/experience/fr"

const uiTranslations = { en: enUI, es: esUI, zh: zhUI, it: itUI, fr: frUI }
const experienceTranslations = { en: enData, es: esData, zh: zhData, it: itData, fr: frData }

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { language } = useLanguage()
  const [ui, setUi] = useState(uiTranslations.en)
  const [experiences, setExperiences] = useState(experienceTranslations.en)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setUi(uiTranslations[language as keyof typeof uiTranslations] || uiTranslations.en)
    setExperiences(experienceTranslations[language as keyof typeof experienceTranslations] || experienceTranslations.en)
  }, [language])

  return (
    <>
      <div ref={containerRef} className="relative bg-[#F5F5EB] min-h-screen overflow-hidden py-20">
        {/* Bauhaus-inspired background patterns */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Diagonal stripes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`stripe-${i}`}
              className="absolute w-[200%] h-px bg-black/10"
              style={{
                top: `${(i * 100) / 8}%`,
                left: "-50%",
                transform: `rotate(${30 + i * 5}deg)`,
              }}
              animate={{
                translateX: [0, 100, 0],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}

          {/* Geometric shapes */}
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 border-4 border-[#E53935]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute bottom-40 right-20 w-60 h-60 border-4 border-[#1E88E5]"
            style={{
              borderRadius: "50%",
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -360],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/3 w-40 h-40"
            style={{
              backgroundColor: "#FDD835",
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        {/* Title Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20">
          <div className="relative">
            {/* Technical drawing elements */}
            <motion.div
              className="absolute -left-8 -top-8 w-40 h-40"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 h-full w-px bg-black/20" />
                <div className="absolute left-0 top-1/2 w-full h-px bg-black/20" />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#E53935] -translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.div>

            {/* Title text */}
            <motion.h2
              className="text-5xl sm:text-8xl md:text-9xl font-mono font-bold tracking-tighter pl-4 sm:pl-20"
              style={{
                textShadow: "2px 2px 0 rgba(0,0,0,0.1)",
              }}
            >
              {ui.title.split("/").map((part, index) => (
                <motion.span
                  key={index}
                  className="inline-block relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {part}
                  {index < 2 && (
                    <motion.span
                      className="inline-block text-[#E53935] mx-2 transform -rotate-12"
                      animate={{
                        rotate: [-12, 12, -12],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      /
                    </motion.span>
                  )}
                </motion.span>
              ))}
            </motion.h2>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Technical measurement lines - REMOVED */}
                {/*<div className="absolute -left-20 top-0 bottom-0 w-px bg-black/20" />
                <div className="absolute -left-24 top-1/2 w-8 h-px bg-black/20" />
                <motion.div
                  className="absolute -left-26 top-1/2 transform -translate-y-1/2 font-mono text-sm"
                  animate={{
                    x: hoveredIndex === index ? [-5, 5, -5] : 0,
                  }}
                >
                  {exp.period}
                </motion.div>*/}

                {/* Content */}
                <div className={`relative ${index % 2 === 0 ? "ml-20" : "ml-40"}`}>
                  {/* Company Icon */}
                  <motion.div
                    className="absolute -left-16 top-0"
                    animate={{
                      rotate: hoveredIndex === index ? [0, 360] : 0,
                    }}
                    transition={{ duration: 2 }}
                  >
                    <div className="relative">
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
                        style={{
                          background: `conic-gradient(from ${hoveredIndex === index ? "360deg" : "0deg"}, ${
                            exp.color
                          } 0%, #1E88E5 50%, #FDD835 100%)`,
                        }}
                        animate={{
                          rotate: hoveredIndex === index ? [0, 360] : 0,
                        }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-2xl">
                          {index === 1 ? "狮" : index === 0 ? "南" : <Circle className="w-6 h-6" />}
                        </div>
                      </motion.div>

                      {/* Rotating ring */}
                      <motion.div
                        className="absolute -inset-2 rounded-full border-2"
                        style={{ borderColor: exp.color }}
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Position, Company and Period */}
                  <div className="mb-8">
                    <motion.h3
                      className="text-2xl sm:text-4xl font-mono font-bold mb-2 sm:mb-4 relative inline-block"
                      animate={{
                        x: hoveredIndex === index ? [0, 10, 0] : 0,
                      }}
                    >
                      {exp.position}
                      <motion.div
                        className="absolute -bottom-2 left-0 h-1 bg-[#E53935]"
                        initial={{ width: "30%" }}
                        animate={{
                          width: hoveredIndex === index ? "100%" : "30%",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.h3>
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="flex items-center gap-6"
                        animate={{
                          x: hoveredIndex === index ? [0, 5, 0] : 0,
                        }}
                      >
                        <p className="text-xl font-mono">{exp.company}</p>
                        <motion.div
                          className="flex items-center"
                          initial={{ opacity: 0.6 }}
                          animate={{
                            opacity: hoveredIndex === index ? 1 : 0.6,
                          }}
                        >
                          <div className="w-8 h-px bg-black/40 mx-3" />
                          <motion.span
                            className="font-mono text-lg px-4 py-1 relative overflow-hidden"
                            style={{
                              clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-[#1E88E5] opacity-10"
                              initial={{ scaleX: 0 }}
                              animate={{
                                scaleX: hoveredIndex === index ? 1 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              style={{ transformOrigin: "left" }}
                            />
                            {exp.period}
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <motion.div
                    className="space-y-6 mb-8 relative"
                    animate={{
                      x: hoveredIndex === index ? 20 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                      >
                        <motion.div
                          className="relative"
                          animate={{
                            rotate: hoveredIndex === index ? [0, 360] : 0,
                          }}
                          transition={{ duration: 2, delay: idx * 0.2 }}
                        >
                          <ArrowRight className="w-6 h-6 text-[#E53935]" />
                        </motion.div>
                        <p className="font-mono text-lg flex-1">{resp}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -right-4 bottom-0 w-20 h-20"
                    style={{
                      opacity: 0.1,
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <div className="absolute inset-0 border-2 border-black transform rotate-45" />
                    <div className="absolute inset-0 border-2 border-[#E53935]" />
                    <div className="absolute inset-0 border-2 border-[#1E88E5] transform -rotate-45" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

