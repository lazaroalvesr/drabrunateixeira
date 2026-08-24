import { AtSign } from 'lucide-react';
import Link from 'next/link';
import { contactDetails, primaryOffice } from '../app/site-config';
import { CurrentYear } from './CurrentYear';
import { FooterLogo } from './FooterLogo';

const officeLabel = `${primaryOffice.city} – ${primaryOffice.state}`;

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] px-5.5 py-7.5 text-white md:px-[max(6vw,40px)] md:py-9.25">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-5 md:flex-row md:flex-wrap md:items-center md:justify-start md:gap-x-7 md:gap-y-4 xl:flex-nowrap xl:justify-between">
        <FooterLogo />
        <p className="m-0 text-[11px] font-medium leading-[1.6] text-[#cfd7df]">© <CurrentYear initialYear={new Date().getFullYear()} /> Dra. Bruna Teixeira Cardoso — Advocacia e Consultoria. Todos os direitos reservados.<br />{officeLabel} • Atendimento presencial e on-line.</p>
        <p className="m-0 text-[11px] font-medium text-[#cfd7df]">{contactDetails.oab}</p>
        <Link className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#cfd7df] transition hover:text-[#D1AD7D]"
          href="https://www.instagram.com/brunateixeira.advocacia/" target="_blank" rel="noreferrer"><AtSign size={14} /> Instagram</Link>
        <p className="m-0 text-[11px] font-medium text-[#cfd7df]">Desenvolvido por <Link href="https://www.lazaroalvesr.com/" target="_blank" rel="noreferrer">Lázaro Alves R</Link></p>
      </div>
    </footer>
  );
}
