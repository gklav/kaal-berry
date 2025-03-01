'use server'

import { getEvents } from '@/app/lib/data';
import { EventRow } from '@/app/ui/event-row';
import { getTranslations } from 'next-intl/server';
import Head from 'next/head';

export default async function Page() {
    const events = await getEvents();
    const t = await getTranslations('EventPage');

    let callToActionContext = '';
    const callToAction = t('requestAShow');

    if (events.length > 0) {
        callToActionContext = t('noEventsNearby');
    } else {
        callToActionContext = t('noEventsAnnounced');
    }

    return (
        <>
            <Head>
                <title>{t('title')}</title>
            </Head>
            <main className={`md:w-full justify-center justify-items-center`}>
                <div className="w-full h-screen justify-items-center pt-5">
                    <h1 className={`text-center text-4xl`}>Concerts</h1>
                    <div className="w-10/12 md:w-7/12 py-10">
                        {
                            events.map((event) => {
                                return <EventRow event={event} key={event.id}/>
                            })
                        }
                    </div>
                    <div className={`grid w-full justify-items-center text-center break-before-column`}>
                        <p className={`text-xs`}>{callToActionContext} <br className={`md:hidden`}/>
                            <a
                                href={`mailto:kaalberry@gmail.com`}
                                className={`text-teal hover:text-red border-b border-black hover:border-red`}>
                                {callToAction}
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}