import { BARBERS, getReserveHref } from '../utils/config';

export function createBarbersHTML(): string {
  const items = BARBERS.map(b => `
    <article class="card barber-card">
      <img src="${b.photo || '/images/barber-placeholder.svg'}" alt="Barbero ${b.name}" class="barber-photo" loading="lazy" decoding="async" />
      <h3>${b.name}</h3>
      <div class="tags">${b.specialty}</div>
      <a href="${getReserveHref()}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Reservar por WhatsApp</a>
    </article>
  `).join('');

  return `
    <section class="section" id="barberos">
      <div class="container ta-center">
        <h2>Nuestros Barberos</h2>
        <div class="barbers-grid">${items}</div>
      </div>
    </section>
  `;
}
