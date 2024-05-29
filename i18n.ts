import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import createMiddleware from 'next-intl/middleware';
import { locale } from 'moment';

// Can be imported from a shared config
const locales = ['en', 'vi'];

export default getRequestConfig(async () => {
    // if (!locale) locale = 'en';

    // Validate that the incoming `locale` parameter is valid
    let locale = "en";
    if (!locales.includes(locale as any)) notFound();

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});
