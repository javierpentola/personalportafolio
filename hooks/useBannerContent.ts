import { useLanguage } from "../contexts/LanguageContext"
import { bannerContent } from "../data/bannerContent"

export const useBannerContent = () => {
  const { language } = useLanguage()
  // Add type assertion or check if language is a valid key
  return bannerContent[language as keyof typeof bannerContent] || bannerContent.en
}

