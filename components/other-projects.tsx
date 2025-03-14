"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import { otherProjectsContent } from "@/data/otherProjectsContent"

export function OtherProjects() {
  const { language } = useLanguage()
  const content = otherProjectsContent[language as keyof typeof otherProjectsContent] || otherProjectsContent.en

  return (
    <div className="bg-[#F5F5EB] py-24 relative overflow-hidden">
      {/* Formas geométricas decorativas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Círculo grande */}
        <motion.div
          className="absolute right-[10%] top-[20%] w-64 h-64 rounded-full border-8 border-[#E53935] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Cuadrado rotado */}
        <motion.div
          className="absolute left-[15%] bottom-[30%] w-40 h-40 bg-[#1E88E5] opacity-10"
          animate={{
            rotate: [45, 225, 45],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Triángulo */}
        <motion.div
          className="absolute left-[60%] top-[10%] w-0 h-0 border-l-[50px] border-l-transparent border-b-[86.6px] border-b-[#FDD835] border-r-[50px] border-r-transparent opacity-10"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Líneas técnicas */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-0 right-0 h-px bg-black"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-0 right-0 h-px bg-black"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 relative">
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Título */}
          <motion.div className="mb-8 relative inline-block" whileHover={{ scale: 1.05 }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold relative z-10">
              {content.title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ color: "#000" }}
                  // Animación por defecto muy sutil, casi imperceptible
                  animate={{
                    y: [0, -1, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.1,
                    // Transición suave al volver a la posición original
                    type: "tween",
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: Math.random() > 0.5 ? 10 : -10,
                    color: "#FDD835",
                    transition: {
                      duration: 0.2,
                      type: "spring",
                      stiffness: 300,
                    },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>

            {/* Línea decorativa bajo el título */}
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-[#1E88E5]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            />
          </motion.div>

          {/* Subtítulo con animación de letras */}
          <motion.div
            className="relative inline-block bg-black text-white px-8 py-4 transform -rotate-2"
            whileHover={{ rotate: 2 }}
          >
            {content.subtitle.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block font-mono text-xl md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                }}
                whileHover={{
                  scale: 1.2,
                  color: ["#FFF", "#FDD835", "#FFF"],
                  transition: { duration: 0.3 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Elementos decorativos adicionales */}
          <motion.div
            className="absolute -right-4 -bottom-4 w-8 h-8 bg-[#FDD835]"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -left-4 -top-4 w-8 h-8 border-2 border-[#E53935]"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

