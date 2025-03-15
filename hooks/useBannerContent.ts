import { useLanguage } from "@/contexts/LanguageContext"
import { bannerContent } from "@/data/bannerContent"

type LanguageKey = keyof typeof bannerContent

export const useBannerContent = () => {
  const { language } = useLanguage()
  return bannerContent[language as LanguageKey] || bannerContent.en
}

