import { createHeaderHTML } from '../components/Header';
import { createNoticeHTML } from '../components/Notice';
import { createHeroHTML } from '../components/Hero';
import { createServicesHTML } from '../components/Services';
import { createBarbersHTML } from '../components/Barbers';
import { createScheduleHTML } from '../components/Schedule';
import { createFooterHTML } from '../components/Footer';
import { SERVICES, SITE_NAME, SITE_DESCRIPTION, CONTACT_INFO } from './config';

export function generateHTML(): string {
  const currentYear = new Date().getFullYear();
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    "name": SITE_NAME,
    "url": "https://www.buonapinta.cl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Concón",
      "addressRegion": "Valparaíso",
      "addressCountry": "CL"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "11:00",
        "closes": "19:00"
      }
    ],
    "sameAs": ["https://www.instagram.com/buonapinta"],
    "makesOffer": SERVICES.map(service => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": service.name },
      "priceCurrency": "CLP",
      "price": service.price.toString()
    }))
  };

  return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reserva tu corte en Concón | ${SITE_NAME} Barber Truck</title>
    <meta name="description" content="${SITE_DESCRIPTION}">
    <meta name="keywords" content="barbería, corte de pelo, Concón, Valparaíso, barber truck, reserva online">
    <meta name="author" content="${SITE_NAME}">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.buonapinta.cl/">
    <meta property="og:title" content="Reserva tu corte en Concón | ${SITE_NAME}">
    <meta property="og:description" content="${SITE_DESCRIPTION}">
    <meta property="og:image" content="https://www.buonapinta.cl/favicon.png">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://www.buonapinta.cl/">
    <meta property="twitter:title" content="Reserva tu corte en Concón | ${SITE_NAME}">
    <meta property="twitter:description" content="${SITE_DESCRIPTION}">
    <meta property="twitter:image" content="https://www.buonapinta.cl/favicon.png">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="shortcut icon" type="image/png" href="favicon.png">
    <link rel="apple-touch-icon" href="favicon.png">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    
    <!-- Styles -->
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <main>
        ${createHeaderHTML()}
        ${createNoticeHTML()}
        ${createHeroHTML()}
        ${createServicesHTML()}
        ${createBarbersHTML()}
        ${createScheduleHTML()}
        ${createFooterHTML()}
        
        <!-- JSON-LD Schema.org para bots -->
        <script type="application/ld+json">
        ${JSON.stringify(schemaData, null, 2)}
        </script>
        
        <!-- Scripts -->
        <script>
            // Actualizar año actual
            document.getElementById('current-year').textContent = ${currentYear};
            
            // Smooth scroll para enlaces internos
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        </script>
    </main>
</body>
</html>
  `;
}
