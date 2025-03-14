"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import {
  ExternalLink,
  Code,
  Palette,
  Layout,
  Sparkles,
  Blocks,
  Brain,
  GraduationCap,
  Zap,
  Book,
  Puzzle,
  TrendingUp,
} from "lucide-react"
import { useState } from "react"

const translations = {
  en: {
    viewLive: "LIVE VIEW",
    projects: [
      {
        title: "RED SOUTH STUDIO",
        description:
          "Design and development studio website with a focus on minimalist aesthetics and modern web technologies",
        bulletPoints: [
          { icon: "Code", text: "Next.js 14 & React" },
          { icon: "Palette", text: "Brand Identity & Logo Design" },
          { icon: "Layout", text: "Responsive Grid System" },
          { icon: "Sparkles", text: "Motion Design" },
        ],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoredsouth-CkV8igisiTxumA6zvQ0FbLs46cH6FM.png",
      },
      {
        title: "CLA TUTOR", // Cambiado de "ALC TUTOR" a "CLA TUTOR"
        description: "Learning platform that automates lessons for students with an intuitive interface",
        bulletPoints: [
          { icon: "Blocks", text: "Vue.js & Supabase" },
          { icon: "Brain", text: "Automated Learning System" },
          { icon: "GraduationCap", text: "Student Progress Tracking" },
          { icon: "Zap", text: "Adaptive Learning Paths" },
        ],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mesa%20de%20trabajo%201-7jauBuYpooV3PpLyYCLxxco5bpTwmd.png",
      },
      {
        title: "THE DREAM",
        description:
          "An immersive text adventure game built with Vue.js, challenging players to decipher messages in foreign languages.",
        bulletPoints: [
          { icon: "Book", text: "Engaging Storyline" },
          { icon: "Puzzle", text: "Language Decryption Puzzles" },
          { icon: "TrendingUp", text: "Progressive Difficulty" },
        ],
      },
    ],
  },
  es: {
    viewLive: "VER PROYECTO",
    projects: [
      {
        title: "RED SOUTH STUDIO",
        description:
          "Sitio web de estudio de diseño y desarrollo con enfoque en estética minimalista y tecnologías web modernas",
        bulletPoints: [
          { icon: "Code", text: "Next.js 14 y React" },
          { icon: "Palette", text: "Identidad de Marca y Diseño de Logo" },
          { icon: "Layout", text: "Sistema de Cuadrícula Responsiva" },
          { icon: "Sparkles", text: "Diseño de Movimiento" },
        ],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoredsouth-CkV8igisiTxumA6zvQ0FbLs46cH6FM.png",
      },
      {
        title: "CLA TUTOR", // Cambiado de "TUTOR CAA" a "CLA TUTOR"
        description: "Plataforma de aprendizaje que automatiza lecciones para estudiantes con una interfaz intuitiva",
        bulletPoints: [
          { icon: "Blocks", text: "Vue.js y Supabase" },
          { icon: "Brain", text: "Sistema de Aprendizaje Automatizado" },
          { icon: "GraduationCap", text: "Seguimiento del Progreso del Estudiante" },
          { icon: "Zap", text: "Rutas de Aprendizaje Adaptativas" },
        ],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mesa%20de%20trabajo%201-7jauBuYpooV3PpLyYCLxxco5bpTwmd.png",
      },
      {
        title: "EL SUEÑO",
        description:
          "Un juego de aventura de texto inmersivo creado con Vue.js, que desafía a los jugadores a descifrar mensajes en idiomas extranjeros.",
        bulletPoints: [
          { icon: "Book", text: "Trama cautivadora" },
          { icon: "Puzzle", text: "Acertijos de descifrado de idiomas" },
          { icon: "TrendingUp", text: "Dificultad progresiva" },
        ],
      },
    ],
  },
  fr: {
    viewLive: "VOIR LE PROJET",
    projects: [
      {
        title: "RED SOUTH STUDIO",
        description:
          "Site web de studio de design et développement axé sur l'esthétique minimaliste et les technologies web modernes",
        bulletPoints: [
          { icon: "Code", text: "Next.js 14 et React" },
          { icon: "Palette", text: "Identité de Marque et Design de Logo" },
          { icon: "Layout", text: "Système de Grille Responsive" },
          { icon: "Sparkles", text: "Design de Mouvement" },
        ],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoredsouth-CkV8igisiTxumA6zvQ0FbLs46cH6FM.png",
      },
      {
        title: "CLA TUTOR", // Cambiado de "TUTEUR CAA" a "CLA TUTOR"
        description:
          "Plateforme d'apprentissage qui automatise les leçons pour les étudiants avec une interface intuitive",
        bulletPoints: [
          { icon: "Blocks", text: "Vue.js et Supabase" },
          { icon: "Brain", text: "Système d'apprentissage automatisé" },
          { icon: "GraduationCap", text: "Suivi des progrès des étudiants" },
          { icon: "Zap", text: "Parcours d'apprentissage adaptatifs" },
        ],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mesa%20de%20trabajo%201-7jauBuYpooV3PpLyYCLxxco5bpTwmd.png",
      },
      {
        title: "LE RÊVE",
        description:
          "Un jeu d'aventure textuel immersif créé avec Vue.js, qui met les joueurs au défi de déchiffrer des messages dans des langues étrangères.",
        bulletPoints: [
          { icon: "Book", text: "Scénario captivant" },
          { icon: "Puzzle", text: "Énigmes de décryptage linguistique" },
          { icon: "TrendingUp", text: "Difficulté progressive" },
        ],
      },
    ],
  },
  it: {
    viewLive: "VEDI PROGETTO",
    projects: [
      {
        title: "RED SOUTH STUDIO",
        description:
          "Sito web di studio di design e sviluppo con focus sull'estetica minimalista e tecnologie web moderne",
        bulletPoints: [
          { icon: "Code", text: "Next.js 14 e React" },
          { icon: "Palette", text: "Identità del Marchio e Design del Logo" },
          { icon: "Layout", text: "Sistema di Griglia Responsive" },
          { icon: "Sparkles", text: "Design del Movimento" },
        ],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoredsouth-CkV8igisiTxumA6zvQ0FbLs46cH6FM.png",
      },
      {
        title: "CLA TUTOR", // Cambiado de "TUTOR CAA" a "CLA TUTOR"
        description:
          "Piattaforma di apprendimento che automatizza le lezioni per gli studenti con un'interfaccia intuitiva",
        bulletPoints: [
          { icon: "Blocks", text: "Vue.js e Supabase" },
          { icon: "Brain", text: "Sistema di Apprendimento Automatizzato" },
          { icon: "GraduationCap", text: "Monitoraggio dei Progressi Studenti" },
          { icon: "Zap", text: "Percorsi di Apprendimento Adattativi" },
        ],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mesa%20de%20trabajo%201-7jauBuYpooV3PpLyYCLxxco5bpTwmd.png",
      },
      {
        title: "IL SOGNO",
        description:
          "Un gioco di avventura testuale immersivo creato con Vue.js, che sfida i giocatori a decifrare messaggi in lingue straniere.",
        bulletPoints: [
          { icon: "Book", text: "Trama coinvolgente" },
          { icon: "Puzzle", text: "Enigmi di decrittazione linguistica" },
          { icon: "TrendingUp", text: "Difficoltà progressiva" },
        ],
      },
    ],
  },
  zh: {
    viewLive: "查看项目",
    projects: [
      {
        title: "RED SOUTH STUDIO",
        description: "专注于极简美学和现代网络技术的设计和开发工作室网站",
        bulletPoints: [
          { icon: "Code", text: "Next.js 14 和 React" },
          { icon: "Palette", text: "品牌标识和标志设计" },
          { icon: "Layout", text: "响应式网格系统" },
          { icon: "Sparkles", text: "动效设计" },
        ],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoredsouth-CkV8igisiTxumA6zvQ0FbLs46cH6FM.png",
      },
      {
        title: "CLA TUTOR", // Cambiado de "自动学习中心导师" a "CLA TUTOR"
        description: "一个使用直观界面为学生自动化课程的学习平台",
        bulletPoints: [
          { icon: "Blocks", text: "Vue.js和Supabase" },
          { icon: "Brain", text: "自动化学习系统" },
          { icon: "GraduationCap", text: "学生进度跟踪" },
          { icon: "Zap", text: "自适应学习路径" },
        ],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mesa%20de%20trabajo%201-7jauBuYpooV3PpLyYCLxxco5bpTwmd.png",
      },
      {
        title: "梦境",
        description: "一款使用 Vue.js 打造的沉浸式文字冒险游戏，挑战玩家破译外语信息。",
        bulletPoints: [
          { icon: "Book", text: "引人入胜的故事线" },
          { icon: "Puzzle", text: "语��解密���题" },
          { icon: "TrendingUp", text: "循序渐进的难度" },
        ],
      },
    ],
  },
}

const webDevelopmentContent = {
  en: {
    title: "WEB DEVELOPMENT PROJECTS",
  },
  es: {
    title: "PROYECTOS DE DESARROLLO WEB",
  },
  fr: {
    title: "PROJETS DE DÉVELOPPEMENT WEB",
  },
  it: {
    title: "PROGETTI DI SVILUPPO WEB",
  },
  zh: {
    title: "WEB 开发项目",
  },
}

const openRedSouth = () => {
  window.open("https://red-south.eu/", "_blank", "noopener,noreferrer")
}

const openCLATutor = () => {
  window.open("https://cla-pv.vercel.app/", "_blank", "noopener,noreferrer")
}

const openOSeno = () => {
  window.open("https://playful-face-dance.vercel.app/", "_blank", "noopener,noreferrer")
}

const IconComponent = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case "Code":
      return <Code className="w-5 h-5 text-[#E53935]" />
    case "Palette":
      return <Palette className="w-5 h-5 text-[#E53935]" />
    case "Layout":
      return <Layout className="w-5 h-5 text-[#E53935]" />
    case "Sparkles":
      return <Sparkles className="w-5 h-5 text-[#E53935]" />
    case "Blocks":
      return <Blocks className="w-5 h-5 text-[#FDD835]" />
    case "Brain":
      return <Brain className="w-5 h-5 text-[#FDD835]" />
    case "GraduationCap":
      return <GraduationCap className="w-5 h-5 text-[#FDD835]" />
    case "Zap":
      return <Zap className="w-5 h-5 text-[#FDD835]" />
    case "Book":
      return <Book className="w-5 h-5 text-[#E53935]" />
    case "Puzzle":
      return <Puzzle className="w-5 h-5 text-[#1E88E5]" />
    case "TrendingUp":
      return <TrendingUp className="w-5 h-5 text-[#E53935]" />
    default:
      return null
  }
}

export function WebDevelopmentProjects() {
  const { language } = useLanguage()
  const content = translations[language as keyof typeof translations] || translations.en
  const [isTitleHovered, setIsTitleHovered] = useState(false)

  return (
    <div className="bg-[#F5F5EB] py-12 px-4 sm:px-6 lg:px-8">
      {/* Título con estilo neoplasticista */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          className="relative w-full max-w-2xl mx-auto h-32 border-4 border-black bg-white"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Bloques de color */}
          <motion.div
            className="absolute top-0 left-0 w-24 h-full bg-[#E53935]"
            animate={
              isTitleHovered
                ? { width: [24, 120, 80, 100], x: [0, 10, -10, 0], opacity: [1, 0.8, 1] }
                : { width: 24, x: 0, opacity: 1 }
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-24 h-1/2 bg-[#1E88E5]"
            animate={
              isTitleHovered
                ? { height: ["50%", "70%", "60%", "65%"], y: [0, -10, 5, 0], opacity: [1, 0.8, 1] }
                : { height: "50%", y: 0, opacity: 1 }
            }
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 right-24 w-16 h-16 bg-[#FDD835]"
            animate={
              isTitleHovered
                ? { rotate: [0, 90, 180, 360], scale: [1, 1.2, 0.9, 1], x: [0, 10, -10, 0] }
                : { rotate: 0, scale: 1, x: 0 }
            }
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Texto principal */}
          <motion.h2
            className="absolute inset-0 flex items-center justify-center text-4xl font-bold tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setIsTitleHovered(true)}
            onHoverEnd={() => setIsTitleHovered(false)}
          >
            <span className="relative z-10 px-6 py-2">
              {webDevelopmentContent[language as keyof typeof webDevelopmentContent]?.title ||
                webDevelopmentContent.en.title}
            </span>
          </motion.h2>

          {/* Línea decorativa */}
          <motion.div
            className="absolute bottom-6 left-1/2 h-1 bg-black"
            initial={{ width: 0 }}
            animate={{ width: "30%" }}
            whileHover={{ width: "40%" }}
            style={{ transform: "translateX(-50%)" }}
          />
        </motion.div>
      </div>

      {/* Resto del contenido se mantiene igual */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card - Red South Studio */}
          <motion.div
            className="relative bg-white overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935]" />
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#FDD835] transform rotate-45 translate-x-4 -translate-y-4" />

            <div className="p-6 flex-grow">
              <motion.div
                className="relative h-48 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={content.projects[0].image || "/placeholder.svg"}
                  alt="Red South Studio Logo"
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
                <motion.div
                  className="absolute -inset-1 border border-[#E53935] opacity-0"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 0.5,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.h3
                className="text-3xl font-mono font-bold mb-6 text-center relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {content.projects[0].title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mx-1"
                    animate={{
                      y: [0, -5],
                      color: index === 1 ? ["#000", "#E53935"] : ["#000", "#1E88E5"],
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: index * 0.2,
                      },
                      color: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: index * 0.2,
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-black"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
              </motion.h3>

              <motion.ul
                className="space-y-4 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                {content.projects[0].bulletPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(229, 57, 53, 0.05)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <IconComponent iconName={point.icon} />
                    </motion.div>
                    <motion.span
                      className="font-mono text-sm"
                      whileHover={{
                        fontWeight: "bold",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {point.text}
                    </motion.span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p
                className="font-mono text-sm text-gray-600 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{
                  color: "#E53935",
                  transition: { duration: 0.3 },
                }}
              >
                {content.projects[0].description}
              </motion.p>

              <motion.div
                className="absolute bottom-0 right-0 w-16 h-16"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full border-2 border-[#E53935] transform rotate-45" />
              </motion.div>
            </div>

            <div className="p-6 pt-0">
              <motion.button
                onClick={openRedSouth}
                className="w-full px-6 py-2 bg-[#E53935] text-white font-mono text-sm transform -skew-x-12 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span>{content.viewLive}</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Second Card - CLA Tutor */}
          <motion.div
            className="relative bg-[#213559] text-white overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Decorative circles */}
            <motion.div
              className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-[#FDD835] opacity-20"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <div className="p-6 relative flex-grow">
              {/* Logo and Title Section */}
              <div className="relative h-32 mb-8">
                <motion.div
                  className="relative h-full"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={content.projects[1].image || "/placeholder.svg"}
                    alt="CLA Tutor Logo"
                    layout="fill"
                    objectFit="contain"
                    className="p-4"
                  />
                </motion.div>
              </div>

              {/* Animated Title */}
              <motion.h3
                className="text-3xl font-mono font-bold mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className="inline-block"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  {content.projects[1].title}
                </motion.span>
                <motion.div
                  className="h-1 bg-white mt-2 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.h3>

              <p className="font-mono text-sm mb-6 text-center">{content.projects[1].description}</p>

              {/* Features Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                {content.projects[1].bulletPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-white/10 p-3 rounded cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    {/* Icono con animación */}
                    <motion.div
                      className="relative"
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent iconName={point.icon} />
                    </motion.div>

                    {/* Texto con animación */}
                    <motion.div className="relative flex-1">
                      <motion.span
                        className="font-mono text-sm block"
                        whileHover={{
                          fontWeight: "bold",
                        }}
                      >
                        {point.text}
                      </motion.span>
                      <motion.div
                        className="absolute -bottom-1 left-0 h-[2px] bg-[#FDD835] w-0"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Decoración de esquina */}
                    <motion.div
                      className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-[#FDD835] opacity-0"
                      whileHover={{ opacity: 0.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full border-4 border-white/20 rounded-full" />
              </motion.div>
            </div>

            <div className="p-6 pt-0">
              <motion.button
                onClick={openCLATutor}
                className="w-full px-6 py-2 bg-white text-[#1A237E] font-mono text-sm rounded-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "#FDD835" }}
                transition={{ duration: 0.2 }}
              >
                <span>{content.viewLive}</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Third Card - O Seno - Rediseñado con inspiración Bauhaus */}
          <motion.div
            className="relative bg-[#FAFAFA] overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Formas geométricas decorativas */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32"
              style={{
                background: "linear-gradient(45deg, #E53935 50%, transparent 50%)",
                clipPath: "polygon(100% 0, 0 0, 100% 100%)",
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute bottom-0 left-0 w-40 h-40"
              style={{
                background: "#1E88E5",
                borderRadius: "50%",
                opacity: 0.1,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -360],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <div className="p-6 relative flex-grow">
              {/* Título con estilo Bauhaus */}
              <motion.div className="mb-8">
                <motion.h3
                  className="text-4xl font-mono font-black tracking-tighter text-black"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  O SENO
                </motion.h3>
                <motion.div
                  className="h-1 bg-[#FDD835] w-1/2 mt-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Grid de elementos técnicos */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div className="relative p-4 border-2 border-black" whileHover={{ rotate: -5 }}>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-[#E53935] transform -translate-x-1 -translate-y-1" />
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#1E88E5] transform translate-x-1 -translate-y-1" />
                  <motion.p
                    className="font-mono text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {content.projects[2].description}
                  </motion.p>
                </motion.div>

                {/* Círculo técnico animado con imagen */}
                <motion.div
                  className="relative aspect-square"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <div className="absolute inset-0 border-2 border-black rounded-full overflow-hidden">
                    <div className="w-full h-full relative">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mesa%20de%20trabajo%201-VUp9xu2vpL7Up2LXLwQLRAp80pEAPM.png"
                        alt="O Seno Geometric Pattern"
                        layout="fill"
                        objectFit="contain"
                        className="p-2"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-2 border-2 border-[#E53935] rounded-full" />
                  <div className="absolute inset-4 border-2 border-[#1E88E5] rounded-full" />
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#FDD835]"
                    animate={{
                      scale: [1, 2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </motion.div>
              </div>

              {/* Features con estilo Bauhaus */}
              <div className="space-y-4">
                {content.projects[2].bulletPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      className="w-8 h-8 relative"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent iconName={point.icon} />
                    </motion.div>
                    <span className="font-mono text-sm relative">
                      {point.text}
                      <motion.div
                        className="absolute -bottom-1 left-0 h-[2px]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.2 }}
                        style={{
                          background: index % 2 === 0 ? "#E53935" : "#1E88E5",
                        }}
                      />
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Líneas técnicas decorativas */}
              <svg className="absolute top-0 right-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
                <motion.line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="100%"
                  stroke="black"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
                <motion.line
                  x1="100%"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="black"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
              </svg>
            </div>

            {/* Botón con estilo Bauhaus */}
            <div className="p-6 pt-0">
              <motion.button
                onClick={openOSeno}
                className="w-full relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-[#E53935] transform -skew-x-12" />
                <div className="relative px-6 py-3 flex items-center justify-center gap-2 text-white font-mono">
                  <span>{content.viewLive}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
                <motion.div
                  className="absolute inset-0 bg-[#1E88E5]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

