import { Award, Globe, GraduationCap, Landmark } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AboutPhotoZoom } from './AboutPhotoZoom';

const credentials = [
  { icon: GraduationCap, title: 'Especialista em Direito Previdenciário', subtitle: 'PUC Minas' },
  { icon: Award, title: 'Mais de 8 anos na área', subtitle: 'Atuação exclusiva desde 2018' },
  { icon: Landmark, title: 'Presidiu a Comissão de Previdenciário', subtitle: 'OAB Divinópolis · 2019–2024' },
  { icon: Globe, title: 'Atendimento on-line', subtitle: 'Todo o Brasil, pelo WhatsApp' },
];

export function AboutSection() {
  return (
    <section id="sobre" className="reveal-section bg-[#FFFDF9] px-6 pb-20 md:px-[max(5vw,55px)] md:py-16 lg:py-28 pt-12 rounded-t-[30px] -mt-12">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-[clamp(40px,5vw,80px)]">
        <div className="reveal-item relative order-1 mt-4 lg:mt-0">
          <AboutPhotoZoom className="relative flex min-h-90 items-end overflow-hidden rounded-2xl bg-[#0A0A0A] p-7 text-white md:min-h-135 md:p-10">
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
          </AboutPhotoZoom>
        </div>

        <div className="reveal-item reveal-delay-2 order-2">
          <p className="mb-7 pt-8 text-[12px] font-medium tracking-[0.12em] text-[#A07E4A] md:text-[13px] lg:pt-0">
            SOBRE A ADVOGADA
          </p>

          <h2 className="mb-4 font-['Display'] text-[28px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#0A0A0A] md:mb-5 md:text-[40px]">
            Dra. Bruna Teixeira, advogada <em className="italic text-[#A07E4A]">previdenciária.</em>
          </h2>

          <div className="max-w-[65ch] space-y-4 text-[16px] leading-[1.6] text-[#0A0A0A] md:text-[18px]">
            <p className="md:hidden">
              Formada em Direito pela Universidade de Itaúna em 2015 e inscrita na OAB desde 2016. Especialista em Direito Previdenciário pela PUC Minas, atua exclusivamente nessa área desde 2018.
            </p>
            <p className="md:hidden">
              Com escritório em Divinópolis/MG, atende clientes de todo o Brasil pelo WhatsApp. Seu trabalho inclui requerimentos administrativos, recursos, revisões e ações judiciais junto ao INSS, sempre com acompanhamento próximo e foco em resultados.
            </p>
            <p className="hidden md:block">
              Formada em Direito pela Universidade de Itaúna em 2015 e inscrita na OAB desde 2016, a Dra. Bruna Teixeira é especialista em Direito Previdenciário pela PUC Minas. Atua exclusivamente nessa área desde 2018, com mais de 8 anos de dedicação.
            </p>
            <p className="hidden md:block">
              Com escritório em Divinópolis/MG, atende clientes de todo o Brasil de forma ágil e personalizada, principalmente pelo WhatsApp. Seu trabalho abrange requerimentos administrativos, recursos, revisões e ações judiciais junto ao INSS, sempre com foco em resultados e acompanhamento próximo de cada caso.
            </p>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-2 md:grid-cols-2">
            {credentials.map((item) => (
              <div key={item.title} className="group flex items-center gap-3 rounded-2xl border border-[#0A0A0A]/10 bg-white px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#D1AD7D]/50 hover:shadow-[0_10px_24px_rgba(10,10,10,.07)]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#D1AD7D]/20 text-[#A07E4A] transition-colors duration-300 group-hover:bg-[#D1AD7D]/30">
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