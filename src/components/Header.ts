import { SITE_NAME, SITE_TAGLINE, getReserveHref } from '../utils/config';

export function createHeaderHTML(): string {
  return `
    <header class="header">
      <div class="container header-row">
        <div>
          <h1>${SITE_NAME}</h1>
          <p class="tagline">
            <i class="fas fa-sun icon"></i>
            ${SITE_TAGLINE}
            <i class="fas fa-waves icon"></i>
          </p>
        </div>
        <a href="${getReserveHref()}" target="_blank" rel="noopener noreferrer" class="btn btn-primary sm-hidden">
          Reservar por WhatsApp
        </a>
      </div>
    </header>
  `;
}
