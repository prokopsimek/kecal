import NextI18Next from 'next-i18next';

export interface I18nProps {
  t(key: string, option?: object): string;
}

export const prodAllowedLanguages = ['en'];

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['en'],
  localeSubpaths: 'foreign',
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withNamespaces,
  Link,
  i18n,
  Router,
} = NextI18NextInstance;
