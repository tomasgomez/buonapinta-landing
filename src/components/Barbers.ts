import { BARBERS } from '../utils/config';

export function createBarbersHTML(): string {
  const barbersList = BARBERS.map(barber => `
    <div class="barber-card">
      <h3>${barber.name}</h3>
      <p class="barber-specialty">${barber.specialty}</p>
      <p class="barber-experience">${barber.experience}</p>
    </div>
  `).join('');

  return `
    <section class="section">
      <div class="container">
        <h2>Nuestros Barberos</h2>
        <div class="barbers-grid">
          ${barbersList}
        </div>
      </div>
    </section>
  `;
}
