import { ImageIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { WhatsAppButton } from '../../components/WhatsAppButton';
import { articles } from '../../data/articles';
import { absoluteUrl } from '../site-config';

export const metadata: Metadata = {
  title: 'Artigos',
  description: 'Conteúdos e orientações sobre Direito Previdenciário.',
  alternates: { canonical: '/artigos' },
  openGraph: { url: absoluteUrl('/artigos') },
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(`${date}T00:00:00`));

export default function ArtigosPage() {
  const sortedArticles = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Header />
      <main>
        <section className="bg-[#F3F3F3] px-5.5 pb-17.5 pt-28 md:px-[max(6vw,40px)] md:pb-22 md:pt-32">
          <p className="mb-6.25 text-[12px] font-medium tracking-[0.12em] text-[#D1AD7D]">ARTIGOS</p>
          <h1 className="max-w-200 font-['Display'] text-[28px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#0A0A0A] md:text-[40px]">
            Conteúdos e orientações sobre Direito Previdenciário.
          </h1>

          {sortedArticles.length === 0 ? (
            <p className="mt-12 max-w-[65ch] text-[16px] leading-[1.6] text-[#52605c] md:text-[18px]">
              Em breve, novos artigos por aqui.
            </p>
          ) : (
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sortedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/artigos/${article.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#0A0A0A14] bg-white transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(21,41,66,.14)]"
                >
                  <span className="relative flex h-52 w-full shrink-0 items-center justify-center overflow-hidden bg-[#0A0A0A]">
                    {article.coverImage ? (
                      <Image src={article.coverImage} alt={article.coverImageAlt ?? ''} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    ) : (
                      <ImageIcon size={28} strokeWidth={1.25} className="text-white/25" aria-hidden="true" />
                    )}
                  </span>
                  <span className="flex flex-1 flex-col gap-3 p-6">
                    <span className="text-[11px] font-medium tracking-[1px] text-[#D1AD7D]">{formatDate(article.date)}</span>
                    <span className="font-['Display'] text-[20px] font-semibold leading-tight text-[#0A0A0A]">{article.title}</span>
                    <span className="text-[14px] leading-[1.6] text-[#52605c]">{article.excerpt}</span>
                    <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[13px] font-medium text-[#0A0A0A]">Ler artigo <span>→</span></span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
