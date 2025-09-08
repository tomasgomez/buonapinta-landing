import { SERVICES, getReserveHref } from '../utils/config';

export function createServicesHTML(): string {
  const items = SERVICES.map(s => `
    <article class="card service-card">
      <h3>${s.name}</h3>
      <div class="meta">
        <span>${s.duration} min</span>
        <span class="price">$${s.price.toLocaleString('es-CL')}</span>
      </div>
      <p class="desc">${s.description}</p>
      <a href="${getReserveHref()}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Reservar por WhatsApp</a>
    </article>
  `).join('');

  return `
    <section class="section" id="servicios">
      <div class="container ta-center">
        <h2>Nuestros Servicios</h2>
        <div class="grid-cards">${items}</div>
      </div>
    </section>
  `;
}
