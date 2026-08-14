import { CONTACT_INFO } from '@/lib/site';
import './WhatsAppButton.css';

// Floating WhatsApp chat launcher, rendered site-wide from the root layout.
// Opens a wa.me chat with a pre-filled message. No JS needed — a plain anchor
// keeps it working before hydration and on every route.
const PREFILL =
  "Hi Point Zero Road Lines, I'd like to ask about a freight quote.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(PREFILL)}`;

  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${CONTACT_INFO.whatsapp}`}
    >
      <svg
        className="whatsapp-fab-icon"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.463 1.71 6.41L3.2 28.8l6.57-1.68a12.74 12.74 0 0 0 6.234 1.588h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.055A12.72 12.72 0 0 0 16.004 3.2Zm0 23.36h-.004a10.55 10.55 0 0 1-5.377-1.472l-.386-.23-3.9.997 1.04-3.8-.25-.39a10.56 10.56 0 0 1-1.62-5.665c0-5.867 4.774-10.64 10.647-10.64a10.57 10.57 0 0 1 7.522 3.122 10.56 10.56 0 0 1 3.118 7.525c0 5.867-4.774 10.64-10.643 10.64Zm5.834-7.964c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.586-.95-.848-1.592-1.895-1.779-2.215-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.523-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.824.763.33 1.36.527 1.824.674.767.244 1.464.21 2.016.127.615-.092 1.892-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z"
        />
      </svg>
      <span className="whatsapp-fab-label">Chat on WhatsApp</span>
    </a>
  );
}
