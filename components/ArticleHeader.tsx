import Image from 'next/image';
import Link from 'next/link';

export function ArticleHeader() {
  return (
    <header className="border-b border-[#0A0A0A]/8 bg-[#F3F3F3] px-5.5 py-5 md:px-[max(6vw,40px)]">
      <div className="mx-auto flex max-w-190 items-center justify-between gap-4">
        <Link className="flex items-center gap-2.5 whitespace-nowrap" href="/" aria-label="Dra. Bruna Teixeira Cardoso - Início">
          <Image src="/assets/Logo.png" alt="Logo da Dra. Bruna Teixeira Cardoso" width={504} height={495} className="h-9 w-auto md:h-10" />
          <span className="font-['Display'] text-[14px] font-semibold leading-tight text-[#0A0A0A] md:text-[16px]">Bruna Teixeira Cardoso</span>
        </Link>
        <Link className="whitespace-nowrap text-[13px] font-medium text-[#0A0A0A] transition hover:text-[#D1AD7D]" href="/artigos">← Todos os artigos</Link>
      </div>
    </header>
  );
}
