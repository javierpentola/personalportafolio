export const educationData = {
  degrees: [
    {
      degree: "设计学士",
      institution: "卡勒马尼大学",
      period: "2021 - 2024",
      color: "#E53935",
      rotate: -5,
      diploma: "design",
    },
    {
      degree: "编程大学专家",
      institution: "技术大学",
      period: "2023",
      color: "#1E88E5",
      rotate: 5,
      diploma: "programming",
    },
  ],
  languages: [
    { name: "英语", level: "Aptis C1", color: "#E53935", rotate: -3, diploma: "english" },
    { name: "中文", level: "HSK4", color: "#FDD835", rotate: 4, diploma: "chinese" },
    { name: "法语", level: "TCF B2", color: "#1E88E5", rotate: -2, diploma: "french" },
    { name: "意大利语", level: "C1", color: "#43A047", rotate: 3, diploma: "italian" },
    { name: "西班牙语", level: "母语", color: "#5E35B1", rotate: -4, diploma: null },
  ],
  diplomaData: {
    design: {
      image: "/placeholder.svg?height=600&width=800",
      caption: "设计学士学位",
    },
    programming: {
      image: "/education_images/diplomas/programming.png",
      caption: "编程大学专家证书",
    },
    english: {
      image: "/education_images/diplomas/english.png",
      caption: "英语Aptis C1证书",
    },
    chinese: {
      image: "/education_images/diplomas/chinese.png",
      caption: "中文HSK4证书",
    },
    french: {
      image: "/education_images/diplomas/french.png",
      caption: "法语TCF B2证书",
    },
    italian: {
      image: "/education_images/diplomas/italian.png",
      caption: "意大利语C1证书",
    },
  },
}

export default educationData

