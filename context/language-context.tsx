'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { translations, type Language, type Translations } from './translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations[Language]
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr')

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [])

  const t = translations[language]
  const isRTL = language === 'ar'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
