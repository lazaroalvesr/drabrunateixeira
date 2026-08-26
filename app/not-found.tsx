import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppButton } from '../components/WhatsAppButton';

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-[#F3F3F3] text-[#0A0A0A]">
      <header className="flex items-center justify-between border-b border-[#D1AD7D33] px-5.5 py-5 md:px-[max(6vw,40px)] md:py-6">
        <Link href="/" aria-label="Voltar ao in&iacute;cio">
          <Image
            src="/assets/Logo.png"
            alt="Logo da Dra. Bruna Teixeira Cardoso"
            width={504}
            height={495}
            priority
            sizes="(max-width: 767px) 96px, 120px"
            className="h-14 w-auto md:h-16"
          />
        </Link>
      </header>

      <section className="relative isolate flex flex-1 items-center px-5.5 py-18 md:px-[max(6vw,40px)] md:py-25">
        <div className="pointer-events-none absolute -right-35 -top-55 -z-10 h-150 w-150 rounded-full border border-[#D1AD7D55] bg-[#D1AD7D12]" />
        <div className="pointer-events-none absolute -bottom-55 -left-35 -z-10 h-110 w-110 rounded-full bg-[#0A0A0A08]" />
        <div className="mx-auto w-full max-w-210 text-center">
          <h1 className="font-['Display'] text-[28px] font-semibold leading-[1.1] tracking-[-0.01em] md:text-[40px]">
            Esta p&aacute;gina n&atilde;o foi encontrada.
          </h1>
          <p className="mx-auto mt-6 max-w-[65ch] text-[16px] leading-[1.6] text-[#52605c] md:text-[18px]">
            O endere&ccedil;o pode estar incorreto ou o conte&uacute;do pode ter sido movido. Vamos te levar para o lugar certo.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="inline-flex min-h-13 items-center justify-center rounded-lg bg-[#0A0A0A] px-6 text-[15px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#2A2318]">
              Voltar ao in&iacute;cio
            </Link>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </main>
  );
}
