/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { LanguageContextInterface, LanguageContextVariants, LanguageProviderInterface } from './LanguageContext.types';
import { DEFAULT_LOCALE, translationMessages } from './LanguageContext.util';

// Model Context API
const LanguageContext = createContext<LanguageContextInterface>({
  locale: DEFAULT_LOCALE,
  setLanguage: () => {},
});

// Custom hook to get the lang object returns {lang, setLanguage }
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextInterface => useContext(LanguageContext);

/**
 * Create provider to manage Language context
 *
 * @param { LanguageProviderInterface } props - Properties to inject in context
 *
 * @returns JSX.Element
 */
export const LanguageProvider = ({ children }: LanguageProviderInterface): JSX.Element => {
  const [locale, setLocale] = useState(LanguageContextVariants.en);

  const setLanguage = (locale: LanguageContextVariants): void => {
    setLocale(locale);
  };

  const defaultValue = { locale, setLanguage };

  return (
    <LanguageContext.Provider value={defaultValue}>
      <IntlProvider messages={translationMessages[locale]} locale={locale} defaultLocale={DEFAULT_LOCALE}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
