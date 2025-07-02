export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image: string
  benefits: string[]
  features: string[]
}

export interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  image: string
  content: string
  rating: number
  metrics: Record<string, string>
}

export interface ContactFormData {
  company: string
  email: string
  phone: string
  service: 'tax' | 'financial' | 'accounting'
  message: string
}

export interface Language {
  code: string
  name: string
  flag: string
}

export interface NavigationItem {
  key: string
  href: string
  label?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface CompanyInfo {
  name: string
  description: string
  phone: string
  email: string
  address: string
  socialLinks: SocialLink[]
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  canonicalUrl: string
}

export type Theme = 'light' | 'dark' | 'system'

export type LanguageCode = 'es' | 'en' | 'zh'

export type ServiceType = 'tax' | 'financial' | 'accounting'

export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      ease?: string
      staggerChildren?: number
      delayChildren?: number
    }
  }
}

export interface ContactInfo {
  icon: any
  title: string
  content: string
  description: string
}

export interface Certification {
  icon: any
  text: string
  description?: string
}

export interface Stat {
  icon: any
  number: string
  label: string
  description?: string
}