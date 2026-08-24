import { ImageIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleContent } from '../../../components/ArticleContent';
import { ArticleHeader } from '../../../components/ArticleHeader';
import { ArticleShareButtons } from '../../../components/ArticleShareButtons';
import { Footer } from '../../../components/Footer';
import { WhatsAppButton } from '../../../components/WhatsAppButton';
import { articles } from '../../../data/articles';
import { absoluteUrl, contactDetails } from '../../site-config';

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/artigos/${article.slug}` },
    openGraph: {
      type: 'article',
      url: absoluteUrl(`/artigos/${article.slug}`),
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [{ url: absoluteUrl(article.coverImage) }] : undefined,
    },
  };
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(`${date}T00:00:00`));

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    image: article.coverImage ? [absoluteUrl(article.coverImage)] : undefined,
    url: absoluteUrl(`/artigos/${article.slug}`),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }} />
      <ArticleHeader />
      <main>
        <article className="px-5.5 pb-14 pt-10 md:px-[max(6vw,40px)] md:pb-20 md:pt-14">
          <div className="mx-auto max-w-190">
            <span className="block text-[11px] font-medium tracking-[1px] text-[#D1AD7D]">{formatDate(article.date)}</span>
            <h1 className="mb-8 mt-3 font-['Display'] text-[28px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#0A0A0A] md:text-[40px]">{article.title}</h1>
            <span className="relative mb-10 flex h-64 w-full items-center justify-center overflow-hidden rounded-xl bg-[#0A0A0A] md:h-100">
              {article.coverImage ? (
                <Image src={article.coverImage} alt={article.coverImageAlt ?? ''} fill priority sizes="(max-width: 767px) 100vw, 760px" className="object-cover" />
              ) : (
                <ImageIcon size={32} strokeWidth={1.25} className="text-white/25" aria-hidden="true" />
              )}
            </span>
            <ArticleContent blocks={article.content} />

            <div className="mt-14 rounded-2xl border border-[#D1AD7D]/20 bg-[#fffdf9] p-8 md:p-10">
              <p className="mb-4 text-[12px] font-medium tracking-[0.12em] text-[#D1AD7D]">PRECISA DE ORIENTAÇÃO?</p>
              <h2 className="mb-4 font-['Display'] text-[24px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#0A0A0A] md:text-[30px]">Converse sobre o seu caso.</h2>
              <p className="mb-6 max-w-[60ch] text-[15px] leading-[1.6] text-[#52605c] md:text-[16px]">
                Cada situação previdenciária tem particularidades — receba uma orientação personalizada para entender os próximos passos.
              </p>
              <Link
                className="inline-flex items-center gap-2 rounded-lg bg-[#0A0A0A] px-6 py-4 text-[14px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#1a1a1a]"
                href={`https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(`Olá! Vim através do artigo "${article.title}" e gostaria de saber mais.`)}`}
                target="_blank"
                rel="noreferrer"
              >
                Converse sobre este tema <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-10 border-t border-[#0A0A0A]/8 pt-8">
              <p className="mb-4 text-[12px] font-medium tracking-[0.12em] text-[#0A0A0A]">COMPARTILHE ESTE ARTIGO</p>
              <ArticleShareButtons title={article.title} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
