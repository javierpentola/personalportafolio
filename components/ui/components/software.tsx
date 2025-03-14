"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Code, GitBranch, ExternalLink, Search } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { softwareProjectsUI, categories } from "../data/softwareProjectsUI"
import type { SoftwareProject } from "../data/softwareProjects/types"
// Import translated projects
import enProjects from "../data/softwareProjects/en"
import esProjects from "../data/softwareProjects/es"
import zhProjects from "../data/softwareProjects/zh"
import itProjects from "../data/softwareProjects/it"
import frProjects from "../data/softwareProjects/fr"
import { Footer } from "./footer"

export function SoftwareProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const { language } = useLanguage()
  const [ui, setUi] = useState(softwareProjectsUI.en)
  const [localizedCategories, setLocalizedCategories] = useState(categories)

  useEffect(() => {
    setUi(softwareProjectsUI[language as keyof typeof softwareProjectsUI] || softwareProjectsUI.en)
    setLocalizedCategories(categories)
  }, [language])

  const projectTranslations: Record<string, SoftwareProject[]> = {
    en: enProjects,
    es: esProjects,
    zh: zhProjects,
    it: itProjects,
    fr: frProjects,
  }

  const projects = projectTranslations[language] || enProjects

  const filteredProjects = projects.filter(
    (project) =>
      (activeCategory === "all" || project.category === activeCategory) &&
      (project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))),
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <>
      <div className="min-h-screen p-8">
        {/* Background pattern */}
        <div className="fixed inset-0 opacity-5 pointer-events-none overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute w-[200%] h-px bg-black"
              style={{
                top: `${(i * 100) / 8}%`,
                left: "-50%",
                transform: `rotate(${45 + i * 5}deg)`,
              }}
            />
          ))}
          <div className="absolute top-20 left-20 w-40 h-40 border-4 border-[#E53935] rotate-45 opacity-10" />
          <div className="absolute bottom-40 right-20 w-60 h-60 border-4 border-[#1E88E5] rounded-full opacity-10" />
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-[#FDD835] opacity-5" />
        </div>

        {/* Search input */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative border-2 border-black transform -skew-x-12 overflow-hidden">
            <div className="transform skew-x-12">
              <input
                type="text"
                placeholder={ui.searchPlaceholder}
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-6 py-4 bg-transparent font-mono text-xl focus:outline-none"
              />
            </div>
            <div className="absolute right-0 top-0 h-full px-6 flex items-center border-l-2 border-black">
              <Search className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="relative mb-20">
          <motion.div
            className="absolute -top-4 -left-4 w-32 h-32"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="w-full h-1 bg-[#E53935] absolute top-1/2 -translate-y-1/2" />
            <div className="h-full w-1 bg-[#E53935] absolute left-1/2 -translate-x-1/2" />
          </motion.div>

          <div className="flex flex-wrap gap-6 justify-center relative">
            {localizedCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative font-mono text-lg transform -skew-x-12 overflow-hidden
                  ${activeCategory === category.id ? "bg-black" : "bg-transparent border-2 border-black"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="px-6 py-3 transform skew-x-12 relative z-10">
                  <span className={activeCategory === category.id ? "text-white" : "text-black"}>
                    {ui.filterButtons[category.id as keyof typeof ui.filterButtons]}
                  </span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-[#E53935]"
                  initial={{ x: "-100%" }}
                  animate={{ x: activeCategory === category.id ? 0 : "-100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
          <div className="absolute -top-12 right-0 w-24 h-24 border-t-4 border-r-4 border-black" />
          <div className="absolute -bottom-12 left-0 w-24 h-24 border-b-4 border-l-4 border-black" />

          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative group"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <motion.div
                  className="bg-transparent border-2 border-black p-8 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-[#E53935] origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-0 right-0 w-1 h-full bg-[#1E88E5] origin-bottom"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <motion.h3
                        className="text-3xl font-mono font-bold"
                        animate={{
                          x: hoveredProject === project.id ? 10 : 0,
                        }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.a
                        href={`https://${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-[#E53935]"
                        whileHover={{ scale: 1.2, rotate: 45 }}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    </div>

                    <p className="font-mono text-gray-600 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-black text-white font-mono text-sm transform -skew-x-12"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 font-mono text-sm">
                      <div className="flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        <span>{project.stats.commits} commits</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GitBranch className="w-4 h-4" />
                        <span>{project.stats.branches} branches</span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#FDD835]"
                    animate={{
                      rotate: hoveredProject === project.id ? 180 : 0,
                    }}
                  />
                  <div className="absolute top-4 right-4 w-2 h-2 bg-black" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#E53935]" />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  )
}

