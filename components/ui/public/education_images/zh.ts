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
      caption: "设计学士学位 - 通过视觉传达的创意之旅",
    },
    programming: {
      image: "/education/diplomas/programming.png",
      caption: "编程大学专家证书 - 掌握编码艺术",
    },
    english: {
      image: "/education/diplomas/english.png",
      caption: "英语Aptis C1证书 - 全球语言的流利程度",
    },
    chinese: {
      image: "/education/diplomas/chinese.png",
      caption: "中文HSK4证书 - 探索普通话的复杂性",
    },
    french: {
      image: "/education/diplomas/french.png",
      caption: "法语TCF B2证书 - 拥抱爱情的语言",
    },
    italian: {
      image: "/education/diplomas/italian.png",
      caption: "意大利语C1证书 - 掌握艺术与文化的语言",
    },
  },
}

export default educationData

