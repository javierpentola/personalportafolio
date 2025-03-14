"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { bannerContent } from "@/data/bannerContent"

export type BannerContent = {
  featured: string
  project: string
  design: string
  development: string
}

export function useBannerContent(): BannerContent {
  const { language } = useLanguage()
  return bannerContent[language] as BannerContent
}

