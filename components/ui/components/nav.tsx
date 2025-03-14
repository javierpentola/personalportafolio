"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Mail, Phone, Copy, Check } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import enContent from "../data/navContent/en"
import esContent from "../data/navContent/es"
import zhContent from "../data/navContent/zh"
import itContent from "../data/navContent/it"
import frContent from "../data/navContent/fr"

const contentTranslations = { en: enContent, es: esContent, zh: zhContent, it: itContent, fr: frContent }

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

interface NavProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function Nav({ activeSection, setActiveSection }: NavProps) {
  const [showProjectsSubmenu, setShowProjectsSubmenu] = useState(false)
  const [showCurriculumSubmenu, setShowCurriculumSubmenu] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const content = contentTranslations[language as keyof typeof contentTranslations] || contentTranslations.en

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

  // Add this effect to handle expanding the submenu when activeSection changes
  useEffect(() => {
    // If the active section is projects-design, expand the projects submenu
    if (activeSection === "projects-design") {
      setShowProjectsSubmenu(true)
    }
    // If the active section is education, expand the curriculum submenu
    else if (activeSection === "education") {
      setShowCurriculumSubmenu(true)
    }
  }, [activeSection])

  const handleSubmenuClick = (id: string) => {
    if (id === "projects") {
      setShowProjectsSubmenu(!showProjectsSubmenu)
      setShowCurriculumSubmenu(false)
      if (!showProjectsSubmenu) {
        setActiveSection("projects-design")
      }
    } else if (id === "curriculum") {
      setShowCurriculumSubmenu(!showCurriculumSubmenu)
      setShowProjectsSubmenu(false)
      if (!showCurriculumSubmenu) {
        setActiveSection("education")
      }
    } else {
      setActiveSection(id)
      setShowProjectsSubmenu(false)
      setShowCurriculumSubmenu(false)
    }
  }

  const navItems = content?.menuItems?.map((item) => ({
    ...item,
    chars: item.label.split(""),
    angle: Math.random() * 10 - 5,
    submenu: item.submenu?.map((subitem) => ({
      ...subitem,
      chars: subitem.label.split(""),
      angle: Math.random() * 6 - 3,
    })),
  }))

  const languages = [
    { code: "en", label: "English", angle: -8 },
    { code: "es", label: "Español", angle: 8 },
    { code: "zh", label: "中文", angle: -5 },
    { code: "it", label: "Italiano", angle: 5 },
    { code: "fr", label: "Français", angle: -7 },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-0 right-0 z-50 lg:hidden p-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-3 bg-black rounded-full">
          {isMenuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed right-0 top-0 h-screen w-72 bg-[#F5F5EB] text-black z-40 flex-col overflow-hidden border-l-2 border-black">
        {/* Bauhaus-inspired background patterns */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`grid-${i}`}
                className="absolute h-px bg-black w-full"
                style={{ top: `${(i * 100) / 20}%` }}
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`grid-v-${i}`}
                className="absolute w-px bg-black h-full"
                style={{ left: `${(i * 100) / 10}%` }}
              />
            ))}
          </div>

          {/* Decorative shapes */}
          <motion.div
            className="absolute top-20 right-4 w-32 h-32"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="absolute inset-0 border-2 border-[#E53935] rounded-full opacity-10" />
          </motion.div>

          <motion.div
            className="absolute bottom-40 left-4 w-24 h-24"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0 bg-[#1E88E5] opacity-5"
              style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
            />
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-8 w-16 h-16"
            animate={{
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-[#FDD835] opacity-5" />
          </motion.div>
        </div>

        {/* Header with playful Bauhaus-inspired design */}
        <div className="relative p-4 border-b-2 border-black">
          {" "}
          {/* Reducir el padding */}
          {/* Background patterns */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-12 h-12 border-2 border-[#E53935]"
              animate={{
                rotate: [0, 180, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-8 h-8 bg-[#1E88E5]"
              animate={{
                rotate: [0, -180, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute top-1/2 right-4 w-6 h-6"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-[#FDD835] rounded-full opacity-20" />
            </motion.div>
          </div>
          {/* Centered name with playful animations */}
          <div className="relative flex flex-col items-center justify-center h-24">
            {" "}
            {/* Reducir la altura */}
            <motion.div
              className="absolute inset-0 border-2 border-black"
              animate={{
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            {/* Technical drawing marks */}
            <motion.div className="absolute -left-2 -top-2 w-4 h-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="absolute top-0 left-1/2 h-full w-px bg-black opacity-20" />
              <div className="absolute left-0 top-1/2 w-full h-px bg-black opacity-20" />
            </motion.div>
            <motion.div
              className="absolute -right-2 -bottom-2 w-4 h-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="absolute top-0 left-1/2 h-full w-px bg-black opacity-20" />
              <div className="absolute left-0 top-1/2 w-full h-px bg-black opacity-20" />
            </motion.div>
            {/* Playful name display */}
            <motion.div className="flex flex-col items-center">
              <motion.span
                className="block text-2xl font-mono font-bold"
                animate={{
                  y: [0, -5, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                JAVIER
              </motion.span>
              <motion.span
                className="block text-2xl font-mono font-bold text-[#E53935]"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [5, -5, 5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                GRACIA
              </motion.span>
              <motion.span
                className="block text-2xl font-mono font-bold"
                animate={{
                  y: [0, 5, 0],
                  rotate: [5, -5, 5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                PÉREZ
              </motion.span>
            </motion.div>
            {/* Playful geometric shapes */}
            <motion.div
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="w-full h-full border-2 border-[#1E88E5] rounded-full" />
            </motion.div>
            <motion.div
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8"
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div
                className="w-full h-full border-2 border-[#E53935]"
                style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
              />
            </motion.div>
            {/* Interactive elements */}
            <motion.div className="absolute inset-0 cursor-pointer" whileHover="hover">
              <motion.div
                className="absolute inset-0 bg-black opacity-0"
                variants={{
                  hover: {
                    opacity: 0.05,
                    transition: { duration: 0.3 },
                  },
                }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-transparent"
                variants={{
                  hover: {
                    borderColor: "#FDD835",
                    rotate: 5,
                    transition: { duration: 0.3 },
                  },
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Redesigned Navigation Menu */}
        <div className="flex-1 overflow-y-auto relative">
          {/* Ajustar el contenedor del menú principal para manejar mejor el scroll */}
          {/* Bauhaus-inspired background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: `url(${"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1315125488-612x612%20(1).jpg-Iq7vHLDWAAR2ONsLBpDLw5VRRwS311.jpeg"}) center/cover no-repeat, linear-gradient(45deg, #E53935, #1E88E5)`,
                mixBlendMode: "multiply",
                opacity: 0.1,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
          </div>
          {/* Menu Items */}
          <ul className="relative z-10 p-4 space-y-1 pb-20">
            {/* Añadir padding bottom para evitar que el contenido se corte */}
            {navItems?.map((item, index) => (
              <li key={item.id} className="relative">
                <motion.button
                  onClick={() => handleSubmenuClick(item.id)}
                  className={`w-full group relative overflow-hidden ${
                    activeSection === item.id ||
                    (item.submenu && item.submenu.some((subitem) => subitem.id === activeSection))
                      ? "text-[#E53935]"
                      : "text-black"
                  }`}
                  whileHover={{ x: 10 }}
                >
                  {/* Diagonal background line */}
                  <motion.div
                    className="absolute inset-0 bg-black/5 -skew-x-12 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Menu item content */}
                  <div className="relative px-3 py-2 font-mono text-lg font-bold">
                    {/* Reducir el padding */}
                    <div className="flex items-center space-x-1.5">
                      {/* Reducir el espacio entre elementos */}
                      {/* Geometric shape indicator */}
                      <motion.div
                        className={`w-3 h-3 ${
                          activeSection === item.id ? "bg-[#E53935]" : "bg-black"
                        } transform rotate-45`}
                        animate={
                          activeSection === item.id
                            ? {
                                rotate: [45, 90, 45],
                                scale: [1, 1.2, 1],
                              }
                            : { rotate: 45 }
                        }
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                      {/* Animated text */}
                      <div className="flex items-baseline space-x-1">
                        {item.chars.map((char, charIndex) => (
                          <motion.span
                            key={charIndex}
                            className="inline-block"
                            whileHover={{
                              y: Math.sin(charIndex) * 5,
                              rotate: item.angle,
                              transition: { duration: 0.2 },
                            }}
                            style={{
                              color:
                                char === "+" || char === "×" || char === "=" || char === "/" || char === "⚡"
                                  ? "#FDD835"
                                  : "inherit",
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    {/* Hover line effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-current"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </motion.button>

                {/* Submenu */}
                {(item.id === "projects" && showProjectsSubmenu) ||
                (item.id === "curriculum" && showCurriculumSubmenu) ? (
                  <motion.ul
                    className="pl-6 space-y-1 relative my-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    {/* Decorative vertical line */}
                    <motion.div
                      className="absolute left-2 top-0 w-px h-full bg-black/20"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {item.submenu?.map((subitem) => (
                      <motion.li key={subitem.id} className="relative">
                        <motion.button
                          onClick={() => {
                            setActiveSection(subitem.id)
                            setIsMenuOpen(false)
                          }}
                          className={`relative px-3 py-1.5 font-mono text-sm font-bold ${
                            activeSection === subitem.id ? "text-[#E53935]" : "text-black"
                          }`}
                          whileHover={{ x: 5 }}
                        >
                          {/* Submenu item content */}
                          <div className="flex items-center space-x-2">
                            <motion.div
                              className={`w-2 h-2 ${
                                activeSection === subitem.id ? "bg-[#E53935]" : "bg-black"
                              } rounded-full`}
                              whileHover={{ scale: 1.5 }}
                            />
                            <div className="flex items-baseline space-x-1">
                              {subitem.chars.map((char, charIndex) => (
                                <motion.span
                                  key={charIndex}
                                  className="inline-block"
                                  whileHover={{
                                    y: Math.sin(charIndex) * 3,
                                    rotate: subitem.angle,
                                  }}
                                  style={{
                                    color:
                                      char === "+" || char === "×" || char === "=" || char === "/" || char === "⚡"
                                        ? "#FDD835"
                                        : "inherit",
                                  }}
                                >
                                  {char}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </motion.button>
                      </motion.li>
                    ))}
                  </motion.ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Icons */}
        <div className="px-4 py-3 border-t-2 border-black bg-[#F5F5EB]">
          <h3 className="font-mono text-sm font-bold mb-2 text-black/70">Contact</h3>
          <div className="flex justify-between space-x-2">
            {contactIcons.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.button
                  onClick={item.action}
                  className="block relative"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="p-2 rounded-md shadow-sm overflow-hidden relative"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.component className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="sr-only">{item.label}</span>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Email display */}
          <motion.div
            className="mt-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: showEmail ? "auto" : 0,
              opacity: showEmail ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {showEmail && (
              <motion.div
                className="bg-[#E53935] text-white px-2 py-1 rounded-md shadow-sm flex items-center space-x-1 text-xs"
                initial={{ y: -5 }}
                animate={{ y: 0 }}
              >
                <span className="font-mono truncate">{email}</span>
                <motion.button
                  onClick={() => copyToClipboard(email, "email")}
                  className="p-1 rounded-full bg-white/20 hover:bg-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied === "email" ? (
                    <Check className="w-3 h-3 text-white" />
                  ) : (
                    <Copy className="w-3 h-3 text-white" />
                  )}
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* Phone display */}
          <motion.div
            className="mt-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: showPhone ? "auto" : 0,
              opacity: showPhone ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {showPhone && (
              <motion.div
                className="bg-[#1E88E5] text-white px-2 py-1 rounded-md shadow-sm flex items-center space-x-1 text-xs"
                initial={{ y: -5 }}
                animate={{ y: 0 }}
              >
                <span className="font-mono truncate">{phone}</span>
                <motion.button
                  onClick={() => copyToClipboard(phone, "phone")}
                  className="p-1 rounded-full bg-white/20 hover:bg-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied === "phone" ? (
                    <Check className="w-3 h-3 text-white" />
                  ) : (
                    <Copy className="w-3 h-3 text-white" />
                  )}
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* WeChat display */}
          <motion.div
            className="mt-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: showWeChat ? "auto" : 0,
              opacity: showWeChat ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {showWeChat && (
              <motion.div
                className="bg-[#09B83E] text-white px-2 py-1 rounded-md shadow-sm flex items-center space-x-1 text-xs"
                initial={{ y: -5 }}
                animate={{ y: 0 }}
              >
                <span className="font-mono truncate">{wechatId}</span>
                <motion.button
                  onClick={() => copyToClipboard(wechatId, "wechat")}
                  className="p-1 rounded-full bg-white/20 hover:bg-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied === "wechat" ? (
                    <Check className="w-3 h-3 text-white" />
                  ) : (
                    <Copy className="w-3 h-3 text-white" />
                  )}
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Language switcher with Bauhaus-inspired design */}
        <div className="mt-auto p-4 border-t-2 border-black bg-[#F5F5EB]">
          <motion.div
            className="grid grid-cols-5 gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                onClick={() => setLanguage(lang.code as "en" | "es" | "zh" | "it" | "fr")}
                className={`group relative h-12 font-mono text-sm font-bold overflow-hidden
                  ${
                    language === lang.code ? "bg-black text-white" : "bg-transparent text-black border-2 border-black"
                  }`}
                whileHover={{ scale: 1.05 }}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                }}
              >
                {/* Background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: language === lang.code ? 1 : 0,
                    background: `repeating-linear-gradient(
                      ${45 + index * 15}deg,
                      #000,
                      #000 2px,
                      transparent 2px,
                      transparent 8px
                    )`,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Language code with animated characters */}
                <div className="relative z-10 flex items-center justify-center gap-0.5">
                  {lang.code
                    .toUpperCase()
                    .split("")
                    .map((char, i) => (
                      <motion.span
                        key={i}
                        animate={
                          language === lang.code
                            ? {
                                y: [0, -2, 0],
                                transition: {
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: i * 0.1,
                                },
                              }
                            : {}
                        }
                      >
                        {char}
                      </motion.span>
                    ))}
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-[#E53935]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Mobile Navigation (simplified Bauhaus style) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed inset-0 bg-[#F5F5EB] z-40 lg:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex-1 overflow-y-auto p-8 pt-20">
              {/* Mobile language switcher */}
              <div className="p-8 border-t-2 border-black">
                {/* Mobile Contact Icons */}
                <div className="mb-8 pb-4 border-b border-black/10">
                  <h3 className="font-mono text-xl font-bold mb-4 text-black/70">Contact</h3>
                  <div className="flex justify-start space-x-4">
                    {contactIcons.map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <motion.button
                          onClick={item.action}
                          className="block relative"
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="p-3 rounded-md shadow-md overflow-hidden relative"
                            style={{ backgroundColor: item.color }}
                          >
                            <item.component className="w-6 h-6 text-white" />
                          </motion.div>
                          <span className="sr-only">{item.label}</span>
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile contact info displays */}
                  <div className="mt-4">
                    {showEmail && (
                      <motion.div
                        className="bg-[#E53935] text-white px-3 py-2 rounded-md shadow-md flex items-center space-x-2 mb-2"
                        initial={{ y: -5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        <span className="font-mono truncate">{email}</span>
                        <motion.button
                          onClick={() => copyToClipboard(email, "email")}
                          className="p-1 rounded-full bg-white/20 hover:bg-white/30"
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

                    {showPhone && (
                      <motion.div
                        className="bg-[#1E88E5] text-white px-3 py-2 rounded-md shadow-md flex items-center space-x-2 mb-2"
                        initial={{ y: -5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        <span className="font-mono truncate">{phone}</span>
                        <motion.button
                          onClick={() => copyToClipboard(phone, "phone")}
                          className="p-1 rounded-full bg-white/20 hover:bg-white/30"
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

                    {showWeChat && (
                      <motion.div
                        className="bg-[#09B83E] text-white px-3 py-2 rounded-md shadow-md flex items-center space-x-2 mb-2"
                        initial={{ y: -5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        <span className="font-mono truncate">{wechatId}</span>
                        <motion.button
                          onClick={() => copyToClipboard(wechatId, "wechat")}
                          className="p-1 rounded-full bg-white/20 hover:bg-white/30"
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
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as "en" | "es" | "zh" | "it" | "fr")
                        setIsMenuOpen(false)
                      }}
                      className={`h-12 font-mono relative overflow-hidden
                      ${language === lang.code ? "bg-black text-white" : "bg-transparent text-black border-2 border-black"}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="relative z-10">{lang.code.toUpperCase()}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
              {/* Mobile menu items */}
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <motion.button
                      onClick={() => handleSubmenuClick(item.id)}
                      className={`font-mono text-2xl transition-colors relative
                        ${
                          activeSection === item.id ||
                          (item.submenu && item.submenu.some((subitem) => subitem.id === activeSection))
                            ? "text-[#E53935]"
                            : "hover:text-[#1E88E5]"
                        }`}
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex items-center space-x-2">
                        {item.label.split("").map((char, index) => (
                          <motion.span
                            key={index}
                            className="inline-block"
                            whileHover={{
                              y: Math.sin(index) * 5,
                              rotate: Math.random() * 30 - 15,
                            }}
                            style={{
                              color:
                                char === "+" || char === "×" || char === "=" || char === "/" || char === "⚡"
                                  ? "#FDD835"
                                  : "inherit",
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </div>
                    </motion.button>

                    {((item.id === "projects" && showProjectsSubmenu) ||
                      (item.id === "curriculum" && showCurriculumSubmenu)) && (
                      <motion.ul
                        className="mt-4 ml-8 space-y-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        {item.submenu?.map((subitem) => (
                          <li key={subitem.id}>
                            <motion.button
                              onClick={() => {
                                setActiveSection(subitem.id)
                                setIsMenuOpen(false)
                              }}
                              className={`font-mono text-xl transition-colors
                                ${activeSection === subitem.id ? "text-[#E53935]" : "hover:text-[#1E88E5]"}`}
                              whileHover={{ x: 5 }}
                            >
                              {subitem.label}
                            </motion.button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

