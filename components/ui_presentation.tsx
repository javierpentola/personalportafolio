"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FileText, Book, Palette, Download } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { uiPresentationContent } from "../data/uiPresentationContent"

export function UiPresentation() {
  const { language } = useLanguage()
  const content = uiPresentationContent[language as keyof typeof uiPresentationContent] || uiPresentationContent.en

  return (
    <div className="bg-[#F5F5EB] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <motion.div className="absolute top-0 left-0 w-full h-full" initial={{ opacity: 0 }} animate={{ opacity: 0.1 }}>
        <div className="absolute top-10 left-10 w-40 h-40 border-4 border-[#E53935] transform rotate-45" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-4 border-[#1E88E5]" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-20 h-20 bg-[#FDD835]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-bold">
            {["Z", "A", "R", "O"].map((letter, index) => (
              <motion.span
                key={index}
                className={`inline-block ${index < 2 ? "bg-black text-white" : "bg-[#E53935] text-white"} px-6 py-3 ${index === 1 ? "ml-2" : ""}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            className="relative mt-8 pl-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Elemento decorativo geométrico animado */}
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FDD835]"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Línea técnica animada */}
            <motion.div
              className="absolute left-4 top-0 w-32 h-1 bg-[#1E88E5]"
              initial={{ scaleX: 0, rotate: -45 }}
              animate={{ scaleX: 1, rotate: [-45, 0, -45] }}
              transition={{
                scaleX: { duration: 0.5, delay: 0.5 },
                rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            />

            {/* Contenedor del subtítulo con líneas técnicas */}
            <motion.div
              className="relative border-l-2 border-black pl-6"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div
                className="absolute left-0 top-0 w-2 h-2 bg-black"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 1 }}
              />
              <motion.div
                className="absolute left-0 bottom-0 w-2 h-2 bg-[#E53935]"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />

              {/* Texto del subtítulo animado */}
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl font-mono relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <motion.span
                  className="inline-block bg-black text-white px-3 py-1 relative overflow-hidden"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    rotate: [0, -2, 2, 0],
                    scale: [1, 1.05, 0.98, 1],
                  }}
                  transition={{
                    x: { duration: 0.5, delay: 1.6 },
                    rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                    scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                  }}
                  whileHover={{
                    backgroundColor: "#333",
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  {content.subtitle.part1}
                  <motion.span
                    className="absolute bottom-0 left-0 h-1 bg-[#E53935] w-full block"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [0, 1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  />
                </motion.span>{" "}
                <motion.span
                  className="inline-block bg-[#1E88E5] text-white px-3 py-1 ml-2 relative overflow-hidden"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    y: [0, -3, 3, 0],
                  }}
                  transition={{
                    x: { duration: 0.5, delay: 1.8 },
                    y: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                  }}
                  whileHover={{
                    backgroundColor: "#0D47A1",
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  {content.subtitle.part2}
                  <motion.span
                    className="absolute top-0 right-0 w-1 h-full bg-white block"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: [0, 1, 0.5, 1] }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
                  />
                  <motion.span
                    className="absolute -z-10 inset-0 bg-[#1E88E5] block"
                    animate={{
                      backgroundImage: [
                        "radial-gradient(circle at 50% 50%, #1E88E5 0%, #1565C0 100%)",
                        "radial-gradient(circle at 30% 70%, #1E88E5 0%, #1565C0 100%)",
                        "radial-gradient(circle at 70% 30%, #1E88E5 0%, #1565C0 100%)",
                        "radial-gradient(circle at 50% 50%, #1E88E5 0%, #1565C0 100%)",
                      ],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  />
                </motion.span>{" "}
                <motion.span
                  className="inline-block bg-[#FDD835] px-3 py-1 ml-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, rotate: [0, 2, -2, 0] }}
                  transition={{
                    x: { duration: 0.5, delay: 2 },
                    rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 2.5 },
                  }}
                >
                  {content.subtitle.part3}
                </motion.span>
              </motion.p>

              {/* Líneas técnicas decorativas animadas */}
              <motion.div
                className="absolute -right-4 bottom-0 w-8 h-8"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: [45, 0, 45] }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.2 },
                  rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.2 },
                }}
              >
                <div className="absolute top-0 left-1/2 h-full w-px bg-black" />
                <div className="absolute left-0 top-1/2 w-full h-px bg-black" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col items-start gap-3 mb-6">
            {content.bulletPoints.map((item, index) => (
              <motion.div
                key={index}
                className={`bg-[${item.color}] ${item.color === "black" ? "text-white" : ""} px-4 py-1`}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                whileHover={{
                  x: 10,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.span
                  className="font-mono text-lg sm:text-xl md:text-2xl"
                  initial={{ letterSpacing: "0em" }}
                  whileHover={{
                    letterSpacing: "0.1em",
                    transition: { duration: 0.3 },
                  }}
                >
                  {item.text}
                </motion.span>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="h-1 bg-[#E53935] w-32"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <motion.div
          className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] h-36 bg-white mt-12 mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 border-t-2 border-b-2 border-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.div
            className="relative h-full flex items-center justify-center py-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20241101-WA0013.jpg-2GXI4PCz5nBp95qvOuJ6nN0QCWujXH.jpeg"
              alt="ZARO Logo"
              width={240}
              height={60}
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Botones de descarga */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Líneas técnicas decorativas */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute left-0 right-0 h-px bg-black/10"
              style={{ top: "25%" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
            <motion.div
              className="absolute left-0 right-0 h-px bg-black/10"
              style={{ top: "75%" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </div>

          {/* Botones de descarga */}
          {content.downloadButtons.map((button, index) => (
            <motion.a
              key={button.title}
              href={
                button.pattern === "circle"
                  ? "https://drive.google.com/file/d/1DWPIZM2EzXm1nkXUhjoLVKNCvF05IVF4/view?usp=sharing"
                  : button.pattern === "diagonal"
                    ? "https://drive.google.com/file/d/1nIzCdZATlRxMauSB8NRzukT3y5ot-z81/view?usp=sharing"
                    : "https://drive.google.com/file/d/1IzHitJt32KVAq415Sn6HbJeKVcDfjpY4/view?usp=sharing"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full h-32 sm:h-36 bg-white border-2 border-black overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Patrones geométricos de fondo */}
              <div className="absolute inset-0 opacity-10">
                {button.pattern === "circle" && (
                  <motion.div
                    className="absolute inset-4 rounded-full border-4 border-current"
                    style={{ color: button.color }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                )}
                {button.pattern === "diagonal" && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute h-1 w-full"
                        style={{
                          backgroundColor: button.color,
                          transform: `rotate(${i * 60}deg)`,
                        }}
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
                {button.pattern === "square" && (
                  <motion.div
                    className="absolute inset-4 border-4"
                    style={{ borderColor: button.color }}
                    animate={{
                      rotate: [0, 90, 180, 270, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                )}
              </div>

              {/* Líneas técnicas decorativas */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-current"
                style={{ color: button.color }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-1 h-full bg-current"
                style={{ color: button.color }}
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Contenido del botón con diseño Bauhaus mejorado */}
              <div className="relative h-full flex flex-col items-center justify-center p-4 overflow-hidden">
                {/* Grid técnico de fondo */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full grid grid-cols-8 grid-rows-8">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border-[0.5px] border-black" />
                    ))}
                  </div>
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "radial-gradient(circle at 0% 0%, transparent 50%, black 50.5%)",
                        "radial-gradient(circle at 100% 100%, transparent 50%, black 50.5%)",
                        "radial-gradient(circle at 0% 0%, transparent 50%, black 50.5%)",
                      ],
                    }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>

                {/* Elementos geométricos decorativos */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t-2 border-l-2 border-black" />
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b-2 border-r-2 border-black" />
                    <div
                      className="absolute top-1/2 left-1/2 w-4 h-4 bg-current -translate-x-1/2 -translate-y-1/2"
                      style={{ color: button.color }}
                    />
                  </div>
                </motion.div>

                {/* Líneas técnicas */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute left-0 top-1/2 w-full h-px bg-black opacity-20"
                    animate={{ rotate: [-45, 0, 45, 0, -45] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <motion.div
                    className="absolute left-1/2 top-0 w-px h-full bg-black opacity-20"
                    animate={{ rotate: [45, 0, -45, 0, 45] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>

                {/* Contenedor principal del icono */}
                <motion.div
                  className="relative z-10 mb-3"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Círculo base */}
                  <div className="relative w-12 h-12">
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: button.color }}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />

                    {/* Cuadrado superpuesto */}
                    <motion.div
                      className="absolute inset-0 border-2 border-black"
                      animate={{ rotate: [0, 90, 180, 270, 360] }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    {/* Icono */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      {button.pattern === "circle" && <Book />}
                      {button.pattern === "diagonal" && <FileText />}
                      {button.pattern === "square" && <Palette />}
                    </div>

                    {/* Puntos técnicos */}
                    <div className="absolute -left-1 -top-1 w-2 h-2 bg-black" />
                    <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-black" />
                  </div>
                </motion.div>

                {/* Título con estilo Bauhaus */}
                <motion.div className="relative z-10 text-center" whileHover={{ scale: 1.1 }}>
                  <div className="relative inline-block">
                    {/* Fondo del título */}
                    <motion.div
                      className="absolute -inset-1 opacity-10"
                      style={{ backgroundColor: button.color }}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />

                    {/* Texto del título */}
                    <span className="relative font-mono text-xs uppercase tracking-widest">{button.title}</span>

                    {/* Línea decorativa */}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 w-full"
                      style={{ backgroundColor: button.color }}
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* Icono de descarga con estilo Bauhaus */}
                <motion.div
                  className="absolute bottom-2 right-2 p-1.5 z-20"
                  whileHover={{
                    scale: 1.2,
                    rotate: 90,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    {/* Fondo geométrico */}
                    <motion.div
                      className="absolute inset-0"
                      style={{ backgroundColor: button.color }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Icono */}
                    <Download size={16} className="relative z-10 text-black group-hover:text-white" />

                    {/* Marcadores técnicos */}
                    <div className="absolute -left-0.5 -top-0.5 w-1 h-1 bg-black" />
                    <div className="absolute -right-0.5 -bottom-0.5 w-1 h-1 bg-black" />
                  </div>
                </motion.div>
              </div>

              {/* Overlay geométrico en hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2"
                  style={{ borderColor: button.color }}
                />
                <div
                  className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2"
                  style={{ borderColor: button.color }}
                />
                <div
                  className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2"
                  style={{ borderColor: button.color }}
                />
                <div
                  className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2"
                  style={{ borderColor: button.color }}
                />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

