import { createMiddleware } from 'next-intl/middleware';
import { locales, defaultLocale } from '../i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

export default intlMiddleware;
