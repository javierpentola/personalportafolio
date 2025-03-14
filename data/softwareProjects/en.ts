import type { SoftwareProject } from "./types"

export const softwareProjects: SoftwareProject[] = [
  {
    id: "neural-net",
    title: "Neural Network Visualizer",
    category: "ai",
    description: "Interactive visualization of neural network architectures and learning processes",
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
    title: "Quantum Circuit Simulator",
    category: "system",
    description: "Browser-based quantum computing simulator with visual programming interface",
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
    title: "AR Physics Playground",
    category: "game",
    description: "Augmented reality game teaching physics through interactive experiments",
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
    title: "Data Flow Engine",
    category: "web",
    description: "Real-time data visualization and analysis platform",
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

