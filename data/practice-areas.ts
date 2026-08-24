import { ClipboardList, HandHeart, HeartPulse, Umbrella } from 'lucide-react';

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
    title: 'Auxílios e Benefícios',
    description: 'Auxílio-doença, auxílio-acidente, auxílio-reclusão, salário-maternidade e pensão por morte.',
  },
  {
    number: '03',
    icon: HandHeart,
    title: 'BPC/LOAS',
    description: 'Um benefício semelhante à aposentadoria para idosos a partir de 65 anos, e amparo a pessoas com deficiência em situação de vulnerabilidade.',
  },
  {
    number: '04',
    icon: ClipboardList,
    title: 'Outros Serviços',
    description: 'Planejamento previdenciário, acompanhamento de processos administrativos e judiciais junto ao INSS e recursos administrativos.',
  },
] as const;

export const contactServiceOptions = [
  ...practiceAreas.map((area) => area.title),
  'Não sei qual atendimento preciso',
] as const;
