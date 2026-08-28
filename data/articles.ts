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
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  coverImageAlt?: string;
  content: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: 'pensao-por-morte-para-companheira',
    coverImage:"/assets/pensao_por_morte.jpg",
    title: 'Pensão por morte para companheira: quem tem direito?',
    excerpt: 'Entenda quando a companheira pode ter direito à pensão por morte, como comprovar a união estável e o que fazer se o INSS negar o benefício.',
    date: '2026-08-28',
    content: [
      {
        type: 'paragraph',
        text: 'A companheira de um segurado do INSS pode ter direito à pensão por morte, mesmo que o casal não tenha sido casado oficialmente. Para isso, é necessário comprovar a existência de união estável na data do falecimento, além do cumprimento dos demais requisitos previdenciários.'
      },

      {
        type: 'heading',
        text: 'Como comprovar a união estável?'
      },

      {
        type: 'paragraph',
        text: 'A união estável pode ser demonstrada por diversos documentos, como:'
      },

      {
        type: 'list',
        items: [
          'Certidão de nascimento de filhos em comum',
          'Comprovantes de residência',
          'Declaração ou escritura de união estável',
          'Inclusão como dependente em plano de saúde',
          'Declaração de Imposto de Renda',
          'Documentos bancários',
          'Seguro de vida',
          'Outros documentos que demonstrem a convivência do casal'
        ]
      },

      {
        type: 'paragraph',
        text: 'Não é obrigatório que o casal tenha morado sempre na mesma residência ou tenha registrado a união em cartório.'
      },

      {
        type: 'heading',
        text: 'A companheira precisa provar dependência econômica?'
      },

      {
        type: 'paragraph',
        text: 'Em regra, não. A companheira está entre os dependentes da primeira classe do segurado, e sua dependência econômica é presumida. O principal ponto é comprovar a união estável.'
      },

      {
        type: 'heading',
        text: 'Por quanto tempo a pensão é paga?'
      },

      {
        type: 'paragraph',
        text: 'A duração depende principalmente da idade da companheira, do tempo de união estável e das contribuições realizadas pelo segurado.'
      },

      {
        type: 'paragraph',
        text: 'Em determinadas situações, o benefício pode durar apenas quatro meses. Quando preenchidos os requisitos legais, a duração pode variar de 3, 6, 10, 15 ou 20 anos, podendo também ser vitalícia para companheiras com 45 anos ou mais, conforme as regras aplicáveis ao caso.'
      },

      {
        type: 'heading',
        text: 'O que fazer se o INSS negar o benefício?'
      },

      {
        type: 'paragraph',
        text: 'A negativa do INSS não significa necessariamente que a companheira não tenha direito à pensão. É possível analisar a decisão e verificar a possibilidade de apresentar recurso administrativo ou buscar o reconhecimento do direito na Justiça.'
      },

      {
        type: 'paragraph',
        text: 'Se você perdeu seu companheiro e tem dúvidas sobre o direito à pensão por morte, procure orientação de um advogado especializado em Direito Previdenciário. A análise da documentação e da situação do segurado é fundamental para identificar o melhor caminho para o seu caso.'
      },

    ],
  },
  {
    slug: 'aposentadoria-por-idade-quem-tem-direito',
    coverImage: "/assets/aposentadoria_por_idade.jpg",
    title: 'Aposentadoria por idade: quem tem direito e quais são os requisitos?',

    excerpt: 'Entenda quem pode ter direito à aposentadoria por idade, quais são os requisitos após a Reforma da Previdência e como solicitar o benefício.',

    date: '2026-08-28',

    content: [

      {
        type: 'paragraph',
        text: 'A aposentadoria por idade é um dos principais benefícios do INSS e pode ser concedida ao segurado que atingir a idade mínima e cumprir o período de contribuição exigido pela legislação.'
      },

      {
        type: 'paragraph',
        text: 'Após a Reforma da Previdência, os requisitos passaram a variar conforme a situação do segurado, especialmente em relação à data em que começou a contribuir para o INSS.'
      },

      {
        type: 'heading',
        text: 'Qual é a idade mínima?'
      },

      {
        type: 'paragraph',
        text: 'Para quem ingressou no sistema após a Reforma da Previdência, em regra, os requisitos são:'
      },

      {
        type: 'list',
        items: [
          'Mulher: 62 anos de idade e 15 anos de contribuição',
          'Homem: 65 anos de idade e 20 anos de contribuição'
        ]
      },

      {
        type: 'paragraph',
        text: 'Para quem já contribuía antes da Reforma, existem regras de transição, que podem permitir a aposentadoria com requisitos diferentes.'
      },

      {
        type: 'heading',
        text: 'Quem pode ter direito?'
      },

      {
        type: 'paragraph',
        text: 'Além dos requisitos de idade e contribuição, é necessário verificar o histórico previdenciário do segurado.'
      },

      {
        type: 'paragraph',
        text: 'Períodos de trabalho que não aparecem no CNIS, contribuições realizadas em atraso, atividade rural, trabalho especial e períodos reconhecidos judicialmente podem fazer diferença na análise do direito à aposentadoria.'
      },

      {
        type: 'paragraph',
        text: 'Por isso, antes de solicitar o benefício, é importante conferir se todas as contribuições e períodos trabalhados estão corretamente registrados.'
      },

      {
        type: 'heading',
        text: 'Como solicitar a aposentadoria?'
      },

      {
        type: 'paragraph',
        text: 'O pedido pode ser realizado pelo Meu INSS. Entretanto, um planejamento previdenciário antes do requerimento pode evitar erros e ajudar a identificar a regra mais vantajosa para o segurado.'
      },

      {
        type: 'heading',
        text: 'Teve o pedido de aposentadoria negado?'
      },

      {
        type: 'paragraph',
        text: 'Se o INSS negar a aposentadoria, é possível analisar o motivo do indeferimento e verificar a possibilidade de recurso administrativo ou ação judicial.'
      },

      {
        type: 'paragraph',
        text: 'Está perto de se aposentar? Uma análise do seu histórico de contribuições pode ajudar a identificar quando você poderá se aposentar e qual regra pode ser mais vantajosa.'
      },

    ],
  },
  {
    slug: 'bpc-loas-quem-tem-direito',
    coverImage: "/assets/BPC.jpg",

    title: 'BPC/LOAS: quem tem direito ao benefício?',

    excerpt: 'Entenda quem pode receber o BPC/LOAS, quais são os requisitos e o que fazer caso o benefício seja negado pelo INSS.',

    date: '2026-08-28',

    content: [

      {
        type: 'paragraph',
        text: 'O Benefício de Prestação Continuada (BPC) é um benefício assistencial pago pelo INSS à pessoa que atende aos requisitos previstos na legislação. Diferentemente da aposentadoria, não é necessário ter contribuído para o INSS para solicitar o BPC.'
      },

      {
        type: 'heading',
        text: 'Quem pode receber o BPC?'
      },

      {
        type: 'paragraph',
        text: 'O benefício é destinado a:'
      },

      {
        type: 'list',
        items: [
          'Pessoa idosa com 65 anos ou mais, que esteja em situação de vulnerabilidade socioeconômica',
          'Pessoa com deficiência, de qualquer idade, que apresente impedimento de longo prazo e esteja em situação de vulnerabilidade'
        ]
      },

      {
        type: 'paragraph',
        text: 'É necessário comprovar que a família não possui condições suficientes para garantir a manutenção do requerente, conforme os critérios previstos na legislação.'
      },

      {
        type: 'heading',
        text: 'O BPC é uma aposentadoria?'
      },

      {
        type: 'paragraph',
        text: 'Não. O BPC é um benefício assistencial, e não uma aposentadoria.'
      },

      {
        type: 'paragraph',
        text: 'Por isso, ele não exige número mínimo de contribuições ao INSS. Além disso, em regra, o BPC não paga 13º salário e não gera pensão por morte aos dependentes.'
      },

      {
        type: 'paragraph',
        text: 'O beneficiário recebe um salário mínimo por mês, desde que continue preenchendo os requisitos legais.'
      },

      {
        type: 'heading',
        text: 'Como solicitar o BPC?'
      },

      {
        type: 'paragraph',
        text: 'O pedido pode ser realizado pelo Meu INSS. É importante manter o Cadastro Único atualizado e apresentar corretamente os documentos necessários para comprovar a situação familiar, econômica e, no caso da pessoa com deficiência, a condição de saúde e os impedimentos de longo prazo.'
      },

      {
        type: 'heading',
        text: 'O que fazer se o BPC for negado?'
      },

      {
        type: 'paragraph',
        text: 'Se o INSS negar o benefício, é importante verificar o motivo do indeferimento. Dependendo do caso, pode ser possível apresentar recurso administrativo ou buscar o reconhecimento do direito na Justiça.'
      },

      {
        type: 'paragraph',
        text: 'Tem dúvidas sobre o BPC/LOAS ou teve seu pedido negado pelo INSS? Procure orientação especializada e verifique se você preenche os requisitos para receber o benefício.'
      },

    ],
  },
  {
    slug: 'auxilio-acidente-quem-tem-direito',
    coverImage: "/assets/Auxílio_acidente.jpg",

    title: 'Auxílio-acidente: quem tem direito ao benefício?',

    excerpt: 'Saiba quem pode ter direito ao auxílio-acidente, quais são os requisitos e como funciona o benefício para quem ficou com sequelas permanentes.',

    date: '2026-08-28',

    content: [

      {
        type: 'paragraph',
        text: 'O auxílio-acidente é um benefício do INSS destinado ao segurado que sofreu um acidente e ficou com sequelas permanentes que reduzem sua capacidade para o trabalho que exercia habitualmente.'
      },

      {
        type: 'paragraph',
        text: 'Diferentemente do auxílio por incapacidade temporária, o auxílio-acidente tem caráter indenizatório e pode ser pago mesmo quando o segurado continua trabalhando.'
      },

      {
        type: 'heading',
        text: 'Quem pode receber?'
      },

      {
        type: 'paragraph',
        text: 'Em regra, têm direito ao auxílio-acidente determinadas categorias de segurados, como:'
      },

      {
        type: 'list',
        items: [
          'Empregado',
          'Trabalhador avulso',
          'Segurado especial',
          'Empregado doméstico'
        ]
      },

      {
        type: 'paragraph',
        text: 'É necessário comprovar a ocorrência do acidente e a existência de sequela permanente que cause redução da capacidade para o trabalho.'
      },

      {
        type: 'paragraph',
        text: 'O acidente pode ser relacionado ao trabalho ou ocorrer fora do ambiente profissional.'
      },

      {
        type: 'heading',
        text: 'É preciso ficar incapaz de trabalhar?'
      },

      {
        type: 'paragraph',
        text: 'Não.'
      },

      {
        type: 'paragraph',
        text: 'O auxílio-acidente não exige que a pessoa fique totalmente incapaz para trabalhar. O benefício pode ser devido quando o segurado continua trabalhando, mas passa a exercer sua atividade com maior dificuldade ou possui redução permanente de sua capacidade laboral.'
      },

      {
        type: 'heading',
        text: 'Qual é o valor do auxílio-acidente?'
      },

      {
        type: 'paragraph',
        text: 'O benefício corresponde, em regra, a 50% do salário de benefício utilizado para o cálculo, conforme as regras previdenciárias aplicáveis.'
      },

      {
        type: 'paragraph',
        text: 'O auxílio-acidente pode ser pago até a véspera do início de uma aposentadoria ou até o óbito do segurado, observadas as regras legais.'
      },

      {
        type: 'heading',
        text: 'O que fazer se o INSS negar o benefício?'
      },

      {
        type: 'paragraph',
        text: 'Caso o INSS negue o auxílio-acidente, é importante analisar o motivo da negativa e os documentos médicos e profissionais existentes.'
      },

      {
        type: 'paragraph',
        text: 'Dependendo do caso, pode ser possível apresentar recurso administrativo ou buscar o reconhecimento do direito na Justiça.'
      },

      {
        type: 'paragraph',
        text: 'Sofreu um acidente e ficou com alguma sequela permanente? Uma análise do seu caso pode verificar se existe direito ao auxílio-acidente.'
      },

    ],
  },
  {
    slug: 'auxilio-por-incapacidade-temporaria-quem-tem-direito',
    coverImage: "/assets/Auxílio_por_incapacidade_temporária.jpg",
    title: 'Auxílio por incapacidade temporária: quem tem direito?',

    excerpt: 'Entenda quem pode receber o auxílio por incapacidade temporária, antigo auxílio-doença, e quais são os requisitos para solicitar o benefício.',

    date: '2026-08-28',

    content: [

      {
        type: 'paragraph',
        text: 'O auxílio por incapacidade temporária, antigo auxílio-doença, é um benefício do INSS destinado ao segurado que fica temporariamente incapaz de trabalhar em razão de doença ou acidente.'
      },

      {
        type: 'paragraph',
        text: 'Para ter direito ao benefício, é necessário cumprir os requisitos previdenciários e comprovar a incapacidade para o exercício da atividade profissional.'
      },

      {
        type: 'heading',
        text: 'Quem pode receber?'
      },

      {
        type: 'paragraph',
        text: 'Em regra, o benefício pode ser concedido ao segurado que:'
      },

      {
        type: 'list',
        items: [
          'Esteja temporariamente incapaz para o trabalho',
          'Possua qualidade de segurado do INSS',
          'Cumpra a carência exigida, quando necessária',
          'Comprove a incapacidade por meio da documentação médica e da avaliação realizada pelo INSS'
        ]
      },

      {
        type: 'paragraph',
        text: 'A incapacidade deve impedir o segurado de exercer sua atividade habitual pelo período exigido pela legislação.'
      },

      {
        type: 'heading',
        text: 'Precisa ter 12 contribuições?'
      },

      {
        type: 'paragraph',
        text: 'Em regra, é exigida carência de 12 contribuições mensais.'
      },

      {
        type: 'paragraph',
        text: 'Entretanto, existem situações em que a carência é dispensada, como em determinados casos de acidente e algumas doenças previstas na legislação.'
      },

      {
        type: 'paragraph',
        text: 'Por isso, cada situação deve ser analisada individualmente.'
      },

      {
        type: 'heading',
        text: 'O benefício é permanente?'
      },

      {
        type: 'paragraph',
        text: 'Não. O auxílio por incapacidade temporária é destinado a situações em que existe incapacidade temporária para o trabalho.'
      },

      {
        type: 'paragraph',
        text: 'Se a incapacidade se tornar permanente e o segurado preencher os requisitos legais, pode ser necessário avaliar a possibilidade de aposentadoria por incapacidade permanente.'
      },

      {
        type: 'heading',
        text: 'E se o INSS negar o benefício?'
      },

      {
        type: 'paragraph',
        text: 'Se o pedido for negado, é importante verificar o motivo do indeferimento e analisar os documentos médicos apresentados.'
      },

      {
        type: 'paragraph',
        text: 'Dependendo do caso, pode ser possível apresentar recurso administrativo ou buscar o reconhecimento do direito na Justiça.'
      },

      {
        type: 'paragraph',
        text: 'Está incapacitado para trabalhar por causa de doença ou acidente? Uma análise do seu caso pode verificar se você possui direito ao benefício.'
      },

    ],
  },
  {
    slug: 'aposentadoria-por-incapacidade-permanente-quem-tem-direito',
    coverImage: "/assets/Aposentadoria_por_incapacidade_permanente.jpg",
    title: 'Aposentadoria por incapacidade permanente: quem tem direito?',

    excerpt: 'Saiba quem pode ter direito à aposentadoria por incapacidade permanente, quais são os requisitos e como funciona o benefício após a Reforma da Previdência.',

    date: '2026-08-28',

    content: [

      {
        type: 'paragraph',
        text: 'A aposentadoria por incapacidade permanente, antiga aposentadoria por invalidez, é um benefício do INSS destinado ao segurado que está permanentemente incapaz de exercer atividade profissional e não pode ser reabilitado para outra profissão que lhe garanta a subsistência.'
      },

      {
        type: 'heading',
        text: 'Quem pode ter direito?'
      },

      {
        type: 'paragraph',
        text: 'Para receber o benefício, é necessário, em regra:'
      },

      {
        type: 'list',
        items: [
          'Possuir qualidade de segurado do INSS',
          'Cumprir a carência exigida, quando aplicável',
          'Comprovar a incapacidade permanente para o trabalho',
          'Demonstrar que não é possível a reabilitação para outra atividade profissional'
        ]
      },

      {
        type: 'paragraph',
        text: 'A incapacidade deve ser comprovada por documentação médica e pela avaliação realizada pelo INSS.'
      },

      {
        type: 'heading',
        text: 'É preciso ter 12 contribuições?'
      },

      {
        type: 'paragraph',
        text: 'Em regra, a legislação exige 12 contribuições mensais.'
      },

      {
        type: 'paragraph',
        text: 'Entretanto, existem situações em que a carência pode ser dispensada, como em determinados casos de acidente e doenças previstas na legislação.'
      },

      {
        type: 'heading',
        text: 'Qual é o valor da aposentadoria?'
      },

      {
        type: 'paragraph',
        text: 'O cálculo do benefício depende da data em que ocorreu a incapacidade e da situação contributiva do segurado.'
      },

      {
        type: 'paragraph',
        text: 'Após a Reforma da Previdência, existem regras específicas para o cálculo, e o valor pode ser diferente quando a incapacidade decorre de acidente de trabalho, doença profissional ou doença do trabalho.'
      },

      {
        type: 'paragraph',
        text: 'Por isso, é importante analisar individualmente o histórico de contribuições e a causa da incapacidade.'
      },

      {
        type: 'heading',
        text: 'O benefício pode ser revisado?'
      },

      {
        type: 'paragraph',
        text: 'Sim. O aposentado por incapacidade permanente pode ser convocado pelo INSS para avaliação da continuidade da incapacidade, observadas as hipóteses legais de dispensa de avaliação.'
      },

      {
        type: 'paragraph',
        text: 'Também é possível buscar judicialmente o benefício quando o INSS nega ou cessa uma aposentadoria por incapacidade permanente e existem elementos que demonstram a permanência da incapacidade.'
      },

      {
        type: 'paragraph',
        text: 'Está impossibilitado de trabalhar de forma permanente? Uma análise do seu caso pode verificar se você possui direito à aposentadoria por incapacidade permanente.'
      },

    ],
  },
];
