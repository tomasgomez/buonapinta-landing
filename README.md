# BUONA PINTA Landing Page - Sitio Estático

## 🎯 Descripción

Landing page optimizada para conversión de BUONA PINTA Barber Truck, diseñada para ser hospedada como sitio estático en el DNS principal (www.buonapinta.cl).

## 📁 Estructura del Proyecto

```
buonapinta-landing/
├── index.html          # Página principal
├── 404.html           # Página de error 404
├── robots.txt         # Instrucciones para crawlers
├── sitemap.xml        # Mapa del sitio
├── .htaccess          # Configuración Apache
├── styles/
│   └── main.css       # Estilos optimizados
└── README.md          # Esta documentación
```

## 🚀 Características

### SEO Optimizado
- ✅ Meta tags completos (title, description, Open Graph, Twitter)
- ✅ Schema.org structured data (Barbershop, FAQPage)
- ✅ Sitemap XML automático
- ✅ Robots.txt configurado
- ✅ Canonical URLs

### Performance
- ✅ HTML estático (carga instantánea)
- ✅ CSS minificado y optimizado
- ✅ Fonts con display: swap
- ✅ Compresión GZIP habilitada
- ✅ Headers de cache configurados

### Conversión
- ✅ CTA prominente arriba del pliegue
- ✅ Múltiples CTAs estratégicos
- ✅ Prueba social (testimonios)
- ✅ FAQ para objeciones
- ✅ Responsive design (mobile-first)

## 🔗 Enlaces de Reserva

Todos los enlaces de reserva apuntan a la aplicación principal:
- **Aplicación**: `https://app.buonapinta.cl/book`
- **WhatsApp**: `https://wa.me/569XXXXXXXX`

## 📱 Responsive Design

- **Mobile-first**: Optimizado para dispositivos móviles
- **Breakpoints**: 768px para tablets y desktop
- **Touch-friendly**: Botones y enlaces optimizados para touch

## 🎨 Estilos

### Colores
- **Ocean Aqua**: #20B2AA (accent color)
- **Sunset Coral**: #FF6F61 (CTA buttons)
- **Text Dark**: #333333 (headings)
- **Text Light**: #666666 (body text)

### Tipografías
- **Montserrat**: Headings y CTAs
- **Lato**: Body text y contenido

## 🚀 Despliegue

### Opción 1: Hosting Estático (Recomendado)
1. **Netlify**: Arrastra la carpeta al dashboard
2. **Vercel**: Conecta con GitHub
3. **GitHub Pages**: Push a branch gh-pages
4. **Cloudflare Pages**: Upload files

### Opción 2: Hosting Tradicional
1. Sube todos los archivos al directorio raíz del dominio
2. Configura el .htaccess para Apache
3. Verifica que robots.txt y sitemap.xml estén accesibles

### Opción 3: CDN
1. Sube a AWS S3 + CloudFront
2. Configura el dominio personalizado
3. Habilita HTTPS

## ⚙️ Configuración DNS

### Estructura Recomendada
```
www.buonapinta.cl     → Landing page estática (este proyecto)
app.buonapinta.cl     → Aplicación de reservas (proyecto principal)
api.buonapinta.cl     → API backend (opcional)
```

### Configuración
1. **A Record**: `www.buonapinta.cl` → IP del hosting estático
2. **CNAME**: `app.buonapinta.cl` → Render/Vercel del proyecto principal
3. **CNAME**: `api.buonapinta.cl` → Backend API (opcional)

## 🔧 Personalización

### Actualizar Información de Contacto
1. Edita `index.html`
2. Cambia `569XXXXXXXX` por el número real
3. Actualiza la URL de Google Maps si es necesario

### Actualizar Precios
1. Edita la sección "Servicios" en `index.html`
2. Actualiza los precios en el Schema.org JSON-LD

### Agregar Imagen OG
1. Sube `og-buonapinta.jpg` (1200x630px) a la carpeta
2. Actualiza las meta tags en `index.html`

## 📊 Analytics (Opcional)

Para agregar Google Analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔍 Verificación

### Herramientas de SEO
- **Google Search Console**: Verificar indexación
- **PageSpeed Insights**: Medir performance
- **Rich Results Test**: Validar Schema.org
- **Mobile-Friendly Test**: Verificar responsive

### Checklist Pre-Despliegue
- [ ] Todos los enlaces funcionan
- [ ] Imagen OG configurada
- [ ] Número de WhatsApp actualizado
- [ ] Schema.org validado
- [ ] Mobile responsive verificado
- [ ] Performance optimizado

## 📈 Monitoreo

### Métricas Clave
- **Tiempo de carga**: < 2 segundos
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Conversión**: Clics en "Reservar ahora"
- **SEO**: Posición en búsquedas "barbería Concón"

## 🆘 Soporte

Para actualizaciones o cambios:
1. Edita los archivos HTML/CSS
2. Prueba localmente abriendo `index.html`
3. Sube los cambios al hosting
4. Verifica que todo funcione correctamente

---

**¡El landing page está listo para convertir visitantes en clientes!** 🎉

