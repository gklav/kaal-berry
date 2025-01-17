import { BandsInTownEvent, Event } from '@/app/lib/types';

export async function getEvents(): Promise < Event[] > {
    const appId = process.env.BANDSINTOWN_APP_ID;
    const response = await fetch(`https://rest.bandsintown.com/artists/id_15513188/events/?date=upcoming&app_id=${appId}`);

    if (!response.ok) {
        throw new Error('Failed to fetch events');
    }

    const responseJson =  await response.json();
    const events = responseJson.map((event: BandsInTownEvent) => {
        return {
            id: event.id,
            date: new Date(event.datetime),
            venue: {
                name: event.venue.name,
                location: event.venue.location
            },
            offers: event.offers
        }
    });

    return events;
}