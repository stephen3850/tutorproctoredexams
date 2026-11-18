'use client';

import React from 'react';
import { SITE_CONFIG } from '@/lib/utils';

export default function WhatsAppButton() {
  const cleanNumber = '447366830256';

  const defaultMessage = encodeURIComponent(
    'Hello! I would like to inquire about tutoring and exam preparation support.'
  );

  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5">
      {/* Label Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center px-3.5 py-2 rounded-full bg-white border border-brand-border text-brand-navy shadow-lg text-xs font-medium hover:text-brand-blue hover:border-emerald-500 transition-all duration-200 group"
        aria-label="Chat with us on WhatsApp"
      >
        <span>Need Help? <strong className="font-bold text-emerald-600 group-hover:text-emerald-700">Chat with us</strong></span>
      </a>

      {/* WhatsApp Circular Green Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300 shrink-0 p-3"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.762.459 3.481 1.332 4.992l-1.415 5.17 5.291-1.387c1.455.794 3.09 1.213 4.781 1.213 5.506 0 9.989-4.478 9.989-9.988 0-5.506-4.483-9.984-9.989-9.984zm5.836 14.195c-.244.688-1.236 1.309-1.996 1.472-.519.112-1.198.201-3.481-.741-2.919-1.206-4.801-4.179-4.947-4.372-.143-.193-1.189-1.583-1.189-3.02 0-1.437.753-2.144 1.021-2.433.268-.289.588-.361.784-.361.196 0 .392.002.563.009.182.008.428-.069.669.51.244.588.835 2.036.907 2.183.072.147.12.318.024.51-.096.193-.143.312-.288.481-.144.168-.303.376-.433.505-.144.144-.294.301-.126.589.168.288.749 1.237 1.606 2.001 1.101.981 2.029 1.286 2.317 1.43.288.144.456.12.624-.072.168-.193.72-0.841.912-1.129.192-.288.384-.24.648-.144.264.096 1.68.793 1.968.937.288.144.48.216.552.336.072.12.072.696-.172 1.384z" />
        </svg>
      </a>
    </div>
  );
}
