export interface SoftwareProject {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  github: string
  live: string
  stats: {
    commits: number
    branches: number
    releases: number
  }
}

