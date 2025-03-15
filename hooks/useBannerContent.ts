import { useLanguage } from "@/contexts/LanguageContext"
import { bannerContent } from "@/data/bannerContent"

type SupportedLanguages = 'en' | 'es' | 'fr' | 'it' | 'zh'

export const useBannerContent = () => {
  const { language } = useLanguage() as { language: SupportedLanguages }
  return bannerContent[language] || bannerContent.en
}

