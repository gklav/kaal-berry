import { Event, EventOffer } from '@/app/lib/types';
import { getLocale } from 'next-intl/server';

function OfferButtons({offers}: { offers: EventOffer[] }) {
    if(offers.length > 0) {
        return offers.map((offer) => {
            return <div className={`border px-3 py-2`} key={offer.url}>
                <a className={`text-xs`} href={offer.url} target="_blank">
                    {offer.type}
                </a>
            </div>
        })
    }
}

export async function EventRow({event}: { event: Event }) {
    const locale = await getLocale();
    const dateOptions: Intl.DateTimeFormatOptions  = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }

    return (
        <>
            <div className={`lg:hidden flex flex-col justify-between items-center border-b py-4 gap-4`}>
                <div className={`flex flex-col justify-between w-full items-center text-center`}>
                    <div className={`flex w-fit text-xs pt-2 leading-none`}>
                        <p>{event.date.toLocaleDateString(locale, dateOptions)}</p>
                    </div>
                    <div className={`text-m py-4 leading-none`}>
                        <p>{event.venue.name}</p>
                    </div>
                    <div className={`w-fit text-xs leading-none`}>
                        <p>{event.venue.location}</p>
                    </div>
                </div>
                <div className={`py-2`}>
                    <OfferButtons offers={event.offers}/>
                </div>
            </div>

            <div className={`hidden lg:flex direction-row border-b py-2`}>
                <div className={`flex direction-row justify-between w-4/5 items-center`}>
                    <div className={`w-2/12 text-xs leading-none`}>
                        <p>{event.date.toLocaleDateString(locale, dateOptions)}</p>
                    </div>
                    <div className={`w-7/12 text-xl px-4 leading-none`}>
                        <p>{event.venue.name}</p>
                    </div>
                    <div className={`w-3/12 justify-end text-xs leading-none`}>
                        <p className={`text-right`}>{event.venue.location}</p>
                    </div>
                </div>

                <div className={`flex w-1/5 justify-end items-center`}>
                    <OfferButtons offers={event.offers}/>
                </div>
            </div>
        </>

    );
}