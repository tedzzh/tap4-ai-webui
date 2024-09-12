import { createMiddleware } from 'next-intl/middleware';

// 直接在这里定义所需的配置
const locales = ['en', 'jp', 'de', 'es', 'fr', 'pt', 'ru', 'cn', 'tw']; // 根据您的实际语言列表调整
const defaultLocale = 'en';
const localePrefix = 'as-needed';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

export default intlMiddleware;
