import type React from "react"
import type { Metadata } from "next"
import { LanguageProvider } from "@/contexts/LanguageContext"
import "./globals.css"

export const metadata = {
  title: 'Gracia',
  description: 'Portfolio personal de diseño y desarrollo',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'