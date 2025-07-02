'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { ChevronLeft, ChevronRight, Star, Quote, Building2 } from 'lucide-react'
import Image from 'next/image'

const Testimonials = () => {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      key: 'carlos',
      name: t('testimonials.clients.carlos.name'),
      position: t('testimonials.clients.carlos.position'),
      company: t('testimonials.clients.carlos.company'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      content: t('testimonials.clients.carlos.content'),
      rating: 5,
      metrics: { savings: '35%', compliance: '100%' }
    },
    {
      id: 2,
      key: 'maria',
      name: t('testimonials.clients.maria.name'),
      position: t('testimonials.clients.maria.position'),
      company: t('testimonials.clients.maria.company'),
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      content: t('testimonials.clients.maria.content'),
      rating: 5,
      metrics: { roi: '28%', efficiency: '45%' }
    },
    {
      id: 3,
      key: 'roberto',
      name: t('testimonials.clients.roberto.name'),
      position: t('testimonials.clients.roberto.position'),
      company: t('testimonials.clients.roberto.company'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      content: t('testimonials.clients.roberto.content'),
      rating: 5,
      metrics: { speed: '50%', accuracy: '99%' }
    },
    {
      id: 4,
      key: 'ana',
      name: t('testimonials.clients.ana.name'),
      position: t('testimonials.clients.ana.position'),
      company: t('testimonials.clients.ana.company'),
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      content: t('testimonials.clients.ana.content'),
      rating: 5,
      metrics: { profit: '32%', costs: '-20%' }
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            {t('testimonials.labels.clientTestimonials')}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-serif">
            {t('testimonials.title')}
          </h2>
          
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-8 lg:p-12"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center mb-6">
                      <Quote className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                      <div className="flex space-x-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    
                    <div className="flex items-center mb-6">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-900 dark:text-white">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                          {testimonials[currentIndex].position}
                        </div>
                        <div className="text-sm text-primary-600 dark:text-primary-400 flex items-center">
                          <Building2 className="w-3 h-3 mr-1" />
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(testimonials[currentIndex].metrics).map(([key, value]) => (
                        <div key={key} className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                            {value}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 capitalize">
                            {t(`testimonials.metrics.${key}`)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Company Visual */}
                  <div className="order-1 lg:order-2">
                    <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
                        alt="Oficina empresarial"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-sm opacity-90">{t('testimonials.labels.clientSince')}</div>
                        <div className="text-lg font-semibold">2019</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-primary-600 dark:bg-primary-400 w-8'
                  : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-neutral-400'}`} />
            <span>{isAutoPlaying ? t('testimonials.labels.autoplay') : t('testimonials.labels.paused')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials