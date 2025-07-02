import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { LanguageProvider } from '@/components/providers/LanguageProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Yataco Consultores SAC | Líderes en Asesoría Empresarial Perú',
  description: '✅ Especialistas en asesoría tributaria, financiera y contable. Más de 500 empresas confían en nosotros. ¡Consulta gratuita!',
  keywords: 'asesoria contable peru, consultoria financiera lima, asesoria tributaria sunat, yataco consultores',
  authors: [{ name: 'Yataco Consultores SAC' }],
  creator: 'Yataco Consultores SAC',
  publisher: 'Yataco Consultores SAC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yataco-consultores.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-PE': '/es',
      'en-US': '/en',
      'zh-CN': '/zh',
    },
  },
  openGraph: {
    title: 'Yataco Consultores SAC - Asesoría Empresarial Premium',
    description: 'Transformamos tu empresa con asesoría especializada en tributación, finanzas y contabilidad',
    url: 'https://yataco-consultores.com',
    siteName: 'Yataco Consultores SAC',
    images: [
      {
        url: '/og-yataco-consultores.jpg',
        width: 1200,
        height: 630,
        alt: 'Yataco Consultores SAC - Asesoría Empresarial',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yataco Consultores SAC | Líderes en Asesoría Empresarial',
    description: 'Especialistas en asesoría tributaria, financiera y contable en Perú',
    images: ['/og-yataco-consultores.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased transition-theme`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}