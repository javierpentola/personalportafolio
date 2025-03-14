import type { GithubProject } from "./types"

export const githubProjects: GithubProject[] = [
  {
    name: "Weather_App",
    description: "Web application displaying weather information for 20 capitals around the world",
    stars: 1,
    forks: 0,
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    technologies: ["Python", "Flask", "SQLite"],
    color: "#E53935",
  },
  {
    name: "Library-Management-System",
    description: "A desktop application for managing a library system, built with C for high performance",
    stars: 0,
    forks: 0,
    languages: ["C"],
    technologies: ["C", "GCC", "MinGW"],
    color: "#1E88E5",
  },
  {
    name: "OrderManagementSystem",
    description: "Web application for managing orders with client and company views",
    stars: 0,
    forks: 0,
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    technologies: ["Python", "Flask", "SQLite"],
    color: "#FDD835",
  },
  {
    name: "rabbitmq_chat",
    description: "Real-time chat application using RabbitMQ, Node.js, Express, and Socket.io",
    stars: 1,
    forks: 0,
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["Node.js", "Express.js", "Socket.io", "RabbitMQ"],
    color: "#43A047",
  },
]

export default githubProjects

