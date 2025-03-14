"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Book, Calendar, Clock, ExternalLink, Github } from "lucide-react"
import { allStudyProjects } from "@/data/projects/en/studies"
import { useLanguage } from "@/contexts/LanguageContext"
import enUI from "@/data/studiesUI/en"
import esUI from "@/data/studiesUI/es"
import zhUI from "@/data/studiesUI/zh"
import itUI from "@/data/studiesUI/it"
import frUI from "@/data/studiesUI/fr"
import { Footer } from "../footer"

const uiTranslations = {
  en: enUI,
  es: esUI,
  zh: zhUI,
  it: itUI,
  fr: frUI,
}

export function PersonalStudies() {
  const { language } = useLanguage()

  const projectsForLanguage = allStudyProjects[language] || allStudyProjects.en
  const ui = uiTranslations[language as keyof typeof uiTranslations]

  return (
    <>
      <div className="min-h-screen p-8">
        {/* Projects List */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {projectsForLanguage.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-8"
              >
                <motion.div className="border-2 border-black p-6 relative" whileHover={{ x: 20 }}>
                  {/* Status indicator */}
                  <div className="absolute -left-2 top-4 flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        project.status === "Completed"
                          ? "bg-[#43A047]"
                          : project.status === "In Progress"
                            ? "bg-[#FDD835]"
                            : "bg-[#757575]"
                      }`}
                    />
                  </div>

                  {/* Diagonal line decoration */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] transform -rotate-12 origin-left" />

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-mono font-bold">{project.title}</h3>
                      <div className="flex items-center gap-2 font-mono text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                        <Clock className="w-4 h-4 ml-2" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    <p className="font-mono text-gray-600 mb-4">{project.description}</p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.topics.map((topic, i) => (
                        <motion.span
                          key={topic}
                          className="px-3 py-1 bg-black text-white font-mono text-sm transform -skew-x-12"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {topic}
                        </motion.span>
                      ))}
                    </div>

                    {/* Resources */}
                    <div className="font-mono text-sm mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Book className="w-4 h-4" />
                        <span className="font-bold">{ui.resources}</span>
                      </div>
                      <ul className="space-y-1">
                        {project.resources.map((resource, i) => (
                          <motion.li
                            key={resource}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <ArrowRight className="w-4 h-4 text-[#E53935]" />
                            {resource}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-mono text-[#1E88E5] hover:underline"
                        >
                          <Github className="w-4 h-4" />
                          {ui.githubRepository}
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-mono text-[#1E88E5] hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {ui.liveDemo}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Geometric decoration */}
                  <div className="absolute bottom-2 right-2">
                    <motion.div
                      className="w-6 h-6 border-2 border-black"
                      animate={{
                        rotate: [0, 90, 180, 270, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </div>
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

