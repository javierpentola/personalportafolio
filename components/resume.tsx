"use client"

import { motion, useScroll } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Download, ChevronRight, Languages } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import enUI from "../data/resumeUI/en"
import esUI from "../data/resumeUI/es"
import zhUI from "../data/resumeUI/zh"
import itUI from "../data/resumeUI/it"
import frUI from "../data/resumeUI/fr"
import enEducation from "../data/education/en"
import esEducation from "../data/education/es"
import zhEducation from "../data/education/zh"
import itEducation from "../data/education/it"
import frEducation from "../data/education/fr"
import enExperience from "../data/experience/en"
import esExperience from "../data/experience/es"
import zhExperience from "../data/experience/zh"
import itExperience from "../data/experience/it"
import frExperience from "../data/experience/fr"
import { Footer } from "./footer"

interface ResumeUI {
  cv: string
  title: string
  downloadPDF: string
  position: string
  secondaryPosition: string
  experience: string
  years: string
  experiencePoint1: string
  experiencePoint2: string
  experiencePoint3: string
  skillsTitle: string
  education: string
  degree: string
  degreeDescription: string
  skills: string[]
  experienceCompany1: string
  experienceCompany2: string
  experiencePeriod1: string
  experiencePeriod2: string
  educationInstitution: string
  educationPeriod: string
  viewDiploma: string
  languages?: string  // Make optional with ?
  viewCertificate?: string  // Make optional with ?
}

const uiTranslations: Record<string, ResumeUI> = { en: enUI, es: esUI, zh: zhUI, it: itUI, fr: frUI }
const educationData: Record<string, any> = {
  en: enEducation,
  es: esEducation,
  zh: zhEducation,
  it: itEducation,
  fr: frEducation,
}
const experienceData: Record<string, any> = {
  en: enExperience,
  es: esExperience,
  zh: zhExperience,
  it: itExperience,
  fr: frExperience,
}

export function Resume() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const [isDownloadHovered, setIsDownloadHovered] = useState(false)
  const { language } = useLanguage()
  const [ui, setUi] = useState(uiTranslations.en)
  const [education, setEducation] = useState(educationData.en)
  const [experience, setExperience] = useState(experienceData.en)

  useEffect(() => {
    setUi(uiTranslations[language as keyof typeof uiTranslations] || uiTranslations.en)
    setEducation(educationData[language as keyof typeof educationData] || educationData.en)
    setExperience(experienceData[language as keyof typeof experienceData] || experienceData.en)
  }, [language])

  const handleDownloadClick = () => {
    window.open("https://www.google.com", "_blank", "noopener,noreferrer")
  }

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Photoshop",
    "MySQL",
    "Tailwind CSS",
    "Adobe XD",
    "Git",
    "HTML",
    "CSS",
    "UI/UX",
    "Agile",
    "Node.js",
    "Design",
  ]

  const experienceYears = 2
  const progressCircle = Array.from({ length: experienceYears })

  return (
    <>
      <div
        ref={containerRef}
        className="min-h-screen bg-[#F5F5EB] relative overflow-hidden py-12 sm:py-20 px-4 sm:px-6"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute font-mono font-bold text-black"
              style={{
                fontSize: `${Math.random() * 100 + 100}px`,
                left: `${(i * 20) % 100}%`,
                top: `${Math.floor(i / 5) * 25}%`,
                opacity: 0.1,
              }}
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {ui.cv}
            </motion.div>
          ))}
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.h1
                className="text-6xl sm:text-8xl md:text-9xl font-mono font-bold text-center mb-6"
                animate={{
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                {ui.title}
              </motion.h1>

              {/* Download button */}
              <motion.div className="flex justify-center">
                <motion.button
                  className="group relative bg-black text-white px-4 sm:px-8 py-2 sm:py-4 font-mono text-base sm:text-xl flex items-center gap-2 sm:gap-4 cursor-pointer"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                  }}
                  onClick={handleDownloadClick}
                  onMouseEnter={() => setIsDownloadHovered(true)}
                  onMouseLeave={() => setIsDownloadHovered(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-6 h-6" />
                  <span>{ui.downloadPDF}</span>
                  <motion.div
                    className="absolute inset-0 bg-[#E53935]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isDownloadHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0, zIndex: -1 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left column */}
            <div className="space-y-12">
              {/* Title section */}
              <motion.div
                className="bg-black p-8 relative overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                }}
              >
                <motion.h2
                  className="text-[#FDD835] text-4xl font-mono font-bold mb-4"
                  animate={{
                    x: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  {ui.position}
                </motion.h2>
                <motion.h3
                  className="text-white text-2xl font-mono"
                  animate={{
                    x: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.2,
                  }}
                >
                  {ui.secondaryPosition}
                </motion.h3>
              </motion.div>

              {/* Experience section */}
              <div className="space-y-6">
                <h3 className="text-3xl font-mono font-bold">{ui.experience}</h3>
                <div className="flex items-center gap-4 mb-4">
                  {progressCircle.map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <motion.div
                        className="w-6 h-6 bg-[#E53935] rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-6">
                  {experience.map((exp: any, index: number) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-xl font-mono font-bold">{exp.company}</h4>
                      <p className="font-mono text-gray-600">{exp.period}</p>
                      <p className="font-mono text-sm text-gray-700 mt-2">{exp.position}</p>
                      <ul className="space-y-1 mt-2">
                        {exp.responsibilities.map((resp: string, i: number) => (
                          <li key={i} className="text-sm font-mono flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-[#E53935] mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-12">
              {/* Skills section */}
              <div>
                <h3 className="text-3xl font-mono font-bold mb-6">{ui.skillsTitle}</h3>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      className="relative text-sm sm:text-base"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div
                        className="bg-black text-white px-2 sm:px-4 py-1 sm:py-2 font-mono"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                        }}
                      >
                        {skill}
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-[#E53935] -z-10"
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education section */}
              <div>
                <h3 className="text-3xl font-mono font-bold mb-6">{ui.education}</h3>
                <div className="space-y-6">
                  {education.degrees.map((degree: any, index: number) => (
                    <motion.div
                      key={index}
                      className="bg-black p-4 sm:p-6 text-white relative overflow-hidden"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <motion.div
                        className="absolute top-0 right-0 w-24 h-24"
                        style={{
                          background: `linear-gradient(45deg, transparent 50%, ${degree.color} 50%)`,
                        }}
                      />
                      <h4 className="text-xl font-mono font-bold mb-2">{degree.degree}</h4>
                      <p className="font-mono text-gray-400 mb-2">{degree.institution}</p>
                      <p className="font-mono text-gray-400 mb-4">{degree.period}</p>

                      {degree.diploma && education.diplomaData[degree.diploma] && (
                        <p className="font-mono text-sm text-gray-300 mt-2">
                          {education.diplomaData[degree.diploma].caption}
                        </p>
                      )}
                    </motion.div>
                  ))}

                  {/* Languages section */}
                  <h3 className="text-3xl font-mono font-bold mt-10 mb-6 flex items-center gap-2">
                    <Languages className="w-8 h-8" />
                    {ui.languages || "LANGUAGES"}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {education.languages.map((language: any, index: number) => (
                      <motion.div
                        key={index}
                        className="bg-black p-4 text-white relative overflow-hidden"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                        }}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="text-lg font-mono font-bold">{language.name}</h4>
                        <p className="font-mono text-gray-400">{language.level}</p>

                        <motion.div
                          className="absolute bottom-0 left-0 h-1 w-full"
                          style={{ backgroundColor: language.color }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-black/10"
                style={{
                  top: `${(i * 100) / 5}%`,
                  transform: `rotate(${45 + i * 15}deg)`,
                }}
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

