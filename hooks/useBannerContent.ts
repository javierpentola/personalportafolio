import { useLanguage } from "../contexts/LanguageContext"

// Define banner content type
interface BannerContent {
  title: string;
  subtitle: string;
}

// Define banner content for different languages
const bannerContent: Record<string, BannerContent> = {
  en: {
    title: "Welcome",
    subtitle: "Portfolio"
  },
  es: {
    title: "Bienvenido",
    subtitle: "Portafolio"
  }
}

export const useBannerContent = () => {
  const { language } = useLanguage()
  return bannerContent[language] || bannerContent.en
}
