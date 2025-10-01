import { BARBERS, getReserveHref } from '../utils/config';

function createBarberPlaceholder(name: string): string {
  const firstLetter = name.charAt(0).toUpperCase();
  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];
  const colorIndex = name.charCodeAt(0) % colors.length;
  const backgroundColor = colors[colorIndex];
  
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${backgroundColor}"/>
      <text x="100" y="120" font-family="Arial, sans-serif" font-size="80" font-weight="bold" text-anchor="middle" fill="white">${firstLetter}</text>
    </svg>
  `)}`;
}

export function createBarbersHTML(): string {
  const items = BARBERS.map(b => `
    <article class="card barber-card">
      <img src="${b.photo || createBarberPlaceholder(b.name)}" alt="Barbero ${b.name}" class="barber-photo" loading="lazy" decoding="async" />
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
