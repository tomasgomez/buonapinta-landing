import { getReserveHref } from '../utils/config';

export function createStickyCTA(): string {
  return `
    <div class="sticky-cta" role="region" aria-label="Acción rápida">
      <a href="${getReserveHref()}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block">Reservar por WhatsApp</a>
    </div>
  `;
}
