import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type LanguageState = {
  language: string
  setLanguage: (language: string) => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'es',
      setLanguage: (language: string) => {
        set({ language })
        if (typeof window !== 'undefined') {
          localStorage.setItem('yataco-language', language)
          document.documentElement.lang = language
        }
      },
    }),
    {
      name: 'yataco-language-storage',
    }
  )
)