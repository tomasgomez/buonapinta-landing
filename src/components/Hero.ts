import { getReserveHref, WHATSAPP_URL, SITE_DESCRIPTION } from '../utils/config';

export function createHeroHTML(): string {
  return `
    <section class="hero">
      <div class="container">
        <p class="eyebrow">Barber Truck en Concón</p>
        <h1>Reserva con nosotros</h1>
        <p class="sub">${SITE_DESCRIPTION}</p>
        <div class="cta-row">
          <a href="${getReserveHref()}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Reservar por WhatsApp</a>
          <a
            href="${WHATSAPP_URL}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
            aria-label="Escribir por WhatsApp"
          >
            <i class="fab fa-whatsapp"></i> Escribir por WhatsApp
          </a>
        </div>
        <ul class="benefits">
          <li>✅ Atención personalizada por WhatsApp</li>
          <li>✅ Confirmación rápida</li>
          <li>✅ Mismos horarios y servicios</li>
        </ul>
      </div>
    </section>
  `;
}
