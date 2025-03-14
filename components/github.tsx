"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { Star, GitFork, Code, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Footer } from "./footer"
import enUI from "@/data/githubUI/en"
import esUI from "@/data/githubUI/es"
import zhUI from "@/data/githubUI/zh"
import itUI from "@/data/githubUI/it"
import frUI from "@/data/githubUI/fr"
import enProjects from "@/data/githubProjects/en"
import esProjects from "@/data/githubProjects/es"
import zhProjects from "@/data/githubProjects/zh"
import itProjects from "@/data/githubProjects/it"
import frProjects from "@/data/githubProjects/fr"

const uiTranslations = { en: enUI, es: esUI, zh: zhUI, it: itUI, fr: frUI }
const projectTranslations = { en: enProjects, es: esProjects, zh: zhProjects, it: itProjects, fr: frProjects }

export function GitHub() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const ui = uiTranslations[language as keyof typeof uiTranslations] || uiTranslations.en
  const projects = projectTranslations[language as keyof typeof projectTranslations] || enProjects

  return (
    <>
      <div ref={containerRef} className="py-6 px-6 sm:px-8 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* Paper effect container */}
          <div className="absolute inset-0 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />

          {/* Decorative corners */}
          <motion.div
            className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-black"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-black"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-black"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.div
            className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-black"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />

          {/* Technical drawing background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 grid grid-cols-12 gap-4">
              {Array.from({ length: 48 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                >
                  <motion.div
                    className="absolute w-full h-[1px] bg-black"
                    style={{
                      rotate: (i % 3) * 45,
                    }}
                  />
                  <motion.div
                    className="absolute h-full w-[1px] bg-black"
                    style={{
                      rotate: (i % 3) * -45,
                    }}
                  />
                </motion.div>
              ))}
            </div>
            {/* Add circular elements */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={`circle-${i}`}
                className="absolute rounded-full border border-black"
                style={{
                  width: `${(i + 1) * 20}%`,
                  height: `${(i + 1) * 20}%`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12">
            {/* Header */}
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative inline-block">
                <motion.h1
                  className="text-6xl sm:text-8xl md:text-9xl font-mono font-bold relative z-10"
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
                {/* Technical measurement lines */}
                <motion.svg
                  className="absolute -top-4 -left-4 -right-4 -bottom-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="black"
                  strokeWidth="0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.line x1="0" y1="0" x2="100" y2="0" />
                  <motion.line x1="0" y1="100" x2="100" y2="100" />
                  <motion.line x1="0" y1="0" x2="0" y2="100" />
                  <motion.line x1="100" y1="0" x2="100" y2="100" />
                  <motion.circle cx="50" cy="50" r="40" strokeDasharray="5,5" />
                </motion.svg>
              </div>

              <motion.p
                className="text-xl font-mono mt-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {ui.subtitle}
              </motion.p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto relative">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="bg-white p-3 relative border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                    }}
                  >
                    {/* Technical drawing overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className="absolute top-0 right-0 w-20 h-20"
                        style={{
                          background: `linear-gradient(45deg, transparent 50%, ${project.color} 50%)`,
                        }}
                      />
                      <div
                        className="absolute bottom-0 left-0 w-20 h-20 border border-black opacity-20"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                      >
                        <div className="absolute top-0 left-1/2 h-full w-px bg-black" />
                        <div className="absolute left-0 top-1/2 w-full h-px bg-black" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-xl font-mono font-bold hover:text-gray-700">{project.name}</h3>
                        <a
                          href={`https://github.com/javierpentola/${project.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#E53935] hover:text-[#1E88E5]"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      </div>

                      <div className="h-1 mb-2" style={{ backgroundColor: project.color, width: "50%" }} />

                      <p className="font-mono text-sm text-gray-600 mb-3">{project.description}</p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 mb-3 font-mono text-xs">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>
                            {project.stars} {ui.stars}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span>
                            {project.forks} {ui.forks}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Code className="w-4 h-4" />
                          <span>{project.languages[0]}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-mono bg-black text-white hover:bg-gray-800"
                            style={{
                              clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View Profile Button */}
            <div className="mt-6 text-center">
              <a
                href="https://github.com/javierpentola"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-4 py-2 font-mono text-base relative overflow-hidden group hover:bg-gray-800"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                }}
              >
                <span className="relative z-10">{ui.viewProfile}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

