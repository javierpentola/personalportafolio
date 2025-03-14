import type { GithubProject } from "./types"

export const githubProjects: GithubProject[] = [
  {
    name: "Weather_App",
    description: "Application web affichant les informations météorologiques de 20 capitales du monde",
    stars: 1,
    forks: 0,
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    technologies: ["Python", "Flask", "SQLite"],
    color: "#E53935",
  },
  {
    name: "Library-Management-System",
    description:
      "Une application de bureau pour gérer un système de bibliothèque, construite avec C pour de hautes performances",
    stars: 0,
    forks: 0,
    languages: ["C"],
    technologies: ["C", "GCC", "MinGW"],
    color: "#1E88E5",
  },
  {
    name: "OrderManagementSystem",
    description: "Application web pour gérer les commandes avec des vues client et entreprise",
    stars: 0,
    forks: 0,
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    technologies: ["Python", "Flask", "SQLite"],
    color: "#FDD835",
  },
  {
    name: "rabbitmq_chat",
    description: "Application de chat en temps réel utilisant RabbitMQ, Node.js, Express et Socket.io",
    stars: 1,
    forks: 0,
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["Node.js", "Express.js", "Socket.io", "RabbitMQ"],
    color: "#43A047",
  },
]

export default githubProjects

