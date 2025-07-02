'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { ArrowRight, Play, CheckCircle, TrendingUp, Users, Award } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const { t } = useLanguage()
  const [currentWord, setCurrentWord] = useState(0)
  
  const words = [
    t('hero.title').split(' ').slice(0, 3).join(' '),
    'Transformación Digital',
    'Excelencia Empresarial'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  const stats = [
    { icon: Users, number: '500+', label: 'Empresas Atendidas' },
    { icon: TrendingUp, number: '25%', label: 'Incremento ROI Promedio' },
    { icon: Award, number: '15+', label: 'Años de Experiencia' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-primary-900/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Certificados por SUNAT
            </motion.div>

            {/* Title with Typewriter Effect */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-4">
                <span className="block font-serif gradient-text">
                  {words[currentWord]}
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-neutral-700 dark:text-neutral-300 mt-2">
                  {t('hero.subtitle')}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta1')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('#services')}
                className="btn-outline flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2" />
                {t('hero.cta2')}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main Image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
                  alt="Oficina moderna de Yataco Consultores"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -left-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-lg p-4 glass"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">En línea</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-lg p-4 glass"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">98%</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">Satisfacción</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero