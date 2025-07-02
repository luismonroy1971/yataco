'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { Calculator, TrendingUp, FileText, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const Services = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: Calculator,
      key: 'tax',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      key: 'financial',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: FileText,
      key: 'accounting',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      gradient: 'from-purple-500 to-purple-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-neutral-50 dark:bg-neutral-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Servicios Especializados
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-serif"
          >
            {t('services.title')}
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.key}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={t(`services.${service.key}.title`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80`} />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-neutral-50/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                    {t(`services.${service.key}.description`)}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {(t(`services.${service.key}.benefits`) || '').toString().split(',').filter(Boolean).map((benefit: string, idx: number) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{benefit.trim()}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="w-full flex items-center justify-center px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium">Más información</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas una consulta personalizada?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Nuestros expertos están listos para analizar tu situación específica y ofrecerte las mejores soluciones.
            </p>
            <motion.button
              className="bg-neutral-50 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-200 transition-colors inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Solicitar Consulta Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services