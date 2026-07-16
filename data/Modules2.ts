export type ModuleId = 'intro' | 'uc1' | 'uc2' | 'uc3' | 'uc4' | 'uc5';

export type Question = {
  question: string;
  options: string[];
  answerIndex: number;
};

export type CourseModule = {
  id: ModuleId;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  youtubeVideoId?: string;
  content: string[];
  questions: Question[];
};

export const modules: CourseModule[] = [
  {
    id: 'intro',
    title: 'INTRODUÇÃO',
    subtitle: 'Conceitos fundamentais',
    description:
      'Orientação sexual, identidade de gênero, terminologias e acolhimento respeitoso.',
    color: '#FF0018',

    // Coloque somente o ID do vídeo, não o link completo.
    youtubeVideoId: 'COLOQUE_AQUI_O_ID_DO_VIDEO',

    content: [
      'Neste módulo, você conhecerá conceitos essenciais para compreender a diversidade humana no contexto da saúde.',
      'Orientação sexual está relacionada à atração afetiva e/ou sexual de uma pessoa. Identidade de gênero está relacionada à forma como a pessoa se reconhece.',
      'O atendimento em saúde deve ser baseado em escuta, respeito, sigilo e uso correto do nome social e dos pronomes da pessoa atendida.',
    ],

    questions: [
      {
        question: 'O que significa identidade de gênero?',
        options: [
          'A profissão da pessoa',
          'A forma como a pessoa se reconhece em relação ao gênero',
          'O endereço da pessoa',
          'O tipo sanguíneo da pessoa',
        ],
        answerIndex: 1,
      },
      {
        question: 'O nome social deve ser utilizado quando?',
        options: [
          'Somente em documentos judiciais',
          'Apenas após autorização da família',
          'Sempre que a pessoa informar que deseja ser chamada por ele',
          'Nunca no serviço de saúde',
        ],
        answerIndex: 2,
      },
      {
        question: 'Orientação sexual está relacionada principalmente a:',
        options: [
          'Atração afetiva e/ou sexual',
          'Altura da pessoa',
          'Escolaridade',
          'Local de nascimento',
        ],
        answerIndex: 0,
      },
      {
        question: 'Uma prática adequada no acolhimento é:',
        options: [
          'Evitar ouvir o usuário',
          'Fazer comentários pessoais',
          'Respeitar nome, pronome e privacidade',
          'Expor a pessoa para a equipe inteira',
        ],
        answerIndex: 2,
      },
      {
        question: 'O objetivo do atendimento inclusivo é:',
        options: [
          'Criar barreiras',
          'Garantir respeito, equidade e acesso à saúde',
          'Padronizar todas as pessoas',
          'Diminuir o diálogo',
        ],
        answerIndex: 1,
      },
    ],
  },

  {
    id: 'uc1',
    title: 'UC1',
    subtitle: 'Direito à saúde LGBTQIA+',
    description:
      'A luta histórica pelo direito à saúde, cidadania e atendimento sem discriminação.',
    color: '#FFA52C',
    content: [
      'A saúde é um direito social e deve ser garantida com equidade para todas as pessoas.',
      'A população LGBTQIA+ enfrentou e ainda enfrenta barreiras de acesso, preconceito e invisibilidade nos serviços de saúde.',
      'Compreender essa trajetória ajuda os profissionais a reconhecerem desigualdades e atuarem de forma ética e humanizada.',
    ],
    questions: [
      {
        question: 'A saúde deve ser compreendida como:',
        options: [
          'Um privilégio',
          'Um direito de todos',
          'Um favor',
          'Um serviço opcional apenas privado',
        ],
        answerIndex: 1,
      },
      {
        question:
          'Uma barreira enfrentada pela população LGBTQIA+ nos serviços de saúde é:',
        options: [
          'Excesso de acolhimento',
          'Discriminação e preconceito',
          'Atendimento sempre especializado',
          'Ausência de filas',
        ],
        answerIndex: 1,
      },
      {
        question: 'Equidade significa:',
        options: [
          'Tratar todos de forma idêntica, ignorando necessidades',
          'Oferecer cuidado considerando necessidades diferentes',
          'Negar atendimento específico',
          'Atender somente alguns grupos',
        ],
        answerIndex: 1,
      },
      {
        question: 'O profissional de saúde deve atuar com:',
        options: [
          'Julgamento moral',
          'Exposição do usuário',
          'Ética, respeito e sigilo',
          'Indiferença',
        ],
        answerIndex: 2,
      },
      {
        question: 'Conhecer a luta por direitos contribui para:',
        options: [
          'Reforçar exclusões',
          'Melhorar o acolhimento e a consciência profissional',
          'Evitar políticas públicas',
          'Reduzir a escuta',
        ],
        answerIndex: 1,
      },
    ],
  },

  {
    id: 'uc2',
    title: 'UC2',
    subtitle: 'Determinação social da saúde',
    description:
      'Relação entre vulnerabilidades, preconceito, acesso aos serviços e cuidado integral.',
    color: '#F5C400',
    content: [
      'A saúde não depende apenas de fatores biológicos. Ela também é influenciada por condições sociais, econômicas, culturais e institucionais.',
      'Preconceito, violência, exclusão familiar, dificuldade de acesso ao trabalho e discriminação nos serviços impactam a saúde integral.',
      'O cuidado integral considera a pessoa em sua totalidade, valorizando contexto, história, vínculos e necessidades específicas.',
    ],
    questions: [
      {
        question: 'Determinantes sociais da saúde são:',
        options: [
          'Apenas exames laboratoriais',
          'Fatores sociais, econômicos e culturais que influenciam a saúde',
          'Somente medicamentos',
          'Apenas genética',
        ],
        answerIndex: 1,
      },
      {
        question: 'A discriminação pode afetar:',
        options: [
          'Somente o lazer',
          'A saúde física e mental',
          'Apenas a documentação',
          'Nada na vida da pessoa',
        ],
        answerIndex: 1,
      },
      {
        question: 'Cuidado integral significa:',
        options: [
          'Olhar apenas a doença',
          'Considerar a pessoa e seu contexto de vida',
          'Evitar vínculo',
          'Ignorar vulnerabilidades',
        ],
        answerIndex: 1,
      },
      {
        question: 'Um serviço inclusivo deve:',
        options: [
          'Aumentar barreiras',
          'Garantir acesso com respeito',
          'Constranger usuários',
          'Atender apenas casos urgentes',
        ],
        answerIndex: 1,
      },
      {
        question: 'A escuta qualificada é importante porque:',
        options: [
          'Substitui todo tratamento',
          'Permite compreender necessidades reais do usuário',
          'Impede diálogo',
          'Serve apenas para preencher ficha',
        ],
        answerIndex: 1,
      },
    ],
  },

  {
    id: 'uc3',
    title: 'UC3',
    subtitle: 'Política Nacional de Saúde Integral',
    description:
      'Princípios, objetivos e importância da política de saúde integral LGBTQIA+.',
    color: '#008018',
    content: [
      'A Política Nacional de Saúde Integral LGBTQIA+ busca enfrentar desigualdades e promover o acesso qualificado aos serviços de saúde.',
      'Ela orienta ações de acolhimento, formação profissional, respeito ao nome social e enfrentamento da discriminação institucional.',
      'A política fortalece o SUS como espaço de cuidado universal, integral e equânime.',
    ],
    questions: [
      {
        question: 'A política de saúde integral LGBTQIA+ busca:',
        options: [
          'Aumentar desigualdades',
          'Promover acesso qualificado e reduzir discriminações',
          'Impedir atendimento',
          'Separar usuários por julgamento',
        ],
        answerIndex: 1,
      },
      {
        question: 'Um princípio importante do SUS presente na política é:',
        options: ['Equidade', 'Exclusão', 'Privilégio', 'Sigilo quebrado'],
        answerIndex: 0,
      },
      {
        question: 'A formação dos profissionais é relevante para:',
        options: [
          'Reproduzir preconceitos',
          'Qualificar o cuidado',
          'Evitar atendimento',
          'Retirar direitos',
        ],
        answerIndex: 1,
      },
      {
        question: 'Respeitar o nome social é:',
        options: [
          'Uma prática de acolhimento e respeito',
          'Algo sem importância',
          'Permitido apenas em hospital privado',
          'Um erro de cadastro',
        ],
        answerIndex: 0,
      },
      {
        question: 'A discriminação institucional ocorre quando:',
        options: [
          'A instituição acolhe bem',
          'Regras ou práticas do serviço produzem exclusão',
          'Há escuta qualificada',
          'Existe privacidade',
        ],
        answerIndex: 1,
      },
    ],
  },

  {
    id: 'uc4',
    title: 'UC4',
    subtitle: 'Plano operacional',
    description:
      'Como transformar políticas públicas em práticas concretas nos serviços de saúde.',
    color: '#0000F9',
    content: [
      'O plano operacional organiza ações para que a política pública seja aplicada no cotidiano dos serviços.',
      'Entre as ações estão capacitação da equipe, melhoria do acolhimento, adequação de formulários e criação de fluxos de cuidado.',
      'A implementação exige planejamento, avaliação contínua e compromisso institucional.',
    ],
    questions: [
      {
        question: 'Um plano operacional serve para:',
        options: [
          'Transformar diretrizes em ações práticas',
          'Guardar documentos sem uso',
          'Evitar planejamento',
          'Substituir o atendimento',
        ],
        answerIndex: 0,
      },
      {
        question: 'Uma ação possível no serviço é:',
        options: [
          'Capacitar a equipe',
          'Ignorar usuários',
          'Não registrar demandas',
          'Evitar acolhimento',
        ],
        answerIndex: 0,
      },
      {
        question: 'A avaliação contínua permite:',
        options: [
          'Identificar melhorias necessárias',
          'Parar o serviço',
          'Eliminar o diálogo',
          'Reduzir a qualidade',
        ],
        answerIndex: 0,
      },
      {
        question: 'Formulários inclusivos devem:',
        options: [
          'Respeitar nome social e identidade de gênero',
          'Obrigar respostas constrangedoras',
          'Excluir opções',
          'Ser preenchidos pela família',
        ],
        answerIndex: 0,
      },
      {
        question: 'A implementação depende de:',
        options: [
          'Compromisso institucional',
          'Improviso permanente',
          'Falta de equipe',
          'Ausência de fluxo',
        ],
        answerIndex: 0,
      },
    ],
  },

  {
    id: 'uc5',
    title: 'UC5',
    subtitle: 'Aplicação e estudos de caso',
    description:
      'Situações práticas de acolhimento, comunicação respeitosa e tomada de decisão.',
    color: '#86007D',
    content: [
      'Neste módulo, o foco é aplicar os conhecimentos em situações práticas de atendimento.',
      'Estudos de caso ajudam a discutir condutas, linguagem, fluxos e estratégias de acolhimento humanizado.',
      'A prática profissional deve unir conhecimento técnico, empatia, ética e compromisso com a dignidade humana.',
    ],
    questions: [
      {
        question:
          'Em uma situação de atendimento, a primeira postura adequada é:',
        options: [
          'Escutar com respeito',
          'Interromper o usuário',
          'Fazer piadas',
          'Julgar a aparência',
        ],
        answerIndex: 0,
      },
      {
        question:
          'Quando houver dúvida sobre como chamar a pessoa, o profissional pode:',
        options: [
          'Perguntar de forma respeitosa',
          'Inventar um nome',
          'Ignorar a pessoa',
          'Chamar pelo nome que preferir',
        ],
        answerIndex: 0,
      },
      {
        question: 'Estudos de caso são úteis para:',
        options: [
          'Treinar condutas e reflexão profissional',
          'Expor usuários reais',
          'Substituir políticas públicas',
          'Evitar aprendizagem',
        ],
        answerIndex: 0,
      },
      {
        question: 'Comunicação respeitosa envolve:',
        options: [
          'Linguagem adequada, escuta e sigilo',
          'Comentários ofensivos',
          'Exposição desnecessária',
          'Perguntas invasivas sem finalidade',
        ],
        answerIndex: 0,
      },
      {
        question: 'A prática profissional humanizada une:',
        options: [
          'Técnica, empatia e ética',
          'Pressa e julgamento',
          'Exclusão e silêncio',
          'Apenas burocracia',
        ],
        answerIndex: 0,
      },
    ],
  },
];

export function getModuleById(id?: string | string[]) {
  const moduleId = Array.isArray(id) ? id[0] : id;

  return modules.find((item) => item.id === moduleId);
          }
