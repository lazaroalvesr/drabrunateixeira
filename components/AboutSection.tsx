import { Award, Globe, GraduationCap, Landmark } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const credentials = [
  { icon: GraduationCap, title: 'Especialista em Direito Previdenciário', subtitle: 'PUC Minas' },
  { icon: Award, title: 'Mais de 7 anos na área', subtitle: 'Atuação exclusiva desde 2018' },
  { icon: Landmark, title: 'Presidiu a Comissão de Previdenciário', subtitle: 'OAB Divinópolis · 2019–2024' },
  { icon: Globe, title: 'Atendimento on-line', subtitle: 'Todo o Brasil, pelo WhatsApp' },
];

export function AboutSection() {
  return (
    <section id="sobre" className="reveal-section bg-[#FFFDF9] px-6 pb-20 md:px-[max(5vw,55px)] md:py-28 pt-12 ">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-[clamp(70px,10vw,160px)]">
        <div className="reveal-item relative order-1 mt-4 flex min-h-90 items-end overflow-hidden rounded-2xl bg-[#0A0A0A] p-7 text-white md:min-h-135 md:p-10 lg:mt-0">
          <Image
            src="/assets/Dra_bruna_aboutSection.jpeg"
            alt="Dra. Bruna Teixeira, advogada previdenciária em Divinópolis"
            fill
            sizes="(max-width: 1023px) 100vw, 45vw"
            className="object-cover object-[center_20%] md:object-[center_5%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(10,10,10,.75))]" />
          <span className="relative z-10 rounded-lg border-l-[3px] border-[#D1AD7D] bg-[#0A0A0A]/90 px-4 py-3 text-[11px] font-medium leading-[1.6] tracking-[0.14em] text-white backdrop-blur-sm md:text-[12px]">
            DIVINÓPOLIS/MG<br />ATENDIMENTO EM TODO O BRASIL
          </span>
        </div>

        <div className="reveal-item reveal-delay-2 order-2">
          <p className="mb-7 pt-8 text-[12px] font-medium tracking-[0.12em] text-[#A07E4A] md:text-[13px] lg:pt-0">
            SOBRE A ADVOGADA
          </p>

          <h2 className="mb-4 font-['Display'] text-[28px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#0A0A0A] md:mb-5 md:text-[40px]">
            Dra. Bruna Teixeira, advogada <em className="italic text-[#A07E4A]">previdenciária.</em>
          </h2>

          <div className="max-w-[65ch] space-y-4 text-[16px] leading-[1.6] text-[#0A0A0A] md:text-[18px]">
            <div className="max-w-[65ch] space-y-4 text-[16px] leading-[1.6] text-[#0A0A0A] md:text-[18px]">
              <p>
                Formada em Direito pela Universidade de Itaúna em 2015 e especialista em Direito Previdenciário pela PUC Minas, a Dra. Bruna Teixeira atua exclusivamente nessa área desde 2018 — são mais de 7 anos dedicados apenas ao Direito Previdenciário.
              </p>
              <p className="hidden md:block">
                Do escritório em Divinópolis/MG, atende clientes de todo o Brasil pelo WhatsApp, em requerimentos administrativos junto ao INSS, recursos, revisões e ações judiciais.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-2 md:grid-cols-2">
            {credentials.map((item) => (
              <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-[#0A0A0A]/10 bg-white px-5 py-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#D1AD7D]/20 text-[#A07E4A]">
                  <item.icon size={19} aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="font-['Display'] text-[14px] font-semibold leading-snug text-[#0A0A0A]">
                    {item.title}
                  </span>
                  <span className="mt-0.5 text-[12px] font-medium leading-snug text-[#65706D]">
                    {item.subtitle}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <Link
            className="mt-6 inline-flex items-center gap-3 border-b border-[#A07E4A] pb-2 text-[14px] font-medium text-[#A07E4A] transition-colors hover:text-[#0A0A0A] md:mt-7 md:text-[17px]"
            href="#atuacao"
            data-smooth-scroll>
            Conheça minha atuação <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}