import { LanguageContextVariants } from './LanguageContext.types';
import enTranslationMessages from './translations/en.json';

// Constants
const DEFAULT_LOCALE = LanguageContextVariants.en;

/**
 * Check format translate message, should be JSON
 *
 * @param { LanguageContextVariants } locale - Language to set
 * @param { unknown } messages - Tranlation to process
 *
 * @returns
 */
const formatTranslationMessages = (locale: LanguageContextVariants, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};

  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];

    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

// Translations
const translationMessages = {
  en: formatTranslationMessages(LanguageContextVariants.en, enTranslationMessages),
};

export { formatTranslationMessages, translationMessages, DEFAULT_LOCALE };
