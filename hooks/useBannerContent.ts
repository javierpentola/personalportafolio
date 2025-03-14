import { useLanguage } from "@/contexts/LanguageContext"
import { bannerContent } from "@/data/bannerContent"

export const useBannerContent = () => {
  const { language } = useLanguage()
  return bannerContent[language] || bannerContent.en
}

