import { ReactNode } from 'react';

export enum LanguageContextVariants {
  en = 'en',
}

export interface LanguageContextInterface {
  locale: LanguageContextVariants;
  setLanguage: (e: LanguageContextVariants) => void;
}

export interface LanguageProviderInterface {
  children: ReactNode;
}
