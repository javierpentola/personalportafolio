"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Mail, Phone, MapPin, Github, MessageCircle } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { Footer } from "../components/footer"

// Import translations and data
import enUI from "../data/contactUI/en"
import esUI from "../data/contactUI/es"
import zhUI from "../data/contactUI/zh"
import itUI from "../data/contactUI/it"
import frUI from "../data/contactUI/fr"
import enData from "../data/contactData/en"
import esData from "../data/contactData/es"
import zhData from "../data/contactData/zh"
import itData from "../data/contactData/it"
import frData from "../data/contactData/fr"

interface ContactProps {
  setActiveSection?: (section: string) => void
}

const uiTranslations = { en: enUI, es: esUI, zh: zhUI, it: itUI, fr: frUI }
const contactDataTranslations = { en: enData, es: esData, zh: zhData, it: itData, fr: frData }

const PRIMARY_COLORS = {
  red: "#D40920",
  blue: "#1034A6",
  yellow: "#F7D747",
  green: "#25D366", // WhatsApp green
  github: "#171515", // GitHub color
  wechat: "#07C160", // WeChat green
}

// WhatsApp SVG icon component
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-8 h-8">
    <path
      fill="currentColor"
      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
    />
  </svg>
)

// GitHub SVG icon component
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-8 h-8">
    <path
      fill="currentColor"
      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
    />
  </svg>
)

// WeChat SVG icon component
const WeChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-8 h-8">
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

export function Contact({ setActiveSection }: ContactProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const [ui, setUi] = useState(uiTranslations.en)
  const [contacts, setContacts] = useState(contactDataTranslations.en)

  useEffect(() => {
    setUi(uiTranslations[language as keyof typeof uiTranslations] || uiTranslations.en)
    setContacts(contactDataTranslations[language as keyof typeof contactDataTranslations] || contactDataTranslations.en)
  }, [language])

  const getIconComponent = (id: string) => {
    switch (id) {
      case "email":
        return Mail
      case "phone":
        return Phone
      case "location":
        return MapPin
      case "whatsapp":
        return MessageCircle
      case "github":
        return Github
      case "wechat":
        return MessageCircle
      default:
        return Mail
    }
  }

  const renderEmailCard = (contact: any) => {
    if (contact.id !== "email") return null

    return (
      <motion.div
        className="bg-white relative h-[300px] border-[3px] border-black overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{
          scale: hoveredItem === contact.id ? 1.03 : 1,
          opacity: 1,
          boxShadow: hoveredItem === contact.id ? "0 10px 30px rgba(0,0,0,0.2)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{
          scale: { duration: 0.3 },
          opacity: { duration: 0.5 },
          boxShadow: { duration: 0.3 },
        }}
      >
        {/* Simple Neoplasticist layout with clear content areas */}
        <div className="absolute inset-0">
          {/* Top section - Red background with icon */}
          <motion.div
            className="absolute top-0 left-0 w-1/4 h-1/4 bg-white border-r-[3px] border-b-[3px] border-black"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div className="absolute inset-0 flex items-center justify-center" whileHover={{ scale: 1.1 }}>
              <motion.div
                className="w-12 h-12 bg-black flex items-center justify-center"
                animate={{
                  rotate: hoveredItem === contact.id ? [0, 90, 180, 270, 360] : 0,
                }}
                transition={{
                  duration: hoveredItem === contact.id ? 1.5 : 0.3,
                  ease: "easeInOut",
                }}
              >
                <Mail className="w-7 h-7 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Top section - Title */}
          <motion.div
            className="absolute top-0 left-1/4 right-0 h-1/4"
            style={{ backgroundColor: PRIMARY_COLORS.red }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div className="absolute inset-0 flex items-center pl-6" whileHover={{ x: 10 }}>
              <motion.h3
                className="text-3xl font-mono font-bold tracking-wider text-white"
                animate={{
                  textShadow: hoveredItem === contact.id ? "2px 2px 0px rgba(0,0,0,0.5)" : "0px 0px 0px rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.3 }}
              >
                {contact.label}
              </motion.h3>
            </motion.div>
          </motion.div>

          {/* Middle section - White space */}
          <motion.div
            className="absolute top-1/4 left-0 right-0 h-1/4 bg-white border-y-[3px] border-black"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Decorative horizontal line */}
            <motion.div
              className="absolute left-0 top-1/2 w-full h-[1px] bg-black"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
          </motion.div>

          {/* Bottom section - Email value with high contrast */}
          <div className="absolute top-1/2 left-0 right-0 bottom-0 bg-white">
            {/* Yellow block on left */}
            <motion.div
              className="absolute top-0 left-0 w-1/3 h-1/2"
              style={{ backgroundColor: PRIMARY_COLORS.yellow }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{
                width: "40%",
                transition: { duration: 0.3 },
              }}
            ></motion.div>

            {/* Blue block on right */}
            <motion.div
              className="absolute top-0 right-0 w-1/3 h-1/2"
              style={{ backgroundColor: PRIMARY_COLORS.blue }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{
                width: "40%",
                transition: { duration: 0.3 },
              }}
            ></motion.div>

            {/* Email container with black background for maximum contrast */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1/2 bg-black flex items-center justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.p
                className="font-mono text-xl text-white px-4 py-2 bg-black border-2 border-white"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: hoveredItem === contact.id ? [-2, 2, -2] : 0,
                  scale: hoveredItem === contact.id ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.8 },
                  y: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                }}
                whileHover={{
                  backgroundColor: "#333",
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {contact.value}
              </motion.p>
            </motion.div>
          </div>

          {/* Vertical lines */}
          <motion.div
            className="absolute top-0 left-2/3 w-[3px] h-1/2 bg-black"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          ></motion.div>

          {/* Connection points */}
          <motion.div
            className="absolute left-1/4 top-1/4 w-3 h-3 bg-black rounded-full"
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              boxShadow: hoveredItem === contact.id ? "0 0 0 2px rgba(0,0,0,0.3)" : "none",
            }}
            transition={{
              scale: { duration: 0.5, delay: 0.9 },
              boxShadow: { duration: 0.3 },
            }}
          ></motion.div>

          <motion.div
            className="absolute right-1/3 top-1/2 w-3 h-3 bg-black rounded-full"
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              boxShadow: hoveredItem === contact.id ? "0 0 0 2px rgba(0,0,0,0.3)" : "none",
            }}
            transition={{
              scale: { duration: 0.5, delay: 1 },
              boxShadow: { duration: 0.3 },
            }}
          ></motion.div>

          {/* Animated decorative elements that appear on hover */}
          <AnimatePresence>
            {hoveredItem === contact.id && (
              <>
                <motion.div
                  className="absolute right-0 top-0 w-5 h-5 bg-black"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 45 }}
                  exit={{ scale: 0, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                <motion.div
                  className="absolute left-1/2 top-3/4 w-full h-[1px]"
                  style={{ backgroundColor: PRIMARY_COLORS.red }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0.3 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>

                <motion.div
                  className="absolute left-0 bottom-1/2 w-[1px] h-1/4"
                  style={{ backgroundColor: PRIMARY_COLORS.blue }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    )
  }

  const renderPhoneCard = (contact: any) => {
    if (contact.id !== "phone") return null

    return (
      <motion.div
        className="bg-white relative h-[300px] border-[3px] border-black overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{
          scale: hoveredItem === contact.id ? 1.03 : 1,
          opacity: 1,
          boxShadow: hoveredItem === contact.id ? "0 10px 30px rgba(0,0,0,0.2)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{
          scale: { duration: 0.3 },
          opacity: { duration: 0.5 },
          boxShadow: { duration: 0.3 },
        }}
      >
        {/* Main container with diagonal layout */}
        <div className="absolute inset-0">
          {/* Background diagonal stripes */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-[200%] h-[2px] bg-black origin-left"
              style={{ transform: "rotate(-35deg) translateY(50px)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
            <motion.div
              className="absolute top-0 left-0 w-[200%] h-[2px] bg-black origin-left"
              style={{ transform: "rotate(-35deg) translateY(150px)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </motion.div>

          {/* Icon container */}
          <motion.div
            className="absolute top-4 left-4 w-16 h-16"
            initial={{ x: -50, rotate: -90 }}
            animate={{ x: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              className="w-full h-full bg-black flex items-center justify-center"
              animate={{
                rotate: hoveredItem === contact.id ? [0, 360] : 0,
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <Phone className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Title "PHONE" */}
          <motion.div
            className="absolute top-6 left-24 right-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h3
              className="text-3xl font-mono font-bold tracking-wider"
              animate={{
                color: hoveredItem === contact.id ? PRIMARY_COLORS.blue : "black",
              }}
              transition={{ duration: 0.3 }}
            >
              {contact.label}
            </motion.h3>
          </motion.div>

          {/* Colored blocks */}
          <motion.div
            className="absolute top-[30%] left-0 w-1/2 h-[40%]"
            style={{ backgroundColor: PRIMARY_COLORS.blue }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          <motion.div
            className="absolute top-[40%] right-0 w-1/3 h-[30%]"
            style={{ backgroundColor: PRIMARY_COLORS.yellow }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          {/* Phone number container */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[40%] bg-black flex items-center justify-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              className="relative px-6 py-3 border-2 border-white"
              animate={{
                y: hoveredItem === contact.id ? [-2, 2, -2] : 0,
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <motion.p
                className="text-2xl font-mono font-bold text-white tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                {contact.value}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <AnimatePresence>
            {hoveredItem === contact.id && (
              <>
                <motion.div
                  className="absolute right-4 top-4 w-4 h-4"
                  style={{ backgroundColor: PRIMARY_COLORS.red }}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 45 }}
                  exit={{ scale: 0, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute left-[40%] top-[45%] w-2 h-2 rounded-full bg-black"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />

                <motion.div
                  className="absolute right-[30%] top-[60%] w-2 h-2 rounded-full bg-black"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                />
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    )
  }

  const renderLocationCard = (contact: any) => {
    if (contact.id !== "location") return null

    return (
      <motion.div
        className="bg-white relative h-[300px] border-[3px] border-black overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{
          scale: hoveredItem === contact.id ? 1.03 : 1,
          opacity: 1,
          boxShadow: hoveredItem === contact.id ? "0 10px 30px rgba(0,0,0,0.2)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{
          scale: { duration: 0.3 },
          opacity: { duration: 0.5 },
          boxShadow: { duration: 0.3 },
        }}
      >
        {/* Grid-based layout */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
          {/* Title and icon section - Top */}
          <div className="col-span-12 row-span-3 border-b-[3px] border-black bg-white relative flex items-center">
            {/* Icon */}
            <motion.div
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-black flex items-center justify-center"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: 45, transition: { duration: 0.3 } }}
            >
              <MapPin className="w-8 h-8 text-white" />
            </motion.div>

            {/* Title */}
            <motion.h3
              className="absolute left-24 top-1/2 -translate-y-1/2 text-3xl font-mono font-bold tracking-wider"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {contact.label}
            </motion.h3>

            {/* Yellow square */}
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10"
              style={{ backgroundColor: PRIMARY_COLORS.yellow }}
              initial={{ rotate: 45, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ rotate: 45, transition: { duration: 0.3 } }}
            />
          </div>

          {/* Map-like grid section */}
          <div className="col-span-8 row-span-6 relative">
            {/* Horizontal lines */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`h-line-${i}`}
                className="absolute w-full h-[1px] bg-black"
                style={{ top: `${(i + 1) * 20}%` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              />
            ))}

            {/* Vertical lines */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`v-line-${i}`}
                className="absolute h-full w-[1px] bg-black"
                style={{ left: `${(i + 1) * 25}%` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              />
            ))}

            {/* Location marker */}
            <motion.div
              className="absolute left-[62%] top-[38%]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-white border-2 border-black flex items-center justify-center"
                animate={{
                  scale: hoveredItem === contact.id ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <motion.div className="w-2 h-2 rounded-full" style={{ backgroundColor: PRIMARY_COLORS.red }} />
              </motion.div>
            </motion.div>
          </div>

          {/* Red block */}
          <div className="col-span-4 row-span-3 border-l-[3px] border-black relative">
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: PRIMARY_COLORS.red }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>

          {/* Blue block */}
          <div className="col-span-4 row-span-3 border-l-[3px] border-t-[3px] border-black relative">
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: PRIMARY_COLORS.blue }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>

          {/* Address container */}
          <div className="col-span-12 row-span-3 border-t-[3px] border-black bg-black relative">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.p
                className="text-xl font-mono text-white px-4 py-2 border-2 border-white max-w-[90%] text-center"
                animate={{
                  y: hoveredItem === contact.id ? [-2, 2, -2] : 0,
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                {contact.value}
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <AnimatePresence>
          {hoveredItem === contact.id && (
            <>
              <motion.div
                className="absolute left-[25%] top-[25%] w-2 h-2 rounded-full bg-black"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 1] }}
                exit={{ scale: 0 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute left-[50%] top-[50%] w-2 h-2 rounded-full bg-black"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 1] }}
                exit={{ scale: 0 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
              />
              <motion.div
                className="absolute left-[75%] top-[75%] w-2 h-2 rounded-full bg-black"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 1] }}
                exit={{ scale: 0 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }

  const renderWhatsAppCard = (contact: any) => {
    if (contact.id !== "whatsapp") return null

    return (
      <motion.div
        className="bg-white relative h-[300px] border-[3px] border-black overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{
          scale: hoveredItem === contact.id ? 1.03 : 1,
          opacity: 1,
          boxShadow: hoveredItem === contact.id ? "0 10px 30px rgba(0,0,0,0.2)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{
          scale: { duration: 0.3 },
          opacity: { duration: 0.5 },
          boxShadow: { duration: 0.3 },
        }}
      >
        {/* Main container with circular elements */}
        <div className="absolute inset-0">
          {/* Background pattern */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Horizontal lines */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`h-line-${i}`}
                className="absolute w-full h-[1px] bg-black opacity-20"
                style={{ top: `${i * 20}%` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              />
            ))}

            {/* Vertical lines */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`v-line-${i}`}
                className="absolute h-full w-[1px] bg-black opacity-20"
                style={{ left: `${i * 20}%` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              />
            ))}
          </div>

          {/* Header with title and icon */}
          <div className="absolute top-0 left-0 right-0 h-1/4 flex items-center">
            {/* Icon container */}
            <motion.div
              className="absolute left-4 w-16 h-16 rounded-full"
              style={{ backgroundColor: PRIMARY_COLORS.green }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-white"
                animate={{
                  rotate: hoveredItem === contact.id ? [0, 360] : 0,
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <WhatsAppIcon />
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="absolute left-24 text-3xl font-mono font-bold tracking-wider"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {contact.label}
            </motion.h3>
          </div>

          {/* Circular design elements */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-40 h-40 rounded-full border-[3px] border-black"
            style={{ x: "-50%", y: "-30%" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 w-24 h-24 rounded-full"
            style={{
              x: "-50%",
              y: "-30%",
              backgroundColor: PRIMARY_COLORS.yellow,
              opacity: 0.7,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          <motion.div
            className="absolute left-[20%] top-[60%] w-20 h-20 rounded-full"
            style={{ backgroundColor: PRIMARY_COLORS.blue, opacity: 0.7 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          <motion.div
            className="absolute right-[20%] top-[45%] w-16 h-16 rounded-full"
            style={{ backgroundColor: PRIMARY_COLORS.red, opacity: 0.7 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />

          {/* WhatsApp number container */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[30%] bg-black flex items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.div
              className="px-6 py-3 border-2 border-white"
              animate={{
                y: hoveredItem === contact.id ? [-2, 2, -2] : 0,
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              <motion.p
                className="text-2xl font-mono font-bold text-white tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                {contact.value}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Animated elements on hover */}
          <AnimatePresence>
            {hoveredItem === contact.id && (
              <>
                {/* Message bubbles */}
                <motion.div
                  className="absolute left-[30%] top-[40%] w-6 h-6 rounded-full bg-white border-2 border-black"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute left-[60%] top-[55%] w-4 h-4 rounded-full bg-white border-2 border-black"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />

                <motion.div
                  className="absolute left-[45%] top-[65%] w-3 h-3 rounded-full bg-white border-2 border-black"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                />

                {/* Pulse effect around main circle */}
                <motion.div
                  className="absolute left-1/2 top-1/2 w-40 h-40 rounded-full border-2 border-black"
                  style={{ x: "-50%", y: "-30%" }}
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.2, opacity: 0 }}
                  exit={{ scale: 1, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                />
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    )
  }

  const renderGitHubCard = (contact: any) => {
    if (contact.id !== "github") return null

    return (
      <motion.div
        className="bg-white relative h-[300px] border-[3px] border-black overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{
          scale: hoveredItem === contact.id ? 1.03 : 1,
          opacity: 1,
          boxShadow: hoveredItem === contact.id ? "0 10px 30px rgba(0,0,0,0.2)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{
          scale: { duration: 0.3 },
          opacity: { duration: 0.5 },
          boxShadow: { duration: 0.3 },
        }}
      >
        {/* Main container with code-like layout */}
        <div className="absolute inset-0">
          {/* Top section with icon and title */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/5 bg-black flex items-center"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon */}
            <motion.div
              className="absolute left-4 w-12 h-12 flex items-center justify-center"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="text-white"
                animate={{
                  rotate: hoveredItem === contact.id ? [0, 360] : 0,
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <GitHubIcon />
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="absolute left-20 text-2xl font-mono font-bold tracking-wider text-white"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {contact.label}
            </motion.h3>
          </motion.div>

          {/* Code-like pattern section */}
          <div className="absolute top-1/5 left-0 right-0 bottom-[30%] bg-white overflow-hidden">
            {/* Code lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`code-line-${i}`}
                className="absolute w-full h-[1px] bg-black opacity-20"
                style={{ top: `${(i + 1) * 12}%` }}
                initial={{ scaleX: 0, transformOrigin: i % 2 === 0 ? "left" : "right" }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              />
            ))}

            {/* Colored blocks representing code */}
            <motion.div
              className="absolute left-[5%] top-[15%] w-[30%] h-[8%]"
              style={{ backgroundColor: PRIMARY_COLORS.blue, opacity: 0.7 }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />

            <motion.div
              className="absolute left-[40%] top-[15%] w-[20%] h-[8%]"
              style={{ backgroundColor: PRIMARY_COLORS.red, opacity: 0.7 }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />

            <motion.div
              className="absolute left-[10%] top-[35%] w-[40%] h-[8%]"
              style={{ backgroundColor: PRIMARY_COLORS.yellow, opacity: 0.7 }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />

            <motion.div
              className="absolute left-[55%] top-[35%] w-[30%] h-[8%]"
              style={{ backgroundColor: PRIMARY_COLORS.blue, opacity: 0.7 }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />

            <motion.div
              className="absolute left-[20%] top-[55%] w-[60%] h-[8%]"
              style={{ backgroundColor: PRIMARY_COLORS.red, opacity: 0.7 }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />

            <motion.div
              className="absolute left-[15%] top-[75%] w-[25%] h-[8%]"
              style={{ backgroundColor: PRIMARY_COLORS.yellow, opacity: 0.7 }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />

            {/* Repository visualization */}
            <motion.div
              className="absolute right-[10%] top-[65%] w-16 h-16 border-2 border-black"
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.div
                className="absolute inset-[3px] bg-black"
                animate={{
                  scale: hoveredItem === contact.id ? [1, 0.9, 1] : 1,
                }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </div>

          {/* GitHub username container */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[30%] bg-black flex items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <motion.div
              className="px-6 py-3 border-2 border-white"
              animate={{
                y: hoveredItem === contact.id ? [-2, 2, -2] : 0,
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              <motion.p
                className="text-2xl font-mono font-bold text-white tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
              >
                {contact.value}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Animated elements on hover */}
          <AnimatePresence>
            {hoveredItem === contact.id && (
              <>
                {/* Commit dots */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`commit-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-black"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 15}%`,
                      opacity: 0.7,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 0.8, 1] }}
                    exit={{ scale: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                    }}
                  />
                ))}

                {/* Branch lines */}
                <motion.div
                  className="absolute left-[30%] top-[40%] w-[1px] h-[20%] bg-black opacity-50"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.5 }}
                />

                <motion.div
                  className="absolute left-[30%] top-[40%] w-[15%] h-[1px] bg-black opacity-50"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    )
  }

  const renderWeChatCard = (contact: any) => {
    if (contact.id !== "wechat") return null

    return (
      <motion.div
        className="bg-white relative h-[300px] border-[3px] border-black overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{
          scale: hoveredItem === contact.id ? 1.03 : 1,
          opacity: 1,
          boxShadow: hoveredItem === contact.id ? "0 10px 30px rgba(0,0,0,0.2)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{
          scale: { duration: 0.3 },
          opacity: { duration: 0.5 },
          boxShadow: { duration: 0.3 },
        }}
      >
        {/* Diseño inspirado en patrones geométricos asiáticos y burbujas de chat */}
        <div className="absolute inset-0">
          {/* Fondo con patrón de cuadrícula */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
            {[...Array(36)].map((_, i) => {
              const row = Math.floor(i / 6)
              const col = i % 6
              const isEven = (row + col) % 2 === 0
              return (
                <motion.div
                  key={`grid-${i}`}
                  className="border border-black/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isEven ? 0.05 : 0 }}
                  transition={{ duration: 0.5, delay: i * 0.01 }}
                />
              )
            })}
          </div>

          {/* Sección superior con título e icono */}
          <div className="absolute top-0 left-0 right-0 h-1/4 flex items-center">
            {/* Contenedor del icono */}
            <motion.div
              className="absolute left-4 w-16 h-16 rounded-full"
              style={{ backgroundColor: PRIMARY_COLORS.wechat }}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-white"
                animate={{
                  rotate: hoveredItem === contact.id ? [0, 360] : 0,
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <WeChatIcon />
              </motion.div>
            </motion.div>

            {/* Título */}
            <motion.h3
              className="absolute left-24 text-3xl font-mono font-bold tracking-wider"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {contact.label}
            </motion.h3>
          </div>

          {/* Elementos decorativos centrales */}
          <div className="absolute top-1/4 left-0 right-0 bottom-[30%]">
            {/* Patrón de burbujas de chat superpuestas */}
            <motion.div
              className="absolute left-[10%] top-[10%] w-32 h-32 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-sm border-2 border-black"
              style={{ backgroundColor: PRIMARY_COLORS.yellow, opacity: 0.7 }}
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />

            <motion.div
              className="absolute right-[15%] top-[25%] w-24 h-24 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-sm border-2 border-black"
              style={{ backgroundColor: PRIMARY_COLORS.blue, opacity: 0.7 }}
              initial={{ scale: 0, rotate: 10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />

            <motion.div
              className="absolute left-[25%] bottom-[10%] w-20 h-20 rounded-tl-3xl rounded-tr-sm rounded-br-3xl rounded-bl-3xl border-2 border-black"
              style={{ backgroundColor: PRIMARY_COLORS.red, opacity: 0.7 }}
              initial={{ scale: 0, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />

            {/* Caracteres chinos estilizados (simplificados como bloques) */}
            <motion.div
              className="absolute left-[30%] top-[20%] w-6 h-12 bg-black"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />

            <motion.div
              className="absolute left-[40%] top-[20%] w-10 h-2 bg-black"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />

            <motion.div
              className="absolute right-[30%] top-[40%] w-8 h-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="w-full h-2 bg-black mb-2"></div>
              <div className="w-full h-2 bg-black mb-2"></div>
              <div className="w-full h-2 bg-black"></div>
            </motion.div>
          </div>

          {/* Contenedor del ID de WeChat */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[30%] bg-black flex items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.div
              className="px-6 py-3 border-2 border-white"
              animate={{
                y: hoveredItem === contact.id ? [-2, 2, -2] : 0,
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              <motion.p
                className="text-2xl font-mono font-bold text-white tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
              >
                {contact.value}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Elementos animados al hacer hover */}
          <AnimatePresence>
            {hoveredItem === contact.id && (
              <>
                {/* Puntos de conexión */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`dot-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-black"
                    style={{
                      left: `${15 + i * 10}%`,
                      top: `${20 + (i % 4) * 15}%`,
                      opacity: 0.6,
                    }}
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1, 0.8, 1],
                      x: [0, i % 2 === 0 ? 5 : -5, 0],
                    }}
                    exit={{ scale: 0 }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1,
                    }}
                  />
                ))}

                {/* Líneas de conexión */}
                <motion.div
                  className="absolute left-[20%] top-[50%] w-[60%] h-[1px] bg-black opacity-30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* QR Code esquemático */}
                <motion.div
                  className="absolute right-[15%] bottom-[40%] w-16 h-16 border border-black"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.7, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
                    {[...Array(16)].map((_, i) => (
                      <motion.div
                        key={`qr-${i}`}
                        className={`${i % 3 === 0 ? "bg-black" : ""}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: i * 0.02 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-white">
      {/* Title section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div className="mb-20">
          <h2 className="text-center">
            <motion.div className="inline-block relative">
              {ui.title.split("+").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block text-8xl md:text-9xl font-mono font-bold"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.1,
                  }}
                  style={{
                    color: Object.values(PRIMARY_COLORS)[i % 3],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </h2>
        </motion.div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredItem(contact.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              {contact.id === "email" ? (
                renderEmailCard(contact)
              ) : contact.id === "phone" ? (
                renderPhoneCard(contact)
              ) : contact.id === "location" ? (
                renderLocationCard(contact)
              ) : contact.id === "whatsapp" ? (
                renderWhatsAppCard(contact)
              ) : contact.id === "github" ? (
                renderGitHubCard(contact)
              ) : contact.id === "wechat" ? (
                renderWeChatCard(contact)
              ) : (
                // Temporary simplified version for remaining cards
                <div className="bg-white h-[300px] border-2 border-black p-4">
                  <h3>{contact.label}</h3>
                  <p>{contact.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20">
        <Footer setActiveSection={setActiveSection} />
      </div>
    </div>
  )
}

