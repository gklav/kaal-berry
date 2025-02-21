import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./ui/globals.css";
import NavBar from '@/app/ui/nav-bar';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import React from 'react';
import Footer from '@/app/ui/footer';

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
        <body className={`${horizon.className} antialiased relative min-h-screen w-screen overflow-x-hidden`}>
            <NextIntlClientProvider locale={locale} messages={messages}>

                <NavBar />

                {children}

                <Footer />

            </NextIntlClientProvider>
        </body>
    </html>
  );
}
