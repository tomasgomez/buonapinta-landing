import { Service, Barber, ContactInfo, Schedule, Location, SocialLink } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'haircut-classic',
    name: 'Corte Clásico',
    duration: 45,
    price: 13500,
    description: 'Corte tradicional con técnicas clásicas de barbería'
  },
  {
    id: 'haircut-beard',
    name: 'Corte & Barba',
    duration: 60,
    price: 17500,
    description: 'Corte completo con arreglo de barba y bigote'
  },
  {
    id: 'shave-relax',
    name: 'Afeitado Relax',
    duration: 30,
    price: 8000,
    description: 'Afeitado tradicional con toalla caliente'
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'arsen',
    name: 'Arsen',
    specialty: 'Cortes Clásicos',
    experience: '5+ años'
  },
  {
    id: 'camilo',
    name: 'Camilo',
    specialty: 'Estilos Modernos',
    experience: '3+ años'
  },
  {
    id: 'cualquiera',
    name: 'Cualquiera',
    specialty: 'Barba y Bigote',
    experience: '4+ años'
  }
];

export const CONTACT_INFO: ContactInfo = {
  phone: '+56 9 5659 1265',
  email: 'info@buonapinta.cl',
  instagram: '@buonapinta',
  whatsapp: '+56956591265'
};

export const SCHEDULE: Schedule[] = [
  { day: 'Lunes', hours: '11:00 - 19:00', isOpen: true },
  { day: 'Martes', hours: '11:00 - 19:00', isOpen: true },
  { day: 'Miércoles', hours: '11:00 - 19:00', isOpen: true },
  { day: 'Jueves', hours: '11:00 - 19:00', isOpen: true },
  { day: 'Viernes', hours: '11:00 - 19:00', isOpen: true },
  { day: 'Sábado', hours: '11:00 - 19:00', isOpen: true },
  { day: 'Domingo', hours: 'Cerrado', isOpen: false }
];

export const LOCATION: Location = {
  address: 'Concón',
  city: 'Concón',
  region: 'Valparaíso',
  country: 'Chile'
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/buonapinta',
    icon: 'fab fa-instagram',
    label: '@buonapinta'
  },
  {
    platform: 'whatsapp',
    url: 'https://wa.me/56956591265',
    icon: 'fab fa-whatsapp',
    label: 'WhatsApp'
  }
];

export const BOOKING_URL = 'https://reserva.buonapinta.cl/book';
export const SITE_NAME = 'BUONA PINTA';
export const SITE_TAGLINE = 'Barber Truck en Concón';
export const SITE_DESCRIPTION = 'Cortes clásicos y modernos con barberos expertos. Agenda en 3 pasos y recibe confirmación por email.';
