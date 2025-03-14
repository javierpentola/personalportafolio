import type { GithubProject } from "./types"

export const githubProjects: GithubProject[] = [
  {
    name: "Weather_App",
    description: "显示全球20个首都天气信息的网络应用",
    stars: 1,
    forks: 0,
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    technologies: ["Python", "Flask", "SQLite"],
    color: "#E53935",
  },
  {
    name: "Library-Management-System",
    description: "用C语言构建的高性能图书馆管理系统桌面应用",
    stars: 0,
    forks: 0,
    languages: ["C"],
    technologies: ["C", "GCC", "MinGW"],
    color: "#1E88E5",
  },
  {
    name: "OrderManagementSystem",
    description: "具有客户和公司视图的订单管理网络应用",
    stars: 0,
    forks: 0,
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    technologies: ["Python", "Flask", "SQLite"],
    color: "#FDD835",
  },
  {
    name: "rabbitmq_chat",
    description: "使用RabbitMQ、Node.js、Express和Socket.io的实时聊天应用",
    stars: 1,
    forks: 0,
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["Node.js", "Express.js", "Socket.io", "RabbitMQ"],
    color: "#43A047",
  },
]

export default githubProjects

