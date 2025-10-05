# Buona Pinta Landing - Documentación Técnica

## 📋 Resumen del Proyecto

**Buona Pinta Landing** es un sitio web estático que sirve como página de aterrizaje para el sistema de reservas de barbería. Está diseñado para ser desplegado como un sitio estático en Render.com y redirige a los usuarios al sistema principal de reservas.

## 🏗️ Arquitectura del Proyecto

### Estructura de Directorios
```
buonapinta-landing/
├── src/
│   ├── components/          # Componentes TypeScript
│   │   ├── Header.ts        # Encabezado del sitio
│   │   ├── Hero.ts          # Sección principal
│   │   ├── Services.ts      # Lista de servicios
│   │   ├── Barbers.ts       # Información de barberos
│   │   ├── Schedule.ts      # Horarios de atención
│   │   └── Footer.ts        # Pie de página
│   ├── styles/             # Archivos CSS
│   ├── types/              # Definiciones de tipos
│   │   └── index.ts        # Tipos compartidos
│   ├── utils/              # Utilidades
│   │   ├── config.ts       # Configuración del sitio
│   │   └── htmlGenerator.ts # Generador de HTML
│   └── build.ts            # Script de construcción
├── styles/                 # CSS global
│   └── main.css           # Estilos principales
├── index.html             # Página principal generada
├── package.json           # Dependencias y scripts
└── render.yaml           # Configuración de Render.com
```

## 🎯 Funcionalidades Principales

### 1. Página de Aterrizaje
- **Header**: Logo "BUONA PINTA" con tagline "Barber Truck en Concón"
- **Hero Section**: Título principal, descripción y botones de acción
- **Servicios**: Lista de servicios con precios y duración
- **Barberos**: Información del equipo de barberos
- **Horarios**: Horarios de atención y ubicación
- **Footer**: Información de contacto y redes sociales

### 2. Navegación y CTAs
- **Botón Principal**: "Reservar ahora" → redirige a `reserva.buonapinta.cl/book`
- **Botón Secundario**: "Reservar por WhatsApp" → enlace directo a WhatsApp
- **Enlaces de Redes**: Instagram (@buonapinta) y WhatsApp (+56 9 7286 5741)

## 🛠️ Tecnologías Utilizadas

### Frontend
- **TypeScript**: Lenguaje principal para componentes
- **HTML5**: Estructura semántica
- **CSS3**: Estilos responsive y modernos
- **Font Awesome**: Iconografía

### Herramientas de Desarrollo
- **Node.js**: Runtime para scripts de build
- **TypeScript Compiler**: Compilación de TypeScript
- **PostCSS**: Procesamiento de CSS

### Despliegue
- **Render.com**: Hosting de sitio estático
- **GitHub**: Control de versiones

## 📁 Componentes del Sistema

### Header.ts
```typescript
export function createHeaderHTML(): string {
  return `
    <header class="header">
      <div class="container">
        <h1>${SITE_NAME}</h1>
        <p class="tagline">
          <i class="fas fa-sun icon"></i>
          ${SITE_TAGLINE}
          <i class="fas fa-waves icon"></i>
        </p>
      </div>
    </header>
  `;
}
```

**Funcionalidad**: Genera el encabezado con logo y tagline centrados.

### Hero.ts
```typescript
export function createHeroHTML(): string {
  return `
    <section class="hero">
      <div class="container">
        <div class="kicker">BARBER TRUCK EN CONCÓN</div>
        <h1>Buona Pinta Barber Truck</h1>
        <p>${HERO_DESCRIPTION}</p>
        <div class="ctas">
          <a href="${BOOKING_URL}" class="btn btn-primary">Reservar ahora</a>
          <a href="${WHATSAPP_URL}" class="btn">Reservar por WhatsApp</a>
        </div>
        <div class="features">
          <span>✅ Reserva en 3 pasos</span>
          <span>✅ Confirmación por email</span>
          <span>✅ Horarios extendidos</span>
        </div>
      </div>
    </section>
  `;
}
```

**Funcionalidad**: Sección principal con título, descripción y botones de acción.

### Services.ts
```typescript
const SERVICES: Service[] = [
  {
    name: "Corte Clásico",
    duration: "45 minutos",
    price: 13500,
    description: "Corte tradicional con técnicas clásicas de barbería"
  },
  {
    name: "Corte & Barba",
    duration: "60 minutos", 
    price: 17500,
    description: "Corte completo con arreglo de barba"
  },
  {
    name: "Afeitado Relax",
    duration: "30 minutos",
    price: 8000,
    description: "Afeitado tradicional con toalla caliente"
  }
];
```

**Funcionalidad**: Define los servicios disponibles con precios y descripciones.

### Barbers.ts
```typescript
const BARBERS: Barber[] = [
  {
    name: "Arsen",
    code: "arsen-123",
    specialties: ["Corte Clásico", "Corte & Barba"]
  },
  {
    name: "Camilo", 
    code: "camilo-456",
    specialties: ["Corte Moderno", "Afeitado Relax"]
  },
  {
    name: "Cualquiera",
    code: "cualquiera-789", 
    specialties: ["Todos los servicios"]
  }
];
```

**Funcionalidad**: Información de barberos con códigos de acceso y especialidades.

## 🎨 Sistema de Estilos

### CSS Principal (main.css)
```css
:root {
  --brand: #ff6b5a;
  --text-dark: #111;
  --text-light: #555;
  --white-bg: #fff;
  --border-light: #e8e8e8;
  --ocean-aqua: #20b2aa;
  --sunset-coral: #ff6b5a;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
}
```

**Características**:
- Variables CSS para consistencia de colores
- Grid responsive para servicios
- Hover effects en botones y tarjetas
- Diseño mobile-first

### Responsive Design
- **Mobile** (< 768px): Una columna, elementos apilados
- **Tablet** (768px - 1024px): Dos columnas para servicios
- **Desktop** (> 1024px): Tres columnas para servicios

## 🔧 Scripts de Construcción

### build.ts
```typescript
import { generateHTML } from './utils/htmlGenerator';

async function build() {
  console.log('🏗️ Construyendo landing page...');
  
  const html = generateHTML();
  
  fs.writeFileSync('index.html', html);
  console.log('✅ Landing page generada exitosamente');
}
```

**Funcionalidad**: Genera el archivo HTML final combinando todos los componentes.

### package.json Scripts
```json
{
  "scripts": {
    "build": "ts-node src/build.ts",
    "dev": "ts-node src/build.ts && python3 -m http.server 8000"
  }
}
```

## 🌐 Configuración de Despliegue

### render.yaml
```yaml
services:
  - type: web
    name: buonapinta-landing
    env: static
    buildCommand: npm run build
    staticPublishPath: .
```

**Configuración**:
- **Tipo**: Sitio estático
- **Build Command**: `npm run build`
- **Publish Directory**: Directorio raíz (.)
- **URL de Producción**: `https://www.buonapinta.cl`

## 🔗 Integración con Sistema de Reservas

### Redirecciones
- **Botón Principal**: `https://reserva.buonapinta.cl/book`
- **WhatsApp**: `https://wa.me/56972865741`
- **Instagram**: `https://instagram.com/buonapinta`

### Flujo de Usuario
1. Usuario visita `www.buonapinta.cl`
2. Ve información de servicios y barberos
3. Hace clic en "Reservar ahora"
4. Es redirigido a `reserva.buonapinta.cl/book`
5. Completa el proceso de reserva en el sistema principal

## 📊 SEO y Metadatos

### Metadatos HTML
```html
<meta name="description" content="Barber Truck en Concón. Reserva tu hora en 3 pasos. Cortes clásicos y modernos con barberos expertos.">
<meta name="keywords" content="barbería, concón, reservas, corte de pelo, barber truck">
<meta property="og:title" content="Buona Pinta Barber Truck">
<meta property="og:description" content="Barber Truck en Concón. Reserva tu hora en 3 pasos.">
<meta property="og:image" content="/favicon.png">
```

### Estructura Semántica
- Uso de etiquetas HTML5 semánticas
- Schema.org markup para servicios
- Meta tags optimizados para redes sociales

## 🚀 Despliegue y Mantenimiento

### Proceso de Despliegue
1. Hacer cambios en el código
2. Ejecutar `npm run build`
3. Hacer commit y push a GitHub
4. Render.com detecta cambios y reconstruye automáticamente

### Mantenimiento
- **Actualización de precios**: Modificar `Services.ts`
- **Cambio de barberos**: Actualizar `Barbers.ts`
- **Modificación de horarios**: Editar `Schedule.ts`
- **Cambios de diseño**: Modificar `main.css`

## 📈 Métricas y Analytics

### Herramientas de Seguimiento
- **Google Analytics**: Implementado en el HTML
- **Facebook Pixel**: Para seguimiento de conversiones
- **Hotjar**: Para análisis de comportamiento de usuarios

### KPIs Principales
- **Tasa de conversión**: Visitas → Clics en "Reservar ahora"
- **Tiempo en página**: Engagement del usuario
- **Fuentes de tráfico**: Origen de las visitas
- **Dispositivos**: Mobile vs Desktop

## 🔒 Seguridad y Performance

### Optimizaciones
- **Minificación**: CSS y HTML optimizados
- **Compresión**: Gzip habilitado en Render.com
- **CDN**: Assets servidos desde CDN global
- **Caching**: Headers de cache configurados

### Seguridad
- **HTTPS**: Certificado SSL automático
- **Headers de Seguridad**: CSP y otros headers configurados
- **Validación**: HTML válido según W3C

## 📞 Contacto y Soporte

### Información de Contacto
- **WhatsApp**: +56 9 7286 5741
- **Instagram**: @buonapinta
- **Email**: hola@buonapinta.cl

### Soporte Técnico
- **Desarrollador**: Tomas Gomez Molina
- **Repositorio**: `git@github.com:tomasgomez/buonapinta-landing.git`
- **Documentación**: Este archivo y README.md
