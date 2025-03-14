"use client"

import type React from "react"
import Image from "next/image"
import { ExternalLink, Github, Smartphone, Book } from "lucide-react"
import { motion } from "framer-motion"
import { Code, Figma, FileType, Database, Palette, GitBranch, Server, Zap, Laptop } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import enContent from "../data/hipProyectoHero/en"
import esContent from "../data/hipProyectoHero/es"
import frContent from "../data/hipProyectoHero/fr"
import itContent from "../data/hipProyectoHero/it"
import zhContent from "../data/hipProyectoHero/zh"

const contentTranslations = { en: enContent, es: esContent, fr: frContent, it: itContent, zh: zhContent }

// Define el array de imágenes de la galería aquí para fácil edición
const galleryImages = [
  {
    src: "/images/hip1.png",
    alt: "Design Preview 1",
    caption: "1/6",
  },
  {
    src: "/images/hip2.png",
    alt: "Design Preview 2",
    caption: "2/6",
  },
  {
    src: "/images/hip3.png",
    alt: "Design Preview 3",
    caption: "3/6",
  },
  {
    src: "/images/hip4.png",
    alt: "Design Preview 4",
    caption: "4/6",
  },
  {
    src: "/images/hip5.png",
    alt: "Design Preview 5",
    caption: "5/6",
  },
  {
    src: "/images/hip6.png",
    alt: "Design Preview 6",
    caption: "6/6",
  },
]

export const HipProyectoHero: React.FC = () => {
  const { language } = useLanguage()
  const content = contentTranslations[language as keyof typeof contentTranslations] || contentTranslations.en

  const openLiveView = () => {
    window.open("https://javierpentola.github.io/hip_PV/", "_blank", "noopener,noreferrer")
  }

  const openBrandbook = () => {
    window.open(
      "https://drive.google.com/file/d/1vU5obh2cwYOnaFGrlNTWas3NkWI2iPwp/view",
      "_blank",
      "noopener,noreferrer",
    )
  }

  const openGithubAdmin = () => {
    window.open("https://github.com/javierpentola/hip_energy", "_blank", "noopener,noreferrer")
  }

  const openMobileApp = () => {
    window.open(
      "https://drive.google.com/file/d/1dX4kia2_XvUcLn0RrBXJh95KQLpliAav/view?usp=sharing",
      "_blank",
      "noopener,noreferrer",
    )
  }

  // Ensure content properties exist before rendering
  if (!content || !content.title || !content.subtitle || !content.descriptors || !content.mainDescription) {
    return null // or return a loading state
  }

  return (
    <div className="w-full max-w-full overflow-x-hidden relative bg-[#f4f5ea]">
      {/* Título y contenido anterior se mantiene igual */}
      <div className="bg-[#f4f5ea] py-8 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-black mb-4 transform -rotate-3">
            <motion.span
              className="inline-block bg-[#f5c511] px-2 sm:px-4 py-1 sm:py-2 mb-2"
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                y: [0, -10, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                x: { type: "spring", stiffness: 200, damping: 10, duration: 0.5 },
                opacity: { duration: 0.3 },
                y: { repeat: Number.POSITIVE_INFINITY, duration: 2, repeatType: "reverse" },
                rotate: { repeat: Number.POSITIVE_INFINITY, duration: 2.5, repeatType: "reverse" },
              }}
              whileHover={{
                scale: 1.1,
                rotate: -3,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              HIP
            </motion.span>
            <motion.span
              className="inline-block bg-black text-white px-2 sm:px-4 py-1 sm:py-2 ml-4 sm:ml-8"
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                y: [0, -8, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                x: { type: "spring", stiffness: 200, damping: 10, duration: 0.5 },
                opacity: { duration: 0.3 },
                y: { repeat: Number.POSITIVE_INFINITY, duration: 2.2, repeatType: "reverse", delay: 0.3 },
                rotate: { repeat: Number.POSITIVE_INFINITY, duration: 2.7, repeatType: "reverse", delay: 0.3 },
              }}
              whileHover={{
                scale: 1.1,
                rotate: 3,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              ENERGY
            </motion.span>
          </h1>
          <motion.h2
            className="text-xl sm:text-3xl md:text-4xl font-light text-black bg-[#1E88E5] inline-block px-2 sm:px-4 py-1 sm:py-2 transform rotate-1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.5,
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            {content.subtitle}
          </motion.h2>
          {/* Descriptores de proyecto */}
          <div className="flex flex-wrap gap-4 mt-6">
            <motion.div
              className="bg-black text-white px-4 py-2 transform -rotate-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.7,
              }}
              whileHover={{
                scale: 1.05,
                rotate: -4,
                transition: { duration: 0.3 },
              }}
            >
              <span className="text-xl md:text-2xl font-bold whitespace-nowrap">
                {content.descriptors.webDevelopment}
              </span>
            </motion.div>
            <motion.div
              className="bg-[#E53935] text-white px-4 py-2 transform rotate-1"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.9,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 3,
                transition: { duration: 0.3 },
              }}
            >
              <span className="text-xl md:text-2xl font-bold">{content.descriptors.design}</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rectángulo amarillo con logo */}
      <div className="w-full bg-[#f5c511] py-12 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative w-48 h-48 mx-auto">
            <Image
              src="/images/logohip.png"
              alt="Hip Energy Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Tecnologías y Herramientas */}
      <div className="w-full bg-[#f4f5ea] py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Líneas decorativas */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute left-0 right-0 top-1/2 h-px bg-black transform -rotate-12" />
              <div className="absolute left-0 right-0 top-1/3 h-px bg-black transform rotate-12" />
              <motion.div
                className="absolute left-1/4 top-0 bottom-0 w-px bg-black"
                animate={{
                  scaleY: [1, 1.2, 1],
                  translateX: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 relative">
              {[
                { name: "Next.js", color: "#000000", icon: Code },
                { name: "JavaScript", color: "#E53935", icon: FileType },
                { name: "PHP", color: "#1E88E5", icon: Server },
                { name: "Adobe Illustrator", color: "#FF9800", icon: Palette },
                { name: "Adobe InDesign", color: "#E91E63", icon: Palette },
                { name: "Photoshop", color: "#1E88E5", icon: Palette },
                { name: "MySQL", color: "#FDD835", icon: Database },
                { name: "React", color: "#00BCD4", icon: Code },
                { name: "TypeScript", color: "#2196F3", icon: FileType },
                { name: "Tailwind CSS", color: "#00ACC1", icon: Code },
                { name: "Adobe XD", color: "#FF61F6", icon: Figma },
                { name: "Git", color: "#F44336", icon: GitBranch },
                { name: "HTML", color: "#4CAF50", icon: Server },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative">
                    {/* Punto decorativo */}
                    <motion.div
                      className="absolute -left-2 top-1/2 w-2 h-2 rounded-full"
                      style={{ backgroundColor: tech.color }}
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                    />

                    {/* Línea ondulada */}
                    <motion.div
                      className="absolute -left-4 top-1/2 w-3 h-px"
                      style={{ backgroundColor: tech.color }}
                      animate={{
                        scaleX: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                    />

                    <div
                      className="bg-white border-2 border-black p-3 transform hover:-rotate-2 transition-transform flex items-center space-x-2"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                      }}
                    >
                      <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
                      <span className="font-mono text-sm md:text-base font-bold">{tech.name}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg text-black">
          <motion.div
            className="relative bg-white p-8 space-y-6 transform -rotate-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: 0.1,
            }}
            whileHover={{
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              rotate: 0,
              transition: { duration: 0.2 },
            }}
          >
            {/* Líneas técnicas decorativas */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-16 h-16"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="w-full h-px bg-black opacity-20" />
                <div className="h-full w-px bg-black opacity-20" />
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-0 w-24 h-24 border-2 border-[#1E88E5] rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </div>

            {/* Contenido principal */}
            <div className="relative space-y-6">
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 12,
                  delay: 0.2,
                }}
              >
                <motion.div
                  className="p-2 bg-[#f5c511]"
                  whileHover={{ rotate: 180, scale: 1.2, transition: { duration: 0.2 } }}
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Zap className="w-6 h-6 text-black" />
                </motion.div>
                <motion.p
                  className="flex-1 text-xl font-mono leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <motion.span
                    className="bg-[#E53935] text-white px-2"
                    whileHover={{ scale: 1.1, x: 5, transition: { duration: 0.2 } }}
                    animate={{
                      y: [0, -3, 0],
                      x: [0, 2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    {content.title}
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    {content.mainDescription[0]}
                  </motion.span>
                </motion.p>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 pl-12"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 12,
                  delay: 0.3,
                }}
              >
                <motion.div
                  className="p-2 bg-[#1E88E5]"
                  whileHover={{ rotate: -180, scale: 1.2, transition: { duration: 0.2 } }}
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, -10, 0, 10, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.2,
                  }}
                >
                  <Laptop className="w-6 h-6 text-white" />
                </motion.div>
                <motion.p
                  className="flex-1 text-xl font-mono leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    y: [0, -2, 0],
                  }}
                  transition={{
                    opacity: { delay: 0.4, duration: 0.3 },
                    y: { repeat: Number.POSITIVE_INFINITY, duration: 3, repeatType: "reverse", delay: 0.5 },
                  }}
                >
                  {content.mainDescription[1]}
                </motion.p>
              </motion.div>
            </div>

            {/* Elemento decorativo final */}
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-black"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              whileHover={{ scale: 1.5, rotate: 90, transition: { duration: 0.2 } }}
              animate={{
                rotate: [0, 15, 0, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          {/* Grid de características principales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-12">
            {/* Experiencia Digital */}
            <motion.div className="relative overflow-hidden" whileHover={{ scale: 1.02 }}>
              <div className="bg-[#E53935] text-white p-6 transform -rotate-2">
                <div className="absolute top-0 right-0 w-32 h-32">
                  <motion.div
                    className="w-full h-1 bg-[#f5c511]"
                    animate={{
                      rotate: [0, 45, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <motion.div
                    className="w-1 h-full bg-[#f5c511]"
                    animate={{
                      rotate: [0, -45, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </div>
                <div className="flex items-start gap-4">
                  <motion.div className="p-2 bg-white rounded-sm" whileHover={{ rotate: 180 }}>
                    <Smartphone className="w-6 h-6 text-[#E53935]" />
                  </motion.div>
                  <div>
                    <motion.h3 className="text-2xl font-bold mb-2" whileHover={{ x: 10 }}>
                      {content.features.digitalExperience.title}
                    </motion.h3>
                    <p className="font-mono">{content.features.digitalExperience.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Gestión Empresarial */}
            <motion.div className="relative overflow-hidden" whileHover={{ scale: 1.02 }}>
              <div className="bg-[#1E88E5] text-white p-6 transform rotate-2">
                <div className="absolute -top-4 -left-4 w-24 h-24">
                  <motion.div
                    className="w-full h-full rounded-full border-2 border-[#f5c511]"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </div>
                <div className="flex items-start gap-4">
                  <motion.div className="p-2 bg-white rounded-sm" whileHover={{ rotate: -180 }}>
                    <Database className="w-6 h-6 text-[#1E88E5]" />
                  </motion.div>
                  <div>
                    <motion.h3 className="text-2xl font-bold mb-2" whileHover={{ x: 10 }}>
                      {content.features.businessManagement.title}
                    </motion.h3>
                    <p className="font-mono">{content.features.businessManagement.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Identidad Visual */}
            <motion.div className="relative overflow-hidden" whileHover={{ scale: 1.02 }}>
              <div className="bg-[#f5c511] p-6 transform -rotate-1">
                <div className="absolute bottom-0 right-0 w-40 h-40">{/* Elemento decorativo eliminado */}</div>
                <div className="flex items-start gap-4">
                  <motion.div className="p-2 bg-white rounded-sm" whileHover={{ scale: 1.2 }}>
                    <Palette className="w-6 h-6 text-black" />
                  </motion.div>
                  <div>
                    <motion.h3 className="text-2xl font-bold mb-2" whileHover={{ x: 10 }}>
                      {content.features.visualIdentity.title}
                    </motion.h3>
                    <p className="font-mono">{content.features.visualIdentity.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Soluciones Web (antes Desarrollo Full-Stack) */}
            <motion.div className="relative overflow-hidden" whileHover={{ scale: 1.02 }}>
              <div className="bg-[#4A148C] text-white p-6 transform rotate-1">
                <div className="flex items-start gap-4">
                  <motion.div className="p-2 bg-white rounded-sm" whileHover={{ y: -5 }}>
                    <Server className="w-6 h-6 text-[#4A148C]" />
                  </motion.div>
                  <div>
                    <motion.h3 className="text-2xl font-bold mb-2" whileHover={{ x: 10 }}>
                      {content.features.fullStackDevelopment.title}
                    </motion.h3>
                    <p className="font-mono">{content.features.fullStackDevelopment.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Botones actualizados para abrir Google en una nueva pestaña */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-16">
            {/* Botón Live View */}
            <button
              onClick={openLiveView}
              className="group relative overflow-hidden bg-[#E53935] text-white p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300"
            >
              <div className="absolute top-0 left-0 w-4 h-full bg-black transform -skew-x-12" />
              <div className="relative flex items-center justify-between">
                <span className="text-xl font-bold">{content.buttons.liveView}</span>
                <ExternalLink className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-300" />
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#f5c511] transform rotate-45 translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
            </button>

            {/* Botón Brandbook */}
            <button
              onClick={openBrandbook}
              className="group relative overflow-hidden bg-black text-white p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 w-4 h-full bg-[#1E88E5] transform skew-x-12" />
              <div className="relative flex items-center justify-between">
                <span className="text-xl font-bold">{content.buttons.brandbook}</span>
                <Book className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-[#E53935] group-hover:scale-150 transition-transform duration-300" />
            </button>

            {/* Botón Github Admin */}
            <button
              onClick={openGithubAdmin}
              className="group relative overflow-hidden bg-[#1E88E5] text-white p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="relative flex items-center justify-between">
                <span className="text-xl font-bold">{content.buttons.githubAdmin}</span>
                <Github className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#f5c511] transform -translate-y-8 translate-x-8 rotate-45 group-hover:-translate-y-6 group-hover:translate-x-6 transition-transform duration-300" />
            </button>

            {/* Botón Mobile App */}
            <button
              onClick={openMobileApp}
              className="group relative overflow-hidden bg-[#f5c511] text-black p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-[#E53935] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="relative flex items-center justify-between">
                <span className="text-xl font-bold group-hover:text-white transition-colors duration-300">
                  {content.buttons.mobileApp}
                </span>
                <Smartphone className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-black transform rotate-45 -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Nueva sección de galería con imágenes en tamaño original */}
          <div className="mt-24">
            <h3 className="text-4xl font-bold mb-12 transform -rotate-2">
              <motion.span
                className="inline-block bg-[#E53935] text-white px-6 py-2"
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotate: [-5, 0, -5],
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  x: { type: "spring", stiffness: 100, damping: 10 },
                  rotate: { repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" },
                  y: { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 0.5 },
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  backgroundColor: "#d32f2f",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {content.gallery.title}
              </motion.span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white p-4 transform hover:rotate-2 transition-transform duration-300"
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935]" />
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#f5c511] transform rotate-45 translate-x-4 -translate-y-4" />
                  <motion.div
                    className="relative cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={500}
                      height={375}
                      layout="responsive"
                      className="transition-transform duration-300 transform group-hover:scale-105"
                    />
                  </motion.div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-mono text-sm">{image.caption}</span>
                    <div className="w-8 h-8 bg-black transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

