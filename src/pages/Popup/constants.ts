export const ATTRIBUTION = {
  ATTRIBUTION: {
    label: 'Attribution',
    abbr: 'by',
  },
  NO_ATTRIBUTION: {
    label: 'NoAttribution',
    abbr: '',
  },
} as const;

export const DERIVATIVES = {
  DERIVATIVES: {
    label: 'Derivatives',
    abbr: '',
  },
  NO_DERIVATIVES: {
    label: 'NoDerivatives',
    abbr: 'nd',
  },
  SHARE_ALIKE: {
    label: 'ShareAlike',
    abbr: 'sa',
  },
} as const;

export const COMMERCIAL = {
  COMMERCIAL: {
    label: 'Commercial',
    abbr: '',
  },
  NON_COMMERCIAL: {
    label: 'NonCommercial',
    abbr: 'nc',
  },
} as const;

export const SIZE = {
  BIG: '88x31',
  SMALL: '80x15',
} as const;

type Derivatives = keyof typeof DERIVATIVES;
type Commercial = keyof typeof COMMERCIAL;
type Size = keyof typeof SIZE;
