const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brunateixeiraadv.com.br/';

export const siteUrl = configuredSiteUrl.replace(/\/$/, '');

export const officeLocations = [
  { city: 'Divinópolis', state: 'MG', country: 'BR' },
] as const;

export const primaryOffice = officeLocations[0];

export const contactDetails = {
  phoneDisplay: '(37) 99860-0918',
  phoneE164: '+5537998600918',
  whatsappNumber: '5537998600918',
  whatsappMessage: 'Olá, Dra. Bruna! Conheci seu trabalho pelo site e gostaria de agendar uma consulta',
  address: 'Av. Antônio Olímpio de Morais, 545 - Costa Rangel, 10º andar, sala 1012, Centro, Divinópolis/MG',
  email: 'brunateixeira.advocacia@gmail.com',
  oab: 'OAB/MG 169.821',
} as const;

export function absoluteUrl(path = '/') {
  return new URL(path, `${siteUrl}/`).toString();
}
