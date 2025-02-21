import {getRequestConfig} from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
    const headersList = await headers();
    const defaultLocale = headersList.get("accept-language") || 'fr';
    const localeRaw = (await cookies()).get("NEXT_LOCALE")?.value || defaultLocale || "en";
    const locale = localeRaw.split("-")[0].split(",")[0];

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});