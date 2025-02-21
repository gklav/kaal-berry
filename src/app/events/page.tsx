import { getEvents } from '@/app/lib/data';
import { EventRow } from '@/app/ui/event-row';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

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
            <main className={`md:w-full justify-center justify-items-center`}>
                <div className="w-full h-screen justify-items-center pt-5">
                    <h2 className={`text-center text-4xl`}>Concerts</h2>
                    <div className="w-10/12 md:w-7/12 py-10">
                        {
                            events.map((event) => {
                                return <EventRow event={event} key={event.id}/>
                            })
                        }
                    </div>
                    <div className={`grid w-full justify-items-center text-center break-before-column`}>
                        <p className={`text-xs`}>{callToActionContext} <br className={`md:hidden`}/>
                            <Link
                                href='/#'
                                className={`text-teal hover:text-red border-b border-black hover:border-red`}>
                                    {callToAction}
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}