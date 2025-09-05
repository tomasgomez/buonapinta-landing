import { SERVICES } from '../utils/config';

export function createServicesHTML(): string {
  const servicesList = SERVICES.map(service => `
    <div class="service-card">
      <h3>${service.name}</h3>
      <p class="service-duration">${service.duration} minutos</p>
      <p class="service-price">$${service.price.toLocaleString()}</p>
      <p class="service-description">${service.description}</p>
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
