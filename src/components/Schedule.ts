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
        <div class="mt-16">
          <h3>Ubicación</h3>
          <p>${LOCATION.city}, ${LOCATION.region}</p>
          <p>
            <a class="link" href="https://maps.google.com/?q=BUONA%20PINTA%20Conc%C3%B3n" target="_blank" rel="noopener noreferrer">
              Ver en Google Maps
            </a>
          </p>
          <p>
            <a class="link" href="tel:${CONTACT_INFO.phone}">${CONTACT_INFO.phone}</a>
          </p>
        </div>
      </div>
    </section>
  `;
}
