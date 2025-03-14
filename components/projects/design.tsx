"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronRight, Plus, Minus, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Footer } from "../footer"

// Import UI translations
import enUI from "@/data/designProjectsUI/en"
import esUI from "@/data/designProjectsUI/es"
import zhUI from "@/data/designProjectsUI/zh"
import itUI from "@/data/designProjectsUI/it"
import frUI from "@/data/designProjectsUI/fr"

// Import project data
import enProjects from "@/data/designProjects/en"
import esProjects from "@/data/designProjects/es"
import zhProjects from "@/data/designProjects/zh"
import itProjects from "@/data/designProjects/it"
import frProjects from "@/data/designProjects/fr"

const uiTranslations = { en: enUI, es: esUI, zh: zhUI, it: itUI, fr: frUI }
const projectTranslations = { en: enProjects, es: esProjects, zh: zhProjects, it: itProjects, fr: frProjects }

export function DesignProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const { language } = useLanguage()
  const [ui, setUi] = useState(uiTranslations.en)
  const [projects, setProjects] = useState(projectTranslations.en)

  useEffect(() => {
    setUi(uiTranslations[language as keyof typeof uiTranslations] || uiTranslations.en)
    setProjects(projectTranslations[language as keyof typeof projectTranslations] || projectTranslations.en)
  }, [language])

  const filteredProjects = projects.filter(
    (project) =>
      (activeCategory === "all" || project.category === activeCategory) &&
      (project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))),
  )

  return (
    <>
      <div className="min-h-screen p-8">
        {/* Search input */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative border-2 border-black transform -skew-x-12 overflow-hidden">
            <div className="transform skew-x-12">
              <input
                type="text"
                placeholder={ui.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-transparent font-mono text-xl focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(ui.filterButtons).map(([key, label]) => (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`relative px-6 py-3 font-mono text-lg border-2 border-black ${
                  activeCategory === key ? "bg-black text-white" : "bg-white text-black"
                }`}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                }}
                whileHover={{ scale: 1.05 }}
              >
                {label}
                <motion.div
                  className="absolute inset-0 bg-[#E53935] mix-blend-multiply"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: activeCategory === key ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <motion.div
                  className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Imagen del proyecto */}
                  <div className="w-full h-48 relative">
                    <Image
                      src={project.image || `/placeholder.svg?height=300&width=500`}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <motion.h3 className="text-2xl font-mono font-bold" whileHover={{ x: 10 }}>
                          {project.title}
                        </motion.h3>
                        <p className="text-sm font-mono text-gray-600">{project.year}</p>
                      </div>
                      <motion.button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        whileHover={{ rotate: 180 }}
                        className="text-black"
                      >
                        {expandedProject === project.id ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                      </motion.button>
                    </div>

                    <motion.div
                      className="h-1 mb-4"
                      style={{ backgroundColor: project.color }}
                      whileHover={{ width: "100%" }}
                      initial={{ width: "20%" }}
                    />

                    <p className="font-mono text-gray-600 mb-4">{project.description}</p>

                    <AnimatePresence>
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4"
                        >
                          {/* Technologies */}
                          <div className="space-y-2">
                            <h4 className="font-mono font-bold">{ui.technologies}</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <motion.span
                                  key={tech}
                                  className="px-2 py-1 text-xs font-mono bg-black text-white"
                                  style={{
                                    clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                                  }}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Collaborators */}
                          <div className="space-y-2">
                            <h4 className="font-mono font-bold">{ui.collaborators}</h4>
                            <div className="space-y-1">
                              {project.collaborators.map((collaborator) => (
                                <motion.div
                                  key={collaborator}
                                  className="flex items-center gap-2"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                >
                                  <ChevronRight className="w-4 h-4" style={{ color: project.color }} />
                                  <span className="font-mono text-sm">{collaborator}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          {/* Botón de enlace al proyecto */}
                          <Button
                            className="outline"
                            onClick={() => window.open(project.link, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {ui.viewProject}
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center font-mono text-xl">
            {ui.noProjectsFound}
          </motion.div>
        )}
      </div>
      <Footer />
    </>
  )
}

