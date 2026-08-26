import { ArrowUpRight, Calendar, CheckCircle2, Landmark, Scale, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { contactDetails } from '../app/site-config';
import Image from 'next/image';

const heroStats = [
  { icon: Calendar, value: 'Desde 2018', label: 'Atuação exclusiva em Direito Previdenciário' },
  { icon: Scale, value: 'PUC Minas', label: 'Especialista em Direito Previdenciário' },
  { icon: Landmark, value: '2019–2024', label: 'Presidiu a Comissão de Previdenciário da OAB Divinópolis' },
  { icon: CheckCircle2, value: 'Brasil', label: 'Atendimento on-line em todo o país' },
];

export function HeroSection() {
  return (
    <section id="inicio" className="reveal-section bg-[#0A0A0A] pb-3 md:pb-4 lg:h-245 h-210 md:h-270">
      <div className="pointer-events-none absolute right-0 -top-70 h-170 w-140 rounded-full bg-[#D1AD7D]/30 blur-[120px]" />
      <div className="relative mx-3 mt-0 pt-28 flex flex-col overflow-hidden rounded-[28px] md:mx-6 lg:max-w-7xl lg:mx-auto">
        <div className="relative grid gap-6 px-6 pb-10 pt-28 md:grid-cols-[1.4fr_.6fr] md:grid-rows-[1fr] md:flex-1 md:gap-8 md:px-10 md:pt-32 lg:px-14">
          <div className="reveal-item relative z-10 md:mt-0 mt-40 items-center md:items-start flex flex-col w-full justify-center pb-2 md:pb-16">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-[#0A0A0A] px-4 py-2 text-[12px] font-medium tracking-[.3px] text-white">
              <ShieldCheck size={16} className="text-[#D1AD7D]" /> {contactDetails.oab}
            </span>
            <h1 className="mb-6 font-['Display'] w-full md:text-start text-center text-nowrap text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] text-white md:text-[42px] lg:text-[72px]">
              <span className="block">Direito Previdenciário</span>
              <em className="block italic text-[#D1AD7D]">com atenção ao seu caso.</em>
            </h1>
            <p className="w-full md:max-w-165 lg:text-[18px] text-sm text-center md:text-start leading-[1.6] text-white/60 md:text-[20px]">
              Advogada especialista em Direito Previdenciário, com escritório em Divinópolis/MG e atendimento on-line em todo o Brasil. Aposentadorias, auxílios e BPC/LOAS, no INSS e na via judicial.
            </p>
            <div className="mt-8">
              <Link className="inline-flex items-center gap-4 rounded-full bg-white py-2.5 pl-8 pr-2.5 text-[16px] font-medium text-[#0A0A0A] transition hover:-translate-y-0.5 md:text-[17px]" href={`https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(contactDetails.whatsappMessage)}`} target="_blank" rel="noreferrer">
                Falar com a Dra. Bruna
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#D1AD7D] text-[#0A0A0A]"><ArrowUpRight size={20} /></span>
              </Link>
            </div>
          </div>

          <div>
            <Image
              src="/assets/Dra_bruna-teixeira-hero.png"
              alt="Foto Dra. Bruna Teixeira"
              width={550}
              height={688}
              priority
              className="lg:-right-5 -right-1 md:-right-16 md:top-4 -top-5 absolute h-auto w-137.5"
            />
          </div>
        </div>

        <div className="relative z-10 hidden md:grid md:grid-cols-2 md:gap-4 md:px-10 md:pb-10 lg:grid-cols-4 lg:px-14">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-4 md:gap-3 md:px-5 md:py-5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#D1AD7D]/15 text-[#D1AD7D] md:h-11 md:w-11"><stat.icon size={17} /></span>
              <span className="flex flex-col">
                <span className="font-['Display'] text-[17px] font-semibold leading-none text-white md:text-[20px]">{stat.value}</span>
                <span className="mt-1 text-[11px] font-medium leading-snug text-white/80 md:text-[12px]">{stat.label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
