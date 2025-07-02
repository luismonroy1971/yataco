'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const languages = [
    { code: 'es', name: 'Español', flag: '🇵🇪' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ]

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ]

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode)
    setIsLanguageOpen(false)
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700 transition-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold gradient-text font-serif">Yataco Consultores</h1>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">SAC</p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(`nav.${item.key}`)}
              </motion.button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === language)?.flag}
                </span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 py-1"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full px-4 py-2 text-left hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors flex items-center space-x-2 ${
                          language === lang.code ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : ''
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-700" />
              )}
            </motion.button>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:block btn-primary text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.consultation')}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {t(`nav.${item.key}`)}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="w-full btn-primary text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                {t('nav.consultation')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header