import Image from 'next/image';
import Link from 'next/link';
import { contactDetails } from '../app/site-config';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <section id="contato" className="reveal-section bg-[#F3F3F3] px-5.5 pb-20 md:px-[max(6vw,40px)] md:py-18 lg:py-30">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:gap-[clamp(60px,10vw,150px)]">
        <div className="reveal-item">
          <p className="mb-6.25 text-[12px] font-medium tracking-[0.12em] text-[#D1AD7D]">VAMOS CONVERSAR?</p><h2 className="mb-8 font-['Display'] text-[28px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#0A0A0A] md:text-[40px]">Seu caso merece uma orientação <em className="italic text-[#D1AD7D]">cuidadosa.</em></h2><p className="max-w-[65ch] text-[16px] leading-[1.6] text-[#0A0A0A] md:text-[18px]">Preencha o formulário ou chame no WhatsApp. Retornaremos o mais breve possível.</p>
          <Link className="mt-4.5 inline-flex items-center gap-2.5 text-[14px] font-medium text-[#0A0A0A]" href={`https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(contactDetails.whatsappMessage)}`} target="_blank" rel="noreferrer"><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#D1AD7D] bg-[#0A0A0A] p-1"><Image src="/assets/Whataspp-icon.png" alt="" width={22} height={22} /></span> Falar pelo WhatsApp</Link>
          <div className="mt-9.5 grid max-w-130 gap-5.5 border-t border-[#0A0A0A33] pt-7 text-[#0A0A0A]"><div className="grid min-w-0 gap-1.5 lg:grid-cols-[160px_1fr] lg:gap-3"><span className="text-[11px] font-medium tracking-[1px] text-[#D1AD7D]">TELEFONE</span><Link className="min-w-0 text-[16px] leading-[1.6]" href={`tel:${contactDetails.phoneE164}`}>{contactDetails.phoneDisplay}</Link></div><div className="grid min-w-0 gap-1.5 lg:grid-cols-[160px_1fr] lg:gap-3"><span className="text-[11px] font-medium tracking-[1px] text-[#D1AD7D]">E-MAIL</span><Link className="min-w-0 break-all text-[16px] leading-[1.6]" href={`mailto:${contactDetails.email}`}>{contactDetails.email}</Link></div><div className="grid min-w-0 gap-1.5 lg:grid-cols-[160px_1fr] lg:gap-3"><span className="text-[11px] font-medium tracking-[1px] text-[#D1AD7D]">ESCRITÓRIO CENTRAL</span><p className="m-0 min-w-0 text-[16px] leading-[1.6]">{contactDetails.address}</p></div></div>
        </div>
        <div className="reveal-item reveal-delay-2"><ContactForm /></div>
      </div>
    </section>
  );
}
