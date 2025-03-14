export const educationData = {
  degrees: [
    {
      degree: "Licence en Design",
      institution: "Universitat Carlemany",
      period: "2021 - 2024",
      color: "#E53935",
      rotate: -5,
      diploma: "design",
    },
    {
      degree: "Expert Universitaire en Programmation",
      institution: "Université Technologique",
      period: "2023",
      color: "#1E88E5",
      rotate: 5,
      diploma: "programming",
    },
  ],
  languages: [
    { name: "Anglais", level: "Aptis C1", color: "#E53935", rotate: -3, diploma: "english" },
    { name: "Chinois", level: "HSK4", color: "#FDD835", rotate: 4, diploma: "chinese" },
    { name: "Français", level: "TCF B2", color: "#1E88E5", rotate: -2, diploma: "french" },
    { name: "Italien", level: "C1", color: "#43A047", rotate: 3, diploma: "italian" },
    { name: "Espagnol", level: "Langue maternelle", color: "#5E35B1", rotate: -4, diploma: null },
  ],
  diplomaData: {
    design: {
      image: "/placeholder.svg?height=600&width=800",
      caption: "Diplôme de Licence en Design - Un voyage créatif à travers la communication visuelle",
    },
    programming: {
      image: "/education/diplomas/programming.png",
      caption: "Certificat d'Expert Universitaire en Programmation - Maîtriser l'art du codage",
    },
    english: {
      image: "/education/diplomas/english.png",
      caption: "Certificat d'Anglais Aptis C1 - Aisance dans la langue mondiale",
    },
    chinese: {
      image: "/education/diplomas/chinese.png",
      caption: "Certificat de Chinois HSK4 - Explorer les subtilités du mandarin",
    },
    french: {
      image: "/education/diplomas/french.png",
      caption: "Certificat TCF B2 de Français",
    },
    italian: {
      image: "/education/diplomas/italian.png",
      caption: "Certificat d'Italien C1 - Maîtriser la langue de l'art et de la culture",
    },
  },
}

export default educationData

