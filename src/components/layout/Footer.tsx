'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Building2,
  Shield,
  Award
} from 'lucide-react'

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ]

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ]

  const services = [
    { key: 'tax', href: '#services' },
    { key: 'financial', href: '#services' },
    { key: 'accounting', href: '#services' }
  ]

  const certifications = [
    { icon: Shield, text: 'Certificado SUNAT' },
    { icon: Award, text: 'ISO 9001:2015' },
    { icon: Building2, text: 'Colegio de Contadores' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-neutral-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Y</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text font-serif">Yataco Consultores</h3>
                  <p className="text-sm text-neutral-400">SAC</p>
                </div>
              </div>

              <p className="text-neutral-300 mb-6 max-w-md leading-relaxed">
                {t('footer.description')}
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-neutral-300">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span>+51 1 234-5678</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-300">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>contacto@yataco.com</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-300">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span>Av. Javier Prado Este 123, San Isidro, Lima</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-left"
                    >
                      {t(`nav.${link.key}`)}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">{t('footer.services')}</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-left"
                    >
                      {t(`contact.serviceOptions.${service.key}`)}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-neutral-800"
          >
            <h4 className="text-lg font-semibold mb-6 text-center">Certificaciones y Membresías</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center space-x-3 p-4 bg-neutral-800/50 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className="w-6 h-6 text-primary-400" />
                    <span className="text-neutral-300 text-sm font-medium">{cert.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-neutral-400 text-sm text-center sm:text-left">
                © {currentYear} Yataco Consultores SAC. {t('footer.rights')}
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <button className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Política de Privacidad
                </button>
                <button className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Términos de Servicio
                </button>
                <button className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-colors duration-200"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}

export default Footer