'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type MouseEvent, useEffect, useRef, useState } from 'react';
import { contactDetails } from '../app/site-config';

const links = [
  ['Início', '#inicio'],
  ['Sobre', '#sobre'],
  ['Atuação', '#atuacao'],
  ['Artigos', '#artigos'],
  ['Contato', '#contato'],
];

const MENU_ANIMATION_DURATION = 360;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('#inicio');
  const navigationTargetRef = useRef<string | null>(null);
  const navigationTimeoutRef = useRef<number | undefined>(undefined);
  const menuCloseTimeoutRef = useRef<number | undefined>(undefined);
  const lockedScrollPositionRef = useRef(0);
  const pendingNavigationRef = useRef<string | null>(null);

  useEffect(() => {
    const updateHeader = () => {
      setScrolled(window.scrollY > 32);

      const navigationTarget = navigationTargetRef.current;
      if (navigationTarget) {
        const targetSection = document.querySelector(navigationTarget);
        const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 80;
        const targetReached = targetSection && Math.abs(targetSection.getBoundingClientRect().top - headerHeight - 12) <= 4;

        if (!targetReached) return;
        navigationTargetRef.current = null;
      }

      const referencePoint = window.innerHeight * 0.35;
      let currentHref = '#inicio';

      for (const [, href] of links) {
        if (!href.startsWith('#')) continue;
        const section = document.querySelector(href);
        if (section && section.getBoundingClientRect().top <= referencePoint) {
          currentHref = href;
        }
      }

      setActiveHref((current) => current === currentHref ? current : currentHref);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyLeft = document.body.style.left;
    const previousBodyRight = document.body.style.right;
    const previousBodyWidth = document.body.style.width;
    const previousDocumentOverflowX = document.documentElement.style.overflowX;

    if (!open) return;

    lockedScrollPositionRef.current = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${lockedScrollPositionRef.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.documentElement.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.left = previousBodyLeft;
      document.body.style.right = previousBodyRight;
      document.body.style.width = previousBodyWidth;
      document.documentElement.style.overflowX = previousDocumentOverflowX;
      window.scrollTo(0, lockedScrollPositionRef.current);
    };
  }, [open]);

  useEffect(() => {
    if (open || !pendingNavigationRef.current) return;

    const href = pendingNavigationRef.current;
    pendingNavigationRef.current = null;
    const frame = window.requestAnimationFrame(() => navigateToSection(href));

    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => () => {
    if (navigationTimeoutRef.current !== undefined) {
      window.clearTimeout(navigationTimeoutRef.current);
    }
    if (menuCloseTimeoutRef.current !== undefined) {
      window.clearTimeout(menuCloseTimeoutRef.current);
    }
  }, []);

  const closeMenu = () => {
    if (!open || isClosing) return;

    setIsClosing(true);
    menuCloseTimeoutRef.current = window.setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, MENU_ANIMATION_DURATION);
  };

  const toggleMenu = () => {
    if (open) {
      closeMenu();
      return;
    }

    setIsClosing(false);
    setOpen(true);
  };
  function navigateToSection(href: string) {
    if (navigationTimeoutRef.current !== undefined) {
      window.clearTimeout(navigationTimeoutRef.current);
    }

    const section = document.querySelector<HTMLElement>(href);
    const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 80;

    if (section) {
      const sectionPaddingTop = href === '#inicio'
        ? 0
        : Number.parseFloat(window.getComputedStyle(section).paddingTop) || 0;

      window.scrollTo({
        top: Math.max(0, section.getBoundingClientRect().top + window.scrollY + sectionPaddingTop - headerHeight - 24),
        behavior: 'smooth',
      });
    }

    window.history.replaceState(null, '', `${window.location.origin}${window.location.pathname}${window.location.search}`);
    navigationTimeoutRef.current = window.setTimeout(() => {
      navigationTargetRef.current = null;
      window.dispatchEvent(new Event('scroll'));
    }, 2000);
  }

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setActiveHref(href);
    navigationTargetRef.current = href;

    if (open) {
      pendingNavigationRef.current = href;
      closeMenu();
      return;
    }

    navigateToSection(href);
  };

  return (
    <>
    <header className={`fixed inset-x-0 top-3 z-30 mx-3 flex h-16 items-center justify-between rounded-full border border-[#D1AD7D66] bg-white px-4 shadow-[0_10px_28px_rgba(10,10,10,.12)] transition-shadow duration-300 md:top-4 md:mx-6 md:h-18 md:px-6 xl:mx-auto xl:h-19 xl:w-[min(1280px,92vw)] xl:px-7 ${scrolled ? 'shadow-[0_16px_36px_rgba(10,10,10,.18)]' : ''}`}>
      <Link className="flex items-center gap-2 whitespace-nowrap md:gap-3" href={pathname === '/' ? '#inicio' : '/'} aria-label="Dra. Bruna Teixeira Cardoso - Início" onClick={(event) => { if (pathname === '/') handleNavigation(event, '#inicio'); }}>
        <Image
          src="/assets/Logo.png"
          alt="Logo da Dra. Bruna Teixeira Cardoso"
          width={504}
          height={495}
          priority
          sizes="(max-width: 767px) 88px, 110px"
          className="h-10 w-auto md:h-12"
        />
        <p className="font-['Display'] text-[15px] font-semibold leading-tight text-[#0A0A0A] md:text-[17px]">Bruna Teixeira Cardoso</p>
      </Link>
      <button className="relative z-40 flex h-10 w-10 items-center justify-center p-0 text-[#0A0A0A] xl:hidden" aria-expanded={open} aria-controls="main-menu" aria-label={open && !isClosing ? 'Fechar menu' : 'Abrir menu'} onClick={toggleMenu}>
        <span className="relative flex h-4.5 w-6 flex-col items-center justify-between">
          <span className={`h-0.5 w-full rounded-full bg-current transition-transform duration-300 ease-in-out ${open && !isClosing ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ease-in-out ${open && !isClosing ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`h-0.5 w-full rounded-full bg-current transition-transform duration-300 ease-in-out ${open && !isClosing ? '-translate-y-2 -rotate-45' : ''}`} />
        </span>
      </button>
      {open && (
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => closeMenu()}
          className={`fixed inset-x-0 top-19 z-20 bg-black/50 xl:hidden ${isClosing ? 'animate-[overlay-fade-out_.36s_ease_forwards]' : 'animate-[overlay-fade-in_.24s_ease-out_forwards]'} h-[calc(100dvh-76px)] md:top-22 md:h-[calc(100dvh-88px)]`}
        />
      )}
      <nav id="main-menu" className={`${open ? `absolute inset-x-3 top-full z-30 mt-3 flex max-h-[calc(100dvh-108px)] flex-col gap-5 overflow-y-auto rounded-[28px] bg-white px-7 py-8 shadow-[0_20px_44px_rgba(10,10,10,.18)] ${isClosing ? 'animate-[menu-drop-out_.3s_ease_forwards]' : 'animate-[menu-drop-in_.32s_cubic-bezier(.2,.75,.25,1)_forwards]'}` : 'hidden'} xl:static xl:mt-0 xl:flex xl:max-h-none xl:w-auto xl:flex-row xl:items-center xl:gap-8.75 xl:overflow-visible xl:rounded-none xl:bg-transparent xl:p-0 xl:shadow-none`}>
        {links.map(([label, href]) => {
          const isHashLink = href.startsWith('#');
          const isActive = isHashLink ? pathname === '/' && activeHref === href : pathname === href || pathname?.startsWith(`${href}/`);
          const linkClassName = `relative flex min-h-11 items-center py-2 text-[16px] font-medium text-[#0A0A0A] transition-colors duration-300 xl:min-h-0 xl:text-[15px] xl:after:absolute xl:after:bottom-0 xl:after:left-0 xl:after:h-px xl:after:w-full xl:after:origin-left xl:after:scale-x-0 xl:after:bg-[#D1AD7D] xl:after:transition-transform xl:after:duration-300 xl:after:ease-out ${isActive ? 'text-[#A07E4A] xl:after:scale-x-100' : ''}`;

          if (isHashLink && pathname === '/') {
            return <Link className={linkClassName} href={href} key={href} onClick={(event) => handleNavigation(event, href)}>{label}</Link>;
          }

          return <Link className={linkClassName} href={isHashLink ? `/${href}` : href} key={href} onClick={closeMenu}>{label}</Link>;
        })}
        <Link className="mt-2 flex w-full items-center justify-center gap-4 rounded-full bg-[#D1AD7D] py-1.5 pl-6 pr-1.5 text-[15px] font-medium text-[#0A0A0A] xl:hidden" href={`https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(contactDetails.whatsappMessage)}`} target="_blank" rel="noreferrer">
          Agendar consulta
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0A0A0A] text-white"><ArrowUpRight size={18} /></span>
        </Link>
      </nav>
      <Link className="hidden items-center gap-4 rounded-full bg-[#D1AD7D] py-1.5 pl-6 pr-1.5 text-[14px] font-medium text-[#0A0A0A] transition hover:-translate-y-0.5 hover:bg-[#c8a273] xl:flex" href={`https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(contactDetails.whatsappMessage)}`} target="_blank" rel="noreferrer">
        Agendar consulta
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0A0A0A] text-white"><ArrowUpRight size={18} /></span>
      </Link>
    </header>
    </>
  );
}
