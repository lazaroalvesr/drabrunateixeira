/**
 * Área de Artigos — adicione um novo artigo aqui e ele já sai formatado no site
 * (listagem em /artigos e página própria em /artigos/[slug]), sem precisar de CMS.
 *
 * Como adicionar um artigo:
 * 1. Copie o objeto de exemplo comentado no fim do arquivo.
 * 2. Preencha slug, title, excerpt, date, coverImage.
 * 3. Monte o "content" com os blocos abaixo, na ordem que quiser:
 *
 *    { type: 'paragraph', text: 'Texto corrido.' }
 *    { type: 'heading', text: 'Subtítulo', level: 2 }   // level 2 ou 3 (padrão 2)
 *    { type: 'list', items: ['Item 1', 'Item 2'] }        // style: 'bullet' (padrão) ou 'number'
 *    { type: 'quote', text: 'Frase em destaque.' }
 *    { type: 'image', src: '/assets/artigos/arquivo.jpg', alt: 'Descrição da imagem' }
 *
 * O array "articles" é o que alimenta o site — a ordem não importa,
 * a listagem sempre mostra os mais recentes primeiro (pelo campo "date").
 */

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string; level?: 2 | 3 }
  | { type: 'list'; style?: 'bullet' | 'number'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'image'; src: string; alt: string };

export type Article = {
  /** Usado na URL: /artigos/[slug]. Só letras minúsculas, números e hífen. */
  slug: string;
  title: string;
  /** Resumo curto — aparece no card da listagem e na meta description da página. */
  excerpt: string;
  /** Formato ISO: 'AAAA-MM-DD'. */
  date: string;
  /** Opcional — sem imagem, o site mostra um placeholder no lugar. */
  coverImage?: string;
  coverImageAlt?: string;
  content: ArticleBlock[];
};

// Os 3 artigos abaixo são de DEMONSTRAÇÃO — pra você ver a seção funcionando.
// Pode editar o texto, trocar as datas ou apagar e colocar os artigos de verdade.
export const articles: Article[] = [
  {
    slug: 'como-solicitar-o-bpc-loas',
    title: 'Como solicitar o BPC/LOAS: entenda quem pode ter direito ao benefício',
    excerpt: 'Entenda os critérios de renda e elegibilidade para solicitar o BPC/LOAS e como funciona o processo administrativo no INSS.',
    date: '2026-08-18',
    content: [
      { type: 'paragraph', text: 'O Benefício de Prestação Continuada (BPC/LOAS) garante um salário mínimo mensal a idosos e pessoas com deficiência em situação de baixa renda.' },
      { type: 'heading', text: 'Quem tem direito' },
      { type: 'list', items: ['Idosos a partir de 65 anos', 'Pessoas com deficiência de qualquer idade', 'Renda familiar per capita de até 1/4 do salário mínimo'] },
      { type: 'quote', text: 'O BPC não exige contribuição prévia ao INSS — é um benefício assistencial.' },
      { type: 'paragraph', text: 'O pedido pode ser feito diretamente no site ou aplicativo Meu INSS, com acompanhamento de um advogado para reduzir o risco de indeferimento.' },
    ],
  },
  {
    slug: 'aposentadoria-por-tempo-de-contribuicao-o-que-mudou',
    title: 'Aposentadoria por tempo de contribuição: o que mudou com a reforma da Previdência',
    excerpt: 'A reforma de 2019 substituiu as regras antigas por um sistema de transição. Veja como isso afeta quem já contribuía antes da mudança.',
    date: '2026-08-12',
    content: [
      { type: 'paragraph', text: 'Desde a reforma da Previdência, em 2019, não existe mais a aposentadoria por tempo de contribuição pura para quem começou a contribuir depois da mudança. Quem já era segurado do INSS antes disso passou a seguir regras de transição.' },
      { type: 'heading', text: 'As principais regras de transição' },
      { type: 'list', items: ['Sistema de pontos (soma da idade com o tempo de contribuição)', 'Idade mínima progressiva', 'Pedágio de 50% sobre o tempo que faltava em 2019', 'Pedágio de 100%, com idade mínima'] },
      { type: 'paragraph', text: 'Cada regra tem exigências diferentes, e nem sempre a mais óbvia é a mais vantajosa para o segurado — em muitos casos, um planejamento previdenciário mostra um caminho mais rápido ou com valor de benefício maior.' },
      { type: 'quote', text: 'A regra mais vantajosa varia de pessoa para pessoa — depende do histórico de contribuições de cada um.' },
    ],
  },
  {
    slug: 'auxilio-por-incapacidade-como-funciona',
    title: 'Auxílio por incapacidade temporária: como funciona o afastamento pelo INSS',
    excerpt: 'Entenda quando o segurado tem direito ao auxílio por incapacidade temporária (antigo auxílio-doença) e o que fazer em caso de negativa do INSS.',
    date: '2026-08-05',
    content: [
      { type: 'paragraph', text: 'O auxílio por incapacidade temporária, antes chamado de auxílio-doença, é pago ao segurado que fica temporariamente incapaz de trabalhar por motivo de saúde, comprovado por perícia médica do INSS.' },
      { type: 'heading', text: 'Requisitos principais' },
      { type: 'list', items: ['Qualidade de segurado (estar contribuindo ou dentro do período de graça)', 'Carência de 12 contribuições mensais, com exceções para acidentes e algumas doenças', 'Incapacidade por mais de 15 dias, atestada pela perícia do INSS'] },
      { type: 'paragraph', text: 'Quando o pedido é negado, ou a perícia considera o segurado apto antes da hora, é possível recorrer administrativamente ou buscar a via judicial, com laudos médicos que comprovem a incapacidade.' },
    ],
  },
];
