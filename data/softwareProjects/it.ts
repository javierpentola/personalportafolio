import type { SoftwareProject } from "./types"

export const softwareProjects: SoftwareProject[] = [
  {
    id: "neural-net",
    title: "Visualizzatore di Reti Neurali",
    category: "ai",
    description: "Visualizzazione interattiva di architetture di reti neurali e processi di apprendimento",
    technologies: ["Python", "TensorFlow", "WebGL"],
    github: "github.com/user/neural-viz",
    live: "neural-viz.demo",
    stats: {
      commits: 245,
      branches: 12,
      releases: 8,
    },
  },
  {
    id: "quantum-sim",
    title: "Simulatore di Circuiti Quantistici",
    category: "system",
    description: "Simulatore di computazione quantistica basato su browser con interfaccia di programmazione visuale",
    technologies: ["TypeScript", "React", "Web Workers"],
    github: "github.com/user/quantum-sim",
    live: "quantum-sim.demo",
    stats: {
      commits: 189,
      branches: 8,
      releases: 5,
    },
  },
  {
    id: "ar-game",
    title: "Parco Giochi di Fisica in AR",
    category: "game",
    description: "Gioco in realtà aumentata che insegna la fisica attraverso esperimenti interattivi",
    technologies: ["Unity", "ARKit", "C#"],
    github: "github.com/user/ar-physics",
    live: "ar-physics.demo",
    stats: {
      commits: 312,
      branches: 15,
      releases: 10,
    },
  },
  {
    id: "data-viz",
    title: "Motore di Flusso Dati",
    category: "web",
    description: "Piattaforma di visualizzazione e analisi dati in tempo reale",
    technologies: ["Next.js", "D3.js", "WebSocket"],
    github: "github.com/user/data-flow",
    live: "data-flow.demo",
    stats: {
      commits: 423,
      branches: 18,
      releases: 12,
    },
  },
]

export default softwareProjects

