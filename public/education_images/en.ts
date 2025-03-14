export const educationData = {
  degrees: [
    {
      degree: "Bachelor in Design",
      institution: "Universitat Carlemany",
      period: "2021 - 2024",
      color: "#E53935",
      rotate: -5,
      diploma: "design",
    },
    {
      degree: "University Expert in Programming",
      institution: "Universidad Tecnológica",
      period: "2023",
      color: "#1E88E5",
      rotate: 5,
      diploma: "programming",
    },
  ],
  languages: [
    { name: "English", level: "Aptis C1", color: "#E53935", rotate: -3, diploma: "english" },
    { name: "Chinese", level: "HSK4", color: "#FDD835", rotate: 4, diploma: "chinese" },
    { name: "French", level: "TCF B2", color: "#1E88E5", rotate: -2, diploma: "french" },
    { name: "Italian", level: "C1", color: "#43A047", rotate: 3, diploma: "italian" },
    { name: "Spanish", level: "Native", color: "#5E35B1", rotate: -4, diploma: null },
  ],
  diplomaData: {
    design: {
      image: "/placeholder.svg?height=600&width=800",
      caption: "Bachelor in Design Diploma",
    },
    programming: {
      image: "/education/diplomas/programming.png",
      caption: "University Expert in Programming Certificate",
    },
    english: {
      image: "/education/diplomas/english.png",
      caption: "English Aptis C1 Certificate",
    },
    chinese: {
      image: "/education/diplomas/chinese.png",
      caption: "Chinese HSK4 Certificate",
    },
    french: {
      image: "/education/diplomas/french.png",
      caption: "French TCF B2 Certificate",
    },
    italian: {
      image: "/education/diplomas/italian.png",
      caption: "Italian C1 Certificate",
    },
  },
}

export default educationData

