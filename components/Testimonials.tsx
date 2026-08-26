'use client';

import { useEffect, useState } from 'react';
import { testimonials } from '../data/testimonials';

const getInitials = (name: string) =>
  name
    .replace(/\./g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const show = (index: number) => {
    setCurrent((index + total) % total);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((item) => (item + 1) % total);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [total]);

  const item = testimonials[current];

  return (
    <section className="reveal-section bg-[#F3F3F3] px-6 py-20 md:px-[max(6vw,40px)] md:py-14 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 lg:gap-24">

        <div className="reveal-item">
          <span className="mb-5 inline-flex items-center rounded-full border border-[#D1AD7D] px-4 py-1.5 text-[12px] font-medium tracking-[0.12em] text-[#D1AD7D]">
            DEPOIMENTOS
          </span>

          <h2 className="max-w-105 font-['Display'] text-[28px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#0A0A0A] md:text-[40px]">
            A experiência de quem já foi{' '}
            <em className="italic text-[#D1AD7D]">atendido.</em>
          </h2>

          <div className="mt-8 flex gap-2.5">
            <button
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[#0A0A0A29] text-lg transition hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white"
              type="button"
              onClick={() => show(current - 1)}
              aria-label="Depoimento anterior"
            >
              ←
            </button>

            <button
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-[#D1AD7D] text-lg text-[#0A0A0A] transition hover:bg-[#0A0A0A] hover:text-white"
              type="button"
              onClick={() => show(current + 1)}
              aria-label="Próximo depoimento"
            >
              →
            </button>
          </div>
        </div>

        <div
          className="reveal-item reveal-delay-2"
          aria-live="polite"
        >
          <div
            key={item.name}
            className="animate-[testimonial-enter_.55s_cubic-bezier(.2,.7,.2,1)] flex h-100 flex-col overflow-hidden rounded-2xl border border-[#0A0A0A]/8 bg-white px-7 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] motion-reduce:animate-none sm:h-90 sm:px-9 sm:py-9 md:h-100 md:px-10 md:py-10"
          >
            <span
              aria-hidden="true"
              className="block shrink-0 font-['Display'] text-[58px] leading-[0.7] text-[#D1AD7D]"
            >
              “
            </span>

            <div className="flex flex-1 flex-col">
              <blockquote className="mt-5 font-['Display'] text-[18px] font-medium italic leading-[1.6] tracking-[-0.1px] text-[#0A0A0A] sm:text-[19px] md:text-[20px] lg:text-[20px]">
                {item.quote}
              </blockquote>

              <figcaption className="mt-auto flex shrink-0 items-center gap-3 border-t border-[#0A0A0A]/8 pt-5 text-[13px] text-[#0A0A0A]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#D1AD7D]/15 font-['Display'] text-[13px] font-semibold text-[#A07E4A]" aria-hidden="true">
                  {getInitials(item.name)}
                </span>
                <span>
                  <strong className="block font-medium">
                    {item.name}
                  </strong>

                  <span className="mt-1 block text-[#A07E4A]">
                    {item.role}
                  </span>
                </span>
              </figcaption>
            </div>
          </div>

          <div
            className="mt-6 flex items-center justify-between"
            aria-label="Paginação dos depoimentos"
          >
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  className={`relative h-0.75 cursor-pointer overflow-hidden p-0 transition ${
                    index === current
                      ? 'w-10.5 bg-[#E0C8A0]'
                      : 'w-5.5 bg-[#E0C8A0] hover:bg-[#D1AD7D]'
                  }`}
                  type="button"
                  aria-label={`Ver depoimento ${index + 1}`}
                  onClick={() => show(index)}
                >
                  {index === current && (
                    <span
                      key={current}
                      className="absolute inset-y-0 left-0 animate-[testimonial-progress_6s_linear_forwards] bg-[#D1AD7D] motion-reduce:w-full motion-reduce:animate-none"
                    />
                  )}
                </button>
              ))}
            </div>

            <span className="text-[11px] font-medium tracking-[1px] text-[#D1AD7D]">
              {String(current + 1).padStart(2, '0')} /{' '}
              {String(total).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}