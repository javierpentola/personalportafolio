"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import enProjects from "@/data/featuredProjects/en"
import esProjects from "@/data/featuredProjects/es"
import zhProjects from "@/data/featuredProjects/zh"
import itProjects from "@/data/featuredProjects/it"
import frProjects from "@/data/featuredProjects/fr"

const projectTranslations = { en: enProjects, es: esProjects, zh: zhProjects, it: itProjects, fr: frProjects }

export function FeaturedProjects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()

  const projects = projectTranslations[language as keyof typeof projectTranslations] || enProjects

  const nextProject = () => {
    setSlideDirection(1)
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setCurrentSlide(0)
  }

  const prevProject = () => {
    setSlideDirection(-1)
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setCurrentSlide(0)
  }

  const nextSlide = () => {
    setSlideDirection(1)
    setCurrentSlide((prev) => (prev + 1) % projects[currentProject].slides.length)
  }

  const prevSlide = () => {
    setSlideDirection(-1)
    setCurrentSlide(
      (prev) => (prev - 1 + projects[currentProject].slides.length) % projects[currentProject].slides.length,
    )
  }

  const project = projects[currentProject]

  // El resto del componente permanece igual, solo asegúrate de usar 'project' en lugar de acceder directamente a 'projects[currentProject]'

  return (
    <div className="min-h-screen bg-[#F5F5EB] relative overflow-x-hidden" ref={containerRef}>
      {/* El contenido existente permanece igual */}
      {/* ... */}

      {/* Asegúrate de que todas las referencias a 'projects[currentProject]' se cambien a 'project' */}
      {/* Por ejemplo: */}
      <h2 className="text-5xl font-mono font-bold mb-4 relative">
        {project.title.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            whileHover={{
              y: Math.sin(index) * 10,
              color: project.color.primary,
              transition: { duration: 0.2 },
            }}
          >
            {char}
          </motion.span>
        ))}
      </h2>

      {/* ... continúa con el resto del componente ... */}
    </div>
  )
}

