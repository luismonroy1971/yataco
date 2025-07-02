'use client'

import React, { createContext, useContext, useEffect } from 'react'
import { useLanguageStore } from '@/lib/stores/languageStore'
import { translations } from '@/lib/translations'

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { language, setLanguage } = useLanguageStore()

  useEffect(() => {
    // Detect browser language on first load
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('yataco-language')
      if (savedLanguage && ['es', 'en', 'zh'].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      } else {
        const browserLang = navigator.language.split('-')[0]
        if (['es', 'en', 'zh'].includes(browserLang)) {
          setLanguage(browserLang)
        }
      }
    }
  }, [setLanguage])

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language as keyof typeof translations]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}