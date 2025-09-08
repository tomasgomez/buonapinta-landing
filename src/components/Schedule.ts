import { SCHEDULE, CONTACT_INFO, LOCATION } from '../utils/config';

export function createScheduleHTML(): string {
  const rows = SCHEDULE.map(day => `
    <div class="schedule-row">
      <span class="day">${day.day}</span>
      <span class="hour">${day.hours}</span>
    </div>
  `).join('');

  return `
    <section class="section" id="horarios">
      <div class="container ta-center">
        <h2>Horarios</h2>
        <div class="schedule-grid">
          ${rows}
        </div>
        <div class="location">
          <h3>Ubicación</h3>
          <p>Concón, Valparaíso <span class="badge">🎾 Dentro de Padel Montemar</span></p>
          <p><a href="https://maps.app.goo.gl/nRKx2bDSank2ctAE7" target="_blank" rel="noopener noreferrer">Abrir en Google Maps</a></p>
          <p><a href="tel:+56956591265">+56 9 5659 1265</a></p>
        </div>
      </div>
    </section>
  `;
}
