import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '../data/articles';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(`${date}T00:00:00`));

export function ArticlesSection() {
  const latest = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <section id='artigos' className="reveal-section bg-[#F3F3F3] px-5.5 py-20 md:px-[max(6vw,40px)] md:py-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-item mb-13.5 flex flex-col gap-5.5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-6.25 text-[12px] font-medium tracking-[0.12em] text-[#D1AD7D]">ARTIGOS</p>
            <h2 className="max-w-175 font-['Display'] text-[28px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#0A0A0A] md:text-[40px]">Conteúdos sobre Direito <em className="italic text-[#D1AD7D]">Previdenciário.</em></h2>
          </div>
          <Link className="inline-flex shrink-0 items-center gap-2 text-[14px] font-medium text-[#A07E4A] transition-colors hover:text-[#0A0A0A]" href="/artigos">
            Ver todos os artigos <span aria-hidden="true">→</span>
          </Link>
        </div>

        {latest.length === 0 ? (
          <p className="max-w-[65ch] text-[16px] leading-[1.6] text-[#52605c] md:text-[18px]">Em breve, novos artigos por aqui.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <Link
                key={article.slug}
                href={`/artigos/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#0A0A0A14] bg-white transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(21,41,66,.14)]"
              >
                <span className="relative flex h-52 w-full shrink-0 items-center justify-center overflow-hidden bg-[#0A0A0A]">
                  {article.coverImage ? (
                    <Image src={article.coverImage} alt={article.coverImageAlt ?? ''} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  ) : (
                    <ImageIcon size={28} strokeWidth={1.25} className="text-white/25" aria-hidden="true" />
                  )}
                </span>
                <span className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-[11px] font-medium tracking-[1px] text-[#D1AD7D]">{formatDate(article.date)}</span>
                  <span className="font-['Display'] text-[20px] font-semibold leading-tight text-[#0A0A0A]">{article.title}</span>
                  <span className="text-[14px] leading-[1.6] text-[#52605c]">{article.excerpt}</span>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[13px] font-medium text-[#0A0A0A]">Ler artigo <span aria-hidden="true">→</span></span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
