import { SERVICES, getReserveHref } from '../utils/config';

export function createServicesHTML(): string {
  const servicesList = SERVICES.map(service => `
    <div class="service-card">
      <h3>${service.name}</h3>
      <p class="service-duration">${service.duration} minutos</p>
      <p class="service-price">$${service.price.toLocaleString()}</p>
      <p class="service-description">${service.description}</p>
      <a href="${getReserveHref()}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Reservar por WhatsApp</a>
    </div>
  `).join('');

  return `
    <section class="section">
      <div class="container">
        <h2>Nuestros Servicios</h2>
        <div class="services-grid">
          ${servicesList}
        </div>
      </div>
    </section>
  `;
}
