"use client"

import { motion, useScroll, useSpring, useAnimation } from "framer-motion"
import { useRef, useMemo, useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import enContent from "../data/heroContent/en"
import esContent from "../data/heroContent/es"
import zhContent from "../data/heroContent/zh"
import itContent from "../data/heroContent/it"
import frContent from "../data/heroContent/fr"
import { Footer } from "./footer"
import { HipProyectoHero } from "./hip_proyecto_hero"
import { InfiniteBanner } from "./infinite-banner"
import { WebDevelopmentBanner } from "./web-development-banner"
import { WebDevelopmentProjects } from "./web_development_projects"
import { DesignBanner } from "./design-banner"
import { DesignProjectsGeneral } from "./design_projects-general"
import { UiPresentation } from "./ui_presentation"
import { UiUxDesign } from "./ui_ux_design"
import { OtherProjects } from "./other-projects"
import { Mail, Phone, Copy, Check } from "lucide-react"
import { OtherWebProjects } from "./otherwebprojects"

const contentTranslations = { en: enContent, es: esContent, zh: zhContent, it: itContent, fr: frContent }

const getRandomIndices = (textLength: number, count: number) => {
  const indices = new Set<number>()
  const animations = ["bounce", "scale", "color", "opacity"]
  const result = []
  while (indices.size < count) {
    const index = Math.floor(Math.random() * textLength)
    if (!indices.has(index)) {
      indices.add(index)
      result.push({
        index,
        animation: animations[Math.floor(Math.random() * animations.length)],
      })
    }
  }
  return result
}

const AnimatedCharacter = ({
  char,
  animatedIndices,
  globalIndex,
}: { char: string; animatedIndices: any[]; globalIndex: number }) => {
  const animationInfo = animatedIndices.find((item) => item.index === globalIndex)

  if (!animationInfo) {
    return <span>{char}</span>
  }

  switch (animationInfo.animation) {
    case "bounce":
      return (
        <motion.span
          className="inline-block"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          {char}
        </motion.span>
      )
    case "scale":
      return (
        <motion.span
          className="inline-block"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          {char}
        </motion.span>
      )
    case "color":
      return (
        <motion.span
          className="inline-block"
          animate={{ color: ["#000", "#E53935", "#1E88E5", "#000"] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          {char}
        </motion.span>
      )
    case "opacity":
      return (
        <motion.span
          className="inline-block"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          {char}
        </motion.span>
      )
    default:
      return <span>{char}</span>
  }
}

// Componente personalizado para el logo de WhatsApp
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
    />
  </svg>
)

// Componente personalizado para el logo de WeChat
const WeChatIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43c0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47c-.09-.39-.14-.79-.14-1.21c-.01-3.54 3.44-6.43 7.69-6.43M12 5.89a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M6.87 7.82a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"
    />
    <path
      fill="currentColor"
      d="M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14s2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03m-8.34-.32a.96.96 0 1 1 .96-.96c.01.53-.43.96-.96.96m3.85 0a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"
    />
  </svg>
)

export function Hero() {
  //const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const { scrollY } = useScroll()
  const y = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const { language } = useLanguage()
  const content = contentTranslations[language as keyof typeof contentTranslations] || contentTranslations.en

  const allText = `${content.title}\n${content.subtitle.join("\n")}\n${content.location}`
  const animatedIndices = useMemo(() => getRandomIndices(allText.length, 4), [allText])

  const [showEmail, setShowEmail] = useState(false)
  const [showPhone, setShowPhone] = useState(false)
  const [showWeChat, setShowWeChat] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const email = "javiergraciaperez95@gmail.com"
  const phone = "+34 612 202 982"
  const wechatId = "javier6666661"

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  const handleClick = () => {
    controls.start({
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.5 },
    })
  }

  // Datos de los iconos de contacto
  const contactIcons = [
    {
      icon: Mail,
      color: "#E53935",
      label: "Email",
      component: (props: any) => <Mail {...props} />,
      action: () => {
        setShowEmail(!showEmail)
        setShowPhone(false)
        setShowWeChat(false)
      },
    },
    {
      icon: Phone,
      color: "#1E88E5",
      label: "Phone",
      component: (props: any) => <Phone {...props} />,
      action: () => {
        setShowPhone(!showPhone)
        setShowEmail(false)
        setShowWeChat(false)
      },
    },
    {
      icon: WhatsAppIcon,
      color: "#25D366",
      label: "WhatsApp",
      component: (props: any) => <WhatsAppIcon {...props} />,
      action: () => window.open("https://wa.me/34611421328", "_blank"),
    },
    {
      icon: WeChatIcon,
      color: "#09B83E",
      label: "WeChat",
      component: (props: any) => <WeChatIcon {...props} />,
      action: () => {
        setShowWeChat(!showWeChat)
        setShowEmail(false)
        setShowPhone(false)
      },
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5EB]">
      <motion.section
        ref={containerRef}
        className="relative flex-grow flex items-center justify-center overflow-hidden px-4 py-20 lg:p-0"
        onClick={handleClick}
      >
        {/* Background Shapes - Ahora con posiciones relativas y mejor adaptación */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute top-[10%] right-[10%] w-[15vw] h-[15vw] max-w-[200px] max-h-[200px]"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ scale: 1.1, rotate: 45 }}
            drag
            dragConstraints={containerRef}
          >
            <div className="w-0 h-0 border-l-[50%] border-l-transparent border-b-[100%] border-b-[#FDD835] border-r-[50%] border-r-transparent" />
          </motion.div>

          <motion.div
            className="absolute bottom-[15%] left-[10%] w-[20vw] h-[20vw] max-w-[250px] max-h-[250px] bg-[#1E88E5] rounded-full opacity-50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.2 }}
            drag
            dragConstraints={containerRef}
          />

          <motion.div
            className="absolute top-[30%] left-[30%] w-[10vw] h-[10vw] max-w-[150px] max-h-[150px] bg-[#43A047] opacity-50"
            initial={{ rotate: 45, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ rotate: 180 }}
            drag
            dragConstraints={containerRef}
          />
        </div>

        {/* Content - Mejorado con nuevo diseño Bauhaus */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Contenedor del nombre */}
            <motion.div
              className="col-span-1 md:col-span-12 mb-8 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Líneas técnicas decorativas */}
              <motion.div
                className="absolute -left-8 -top-8 w-32 h-32 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-px bg-black"
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-full w-px bg-black"
                  animate={{ scaleY: [0, 1] }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#E53935]"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              {/* Nombre con nuevo diseño */}
              <div className="relative">
                {/* JAVIER */}
                <motion.div
                  className="relative mb-2"
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="absolute -left-4 top-1/2 w-8 h-1 bg-[#1E88E5]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                  <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold font-mono tracking-tighter relative">
                    <motion.span
                      className="inline-block relative"
                      whileHover="hover"
                      initial="initial"
                      animate="initial"
                    >
                      <motion.div className="flex items-center relative">
                        {/* Animación de letras individuales */}
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { y: 0 },
                            hover: {
                              y: [-5, 0, -5],
                              transition: {
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              },
                            },
                          }}
                        >
                          J
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { y: 0 },
                            hover: {
                              y: [-8, 0, -8],
                              transition: {
                                duration: 1.8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.1,
                              },
                            },
                          }}
                        >
                          A
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { y: 0 },
                            hover: {
                              y: [-3, 0, -3],
                              transition: {
                                duration: 1.3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.2,
                              },
                            },
                          }}
                        >
                          V
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { y: 0 },
                            hover: {
                              y: [-7, 0, -7],
                              transition: {
                                duration: 1.6,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.15,
                              },
                            },
                          }}
                        >
                          I
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { y: 0 },
                            hover: {
                              y: [-5, 0, -5],
                              transition: {
                                duration: 1.4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.25,
                              },
                            },
                          }}
                        >
                          E
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { y: 0 },
                            hover: {
                              y: [-9, 0, -9],
                              transition: {
                                duration: 1.7,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.3,
                              },
                            },
                          }}
                        >
                          R
                        </motion.span>

                        {/* Formas geométricas que aparecen en hover */}
                        <motion.div
                          className="absolute -top-8 -left-4 w-6 h-6 bg-[#FDD835]"
                          variants={{
                            initial: { opacity: 0, scale: 0, rotate: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              rotate: [0, 45, 90, 45],
                              transition: {
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-6 left-1/4 w-4 h-4 rounded-full bg-[#1E88E5]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1.2, 0],
                              y: [0, -5, 5, 0],
                              transition: {
                                duration: 2.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.5,
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute top-1/2 -right-8 w-0 h-0 
                                    border-l-[8px] border-l-transparent 
                                    border-b-[16px] border-b-[#E53935] 
                                    border-r-[8px] border-r-transparent"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              rotate: [0, 180, 360, 0],
                              transition: {
                                duration: 3.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 1,
                              },
                            },
                          }}
                        />

                        {/* Líneas decorativas adicionales */}
                        <motion.div
                          className="absolute -top-4 left-0 w-full h-0.5 bg-[#1E88E5]"
                          variants={{
                            initial: { scaleX: 0 },
                            hover: {
                              scaleX: [0, 1, 1, 0],
                              transition: {
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute -right-4 top-0 w-0.5 h-full bg-[#FDD835]"
                          variants={{
                            initial: { scaleY: 0 },
                            hover: {
                              scaleY: [0, 1, 1, 0],
                              transition: {
                                duration: 2.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.7,
                              },
                            },
                          }}
                        />
                      </motion.div>

                      {/* Mantener la línea roja original debajo */}
                      <motion.div
                        className="absolute -bottom-2 left-0 h-1 w-full bg-[#E53935]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      />
                    </motion.span>
                  </h1>
                </motion.div>

                {/* GRACIA */}
                <motion.div
                  className="relative mb-2 md:ml-16"
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="absolute -right-4 top-1/2 w-8 h-1 bg-[#FDD835]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  />
                  <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold font-mono tracking-tighter text-[#E53935]">
                    <motion.span
                      className="inline-block relative"
                      whileHover="hover"
                      initial="initial"
                      animate="initial"
                    >
                      <motion.div className="flex items-center relative">
                        {/* Animación de letras individuales */}
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { y: 0 },
                            hover: {
                              y: [-7, 0, -7],
                              transition: {
                                duration: 1.7,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              },
                            },
                          }}
                        >
                          G
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { y: 0 },
                            hover: {
                              y: [-4, 0, -4],
                              transition: {
                                duration: 1.4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.1,
                              },
                            },
                          }}
                        >
                          R
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { y: 0 },
                            hover: {
                              y: [-9, 0, -9],
                              transition: {
                                duration: 1.9,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.2,
                              },
                            },
                          }}
                        >
                          A
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { y: 0 },
                            hover: {
                              y: [-5, 0, -5],
                              transition: {
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.15,
                              },
                            },
                          }}
                        >
                          C
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { y: 0 },
                            hover: {
                              y: [-8, 0, -8],
                              transition: {
                                duration: 1.8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.25,
                              },
                            },
                          }}
                        >
                          I
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { y: 0 },
                            hover: {
                              y: [-6, 0, -6],
                              transition: {
                                duration: 1.6,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.3,
                              },
                            },
                          }}
                        >
                          A
                        </motion.span>

                        {/* Formas geométricas que aparecen en hover */}
                        <motion.div
                          className="absolute -top-8 -right-4 w-8 h-8 rounded-full bg-[#1E88E5]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              rotate: [0, 180, 360, 0],
                              transition: {
                                duration: 3.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-6 right-1/4 w-6 h-6 bg-[#FDD835]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1.2, 0],
                              rotate: [0, 45, 0, -45],
                              transition: {
                                duration: 2.8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.7,
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute top-1/2 -left-8 w-0 h-0 
                                    border-l-[10px] border-l-transparent 
                                    border-b-[20px] border-b-[#E53935] 
                                    border-r-[10px] border-r-transparent"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              y: [0, -10, 10, 0],
                              transition: {
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 1.2,
                              },
                            },
                          }}
                        />

                        {/* Líneas decorativas adicionales */}
                        <motion.div
                          className="absolute -bottom-4 left-0 w-full h-0.5 bg-[#E53935]"
                          variants={{
                            initial: { scaleX: 0 },
                            hover: {
                              scaleX: [0, 1, 1, 0],
                              transition: {
                                duration: 2.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.5,
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute -left-4 top-0 w-0.5 h-full bg-[#FDD835]"
                          variants={{
                            initial: { scaleY: 0 },
                            hover: {
                              scaleY: [0, 1, 1, 0],
                              transition: {
                                duration: 2.2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.9,
                              },
                            },
                          }}
                        />
                      </motion.div>

                      {/* Mantener la línea azul original debajo */}
                      <motion.div
                        className="absolute -bottom-2 left-0 h-1 w-full bg-[#1E88E5]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      />
                    </motion.span>
                  </h1>
                </motion.div>

                {/* PEREZ */}
                <motion.div
                  className="relative md:ml-8"
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold font-mono tracking-tighter">
                    <motion.span
                      className="inline-block relative"
                      whileHover="hover"
                      initial="initial"
                      animate="initial"
                    >
                      <motion.div className="flex items-center relative">
                        {/* Animación de letras individuales con rotación */}
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { x: 0 },
                            hover: {
                              x: [-5, 5, -5],
                              rotate: [-5, 5, -5],
                              transition: {
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              },
                            },
                          }}
                        >
                          P
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { x: 0 },
                            hover: {
                              x: [5, -5, 5],
                              rotate: [5, -5, 5],
                              transition: {
                                duration: 2.2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.1,
                              },
                            },
                          }}
                        >
                          E
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { x: 0 },
                            hover: {
                              x: [-7, 7, -7],
                              rotate: [-7, 7, -7],
                              transition: {
                                duration: 1.8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.2,
                              },
                            },
                          }}
                        >
                          R
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { x: 0 },
                            hover: {
                              x: [6, -6, 6],
                              rotate: [6, -6, 6],
                              transition: {
                                duration: 2.4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.3,
                              },
                            },
                          }}
                        >
                          E
                        </motion.span>
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { x: 0 },
                            hover: {
                              x: [-8, 8, -8],
                              rotate: [-8, 8, -8],
                              transition: {
                                duration: 2.1,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.4,
                              },
                            },
                          }}
                        >
                          Z
                        </motion.span>

                        {/* Formas geométricas que aparecen en hover - patrón de cuadrícula */}
                        <motion.div
                          className="absolute -top-6 -left-6 w-4 h-4 bg-[#E53935]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              transition: {
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute -top-6 left-1/4 w-4 h-4 rounded-full bg-[#1E88E5]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              transition: {
                                duration: 2.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.3,
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute -top-6 right-1/4 w-4 h-4 bg-[#FDD835]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              transition: {
                                duration: 2.2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.6,
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute -top-6 -right-6 w-4 h-4 rounded-full bg-[#E53935]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              transition: {
                                duration: 2.7,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.9,
                              },
                            },
                          }}
                        />

                        {/* Segunda fila de formas */}
                        <motion.div
                          className="absolute top-1/2 -left-6 w-4 h-4 rounded-full bg-[#FDD835]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              transition: {
                                duration: 2.3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.2,
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute top-1/2 -right-6 w-4 h-4 bg-[#1E88E5]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              transition: {
                                duration: 2.6,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.8,
                              },
                            },
                          }}
                        />

                        {/* Tercera fila de formas */}
                        <motion.div
                          className="absolute -bottom-6 -left-6 w-4 h-4 bg-[#1E88E5]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              transition: {
                                duration: 2.4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.4,
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-6 left-1/4 w-4 h-4 bg-[#FDD835]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              transition: {
                                duration: 2.1,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.7,
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-6 right-1/4 w-4 h-4 rounded-full bg-[#E53935]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              transition: {
                                duration: 2.8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 1,
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-6 -right-6 w-4 h-4 bg-[#FDD835]"
                          variants={{
                            initial: { opacity: 0, scale: 0 },
                            hover: {
                              opacity: [0, 0.8, 0.8, 0],
                              scale: [0, 1, 1, 0],
                              transition: {
                                duration: 2.2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 1.3,
                              },
                            },
                          }}
                        />

                        {/* Líneas decorativas adicionales */}
                        <motion.div
                          className="absolute -top-4 left-0 w-full h-0.5 bg-[#1E88E5]"
                          variants={{
                            initial: { scaleX: 0 },
                            hover: {
                              scaleX: [0, 1, 1, 0],
                              x: [-20, 0, 20, 0],
                              transition: {
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              },
                            },
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-4 left-0 w-full h-0.5 bg-[#E53935]"
                          variants={{
                            initial: { scaleX: 0 },
                            hover: {
                              scaleX: [0, 1, 1, 0],
                              x: [20, 0, -20, 0],
                              transition: {
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.5,
                              },
                            },
                          }}
                        />
                      </motion.div>

                      {/* Mantener la línea amarilla original debajo */}
                      <motion.div
                        className="absolute -bottom-2 left-0 h-1 w-full bg-[#FDD835]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                      />
                    </motion.span>
                  </h1>
                </motion.div>

                {/* Elemento decorativo geométrico */}
                <motion.div
                  className="absolute -right-12 top-1/2 transform -translate-y-1/2"
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="w-24 h-24 border-4 border-[#E53935] rounded-full" />
                  <div className="absolute inset-0 border-4 border-[#1E88E5] transform rotate-45" />
                </motion.div>
              </div>

              {/* Título y subtítulo con nuevo diseño */}
              <motion.div
                className="mt-12 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Título (Hi there,) */}
                <motion.div
                  className="bg-black text-white px-6 py-3 inline-block transform -rotate-2 mb-4"
                  whileHover={{ rotate: 2, scale: 1.02 }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-mono tracking-tight">{content.title}</h2>
                </motion.div>

                {/* Subtítulos - Ahora con animaciones mejoradas */}
                <div className="space-y-6 max-w-2xl">
                  {content.subtitle.map((line, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    >
                      {/* Elementos decorativos para cada recuadro */}
                      {index === 0 && (
                        <>
                          <motion.div
                            className="absolute -left-4 -top-4 w-8 h-8 bg-[#FDD835] z-0"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              rotate: [0, 90, 180, 270, 360],
                            }}
                            transition={{
                              duration: 20,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                              delay: 1,
                            }}
                          />
                          <motion.div
                            className="absolute -right-2 -bottom-2 w-4 h-4 rounded-full bg-[#E53935] z-0"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                              opacity: 1,
                              scale: [1, 1.2, 1],
                              y: [0, -5, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: 1.2,
                            }}
                          />
                        </>
                      )}

                      {index === 1 && (
                        <>
                          <motion.div
                            className="absolute -right-4 -top-4 w-0 h-0 z-0
                                      border-l-[15px] border-l-transparent 
                                      border-b-[25px] border-b-[#1E88E5] 
                                      border-r-[15px] border-r-transparent"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 15,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                              delay: 1.4,
                            }}
                          />
                          <motion.div
                            className="absolute -left-2 -bottom-2 w-6 h-1 bg-[#E53935] z-0"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{
                              opacity: 1,
                              scaleX: [1, 1.5, 1],
                              rotate: [-5, 5, -5],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: 1.6,
                            }}
                          />
                        </>
                      )}

                      {/* Recuadro principal con animaciones */}
                      <motion.div
                        className={`relative z-10 overflow-hidden ${
                          index === 0 ? "bg-[#1E88E5]" : "bg-[#FDD835]"
                        } text-${index === 0 ? "white" : "black"} px-6 py-4 transform ${
                          index === 0 ? "rotate-1" : "-rotate-1"
                        }`}
                        whileHover={{
                          scale: 1.03,
                          rotate: index === 0 ? 2 : -2,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                        animate={{
                          y: [0, index === 0 ? -3 : 3, 0],
                        }}
                        transition={{
                          y: {
                            duration: index === 0 ? 4 : 5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          },
                          hover: { duration: 0.3 },
                        }}
                      >
                        {/* Líneas decorativas dentro del recuadro */}
                        <motion.div
                          className="absolute top-0 left-0 w-full h-1 bg-white opacity-20"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 1.8 + index * 0.2 }}
                        />
                        <motion.div
                          className="absolute bottom-0 right-0 w-full h-1 bg-black opacity-10"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 2 + index * 0.2 }}
                        />

                        {/* Puntos decorativos en las esquinas */}
                        <motion.div
                          className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white opacity-40"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.4, 0.7, 0.4],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: index * 0.5,
                          }}
                        />
                        <motion.div
                          className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-black opacity-20"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.2, 0.4, 0.2],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: index * 0.3 + 0.5,
                          }}
                        />

                        {/* Texto con animación sutil */}
                        <motion.p
                          className="text-lg sm:text-xl md:text-2xl font-mono relative z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 2.2 + index * 0.3 }}
                          whileHover={{
                            letterSpacing: "0.02em",
                            transition: { duration: 0.3 },
                          }}
                        >
                          {line}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Iconos de contacto */}
                <div className="mt-8 relative">
                  <motion.div
                    className="flex justify-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    {contactIcons.map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative"
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{
                          scale: 1,
                          rotate: 0,
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 1.8 + index * 0.2,
                          type: "spring",
                          stiffness: 200,
                          y: {
                            duration: 2 + index * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: index * 0.3,
                          },
                        }}
                      >
                        <motion.button
                          onClick={item.action}
                          className="block relative"
                          whileHover={{
                            scale: 1.2,
                            rotate: 5,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                          }}
                        >
                          <motion.div
                            className="p-3 rounded-md shadow-md overflow-hidden relative"
                            style={{ backgroundColor: item.color }}
                            whileHover={{
                              backgroundColor: item.color,
                            }}
                          >
                            {/* Efecto de brillo animado */}
                            <motion.div
                              className="absolute inset-0 bg-white opacity-20"
                              initial={{ x: "-100%", y: "-100%" }}
                              animate={{ x: "100%", y: "100%" }}
                              transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                                ease: "linear",
                                delay: index * 0.3,
                              }}
                              style={{
                                width: "50%",
                                height: "50%",
                                filter: "blur(10px)",
                              }}
                            />

                            {/* Icono */}
                            <motion.div
                              animate={{
                                rotate: index === 0 ? [0, 5, 0, -5, 0] : 0, // Solo el primer icono rota
                                scale: index === 1 ? [1, 1.1, 1] : 1, // Solo el segundo icono pulsa
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                delay: index * 0.2,
                              }}
                            >
                              <item.component className="w-6 h-6 text-white" />
                            </motion.div>
                          </motion.div>

                          {/* Punto decorativo con animación */}
                          <motion.div
                            className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-white"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.7, 1, 0.7],
                              boxShadow: [
                                "0 0 0 0 rgba(255,255,255,0)",
                                "0 0 0 4px rgba(255,255,255,0.3)",
                                "0 0 0 0 rgba(255,255,255,0)",
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: index * 0.2,
                            }}
                          />

                          {/* Línea decorativa animada */}
                          <motion.div
                            className="absolute -bottom-2 left-0 h-0.5 bg-white opacity-70"
                            initial={{ width: 0 }}
                            animate={{ width: ["0%", "100%", "0%"] }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: index * 0.3 + 1,
                            }}
                          />

                          <span className="sr-only">{item.label}</span>
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Email display */}
                  <motion.div
                    className="absolute top-full left-0 mt-2 z-20"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: showEmail ? "auto" : 0,
                      opacity: showEmail ? 1 : 0,
                    }}
                    transition={{
                      height: { duration: 0.2 },
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {showEmail && (
                      <motion.div
                        className="bg-[#E53935] text-white px-3 py-2 rounded-md shadow-md flex items-center space-x-2 max-w-[280px] sm:max-w-full"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <motion.span
                          className="font-mono text-sm truncate"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {email}
                        </motion.span>
                        <motion.button
                          onClick={() => copyToClipboard(email, "email")}
                          className="flex-shrink-0 p-1 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {copied === "email" ? (
                            <Check className="w-4 h-4 text-white" />
                          ) : (
                            <Copy className="w-4 h-4 text-white" />
                          )}
                        </motion.button>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Phone display */}
                  <motion.div
                    className="absolute top-full left-0 mt-2 z-20"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: showPhone ? "auto" : 0,
                      opacity: showPhone ? 1 : 0,
                    }}
                    transition={{
                      height: { duration: 0.2 },
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {showPhone && (
                      <motion.div
                        className="bg-[#1E88E5] text-white px-3 py-2 rounded-md shadow-md flex items-center space-x-2 max-w-[280px] sm:max-w-full"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <motion.span
                          className="font-mono text-sm truncate"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {phone}
                        </motion.span>
                        <motion.button
                          onClick={() => copyToClipboard(phone, "phone")}
                          className="flex-shrink-0 p-1 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {copied === "phone" ? (
                            <Check className="w-4 h-4 text-white" />
                          ) : (
                            <Copy className="w-4 h-4 text-white" />
                          )}
                        </motion.button>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* WeChat display */}
                  <motion.div
                    className="absolute top-full left-0 mt-2 z-20"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: showWeChat ? "auto" : 0,
                      opacity: showWeChat ? 1 : 0,
                    }}
                    transition={{
                      height: { duration: 0.2 },
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {showWeChat && (
                      <motion.div
                        className="bg-[#09B83E] text-white px-3 py-2 rounded-md shadow-md flex items-center space-x-2 max-w-[280px] sm:max-w-full"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <motion.span
                          className="font-mono text-sm truncate"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {wechatId}
                        </motion.span>
                        <motion.button
                          onClick={() => copyToClipboard(wechatId, "wechat")}
                          className="flex-shrink-0 p-1 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {copied === "wechat" ? (
                            <Check className="w-4 h-4 text-white" />
                          ) : (
                            <Copy className="w-4 h-4 text-white" />
                          )}
                        </motion.button>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Ubicación */}
                {/* Llamada a la acción con diseño Bauhaus */}
                <motion.div
                  className="mt-12 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <div className="relative">
                    {/* Elementos decorativos geométricos */}
                    <motion.div
                      className="absolute -left-8 -top-4 w-6 h-6 bg-[#FDD835]"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute -right-4 bottom-0 w-12 h-1 bg-[#E53935]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                    />
                    <motion.div
                      className="absolute -left-4 top-1/2 w-1 h-12 bg-[#1E88E5]"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                    />

                    {/* Contenedor principal con diseño Bauhaus */}
                    <motion.div
                      className="relative bg-white p-6 border-l-4 border-[#E53935] mx-auto max-w-3xl"
                      initial={{ x: -50 }}
                      animate={{ x: 0 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Líneas técnicas decorativas */}
                      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <motion.div
                          className="absolute top-0 left-0 w-full h-px bg-black opacity-20"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 1.8 }}
                        />
                        <motion.div
                          className="absolute bottom-0 right-0 w-full h-px bg-black opacity-20"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 2 }}
                        />
                      </div>

                      {/* Texto principal con efectos */}
                      <motion.div
                        className="relative z-10 flex items-center justify-center space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.2 }}
                      >
                        {/* Círculo decorativo */}
                        <motion.div
                          className="hidden md:block w-8 h-8 rounded-full bg-[#1E88E5] opacity-90"
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        />

                        {/* Texto con diseño dinámico */}
                        <div className="flex-1 text-center">
                          <motion.p
                            className="text-xl md:text-3xl font-mono font-bold"
                            style={{
                              background: "linear-gradient(135deg, #1E88E5 0%, #E53935 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.2 },
                            }}
                          >
                            {content.callToAction}
                          </motion.p>
                        </div>

                        {/* Triángulo decorativo */}
                        <motion.div
                          className="hidden md:block w-0 h-0 border-l-[20px] border-l-transparent border-b-[34.64px] border-b-[#FDD835] border-r-[20px] border-r-transparent"
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Elementos decorativos adicionales - Ahora con mejor posicionamiento */}
        <motion.div
          className="absolute bottom-[5%] right-[5%] w-[10vw] h-[10vw] max-w-[150px] max-h-[150px] bg-[#FDD835] opacity-50"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{ rotate: 45 }}
          drag
          dragConstraints={containerRef}
        />
      </motion.section>
      <InfiniteBanner />
      <HipProyectoHero />
      <WebDevelopmentBanner />
      <WebDevelopmentProjects />
      <OtherWebProjects />
      <DesignBanner />
      <DesignProjectsGeneral />
      <UiUxDesign />
      <UiPresentation />
      <OtherProjects />
      <Footer />
    </div>
  )
}

