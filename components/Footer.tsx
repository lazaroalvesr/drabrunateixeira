'use client';

import { AtSign } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { contactDetails, primaryOffice } from '../app/site-config';
import { CurrentYear } from './CurrentYear';

const footerLinks = [
  ['Início', '#inicio'],
  ['Sobre', '#sobre'],
  ['Atuação', '#atuacao'],
  ['Artigos', '/artigos'],
  ['Contato', '#contato'],
];

const officeLabel = `${primaryOffice.city} – ${primaryOffice.state}`;

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <footer className="relative overflow-hidden rounded-t-[30px] bg-[#0A0A0A] px-6 pb-8 pt-14 text-white md:px-[max(6vw,40px)] md:pb-10 md:pt-20">
      <div className="pointer-events-none absolute right-0 -top-70 h-170 w-140 rounded-full bg-[#D1AD7D]/30 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between md:pb-10">
          <div>
            <h2 className="font-['Display'] text-[34px] font-semibold leading-[1.05] tracking-[-0.01em] text-white md:text-[48px] lg:text-[60px]">
              Vamos conversar <em className="italic text-[#D1AD7D]">sobre o seu caso?</em>
            </h2>
            <p className="mt-4 font-['Display'] text-[18px] font-medium text-white/70 md:text-[20px]">Dra.  Bruna Teixeira Cardoso</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#D1AD7D] bg-[#0A0A0A] text-[#D1AD7D] transition hover:-translate-y-0.5 hover:bg-[#151515]"
              href="https://www.instagram.com/brunateixeira.advocacia/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Image src="/assets/instagram.png" alt="" width={20} height={20} />
            </Link>
            <Link
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#D1AD7D] bg-[#0A0A0A] transition hover:-translate-y-0.5 hover:bg-[#151515]"
              href={`https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(contactDetails.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <Image src="/assets/Whataspp-icon.png" alt="" width={25} height={25} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium text-[#cfd7df]">
            {footerLinks.map(([label, href]) => {
              const isHashLink = href.startsWith('#');
              const finalHref = isHashLink && !isHome ? `/${href}` : href;

              return (
                <Link
                  key={href}
                  className="transition hover:text-[#D1AD7D]"
                  href={finalHref}
                  data-smooth-scroll={isHashLink && isHome ? true : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-1 text-[11px] font-medium leading-[1.6] text-[#cfd7df] md:items-end md:text-right">
            <p className="m-0">© <CurrentYear initialYear={new Date().getFullYear()} /> Dra. Bruna Teixeira Cardoso — Todos os direitos reservados.</p>
            <p className="m-0">{contactDetails.oab} • {officeLabel}</p>
            <p className="m-0">Desenvolvido por <Link className="hover:text-[#D1AD7D]" href="https://www.lazaroalvesr.com/" target="_blank" rel="noreferrer">Lázaro Alves R</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
