'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactSchema = z.object({
    company: z.string().min(2, 'Nombre de empresa requerido'),
    email: z.string().email('Email válido requerido'),
    phone: z.string().regex(/^9\d{8}$/, 'Formato: 9XXXXXXXX'),
    service: z.enum(['tax', 'financial', 'accounting'], {
      required_error: 'Selecciona un servicio'
    }),
    message: z.string().min(10, 'Mensaje mínimo 10 caracteres')
  })

  type ContactFormData = z.infer<typeof contactSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const watchedFields = watch()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+51 1 234-5678',
      description: 'Lun - Vie: 8:00 AM - 6:00 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@yataco.com',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: MapPin,
      title: 'Oficina Principal',
      content: 'Av. Javier Prado Este 123',
      description: 'San Isidro, Lima - Perú'
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      content: 'Lunes a Viernes',
      description: '8:00 AM - 6:00 PM'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-medium mb-4">
            <Send className="w-4 h-4 mr-2" />
            Contacto
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-serif">
            {t('contact.title')}
          </h2>
          
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Company Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  {t('contact.form.company')}
                </label>
                <input
                  {...register('company')}
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors dark:bg-neutral-800 dark:border-neutral-600 dark:text-white ${
                    errors.company ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  placeholder="Nombre de tu empresa"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.company.message}
                  </p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors dark:bg-neutral-800 dark:border-neutral-600 dark:text-white ${
                    errors.email ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  placeholder="tu@empresa.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors dark:bg-neutral-800 dark:border-neutral-600 dark:text-white ${
                    errors.phone ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  placeholder="987654321"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phone.message}
                  </p>
                )}
              </motion.div>

              {/* Service */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  {t('contact.form.service')}
                </label>
                <select
                  {...register('service')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors dark:bg-neutral-800 dark:border-neutral-600 dark:text-white ${
                    errors.service ? 'border-red-500' : 'border-neutral-300'
                  }`}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="tax">{t('contact.serviceOptions.tax')}</option>
                  <option value="financial">{t('contact.serviceOptions.financial')}</option>
                  <option value="accounting">{t('contact.serviceOptions.accounting')}</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.service.message}
                  </p>
                )}
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors dark:bg-neutral-800 dark:border-neutral-600 dark:text-white resize-none ${
                    errors.message ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  placeholder="Cuéntanos sobre tu proyecto o necesidades específicas..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message.message}
                  </p>
                )}
                <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  {watchedFields.message?.length || 0}/500 caracteres
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-neutral-400 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 hover:scale-105 active:scale-95'
                  } text-white`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </motion.button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {t('contact.form.success')}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {t('contact.form.error')}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300 font-medium">
                      {info.content}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}

            {/* Map Placeholder */}
            <motion.div
              variants={itemVariants}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                  <p className="text-neutral-600 dark:text-neutral-400">Mapa Interactivo</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">San Isidro, Lima</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact