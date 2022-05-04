export const ATTRIBUTION = {
  ATTRIBUTION: {
    label: {
      en: 'Attribution',
      fr: 'Attribution',
      zh: '署名',
      zh_TW: '姓名標示',
      ja: '表示',
      ko: '저작자표시',
    },
    abbr: 'by',
  },
  NO_ATTRIBUTION: {
    label: {
      en: 'not defined',
      ja: 'not defined',
    },
    abbr: '',
  },
} as const;

export const DERIVATIVES = {
  DERIVATIVES: {
    label: {
      en: 'Derivatives',
      fr: 'Modification',
      zh: '演绎',
      zh_TW: '改作',
      ja: '改変',
      ko: '변경',
    },
    abbr: '',
  },
  NO_DERIVATIVES: {
    label: {
      en: 'NoDerivatives',
      fr: 'Pas de Modification',
      zh: '禁止演绎',
      zh_TW: '禁止改作',
      ja: '改変禁止',
      ko: '변경금지',
    },
    abbr: 'nd',
  },
  SHARE_ALIKE: {
    label: {
      en: 'ShareAlike',
      fr: 'Partage dans les Mêmes Conditions',
      zh: '相同方式共享',
      zh_TW: '相同方式分享',
      ja: '継承',
      ko: '동일조건변경허락',
    },
    abbr: 'sa',
  },
} as const;

export const COMMERCIAL = {
  COMMERCIAL: {
    label: {
      en: 'Commercial',
      fr: 'Pas d’Utilisation Commerciale',
      zh: '商业性使用',
      zh_TW: '商業性',
      ja: '営利',
      ko: '영리',
    },
    abbr: '',
  },
  NON_COMMERCIAL: {
    label: {
      en: 'NonCommercial',
      fr: 'Utilisation Commerciale',
      zh: '非商业性使用',
      zh_TW: '非商業性',
      ja: '非営利',
      ko: '비영리',
    },
    abbr: 'nc',
  },
} as const;

export const SIZE = {
  BIG: {
    label: {
      en: 'Big',
      fr: 'Icône normale',
      zh: '普通图标',
      zh_TW: '一般圖示',
      ja: '通常サイズ',
      ko: '일반 아이콘',
    },
    abbr: '88x31',
  },
  SMALL: {
    label: {
      en: 'Small',
      fr: 'Icône compacte',
      zh: '紧凑图标',
      zh_TW: '精簡圖示',
      ja: '小型',
      ko: '단축 아이콘',
    },
    abbr: '80x15',
  },
} as const;

export const dictionary = {
  creativeCommons: {
    en: 'Creative Commons',
    fr: 'Creative Commons',
    zh: '知识共享',
    zh_TW: '創用 CC',
    ja: 'クリエイティブ・コモンズ ',
    ko: '크리에이티브 커먼즈 ',
  },
  creativeCommonsLicense: {
    en: 'Creative Commons License',
    fr: 'Licence Creative Commons',
    zh: '知识共享许可协议',
    zh_TW: '創用 CC 授權條款',
    ja: 'クリエイティブ・コモンズ・ライセンス',
    ko: '크리에이티브 커먼즈 라이선스',
  },
  license: {
    en: 'License',
    fr: 'Licence',
    zh: '许可协议',
    zh_TW: '授權條款',
    ja: 'ライセンス',
    ko: '라이선스',
  },
  international: {
    en: 'International',
    fr: 'International',
    zh: '国际',
    zh_TW: '國際',
    ja: '国際',
    ko: '국제',
  },
  linkBefore: {
    en: 'This work is licensed under a ',
    fr: 'Ce(tte) œuvre est mise à disposition selon les termes de la ',
    zh: '本作品采用',
    zh_TW: '本著作係採用',
    ja: 'この 作品 は ',
    ko: '이 저작물은 ',
  },
  linkAfter: {
    en: '.',
    fr: '.',
    zh: '进行许可。',
    zh_TW: '授權.',
    ja: 'の下に提供されています。',
    ko: '에따라 이용할 수 있습니다.',
  },
  hyphen: {
    en: '-',
    fr: ' - ',
    ja: ' - ',
  },
  space: {
    en: ' ',
    zh: '',
  },
} as const;

export const LC = [
  // 'id',
  // 'ms',
  // 'es_ES',
  // 'ca',
  // 'da',
  // 'de',
  'en',
  // 'es',
  // 'eo',
  // 'eu',
  'fr',
  // 'gl',
  // 'hu',
  // 'it',
  // 'lv',
  // 'lt',
  // 'hu',
  // 'nl',
  // 'no',
  // 'pl',
  // 'pt',
  // 'pt_BR',
  // 'ro',
  // 'sl',
  // 'sr_LATIN',
  // 'fi',
  // 'sv',
  // 'tr',
  // 'is',
  // 'cs',
  // 'el',
  // 'be',
  // 'ru',
  // 'uk',
  // 'ar',
  // 'fa',
  // 'bn',
  'zh',
  'ja',
  'zh_TW',
  'ko',
] as const;
