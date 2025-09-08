import { SITE_NAME, getReserveHref, SOCIAL_LINKS } from '../utils/config';

export function createFooterHTML(): string {
  const socialLinks = SOCIAL_LINKS.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link">
      <i class="${link.icon}"></i> ${link.label}
    </a>
  `).join('');

  return `
    <footer class="footer">
      <div class="container">
        <p>© <span id="current-year"></span> ${SITE_NAME} · <a class="link" href="${getReserveHref()}" target="_blank" rel="noopener noreferrer">Reservar por WhatsApp</a></p>
        <div class="social-links">
          ${socialLinks}
        </div>
      </div>
    </footer>
  `;
}
