# Yataco Consultores SAC - Sitio Web Profesional

## 🚀 Descripción

Sitio web profesional para **Yataco Consultores SAC**, empresa líder en servicios de asesoría contable, administrativa y financiera en Perú. Desarrollado con las últimas tecnologías web para ofrecer una experiencia de usuario excepcional.

## ✨ Características Principales

### 🌐 Multiidioma
- **Español** (es) - Idioma principal
- **Inglés** (en) - Para clientes internacionales
- **Chino** (zh) - Mercado asiático
- Detección automática de idioma por geolocalización
- Persistencia de preferencias en localStorage

### 🎨 Diseño Moderno
- **Dark/Light Mode** con transiciones suaves
- **Responsive Design** optimizado para todos los dispositivos
- **Animaciones fluidas** con Framer Motion
- **Paleta de colores profesional** siguiendo brand guidelines
- **Typography scale** con Inter y Playfair Display

### 🔧 Funcionalidades
- **Hero Section** con efectos typewriter y animaciones
- **Servicios especializados** con imágenes de alta calidad
- **Carousel de testimonios** con autoplay y navegación
- **Formulario de contacto inteligente** con validaciones en tiempo real
- **SEO optimizado** con meta tags estratégicos
- **Performance optimizado** para Core Web Vitals

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14+** con App Router
- **React 18+** con TypeScript
- **Tailwind CSS** para styling
- **Framer Motion** para animaciones
- **Zustand** para manejo de estado
- **React Hook Form + Zod** para formularios

### Herramientas de Desarrollo
- **TypeScript** para type safety
- **ESLint** para linting
- **PostCSS** para procesamiento CSS
- **Lucide React** para iconografía

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

2. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
```

3. **Abrir en el navegador**
```
http://localhost:3000
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación
npm run start        # Inicia servidor de producción

# Calidad de Código
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos TypeScript
```

## 📁 Estructura del Proyecto

```
yataco-consultores/
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── globals.css      # Estilos globales
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página principal
│   ├── components/          # Componentes React
│   │   ├── layout/          # Componentes de layout
│   │   │   ├── Header.tsx   # Navegación principal
│   │   │   └── Footer.tsx   # Pie de página
│   │   ├── sections/        # Secciones de la página
│   │   │   ├── Hero.tsx     # Sección hero
│   │   │   ├── Services.tsx # Servicios
│   │   │   ├── Testimonials.tsx # Testimonios
│   │   │   └── Contact.tsx  # Contacto
│   │   └── providers/       # Context providers
│   │       ├── ThemeProvider.tsx
│   │       └── LanguageProvider.tsx
│   └── lib/                 # Utilidades y configuración
│       ├── stores/          # Zustand stores
│       ├── translations.ts  # Traducciones
│       └── utils.ts         # Funciones utilitarias
├── public/                  # Archivos estáticos
├── tailwind.config.js       # Configuración Tailwind
├── next.config.js           # Configuración Next.js
├── tsconfig.json           # Configuración TypeScript
└── package.json            # Dependencias y scripts
```

## 🎨 Paleta de Colores

```css
/* Colores Principales */
--primary-blue: #1E40AF     /* Azul corporativo */
--secondary-green: #059669  /* Verde confianza */
--accent-gold: #F59E0B      /* Dorado premium */
--neutral-gray: #6B7280     /* Gris neutro */
--success-green: #10B981    /* Verde éxito */
--error-red: #EF4444        /* Rojo error */
```

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Tablets pequeñas */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Pantallas grandes */
```

## 🌐 Configuración de Idiomas

Los idiomas se configuran en `src/lib/translations.ts`. Para agregar un nuevo idioma:

1. Agregar el código de idioma al array de idiomas soportados
2. Crear las traducciones correspondientes
3. Actualizar el selector de idiomas en el Header

## 📊 Performance

### Métricas Target
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Lighthouse Score**: 95+ en todas las categorías

### Optimizaciones Implementadas
- Lazy loading de imágenes
- Code splitting automático
- Compresión de assets
- Optimización de fuentes
- Minificación CSS/JS

## 🔒 SEO y Seguridad

### SEO
- Meta tags optimizados
- Open Graph tags
- Twitter Cards
- Sitemap automático
- Structured data

### Seguridad
- Headers de seguridad configurados
- Validación de formularios
- Sanitización de inputs
- HTTPS enforced

## 🚀 Deployment

### Vercel (Recomendado)
```bash
# Conectar repositorio a Vercel
# Deploy automático en cada push
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: .next
```

### Docker
```dockerfile
# Dockerfile incluido para containerización
docker build -t yataco-consultores .
docker run -p 3000:3000 yataco-consultores
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es propiedad de **Yataco Consultores SAC**. Todos los derechos reservados.

## 📞 Contacto

**Yataco Consultores SAC**
- 📧 Email: contacto@yataco.com
- 📱 Teléfono: +51 1 234-5678
- 📍 Dirección: Av. Javier Prado Este 123, San Isidro, Lima
- 🌐 Web: https://yataco-consultores.com

---

**Desarrollado con ❤️ para Yataco Consultores SAC**