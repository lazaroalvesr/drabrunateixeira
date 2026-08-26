'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { contactDetails } from '../app/site-config';

const HINT_DURATION = 4000;
const HINT_INTERVAL = 20000;

export function WhatsAppButton() {
  const [showHint, setShowHint] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    const footer = document.querySelector('footer');

    let pastHero = !hero;
    let footerInView = false;
    const updateVisibility = () => setVisible(pastHero && !footerInView);

    const observers: IntersectionObserver[] = [];

    if (hero) {
      const heroObserver = new IntersectionObserver(([entry]) => {
        pastHero = !entry.isIntersecting;
        updateVisibility();
      }, { threshold: 0 });
      heroObserver.observe(hero);
      observers.push(heroObserver);
    }

    if (footer) {
      const footerObserver = new IntersectionObserver(([entry]) => {
        footerInView = entry.isIntersecting;
        updateVisibility();
      }, { threshold: 0 });
      footerObserver.observe(footer);
      observers.push(footerObserver);
    }

    updateVisibility();
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    let hideTimer: number | undefined;

    const revealHint = () => {
      setShowHint(true);

      if (hideTimer !== undefined) window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => setShowHint(false), HINT_DURATION);
    };

    revealHint();
    const interval = window.setInterval(revealHint, HINT_INTERVAL);

    return () => {
      window.clearInterval(interval);
      if (hideTimer !== undefined) window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <Link
      href={`https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(contactDetails.whatsappMessage)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar uma consulta pelo WhatsApp"
      className={`group fixed bottom-[max(18px,env(safe-area-inset-bottom))] right-[max(16px,env(safe-area-inset-right))] z-20 grid h-13.5 w-13.5 place-items-center rounded-full border-[3px] border-[#D1AD7D] bg-[#0A0A0A] text-[26px] text-white shadow-[0_6px_18px_#10243b40,0_0_0_3px_#D1AD7D48] transition-opacity duration-300 animate-[whatsapp-pulse_2s_ease-out_infinite] md:bottom-6 md:right-6.25 md:h-16 md:w-16 ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <span
        aria-hidden="true"
        style={{ transform: 'translateY(-50%)' }}
        className={`pointer-events-none absolute right-[calc(100%+14px)] top-1/2 block whitespace-nowrap rounded-md bg-[#0A0A0A] px-3 py-2 text-[12px] font-medium text-[#F6EECF] shadow-[0_8px_20px_rgba(10,10,10,0.18)] transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100 ${showHint ? 'opacity-100' : 'opacity-0'}`}
      >
        Fale pelo WhatsApp
      </span>
      <Image src="/assets/Whataspp-icon.png" alt="Ícone do WhatsApp" width={40} height={40} />
    </Link>
  );
}
