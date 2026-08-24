import { AboutSection } from '../components/AboutSection';
import { ArticlesSection } from '../components/ArticlesSection';
import { ClientEffects } from '../components/ClientEffects';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { MissionSection } from '../components/MissionSection';
import { PracticeAreasSection } from '../components/PracticeAreasSection';
import { Testimonials } from '../components/Testimonials';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { absoluteUrl, contactDetails, officeLocations, primaryOffice } from './site-config';

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Dra. Bruna Teixeira Cardoso | Advocacia Previdenciária',
  description: `Advocacia previdenciária em ${primaryOffice.city} - ${primaryOffice.state}, com atendimento próximo, responsável e estratégico.`,
  url: absoluteUrl('/'),
  telephone: contactDetails.phoneE164,
  email: contactDetails.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactDetails.address,
    addressLocality: primaryOffice.city,
    addressRegion: primaryOffice.state,
    addressCountry: primaryOffice.country,
  },
  areaServed: [
    ...officeLocations.map((office) => ({
      '@type': 'City',
      name: office.city,
      containedInPlace: {
        '@type': 'State',
        name: office.state,
      },
    })),
    {
      '@type': 'Country',
      name: 'Brasil',
    },
  ],
  availableLanguage: 'Português',
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd).replace(/</g, '\\u003c') }} />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <PracticeAreasSection />
        <ArticlesSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ClientEffects />
    </>
  );
}
