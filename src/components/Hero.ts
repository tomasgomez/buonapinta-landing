import { BOOKING_URL, CONTACT_INFO, SITE_DESCRIPTION } from '../utils/config';

export function createHeroHTML(): string {
  return `
    <section class="hero">
      <div class="container">
        <p class="eyebrow">Barber Truck en Concón</p>
        <h1>Reserva con nosotros</h1>
        <p class="sub">${SITE_DESCRIPTION}</p>
        <div class="cta-row">
          <a href="${BOOKING_URL}" class="btn btn-primary">Reservar ahora</a>
          <a
            href="https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola%20quiero%20reservar%20una%20hora%20en%20BUONA%20PINTA"
            class="btn"
            aria-label="Reservar por WhatsApp"
          >
            <i class="fab fa-whatsapp"></i> Reservar por WhatsApp
          </a>
        </div>
        <ul class="benefits">
          <li>✅ Reserva en 3 pasos</li>
          <li>✅ Confirmación por email</li>
          <li>✅ Horarios extendidos</li>
        </ul>
      </div>
    </section>
  `;
}
