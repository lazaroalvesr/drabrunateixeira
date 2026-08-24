import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { absoluteUrl, primaryOffice, siteUrl } from './site-config';

const bodyFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const displayFont = Fraunces({
  subsets: ['latin'],
  axes: ['opsz'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

const locationLabel = `${primaryOffice.city} - ${primaryOffice.state}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Dra. Bruna Teixeira Cardoso | Advocacia Previdenciária em ${locationLabel}`,
    template: '%s | Dra. Bruna Teixeira Cardoso',
  },
  description: `Advocacia previdenciária em ${locationLabel}, com atendimento próximo, responsável e estratégico, presencial e on-line para todo o Brasil.`,
  applicationName: 'Dra. Bruna Teixeira Cardoso | Advocacia Previdenciária',
  keywords: ['advocacia previdenciária', 'INSS', 'aposentadoria', 'BPC LOAS', 'benefícios previdenciários', 'direito previdenciário'],
  authors: [{ name: 'Dra. Bruna Teixeira Cardoso' }],
  creator: 'Dra. Bruna Teixeira Cardoso',
  publisher: 'Dra. Bruna Teixeira Cardoso | Advocacia Previdenciária',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: absoluteUrl('/'),
    siteName: 'Dra. Bruna Teixeira Cardoso | Advocacia Previdenciária',
    title: `Dra. Bruna Teixeira Cardoso | Advocacia Previdenciária em ${locationLabel}`,
    description: `Advocacia previdenciária em ${locationLabel}, com atendimento presencial e on-line para todo o Brasil.`,
  },
  twitter: {
    card: 'summary',
    title: `Dra. Bruna Teixeira Cardoso | Advocacia Previdenciária em ${locationLabel}`,
    description: `Advocacia previdenciária em ${locationLabel}, com atendimento presencial e on-line para todo o Brasil.`,
  },
  icons: {
    icon: [
      { url: '/assets/Icon.png', sizes: '32x32', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${bodyFont.variable} ${displayFont.variable}`} style={{ fontFamily: 'var(--font-body)' }}>{children}</body>
    </html>
  );
}
