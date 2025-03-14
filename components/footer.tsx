"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { footerContent } from "../data/footerContent"

interface FooterProps {
  setActiveSection?: (section: string) => void
}

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6 md:mb-0">
    <motion.div className="h-1 w-16 bg-[#E53935] mb-2" whileHover={{ width: "100%", transition: { duration: 0.3 } }} />
    <h3 className="text-lg font-mono font-bold mb-2">{title}</h3>
    {children}
  </div>
)

export function Footer({ setActiveSection }: FooterProps) {
  const { language } = useLanguage()
  const content = footerContent[language as keyof typeof footerContent] // Add type assertion

  const contactInfo = {
    email: content.email,
    phone: "+34 611 421 328",
    address: content.address,
  }

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/javierpentola" },
    { name: "LinkedIn", url: "https://google.com" },
  ]

  return (
    <footer className="bg-[#1E88E5] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start"
            >
              <h2 className="text-3xl font-mono font-bold mb-2">JGP</h2>
              <div className="flex space-x-2 mb-2">
                <motion.div
                  className="w-6 h-6 bg-[#E53935]"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="w-6 h-6 rounded-full bg-[#FDD835]"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="w-6 h-6 bg-[#F5F5EB]"
                  whileHover={{ rotate: -45 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>

          <FooterSection title={content.contact}>
            <ul className="space-y-1">
              <li className="text-sm font-mono">{contactInfo.email}</li>
              <li className="text-sm font-mono">{contactInfo.phone}</li>
              <li className="text-sm font-mono">{contactInfo.address}</li>
            </ul>
          </FooterSection>

          <FooterSection title={content.social}>
            <ul className="space-y-1">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono hover:text-[#FDD835] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>
        </div>

        <div className="mt-6 pt-4 border-t border-[#F5F5EB] border-opacity-30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm font-mono text-[#F5F5EB] mb-2 md:mb-0">© 2024 JGP. {content.allRightsReserved}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

