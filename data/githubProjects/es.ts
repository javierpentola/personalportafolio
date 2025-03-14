import type { GithubProject } from "./types"

export const githubProjects: GithubProject[] = [
  {
    name: "Weather_App",
    description: "Aplicación web que muestra información meteorológica de 20 capitales alrededor del mundo",
    stars: 1,
    forks: 0,
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    technologies: ["Python", "Flask", "SQLite"],
    color: "#E53935",
  },
  {
    name: "Library-Management-System",
    description:
      "Una aplicación de escritorio para gestionar un sistema de biblioteca, construida con C para alto rendimiento",
    stars: 0,
    forks: 0,
    languages: ["C"],
    technologies: ["C", "GCC", "MinGW"],
    color: "#1E88E5",
  },
  {
    name: "OrderManagementSystem",
    description: "Aplicación web para gestionar pedidos con vistas de cliente y empresa",
    stars: 0,
    forks: 0,
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    technologies: ["Python", "Flask", "SQLite"],
    color: "#FDD835",
  },
  {
    name: "rabbitmq_chat",
    description: "Aplicación de chat en tiempo real utilizando RabbitMQ, Node.js, Express y Socket.io",
    stars: 1,
    forks: 0,
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["Node.js", "Express.js", "Socket.io", "RabbitMQ"],
    color: "#43A047",
  },
]

export default githubProjects

