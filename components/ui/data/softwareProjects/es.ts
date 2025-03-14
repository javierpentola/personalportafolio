import type { SoftwareProject } from "./types"

export const softwareProjects: SoftwareProject[] = [
  {
    id: "neural-net",
    title: "Visualizador de Redes Neuronales",
    category: "ai",
    description: "Visualización interactiva de arquitecturas de redes neuronales y procesos de aprendizaje",
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
    title: "Simulador de Circuitos Cuánticos",
    category: "system",
    description: "Simulador de computación cuántica basado en navegador con interfaz de programación visual",
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
    title: "Patio de Juegos de Física en RA",
    category: "game",
    description: "Juego de realidad aumentada que enseña física a través de experimentos interactivos",
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
    title: "Motor de Flujo de Datos",
    category: "web",
    description: "Plataforma de visualización y análisis de datos en tiempo real",
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

