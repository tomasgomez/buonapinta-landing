import { SCHEDULE, CONTACT_INFO, LOCATION } from '../utils/config';

export function createScheduleHTML(): string {
  const scheduleList = SCHEDULE.map(day => `
    <div class="schedule-item">
      <span class="day">${day.day}:</span>
      <span class="hours ${day.isOpen ? 'open' : 'closed'}">${day.hours}</span>
    </div>
  `).join('');

  return `
    <section class="section">
      <div class="container grid grid-2">
        <div>
          <h2>Horarios</h2>
          <div class="schedule-list">
            ${scheduleList}
          </div>
        </div>
        <div>
          <h2>Ubicación</h2>
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
