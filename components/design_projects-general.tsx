"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { designProjectsGeneralContent } from "@/data/designProjectsGeneralContent"

const galleryImages = [
  { src: "/images/poster1.jpg", alt: " " },
  { src: "/images/poster2.jpg", alt: " " },
  { src: "/images/poster3.jpg", alt: " " },
  { src: "/images/poster4.jpg", alt: " " },
]

const logoImages = [
  { src: "/images/logo1.svg", alt: "Logo 1" },
  { src: "/images/logo2.svg", alt: "Logo 1" },
  { src: "/images/logo3.svg", alt: "Logo 3" },
  { src: "/images/logo4.svg", alt: "Logo 4" },
  { src: "/images/logo5.svg", alt: "Logo 5" },
  { src: "/images/logo6.svg", alt: "Logo 6" },
]

// Add these variants near the top of your component
const cardVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const shapeVariants = {
  hover: {
    rotate: [0, 45, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 1,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    },
  },
}

export function DesignProjectsGeneral() {
  const { language } = useLanguage()
  const content =
    designProjectsGeneralContent[language as keyof typeof designProjectsGeneralContent] ||
    designProjectsGeneralContent.en

  return (
    <div className="bg-[#F5F5EB] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Elementos decorativos de fondo */}
        <motion.div
          className="absolute -left-20 top-0 w-40 h-40 bg-[#E53935] opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-60 h-60 rounded-full border-8 border-[#1E88E5] opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [-360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Contenedor principal */}
        <div className="relative flex flex-col lg:flex-row justify-between">
          {/* Columna izquierda: Título y logos */}
          <div className="lg:w-1/2">
            {/* Título principal */}
            <motion.div
              className="relative inline-block"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tighter relative z-10 leading-tight">
                <AnimatedWord word={content.title.line1} color="#E53935" />
                <br />
                <AnimatedWord word={content.title.line2} color="#1E88E5" />
                <br />
                <AnimatedWord word={content.title.line3} color="#FDD835" />
                <br />
                <AnimatedWord word={content.title.line4} color="#000000" />
              </h2>

              {/* Formas geométricas decorativas */}
              <motion.div
                className="absolute -left-8 -top-8 w-16 h-16 bg-[#FDD835]"
                animate={{
                  rotate: [0, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -right-4 bottom-4 w-12 h-12 border-4 border-[#E53935]"
                animate={{
                  rotate: [0, -180, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Contenedor de logos */}
            <motion.div
              className="mt-8 w-full sm:w-2/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="grid grid-cols-3 gap-4">
                {logoImages.map((logo, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square overflow-visible"
                    whileHover={{
                      scale: 3,
                      zIndex: 50,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 2.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Columna derecha: Posters e ilustraciones */}
          <motion.div
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={`poster-${index}`}
                  className="relative aspect-[3/4] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Editorial Design Title */}
        <motion.div
          className="mt-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tighter text-center relative">
            <div className="relative inline-block">
              {/* Bauhaus-style geometric background elements */}
              <div className="absolute -left-4 -top-4 w-8 h-8 bg-[#E53935] z-0" />
              <div className="absolute -right-4 -bottom-4 w-8 h-8 bg-[#1E88E5] z-0" />
              <div className="absolute left-1/2 -top-6 w-12 h-2 bg-[#FDD835] z-0" />
              <div className="absolute -left-2 bottom-0 w-2 h-full bg-black z-0" />

              {/* Text with letter-by-letter animation */}
              <div className="relative z-10 flex justify-center flex-wrap">
                {content.editorialDesign?.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block relative"
                    initial={{ y: 0 }}
                    animate={{
                      y: [0, -5, 0],
                      color:
                        index % 3 === 0
                          ? ["#E53935", "#000000"]
                          : index % 3 === 1
                            ? ["#1E88E5", "#000000"]
                            : ["#FDD835", "#000000"],
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: index * 0.05,
                      },
                      color: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      },
                    }}
                    whileHover={{
                      scale: 1.5,
                      rotate: index % 2 === 0 ? 10 : -10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </div>
          </h2>

          {/* Bauhaus-style decorative grid */}
          <div className="relative h-8 mt-4 mx-auto w-3/4 max-w-md">
            <div className="absolute left-0 top-0 w-full h-2 bg-[#E53935]"></div>
            <div className="absolute left-0 bottom-0 w-full h-2 bg-[#1E88E5]"></div>
            <div className="absolute left-0 top-0 w-2 h-full bg-[#FDD835]"></div>
            <div className="absolute right-0 top-0 w-2 h-full bg-black"></div>
            <motion.div
              className="absolute left-1/4 top-0 w-2 h-full bg-black"
              animate={{ height: ["100%", "50%", "100%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute right-1/4 top-0 w-2 h-full bg-black"
              animate={{ height: ["50%", "100%", "50%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>

        {/* Horizontal Buttons Container */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-12 mb-16 px-4">
          {/* Roma Eterna Card - Bauhaus Style */}
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1UxaO7-LuE-cVF5opAifJqnYm5seQoGi2/view"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-64 overflow-hidden border-4 border-black"
              whileHover="hover"
            >
              {/* Main background */}
              <div className="absolute inset-0 bg-[#F5F5EB]"></div>

              {/* Bauhaus geometric elements */}
              <motion.div
                className="absolute top-0 left-0 w-1/2 h-full bg-[#E53935]"
                variants={{
                  hover: {
                    width: "40%",
                    height: "90%",
                    transition: { duration: 0.3 },
                  },
                }}
              />

              <motion.div
                className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-black"
                variants={{
                  hover: {
                    width: "70%",
                    height: "40%",
                    transition: { duration: 0.3 },
                  },
                }}
              />

              <motion.div
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#FDD835]"
                variants={{
                  hover: {
                    scale: 1.2,
                    x: -10,
                    y: 10,
                    transition: { duration: 0.3 },
                  },
                }}
              />

              <motion.div
                className="absolute bottom-8 left-1/3 w-8 h-8 bg-[#1E88E5]"
                variants={{
                  hover: {
                    rotate: 45,
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  },
                }}
              />

              {/* Diagonal lines */}
              <motion.div
                className="absolute top-0 right-0 w-1 h-full bg-black origin-top-right"
                style={{ transform: "rotate(-45deg)" }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
                <div>
                  <motion.div
                    className="bg-white bg-opacity-90 p-2 inline-block mb-2"
                    variants={{
                      hover: {
                        x: 10,
                        transition: { duration: 0.3 },
                      },
                    }}
                  >
                    <h3 className="font-mono text-xl font-bold tracking-tighter text-black">
                      {content.romaEterna.title}
                    </h3>
                  </motion.div>

                  <motion.div
                    className="bg-white bg-opacity-90 p-2 inline-block"
                    variants={{
                      hover: {
                        x: 20,
                        transition: { duration: 0.3, delay: 0.1 },
                      },
                    }}
                  >
                    <p className="text-xs font-mono text-black">{content.romaEterna.subtitle}</p>
                  </motion.div>
                </div>

                <motion.div
                  className="self-center"
                  variants={{
                    hover: {
                      y: -5,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  <div className="bg-[#E53935] text-white font-bold py-2 px-4 rounded-sm border-2 border-black flex items-center gap-2">
                    <span>
                      {language === "en"
                        ? "VIEW DOCUMENT"
                        : language === "zh"
                          ? "查看文档"
                          : language === "fr"
                            ? "VOIR DOCUMENT"
                            : language === "it"
                              ? "VEDI DOCUMENTO"
                              : "VER DOCUMENTO"}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Technical grid lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-px bg-black opacity-20 absolute top-1/4"></div>
                <div className="w-full h-px bg-black opacity-20 absolute top-2/4"></div>
                <div className="w-full h-px bg-black opacity-20 absolute top-3/4"></div>
                <div className="h-full w-px bg-black opacity-20 absolute left-1/4"></div>
                <div className="h-full w-px bg-black opacity-20 absolute left-2/4"></div>
                <div className="h-full w-px bg-black opacity-20 absolute left-3/4"></div>
              </div>
            </motion.a>
          </motion.div>

          {/* Futurismo Italiano Card - Bauhaus Style */}
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1Ap2k1eJeAeMTRpnrdgBlYXSlKydG6bbS/view"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-64 overflow-hidden border-4 border-black"
              whileHover="hover"
            >
              {/* Main background */}
              <div className="absolute inset-0 bg-white"></div>

              {/* Bauhaus geometric elements */}
              <motion.div
                className="absolute top-0 right-0 w-1/2 h-full bg-[#1E88E5]"
                variants={{
                  hover: {
                    width: "45%",
                    x: 10,
                    transition: { duration: 0.3 },
                  },
                }}
              />

              <motion.div
                className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-black"
                variants={{
                  hover: {
                    height: "40%",
                    width: "35%",
                    transition: { duration: 0.3 },
                  },
                }}
              />

              <motion.div
                className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full border-8 border-[#FDD835]"
                variants={{
                  hover: {
                    scale: 1.2,
                    rotate: 180,
                    transition: { duration: 0.6 },
                  },
                }}
              />

              <motion.div
                className="absolute top-1/3 right-1/4 w-8 h-8 bg-[#E53935] rotate-45"
                variants={{
                  hover: {
                    rotate: 90,
                    scale: 1.3,
                    transition: { duration: 0.3 },
                  },
                }}
              />

              {/* Diagonal lines */}
              <motion.div
                className="absolute top-0 left-1/3 w-1 h-full bg-black origin-top"
                style={{ transform: "rotate(30deg)" }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
                <div>
                  <motion.div
                    className="bg-white bg-opacity-90 p-2 inline-block mb-2 border-2 border-black"
                    variants={{
                      hover: {
                        x: 10,
                        transition: { duration: 0.3 },
                      },
                    }}
                  >
                    <h3 className="font-mono text-xl font-bold tracking-tighter text-black">
                      {content.futurismoItaliano.title}
                    </h3>
                  </motion.div>

                  <motion.div
                    className="bg-white bg-opacity-90 p-2 inline-block border-2 border-black"
                    variants={{
                      hover: {
                        x: 20,
                        transition: { duration: 0.3, delay: 0.1 },
                      },
                    }}
                  >
                    <p className="text-xs font-mono text-black">{content.futurismoItaliano.subtitle}</p>
                  </motion.div>
                </div>

                <motion.div
                  className="self-center"
                  variants={{
                    hover: {
                      y: -5,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  <div className="bg-[#1E88E5] text-white font-bold py-2 px-4 rounded-sm border-2 border-black flex items-center gap-2">
                    <span>
                      {language === "en"
                        ? "VIEW DOCUMENT"
                        : language === "zh"
                          ? "查看文档"
                          : language === "fr"
                            ? "VOIR DOCUMENT"
                            : language === "it"
                              ? "VEDI DOCUMENTO"
                              : "VER DOCUMENTO"}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Technical grid lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-px bg-black opacity-10 absolute top-1/4"></div>
                <div className="w-full h-px bg-black opacity-10 absolute top-2/4"></div>
                <div className="w-full h-px bg-black opacity-10 absolute top-3/4"></div>
                <div className="h-full w-px bg-black opacity-10 absolute left-1/4"></div>
                <div className="h-full w-px bg-black opacity-10 absolute left-2/4"></div>
                <div className="h-full w-px bg-black opacity-10 absolute left-3/4"></div>
              </div>

              {/* Bauhaus typography element */}
              <div className="absolute -right-4 -top-4 rotate-90 origin-bottom-left">
                <div className="text-xs tracking-widest font-mono text-[#1E88E5] opacity-50">BAUHAUS</div>
              </div>
            </motion.a>
          </motion.div>

          {/* Restaurant Menu Card - Bauhaus Style */}
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1FMXagqchPKrSrChMTRvBQZ67fk8oVmeD/view"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-64 overflow-hidden border-4 border-black"
              whileHover="hover"
            >
              {/* Main background */}
              <div className="absolute inset-0 bg-[#F5F5EB]"></div>

              {/* Bauhaus geometric elements */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1/3 bg-[#FDD835]"
                variants={{
                  hover: {
                    height: "30%",
                    transition: { duration: 0.3 },
                  },
                }}
              />

              <motion.div
                className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-white"
                variants={{
                  hover: {
                    width: "60%",
                    height: "45%",
                    transition: { duration: 0.3 },
                  },
                }}
              />

              <motion.div
                className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full bg-[#E53935]"
                variants={{
                  hover: {
                    y: 10,
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  },
                }}
              />

              <motion.div
                className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-[#1E88E5]"
                variants={{
                  hover: {
                    rotate: 45,
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  },
                }}
              />

              <motion.div
                className="absolute top-0 right-0 w-1/4 h-full bg-black"
                variants={{
                  hover: {
                    width: "20%",
                    transition: { duration: 0.3 },
                  },
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
                <div>
                  <motion.div
                    className="bg-black p-2 inline-block mb-2"
                    variants={{
                      hover: {
                        x: 10,
                        transition: { duration: 0.3 },
                      },
                    }}
                  >
                    <h3 className="font-mono text-xl font-bold tracking-tighter text-white">
                      {content.restaurantMenu.title}
                    </h3>
                  </motion.div>

                  <motion.div
                    className="bg-black p-2 inline-block"
                    variants={{
                      hover: {
                        x: 20,
                        transition: { duration: 0.3, delay: 0.1 },
                      },
                    }}
                  >
                    <p className="text-xs font-mono text-white">{content.restaurantMenu.subtitle}</p>
                  </motion.div>
                </div>

                <motion.div
                  className="self-center"
                  variants={{
                    hover: {
                      y: -5,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  <div className="bg-[#FDD835] text-black font-bold py-2 px-4 rounded-sm border-2 border-black flex items-center gap-2">
                    <span>
                      {language === "en"
                        ? "VIEW DOCUMENT"
                        : language === "zh"
                          ? "查看文档"
                          : language === "fr"
                            ? "VOIR DOCUMENT"
                            : language === "it"
                              ? "VEDI DOCUMENTO"
                              : "VER DOCUMENTO"}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Bauhaus pattern */}
              <div className="absolute right-1/4 top-0 h-full w-6 flex flex-col">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-full w-full ${i % 2 === 0 ? "bg-black" : "bg-white"}`}
                    style={{ height: `${100 / 8}%` }}
                    variants={{
                      hover: {
                        height: `${(100 / 8) * (i % 3 === 0 ? 1.5 : i % 3 === 1 ? 0.7 : 1)}%`,
                        transition: { duration: 0.3, delay: i * 0.03 },
                      },
                    }}
                  />
                ))}
              </div>

              {/* Technical grid lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-px bg-black opacity-10 absolute top-1/3"></div>
                <div className="w-full h-px bg-black opacity-10 absolute top-2/3"></div>
                <div className="h-full w-px bg-black opacity-10 absolute left-1/3"></div>
                <div className="h-full w-px bg-black opacity-10 absolute left-2/3"></div>
                <div className="h-full w-px bg-black opacity-10 absolute left-3/3"></div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const AnimatedWord = ({ word, color }: { word: string; color: string }) => (
  <motion.span
    className="inline-block"
    style={{ color }}
    animate={{
      y: [0, -5, 0],
    }}
    transition={{
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    }}
  >
    {word.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        whileHover={{
          scale: 1.2,
          rotate: Math.random() * 10 - 5,
          transition: { duration: 0.2 },
        }}
      >
        {char}
      </motion.span>
    ))}
  </motion.span>
)

