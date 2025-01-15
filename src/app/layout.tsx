import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./ui/globals.css";
import NavBar from '@/app/ui/nav-bar';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

const horizon = localFont({ src: '../../public/fonts/horizon.otf' });

export const metadata: Metadata = {
  title: "Kaal Berry",
  description: "Site officiel. Musique, concerts, et plus.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages({locale});

  return (
    <html lang={locale}>
        <body className={`${horizon.className} antialiased relative min-h-screen w-screen overflow-x-hidden text-white`}>
            <NextIntlClientProvider locale={locale} messages={messages}>

                <NavBar />

                {children}

            </NextIntlClientProvider>

            <footer className="fixed bottom-0 flex w-full pt-0 pb-3 justify-center text-xs">
                <p>© {new Date().getFullYear()} Kaal Berry</p>
            </footer>
        </body>
    </html>
  );
}
