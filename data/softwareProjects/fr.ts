import type { SoftwareProject } from "./types"

export const softwareProjects: SoftwareProject[] = [
  {
    id: "neural-net",
    title: "Visualiseur de Réseaux Neuronaux",
    category: "ai",
    description: "Visualisation interactive des architectures de réseaux neuronaux et des processus d'apprentissage",
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
    title: "Simulateur de Circuits Quantiques",
    category: "system",
    description: "Simulateur de calcul quantique basé sur navigateur avec interface de programmation visuelle",
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
    title: "Terrain de Jeu Physique en RA",
    category: "game",
    description: "Jeu en réalité augmentée enseignant la physique à travers des expériences interactives",
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
    title: "Moteur de Flux de Données",
    category: "web",
    description: "Plateforme de visualisation et d'analyse de données en temps réel",
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

