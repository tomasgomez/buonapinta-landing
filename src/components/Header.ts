import { SITE_NAME, SITE_TAGLINE } from '../utils/config';

export function createHeaderHTML(): string {
  return `
    <header class="header">
      <div class="container">
        <h1>${SITE_NAME}</h1>
        <p class="tagline">
          <i class="fas fa-sun icon"></i>
          ${SITE_TAGLINE}
          <i class="fas fa-waves icon"></i>
        </p>
      </div>
    </header>
  `;
}
