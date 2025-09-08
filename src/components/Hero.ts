import { getReserveHref, WHATSAPP_URL } from '../utils/config';

export function createHeroHTML(): string {
  return `
    <section class="section hero">
      <div class="container ta-center">
        <div class="kicker">BARBER TRUCK EN CONCÓN</div>
        <h1>Buona Pinta Barber Truck</h1>
        <p class="subhead">Cortes clásicos y modernos con barberos expertos.</p>
        <div class="ctas">
          <a href="${getReserveHref()}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Reservar por WhatsApp
          </a>
          <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="btn">
            Escribir por WhatsApp
          </a>
        </div>

        <!-- Reemplazo de <ul> por feature pills -->
        <div class="feature-pills" aria-label="Beneficios">
          <span class="pill">✅ Atención rápida</span>
          <span class="pill">✅ Confirmación por WhatsApp</span>
          <span class="pill">✅ Horarios extendidos</span>
        </div>
      </div>
    </section>
  `;
}
