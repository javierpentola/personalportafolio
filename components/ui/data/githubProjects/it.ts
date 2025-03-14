import type { GithubProject } from "./types"

export const githubProjects: GithubProject[] = [
  {
    name: "Weather_App",
    description: "Applicazione web che mostra le informazioni meteorologiche per 20 capitali in tutto il mondo",
    stars: 1,
    forks: 0,
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    technologies: ["Python", "Flask", "SQLite"],
    color: "#E53935",
  },
  {
    name: "Library-Management-System",
    description:
      "Un'applicazione desktop per la gestione di un sistema bibliotecario, costruita con C per alte prestazioni",
    stars: 0,
    forks: 0,
    languages: ["C"],
    technologies: ["C", "GCC", "MinGW"],
    color: "#1E88E5",
  },
  {
    name: "OrderManagementSystem",
    description: "Applicazione web per la gestione degli ordini con viste per clienti e aziende",
    stars: 0,
    forks: 0,
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    technologies: ["Python", "Flask", "SQLite"],
    color: "#FDD835",
  },
  {
    name: "rabbitmq_chat",
    description: "Applicazione di chat in tempo reale utilizzando RabbitMQ, Node.js, Express e Socket.io",
    stars: 1,
    forks: 0,
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["Node.js", "Express.js", "Socket.io", "RabbitMQ"],
    color: "#43A047",
  },
]

export default githubProjects

