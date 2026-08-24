'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { MouseEvent } from 'react';

export function FooterLogo() {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/') return;

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', `${window.location.origin}${window.location.pathname}${window.location.search}`);
  };

  return (
    <Link href="/" onClick={handleClick} aria-label="Voltar ao início">
      <Image src="/assets/Logo.png" alt="Logo da Dra. Bruna Teixeira Cardoso" width={504} height={495} className="h-13 w-auto" />
    </Link>
  );
}
