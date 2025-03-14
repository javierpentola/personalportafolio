export const educationData = {
  degrees: [
    {
      degree: "Bachelor en Diseño",
      institution: "Universitat Carlemany",
      period: "2021 - 2024",
      color: "#E53935",
      rotate: -5,
      diploma: "design",
    },
    {
      degree: "Experto Universitario en Programación",
      institution: "Universidad Tecnológica",
      period: "2023",
      color: "#1E88E5",
      rotate: 5,
      diploma: "programming",
    },
  ],
  languages: [
    { name: "Inglés", level: "Aptis C1", color: "#E53935", rotate: -3, diploma: "english" },
    { name: "Chino", level: "HSK4", color: "#FDD835", rotate: 4, diploma: "chinese" },
    { name: "Francés", level: "TCF B2", color: "#1E88E5", rotate: -2, diploma: "french" },
    { name: "Italiano", level: "C1", color: "#43A047", rotate: 3, diploma: "italian" },
    { name: "Español", level: "Nativo", color: "#5E35B1", rotate: -4, diploma: null },
  ],
  diplomaData: {
    design: {
      image: "/placeholder.svg?height=600&width=800",
      caption: "Diploma de Grado en Diseño",
    },
    programming: {
      image: "/education_images/diplomas/programming.png",
      caption: "Certificado de Experto Universitario en Programación",
    },
    english: {
      image: "/education_images/diplomas/english.png",
      caption: "Certificado de Inglés Aptis C1",
    },
    chinese: {
      image: "/education_images/diplomas/chinese.png",
      caption: "Certificado de Chino HSK4",
    },
    french: {
      image: "/education_images/diplomas/french.png",
      caption: "Certificado de Francés TCF B2",
    },
    italian: {
      image: "/education_images/diplomas/italian.png",
      caption: "Certificado de Italiano C1",
    },
  },
}

export default educationData

