"use client"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import * as otherWebProjectsContent from "../data/otherWebProjectsContent"
import { ExternalLink, Eye, Settings } from "lucide-react"

// Componente para patrones geométricos Bauhaus
const BauhausPattern = ({ type }: { type: "dots" | "lines" | "grid" }) => {
  const patterns = {
    dots: (
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex justify-around">
            {[...Array(6)].map((_, j) => (
              <motion.div
                key={j}
                className="w-2 h-2 bg-current rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  delay: (i + j) * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    ),
    lines: (
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-current"
            style={{ top: `${(i + 1) * 12.5}%` }}
            animate={{
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        ))}
      </div>
    ),
    grid: (
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 grid-rows-6 h-full">
          {[...Array(36)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-current"
              animate={{
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 6,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          ))}
        </div>
      </div>
    ),
  }

  return patterns[type]
}

export function OtherWebProjects() {
  const { language } = useLanguage()
  const content =
    otherWebProjectsContent[language as keyof typeof otherWebProjectsContent] || otherWebProjectsContent.en

  return (
    <div className="bg-[#F5F5EB] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title Section with Bauhaus-inspired decoration */}
        <div className="relative mb-16 text-center">
          <motion.div
            className="absolute -left-4 top-1/2 w-12 h-12 bg-[#E53935]"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute -right-4 top-1/2 w-16 h-16 border-4 border-[#1E88E5]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />

          <h2 className="text-4xl font-mono font-bold mb-3 relative inline-block">
            <span className="relative z-10 bg-black text-white px-6 py-2 skew-x-12 inline-block">{content.title}</span>
          </h2>
          <p className="text-xl font-mono mt-4 text-gray-600">{content.subtitle}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* NGE Interfaces Card */}
          <motion.div
            className="relative bg-white text-[#1E88E5] overflow-hidden border-2 border-black"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              borderColor: "#FF3300",
            }}
          >
            {/* Technical grid background */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" className="stroke-[#1E88E5]">
                <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#smallGrid)" />
              </svg>
            </div>

            <motion.div
              className="p-6 relative"
              whileHover="hover"
              variants={{
                hover: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {/* Title Section */}
              <div className="relative mb-8">
                <div className="absolute -left-4 -top-4 w-20 h-20">
                  <motion.div
                    className="absolute w-full h-full border-2 border-[#FF6B00]"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    variants={{
                      hover: { scale: 1.2, borderWidth: 3 },
                    }}
                  />
                  <motion.div
                    className="absolute w-full h-full bg-[#FF3300]"
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    variants={{
                      hover: { scale: 0.9, transition: { duration: 0.5 } },
                    }}
                  />
                </div>

                <motion.h3
                  className="text-2xl font-mono font-bold text-center relative z-10 pl-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  variants={{
                    hover: {
                      scale: 1.05,
                      x: 5,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <motion.span
                      className="text-[#FF3300] relative"
                      variants={{
                        hover: {
                          y: -3,
                          transition: { duration: 0.2 },
                        },
                      }}
                    >
                      NGE
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-[#FF3300]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8 }}
                        variants={{
                          hover: {
                            height: 2,
                            transition: { duration: 0.2 },
                          },
                        }}
                      />
                    </motion.span>
                    <motion.span
                      className="text-[#FF6B00]"
                      variants={{
                        hover: {
                          y: -3,
                          transition: { duration: 0.2, delay: 0.1 },
                        },
                      }}
                    >
                      INTERFACES
                    </motion.span>
                  </div>
                </motion.h3>

                {/* Technical decorative elements */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <motion.div
                    className="w-1 h-1 bg-[#90FF00]"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <div className="w-4 h-px bg-[#90FF00]" />
                </div>
              </div>

              {/* Panel de control con estilo Bauhaus */}
              <motion.div
                className="relative bg-white border-2 border-[#E53935] p-4 mb-4"
                variants={{
                  hover: {
                    y: -5,
                    borderWidth: 3,
                    transition: { duration: 0.3 },
                  },
                }}
              >
                {/* Decorative geometric shapes */}
                <motion.div
                  className="absolute -right-1 -top-1 w-3 h-3 bg-[#E53935] transform rotate-45"
                  variants={{
                    hover: {
                      rotate: 90,
                      scale: 1.3,
                      transition: { duration: 0.5 },
                    },
                  }}
                />
                <motion.div
                  className="absolute -left-1 -bottom-1 w-3 h-3 bg-[#FDD835]"
                  variants={{
                    hover: {
                      scale: 1.3,
                      transition: { duration: 0.5 },
                    },
                  }}
                />

                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-3 h-3 border-2 border-[#E53935]"
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <div className="text-xs font-mono text-[#E53935]">
                      {content?.ngeInterface?.systemMonitor || "System Monitor"}
                    </div>
                  </div>
                  <motion.div
                    className="h-2 w-2 bg-[#FDD835]"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>

                {/* Technical grid with Bauhaus style */}
                <div className="grid grid-cols-2 gap-3 mb-3 relative">
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                      <pattern id="bauhaus-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FF6B00" strokeWidth="0.5" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#bauhaus-grid)" />
                    </svg>
                  </div>

                  <div className="bg-[#F5F5EB] border-2 border-[#E53935] p-2">
                    <div className="text-xs font-mono text-[#E53935] mb-1">{content?.ngeInterface?.cpu || "CPU"}</div>
                    <div className="h-4 bg-white/50 overflow-hidden">
                      <motion.div
                        className="h-full bg-[#E53935]"
                        initial={{ width: "20%" }}
                        animate={{ width: ["20%", "60%", "40%", "80%", "30%", "20%"] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>
                  </div>
                  <div className="bg-black/50 border border-[#FF6B00]/30 p-2">
                    <div className="text-xs font-mono text-[#FF6B00] mb-1">
                      {content?.ngeInterface?.memory || "Memory"}
                    </div>
                    <div className="h-4 bg-black/30 overflow-hidden">
                      <motion.div
                        className="h-full bg-[#90FF00]"
                        initial={{ width: "40%" }}
                        animate={{ width: ["40%", "50%", "70%", "60%", "45%", "40%"] }}
                        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>
                  </div>
                </div>

                {/* Línea de actividad */}
                <div className="bg-black/50 border border-[#FF6B00]/30 p-2 mb-3">
                  <div className="text-xs font-mono text-[#FF6B00] mb-1">
                    {content?.ngeInterface?.activity || "Activity"}
                  </div>
                  <div className="h-8 relative">
                    <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <motion.path
                        d="M 0,10 Q 5,5 10,10 T 20,10 T 30,10 T 40,10 T 50,10 T 60,10 T 70,10 T 80,10 T 90,10 T 100,10"
                        fill="none"
                        stroke="#FF3300"
                        strokeWidth="1"
                        animate={{
                          d: [
                            "M 0,10 Q 5,5 10,10 T 20,10 T 30,10 T 40,10 T 50,10 T 60,10 T 70,10 T 80,10 T 90,10 T 100,10",
                            "M 0,10 Q 5,15 10,10 T 20,5 T 30,15 T 40,10 T 50,5 T 60,15 T 70,10 T 80,5 T 90,10 T 100,10",
                            "M 0,10 Q 5,5 10,10 T 20,15 T 30,5 T 40,10 T 50,15 T 60,5 T 70,10 T 80,15 T 90,10 T 100,10",
                            "M 0,10 Q 5,15 10,10 T 20,10 T 30,10 T 40,5 T 50,10 T 60,10 T 70,15 T 80,10 T 90,5 T 100,10",
                          ],
                        }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Status messages */}
                <div className="text-xs font-mono h-12 overflow-hidden">
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [-48, 0] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  >
                    <div className="text-[#E53935] py-1">
                      {">"} {content?.ngeInterface?.statusMessages?.initialized || "System initialized"}
                    </div>
                    <div className="text-[#1E88E5] py-1">
                      {">"} {content?.ngeInterface?.statusMessages?.diagnostics || "Running diagnostics"}
                    </div>
                    <div className="text-[#FDD835] py-1">
                      {">"} {content?.ngeInterface?.statusMessages?.nominal || "All systems nominal"}
                    </div>
                    <div className="text-[#E53935] py-1">
                      {">"} {content?.ngeInterface?.statusMessages?.ready || "Ready for operation"}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Descripción */}
              <motion.p
                className="text-sm font-mono text-[#FF6B00]/80 mb-4"
                variants={{
                  hover: {
                    color: "#FF6B00",
                    x: 3,
                    transition: { duration: 0.3 },
                  },
                }}
              >
                {content?.ngeInterface?.description || "A futuristic interface inspired by Neon Genesis Evangelion"}
              </motion.p>

              {/* Tecnologías */}
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                variants={{
                  hover: {
                    y: -3,
                    transition: { staggerChildren: 0.05 },
                  },
                }}
              >
                {(content?.ngeInterface?.technologies || ["HTML", "CSS", "JavaScript"]).map((tech, index) => (
                  <motion.span
                    key={index}
                    className="text-xs font-mono bg-[#FF3300]/20 text-[#FF6B00] px-2 py-1 cursor-pointer"
                    variants={{
                      hover: {
                        backgroundColor: "rgba(255, 51, 0, 0.4)",
                        y: -2,
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      },
                    }}
                    whileHover={{
                      backgroundColor: "rgba(255, 51, 0, 0.6)",
                      scale: 1.1,
                      y: -4,
                      color: "#FFFFFF",
                      boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3, type: "spring" },
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Action Button with Bauhaus decorations */}
              <motion.button
                onClick={() => window.open("https://javierpentola.github.io/NGE/", "_blank")}
                className="w-full bg-[#E53935] text-white font-mono py-2 px-4 flex items-center justify-center gap-2 relative"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FF5252",
                  transition: { type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hover: { y: -2 },
                }}
              >
                <span>{content?.viewLive || "View Live"}</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Picture to Video Card - MEJORADO BAUHAUS */}
          <motion.div
            className="relative bg-white overflow-hidden border-2 border-black"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              borderColor: "#FDD835",
              borderWidth: 3,
              transition: { duration: 0.3, type: "spring", stiffness: 300 },
            }}
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-black"
              whileHover={{
                height: 3,
                backgroundColor: "#FDD835",
                transition: { duration: 0.2 },
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-full h-1 bg-black"
              whileHover={{
                height: 3,
                backgroundColor: "#1E88E5",
                transition: { duration: 0.2 },
              }}
            />

            {/* Technical grid background */}
            <motion.div
              className="absolute inset-0 opacity-5"
              whileHover={{
                opacity: 0.1,
                transition: { duration: 0.5 },
              }}
            >
              <svg width="100%" height="100%">
                <pattern id="techGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="black" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#techGrid)" />
              </svg>
            </motion.div>

            {/* Geometric decorations */}
            <motion.div
              className="absolute -right-16 -top-16 w-32 h-32"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              whileHover={{
                x: -10,
                y: 10,
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
            >
              <motion.div
                className="w-full h-full bg-[#FDD835]"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                whileHover={{
                  backgroundColor: "#FFB300",
                  filter: "brightness(1.2)",
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>

            <motion.div
              className="p-8 relative"
              whileHover="hover"
              variants={{
                hover: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {/* Title with technical elements */}
              <motion.div
                className="relative mb-12"
                variants={{
                  hover: {
                    y: -5,
                    transition: { duration: 0.3 },
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="absolute -left-4 -top-4 w-8 h-8 border-2 border-black"
                  animate={{ rotate: [0, 90, 180, 270, 360] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                  variants={{
                    hover: {
                      borderColor: "#FF9800",
                      borderWidth: 3,
                      scale: 1.2,
                      transition: { duration: 0.5 },
                    },
                  }}
                  whileHover={{
                    backgroundColor: "rgba(255, 152, 0, 0.2)",
                    transition: { duration: 0.2 },
                  }}
                />
                <motion.h3
                  className="text-3xl font-mono font-bold text-black relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  variants={{
                    hover: {
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    },
                  }}
                  whileHover={{
                    textShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-center gap-4">
                    <motion.span
                      className="relative cursor-pointer"
                      variants={{
                        hover: {
                          y: -3,
                          color: "#FF9800",
                          transition: { duration: 0.2 },
                        },
                      }}
                      whileHover={{
                        scale: 1.1,
                        color: "#FF6F00",
                        transition: { duration: 0.2, type: "spring" },
                      }}
                    >
                      PNG
                      <motion.div
                        className="absolute -bottom-2 left-0 h-1 w-full bg-[#FF9800]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8 }}
                        variants={{
                          hover: {
                            height: 2,
                            transition: { duration: 0.2 },
                          },
                        }}
                        whileHover={{
                          height: 3,
                          backgroundColor: "#FF6F00",
                          transition: { duration: 0.2 },
                        }}
                      />
                    </motion.span>
                    <motion.div
                      className="w-8 h-px bg-black"
                      animate={{ scaleX: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      variants={{
                        hover: {
                          scaleX: 2,
                          rotate: 45,
                          transition: { duration: 0.5 },
                        },
                      }}
                      whileHover={{
                        backgroundColor: "#FF9800",
                        height: 2,
                        transition: { duration: 0.2 },
                      }}
                    />
                    <motion.span
                      className="relative cursor-pointer"
                      variants={{
                        hover: {
                          y: -3,
                          color: "#1E88E5",
                          transition: { duration: 0.2, delay: 0.1 },
                        },
                      }}
                      whileHover={{
                        scale: 1.1,
                        color: "#0D47A1",
                        transition: { duration: 0.2, type: "spring" },
                      }}
                    >
                      MP4
                      <motion.div
                        className="absolute -bottom-2 left-0 h-1 w-full bg-[#1E88E5]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        variants={{
                          hover: {
                            height: 2,
                            transition: { duration: 0.2 },
                          },
                        }}
                        whileHover={{
                          height: 3,
                          backgroundColor: "#0D47A1",
                          transition: { duration: 0.2 },
                        }}
                      />
                    </motion.span>
                  </div>
                </motion.h3>
              </motion.div>

              {/* Main conversion visualization */}
              <motion.div
                className="relative mb-8"
                variants={{
                  hover: {
                    scale: 1.05,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3, type: "spring" },
                }}
              >
                {/* Technical measurement lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
                  <motion.line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="black"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    variants={{
                      hover: {
                        strokeWidth: 2,
                        stroke: "#FF9800",
                        transition: { duration: 0.5 },
                      },
                    }}
                  />
                  <motion.line
                    x1="50%"
                    y1="0"
                    x2="50%"
                    y2="100%"
                    stroke="black"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    variants={{
                      hover: {
                        strokeWidth: 2,
                        stroke: "#1E88E5",
                        transition: { duration: 0.5 },
                      },
                    }}
                  />
                </svg>

                {/* Conversion Process */}
                <div className="grid grid-cols-3 gap-8">
                  {/* Input Section */}
                  <motion.div
                    className="relative"
                    variants={{
                      hover: {
                        x: -5,
                        transition: { duration: 0.3 },
                      },
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3, type: "spring" },
                    }}
                  >
                    <motion.div
                      className="w-full aspect-square bg-[#FF9800] relative cursor-pointer"
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      whileHover={{
                        backgroundColor: "#FF6F00",
                        rotate: 10,
                        transition: { duration: 0.5 },
                      }}
                    >
                      <motion.div
                        className="absolute inset-2 border-2 border-black flex items-center justify-center"
                        whileHover={{
                          borderWidth: 3,
                          borderColor: "#FF6F00",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <motion.span
                          className="font-mono text-xs"
                          whileHover={{
                            scale: 1.2,
                            color: "white",
                            transition: { duration: 0.2 },
                          }}
                        >
                          PNG
                        </motion.span>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-4 h-4 bg-black"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      whileHover={{
                        backgroundColor: "#FF6F00",
                        scale: 1.5,
                        transition: { duration: 0.3 },
                      }}
                    />
                  </motion.div>

                  {/* Process Section */}
                  <motion.div
                    className="relative flex items-center justify-center"
                    variants={{
                      hover: {
                        y: -8,
                        transition: { duration: 0.5, type: "spring" },
                      },
                    }}
                    whileHover={{
                      scale: 1.15,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="w-16 h-16 border-2 border-black rounded-full relative cursor-pointer"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                      whileHover={{
                        borderColor: "#FDD835",
                        borderWidth: 3,
                        boxShadow: "0 0 15px rgba(253, 216, 53, 0.5)",
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.div
                        className="absolute inset-2 bg-[#1E88E5]"
                        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                        animate={{ rotate: [360, 0] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                        whileHover={{
                          backgroundColor: "#0D47A1",
                          transition: { duration: 0.5 },
                        }}
                      />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 1 },
                      }}
                    >
                      <motion.div whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}>
                        <Settings className="w-6 h-6" />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Output Section */}
                  <motion.div
                    className="relative"
                    variants={{
                      hover: {
                        x: 5,
                        transition: { duration: 0.3 },
                      },
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3, type: "spring" },
                    }}
                  >
                    <motion.div
                      className="w-full aspect-square bg-[#1E88E5] relative cursor-pointer"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      whileHover={{
                        backgroundColor: "#0D47A1",
                        scale: 1.1,
                        transition: { duration: 0.5 },
                      }}
                    >
                      <motion.div
                        className="absolute inset-2 border-2 border-black flex items-center justify-center"
                        whileHover={{
                          borderWidth: 3,
                          borderColor: "#0D47A1",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <motion.span
                          className="font-mono text-xs"
                          whileHover={{
                            scale: 1.2,
                            color: "white",
                            transition: { duration: 0.2 },
                          }}
                        >
                          MP4
                        </motion.span>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="absolute -top-2 -left-2 w-4 h-4 bg-[#FF9800]"
                      animate={{ rotate: [0, 90, 180, 270, 360] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      whileHover={{
                        backgroundColor: "#0D47A1",
                        scale: 1.5,
                        transition: { duration: 0.3 },
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                className="relative mb-8"
                variants={{
                  hover: {
                    x: 3,
                    transition: { duration: 0.3 },
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.p
                  className="text-sm font-mono text-black/80"
                  whileHover={{
                    color: "black",
                    fontWeight: "bold",
                    transition: { duration: 0.2 },
                  }}
                >
                  {content?.pictureToVideo?.description || "Convert static PNG images to dynamic MP4 videos"}
                </motion.p>
                <motion.div
                  className="absolute -left-4 top-1/2 w-2 h-2 bg-[#FF9800]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  whileHover={{
                    backgroundColor: "#FF6F00",
                    scale: 2,
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.div>

              {/* Technologies with Bauhaus style */}
              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                variants={{
                  hover: {
                    y: -3,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {["Angular", "PNG", "MP4"].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="relative cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.2,
                      y: -8,
                      transition: { duration: 0.3, type: "spring" },
                    }}
                    variants={{
                      hover: {
                        y: -3,
                        transition: { duration: 0.2 },
                      },
                    }}
                  >
                    <motion.div
                      className="px-3 py-1 bg-black text-white font-mono text-xs relative z-10"
                      whileHover={{
                        backgroundColor: index === 0 ? "#DD2C00" : index === 1 ? "#FF9800" : "#1E88E5",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {tech}
                    </motion.div>
                    <motion.div
                      className="absolute -right-1 -bottom-1 w-full h-full border border-[#1E88E5]"
                      animate={{ rotate: [0, 1, 0, -1, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      whileHover={{
                        borderWidth: 2,
                        borderColor: index === 0 ? "#DD2C00" : index === 1 ? "#FF9800" : "#1E88E5",
                        rotate: 5,
                        transition: { duration: 0.5 },
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Button with Bauhaus decorations */}
              <motion.div
                className="relative"
                variants={{
                  hover: {
                    y: -3,
                    transition: { duration: 0.3 },
                  },
                }}
              >
                <motion.div
                  className="absolute -left-2 -top-2 w-4 h-4"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, #FF9800, #FF9800 2px, transparent 2px, transparent 4px)",
                  }}
                  whileHover={{
                    scale: 1.5,
                    rotate: 45,
                    transition: { duration: 0.3 },
                  }}
                />
                <motion.div
                  className="absolute -right-2 -bottom-2 w-4 h-4"
                  style={{
                    background:
                      "repeating-linear-gradient(-45deg, #1E88E5, #1E88E5 2px, transparent 2px, transparent 4px)",
                  }}
                  whileHover={{
                    scale: 1.5,
                    rotate: -45,
                    transition: { duration: 0.3 },
                  }}
                />
                <motion.button
                  onClick={() => window.open("https://apng.moe/", "_blank")}
                  className="w-full bg-black text-white font-mono py-3 px-6 flex items-center justify-center gap-2 relative overflow-hidden group"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#424242",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                    transition: { duration: 0.3, type: "spring" },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {content?.viewLive || "View Live"}
                  </motion.span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    whileHover={{
                      scale: 1.3,
                      x: 10,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Portfolios Card - REDISEÑADO */}
          <motion.div
            className="relative bg-[#F5F5F5] overflow-hidden border-2 border-black"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              borderColor: "#1E88E5",
              borderWidth: 3,
              transition: { duration: 0.3, type: "spring", stiffness: 300 },
            }}
          >
            {/* Geometric Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              whileHover={{
                opacity: 0.15,
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <svg width="100%" height="100%" className="absolute inset-0">
                <pattern id="bauhaus-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#bauhaus-grid)" />
              </svg>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -right-16 -top-16 w-32 h-32 bg-[#E53935] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              whileHover={{
                x: -20,
                y: 20,
                scale: 1.5,
                opacity: 0.5,
                transition: { duration: 0.5 },
              }}
            />
            <motion.div
              className="absolute -left-8 bottom-0 w-24 h-24 bg-[#1E88E5]"
              animate={{
                rotate: [0, 45, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              whileHover={{
                x: 15,
                y: -15,
                rotate: 90,
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-2 bg-[#FDD835]"
              whileHover={{
                height: 4,
                transition: { duration: 0.2 },
              }}
            />

            <motion.div
              className="p-8 relative"
              whileHover="hover"
              variants={{
                hover: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {/* Title Section */}
              <motion.div
                className="mb-8"
                variants={{
                  hover: {
                    y: -5,
                    transition: { duration: 0.3 },
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.h3
                  className="text-3xl font-mono font-bold text-black relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  variants={{
                    hover: {
                      scale: 1.05,
                      x: 5,
                      transition: { duration: 0.3 },
                    },
                  }}
                  whileHover={{
                    color: "#1E88E5",
                    textShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {language === "en"
                    ? "Futurist Portfolio"
                    : language === "es"
                      ? "Portafolio Futurista"
                      : language === "fr"
                        ? "Portfolio Futuriste"
                        : language === "it"
                          ? "Portfolio Futurista"
                          : language === "zh"
                            ? "未来主义作品集"
                            : "Futurist Portfolio"}
                  <motion.div
                    className="absolute -right-4 top-0 w-2 h-2 bg-[#E53935]"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    variants={{
                      hover: {
                        scale: 2,
                        backgroundColor: "#FF5252",
                        transition: { duration: 0.5 },
                      },
                    }}
                    whileHover={{
                      scale: 3,
                      x: 2,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                  />
                </motion.h3>
                <motion.div
                  className="h-1 bg-black mt-2 w-16"
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    hover: {
                      width: "6rem",
                      height: 2,
                      transition: { duration: 0.3 },
                    },
                  }}
                  whileHover={{
                    width: "8rem",
                    backgroundColor: "#1E88E5",
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.div>

              {/* Portfolio Card - Solo Futurist */}
              <motion.div
                className="bg-white p-6 relative overflow-hidden"
                variants={{
                  hover: {
                    y: -5,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 },
                  },
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  borderLeft: "4px solid #E53935",
                  transition: { duration: 0.3, type: "spring" },
                }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16"
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="absolute top-0 right-0 w-full h-full bg-[#E53935]"
                    style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    variants={{
                      hover: {
                        backgroundColor: "#FF5252",
                        scale: 1.2,
                        transition: { duration: 0.5 },
                      },
                    }}
                    whileHover={{
                      filter: "brightness(1.2)",
                      transition: { duration: 0.3 },
                    }}
                  />
                </motion.div>

                <motion.p className="text-sm font-mono text-gray-700 mb-4">
                  {content?.archivedPortfolios?.items?.[0]?.description ||
                    "A portfolio with a futuristic aesthetic, featuring 3D elements and neon accents."}
                </motion.p>

                {/* Bullet Points */}
                <motion.div
                  className="mb-6"
                  variants={{
                    hover: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <motion.h4
                    className="font-bold mb-2 text-sm"
                    variants={{
                      initial: { opacity: 0, y: 5 },
                      hover: { opacity: 1, y: 0 },
                    }}
                  >
                    {content?.archivedPortfolios?.items?.[0]?.keyFeatures?.title || "Key Features:"}
                  </motion.h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {content?.archivedPortfolios?.items?.[0]?.keyFeatures?.features?.map((item, index) => (
                      <motion.li
                        key={index}
                        className="text-xs"
                        variants={{
                          initial: { opacity: 0, x: -10 },
                          hover: {
                            opacity: 1,
                            x: 0,
                            transition: {
                              duration: 0.3,
                              delay: index * 0.1,
                            },
                          },
                        }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Geometric decoration */}
                <div className="flex gap-2 mb-4">
                  <motion.div
                    className="w-8 h-8 bg-[#1E88E5]"
                    animate={{ rotate: [0, 90, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 180,
                      transition: { duration: 0.5 },
                    }}
                  />
                  <motion.div
                    className="w-8 h-8 rounded-full bg-[#FDD835]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    whileHover={{
                      scale: 1.3,
                      y: -5,
                      boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3, type: "spring" },
                    }}
                  />
                </div>

                {/* Action Button */}
                <motion.div
                  className="flex gap-2"
                  variants={{
                    hover: {
                      y: -3,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  <motion.button
                    onClick={() => window.open("https://portafolio-futurismo.vercel.app/", "_blank")}
                    className="w-full bg-[#E53935] text-white font-mono py-2 px-4 flex items-center justify-center gap-2 group"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#FF5252",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3, type: "spring" },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.5 },
                      }}
                    >
                      <Eye className="w-4 h-4" />
                    </motion.div>
                    <motion.span
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {content?.archivedPortfolios?.items?.[0]?.viewText || "View"}
                    </motion.span>
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Technical Lines Decoration */}
              <motion.div
                className="absolute bottom-4 right-4"
                whileHover={{
                  scale: 1.5,
                  rotate: 45,
                  transition: { duration: 0.5 },
                }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-20">
                  <motion.circle
                    cx="30"
                    cy="30"
                    r="20"
                    fill="none"
                    stroke="black"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    whileHover={{
                      stroke: "#1E88E5",
                      strokeWidth: 1,
                      transition: { duration: 0.3 },
                    }}
                  />
                  <motion.line
                    x1="0"
                    y1="30"
                    x2="60"
                    y2="30"
                    stroke="black"
                    strokeWidth="0.5"
                    animate={{ rotate: [0, 180, 0] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                    whileHover={{
                      stroke: "#E53935",
                      strokeWidth: 1,
                      transition: { duration: 0.3 },
                    }}
                  />
                  <motion.line
                    x1="30"
                    y1="0"
                    x2="30"
                    y2="60"
                    stroke="black"
                    strokeWidth="0.5"
                    animate={{ rotate: [0, -180, 0] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                    whileHover={{
                      stroke: "#FDD835",
                      strokeWidth: 1,
                      transition: { duration: 0.3 },
                    }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

