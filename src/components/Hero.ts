import { getReserveHref, WHATSAPP_URL } from '../utils/config';

export function createHeroHTML(): string {
  return `
    <section class="section hero">
      <div class="container ta-center">
        <div class="kicker">BARBER TRUCK EN CONCÓN</div>
        <h1>Buona Pinta Barber Truck</h1>
        <p class="subhead">Cortes clásicos y modernos con barberos expertos.</p>
        <div class="ctas">
          <a href="${getReserveHref()}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Reservar por WhatsApp</a>
          <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="btn">Escribir por WhatsApp</a>
        </div>
        <ul class="features">
          <li>✅ Atención rápida</li>
          <li>✅ Confirmación por WhatsApp</li>
          <li>✅ Horarios extendidos</li>
        </ul>
      </div>
    </section>
  `;
}
