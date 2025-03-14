"\"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Search, ArrowRight, Book, Calendar, Clock, ExternalLink, Github } from "lucide-react"
import type { StudyProject } from "@/data/projects/en/studies"
import { allStudyProjects } from "@/data/projects/en/studies"
import { useLanguage } from "@/contexts/LanguageContext"

export function PersonalStudies() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeType, setActiveType] = useState<StudyProject["type"] | "All">("All")

  const filteredProjects = allStudyProjects[language].filter(
    (project) =>
      (activeType === "All" || project.type === activeType) &&
      (project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.topics.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen p-8">
      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto mb-16 space-y-8">
        {/* Decorative elements */}
        <motion.div
          className="absolute -top-8 -left-8 w-16 h-16"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="w-full h-1 bg-[#E53935] absolute top-1/2 -translate-y-1/2" />
          <div className="h-full w-1 bg-[#E53935] absolute left-1/2 -translate-x-1/2" />
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute -right-4 -top-4 w-8 h-8 bg-[#FDD835]"
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <div className="relative border-2 border-black transform -skew-x-12 overflow-hidden">
            <div className="transform skew-x-12">
              <input
                type="text"
                placeholder="SEARCH PROJECTS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-transparent font-mono text-xl focus:outline-none"
              />
            </div>
            <div className="absolute right-0 top-0 h-full px-6 flex items-center border-l-2 border-black">
              <Search className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap gap-4 justify-center">
          {["All", "Software", "Design", "Research", "Other"].map((type) => (
            <motion.button
              key={type}
              onClick={() => setActiveType(type as StudyProject["type"] | "All")}
              className={`relative px-6 py-3 font-mono text-lg border-2 border-black ${
                activeType === type ? "bg-black text-white" : "bg-white text-black"
              }`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
              }}
              whileHover={{ scale: 1.05 }}
            >
              {type}
              <motion.div
                className="absolute inset-0 bg-[#E53935] mix-blend-multiply"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: activeType === type ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
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
                      <span className="font-bold">Resources:</span>
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
                        GitHub Repository
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
                        Live Demo
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

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center font-mono text-xl">
            No projects found matching your search.
          </motion.div>
        )}
      </div>
    </div>
  )
}

