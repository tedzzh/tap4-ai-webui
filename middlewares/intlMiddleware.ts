import createMiddleware from 'next-intl/middleware';

import { localePrefix } from '@/app/navigation';

import { locales } from '../i18n';

const localePrefix = 'as-needed';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix,
});

export default intlMiddleware;
