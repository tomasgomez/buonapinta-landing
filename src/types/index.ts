export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
}

export interface Barber {
  id: string;
  name: string;
  specialty: string;
  experience: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  instagram: string;
  whatsapp: string;
}

export interface Schedule {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface Location {
  address: string;
  city: string;
  region: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}
