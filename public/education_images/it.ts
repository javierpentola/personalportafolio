export const educationData = {
  degrees: [
    {
      degree: "Laurea in Design",
      institution: "Universitat Carlemany",
      period: "2021 - 2024",
      color: "#E53935",
      rotate: -5,
      diploma: "design",
    },
    {
      degree: "Esperto Universitario in Programmazione",
      institution: "Università Tecnologica",
      period: "2023",
      color: "#1E88E5",
      rotate: 5,
      diploma: "programming",
    },
  ],
  languages: [
    { name: "Inglese", level: "Aptis C1", color: "#E53935", rotate: -3, diploma: "english" },
    { name: "Cinese", level: "HSK4", color: "#FDD835", rotate: 4, diploma: "chinese" },
    { name: "Francese", level: "TCF B2", color: "#1E88E5", rotate: -2, diploma: "french" },
    { name: "Italiano", level: "C1", color: "#43A047", rotate: 3, diploma: "italian" },
    { name: "Spagnolo", level: "Madrelingua", color: "#5E35B1", rotate: -4, diploma: null },
  ],
  diplomaData: {
    design: {
      image: "/placeholder.svg?height=600&width=800",
      caption: "Diploma di Laurea in Design",
    },
    programming: {
      image: "/education/diplomas/programming.png",
      caption: "Certificato di Esperto Universitario in Programmazione",
    },
    english: {
      image: "/education/diplomas/english.png",
      caption: "Certificato di Inglese Aptis C1",
    },
    chinese: {
      image: "/education/diplomas/chinese.png",
      caption: "Certificato di Cinese HSK4",
    },
    french: {
      image: "/education/diplomas/french.png",
      caption: "Certificato di Francese TCF B2",
    },
    italian: {
      image: "/education/diplomas/italian.png",
      caption: "Certificato di Italiano C1",
    },
  },
}

export default educationData

