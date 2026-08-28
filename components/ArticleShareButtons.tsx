'use client';

import { Share2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.53 17.52 2.04 12 2.04S2 6.53 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

export function ArticleShareButtons({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const [copied, setCopied] = useState(false);

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '_blank',
      'noopener,noreferrer,width=600,height=440'
    );
  };

  const shareWhatsapp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const shareMore = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch {
        // usuário cancelou o compartilhamento
      }
      return;
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);

    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      <button
        type="button"
        onClick={shareFacebook}
        aria-label="Compartilhar no Facebook"
        className="flex h-14 cursor-pointer items-center justify-center rounded-xl bg-[#0A0A0A]/5 text-[#0A0A0A] transition hover:bg-[#0A0A0A]/10"
      >
        <FacebookIcon />
      </button>

      <button
        type="button"
        onClick={shareWhatsapp}
        aria-label="Compartilhar no WhatsApp"
        className="flex h-14 cursor-pointer items-center justify-center rounded-xl bg-[#0A0A0A]/5 transition hover:bg-[#0A0A0A]/10"
      >
        <Image
          src="/assets/Whatsapp-Icon-blog.png"
          alt=""
          width={22}
          height={22}
        />
      </button>

      <button
        type="button"
        onClick={shareMore}
        aria-label="Mais opções de compartilhamento"
        className="flex h-14 cursor-pointer items-center justify-center rounded-xl bg-[#0A0A0A]/5 text-[#0A0A0A] transition hover:bg-[#0A0A0A]/10"
      >
        {copied ? (
          <span className="text-[12px] font-medium">Copiado!</span>
        ) : (
          <Share2 size={19} strokeWidth={1.75} />
        )}
      </button>
    </div>
  );
}