import { getReserveHref } from '../utils/config';

export function createNoticeHTML(): string {
  return `
    <div class="notice">
      <div class="container">
        <strong>Reserva temporal por WhatsApp:</strong>
        Mientras actualizamos nuestro sistema, agenda escribiéndonos por WhatsApp.
        <a href="${getReserveHref()}" target="_blank" rel="noopener noreferrer" class="link">Abrir WhatsApp</a>
      </div>
    </div>
  `;
}
