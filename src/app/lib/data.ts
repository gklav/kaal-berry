'use server'

import { BandsInTownEvent, Event } from '@/app/lib/types';

export async function getEvents(): Promise < Event[] > {
    const appId = process.env.EVENTS_APP_ID as string;
    const url = process.env.EVENTS_API_URL as string;
    const response = await fetch(
        `${url}/?app_id=${appId}`,
        { next: { revalidate: 3600 }}
    );

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