import { DERIVATIVES, COMMERCIAL, SIZE } from './constants';

export type Derivatives = keyof typeof DERIVATIVES;
export type Commercial = keyof typeof COMMERCIAL;
export type Size = keyof typeof SIZE;

export interface ILicense {
  label: string;
  abbr: string;
}
