import {
  Umbrella,
  HeartPulse,
  Stethoscope,
  ShieldAlert,
  Lock,
  Baby,
  HandHeart,
  ClipboardList,
} from 'lucide-react';

export const practiceAreas = [
  {
    number: '01',
    icon: Umbrella,
    title: 'Aposentadorias',
    description: 'Por idade, tempo de contribuição, professor, pessoa com deficiência, incapacidade permanente ou especial.',
  },
  {
    number: '02',
    icon: HeartPulse,
    title: 'Auxílio-acidente',
    description: 'Indenização mensal para quem sofreu um acidente e ficou com sequelas que reduzem a capacidade de trabalho.',
  },
  {
    number: '03',
    icon: Stethoscope,
    title: 'Auxílio por Incapacidade Temporária',
    description: 'Antigo auxílio-doença: benefício para quem está temporariamente incapaz de trabalhar por doença ou acidente.',
  },
  {
    number: '04',
    icon: ShieldAlert,
    title: 'Aposentadoria por Incapacidade Permanente',
    description: 'Antiga aposentadoria por invalidez: para quem está definitivamente incapaz de exercer qualquer atividade laboral.',
  },
  {
    number: '05',
    icon: Lock,
    title: 'Auxílio reclusão',
    description: 'Benefício pago aos dependentes de segurados de baixa renda que estejam presos em regime fechado.',
  },
  {
    number: '06',
    icon: Baby,
    title: 'Salário maternidade',
    description: 'Benefício garantido à segurada gestante, adotante ou que teve filho, durante o período de afastamento.',
  },
  {
    number: '07',
    icon: HandHeart,
    title: 'BPC/LOAS',
    description: 'Um benefício semelhante à aposentadoria para idosos a partir de 65 anos, e amparo a pessoas com deficiência em situação de vulnerabilidade.',
  },
  {
    number: '08',
    icon: ClipboardList,
    title: 'Outros Serviços',
    description: 'Planejamento previdenciário, acompanhamento de processos administrativos e judiciais junto ao INSS e recursos administrativos.',
  },
] as const;

export const contactServiceOptions = [
  ...practiceAreas.map((area) => area.title),
  'Não sei qual atendimento preciso',
] as const;