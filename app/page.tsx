"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Hero } from "../components/hero"
import { Education } from "../components/education"
import { Experience } from "../components/experience"
import { Contact } from "../components/contact"
import { Resume } from "../components/resume"
import { GitHub } from "../components/github"
import { Nav } from "../components/nav"

export default function Page() {
  const [activeSection, setActiveSection] = useState("home")

  const sections = {
    home: <Hero />,
    education: <Education />,
    experience: <Experience />,
    contact: <Contact setActiveSection={setActiveSection} />,
    resume: <Resume />,
    github: <GitHub />,
  }

  return (
    <div className="relative min-h-screen bg-[#F5F5EB]">
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        <main className="flex-1 lg:pr-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen lg:pt-0"
            >
              {sections[activeSection as keyof typeof sections]}
            </motion.div>
          </AnimatePresence>
        </main>
        <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  )
}

