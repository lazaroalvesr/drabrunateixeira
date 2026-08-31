'use client';

import { useState } from 'react';
import { practiceAreas } from '../data/practice-areas';
import { contactDetails } from '../app/site-config';

function buildWhatsAppLink(areaTitle: string) {
  const mensagem = `Olá, vim pelo site e gostaria de tirar uma dúvida sobre ${areaTitle}`;
  return `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
}

export function PracticeAreasSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="atuacao" className="reveal-section bg-[#0A0A0A] px-5.5 py-20 text-[#f7f4ee] md:px-[max(6vw,40px)] md:py-18 lg:py-30 rounded-t-[30px]">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-item mb-13.5 flex flex-col gap-5.5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-6.25 text-[12px] font-medium tracking-[0.12em] text-[#D1AD7D]">ÁREAS DE ATUAÇÃO</p>
            <h2 className="max-w-175 font-['Display'] text-[28px] font-semibold leading-[1.1] tracking-[-0.01em] md:text-[40px]">Atuação jurídica com técnica e <em className="italic text-[#D1AD7D]">sensibilidade.</em></h2>
          </div>
          <p className="max-w-77.5 text-[15px] leading-[1.7] text-[#E0C8A0]">Orientação completa, com comunicação simples e foco na estratégia adequada para o seu caso.</p>
        </div>

        <div className="reveal-item reveal-delay-2 border-y border-white/10">
          {practiceAreas.map((area, index) => {
            const isOpen = openIndex === index;
            return (  
              <div key={area.title} className={index !== 0 ? 'border-t border-white/10' : ''}>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center gap-5 py-6 text-left transition hover:bg-white/3 md:py-7"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  onMouseEnter={() => setOpenIndex(index)}
                  aria-expanded={isOpen}
                >
                  <span className="hidden text-[13px] font-medium text-white/40 sm:block">{area.number}</span>
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#D1AD7D] text-[#0A0A0A]' : 'bg-[#D1AD7D]/15 text-[#D1AD7D]'}`}>
                    <area.icon size={19} aria-hidden="true" />
                  </span>
                  <span className={`font-['Display'] text-[19px] font-semibold leading-none transition-colors duration-300 md:text-[26px] ${isOpen ? 'text-[#D1AD7D]' : 'text-white'}`}>{area.title}</span>
                  <span className={`ml-auto shrink-0 text-3xl font-light leading-none transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#D1AD7D]' : 'text-white/40'}`}>+</span>
                </button>

                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="max-w-165 pb-7 pl-16 md:pb-8 md:pl-24">
                      <p className="text-[14px] leading-[1.6] text-white/65 md:text-[15px]">{area.description}</p>
                      <a
                        className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-[#D1AD7D] transition-colors hover:text-white"
                        href={buildWhatsAppLink(area.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Falar sobre isso <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}