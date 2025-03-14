import type { SoftwareProject } from "./types"

export const softwareProjects: SoftwareProject[] = [
  {
    id: "neural-net",
    title: "神经网络可视化工具",
    category: "ai",
    description: "神经网络架构和学习过程的交互式可视化",
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
    title: "量子电路模拟器",
    category: "system",
    description: "基于浏览器的量子计算模拟器，具有可视化编程界面",
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
    title: "AR物理游乐场",
    category: "game",
    description: "通过交互式实验教授物理学的增强现实游戏",
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
    title: "数据流引擎",
    category: "web",
    description: "实时数据可视化和分析平台",
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

