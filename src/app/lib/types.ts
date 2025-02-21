export const eventOfferStatus = {
    available: 'available',
} as const;
export type EventOfferStatus = (typeof eventOfferStatus)[keyof typeof eventOfferStatus];

export const eventOfferType = {
    tickets: 'Tickets',
} as const;
export type EventOfferType = (typeof eventOfferType)[keyof typeof eventOfferType];

export type EventOffer = {
    status: EventOfferStatus;
    type: EventOfferType;
    url: string;
}

export type Event = {
    id: string,
    date: Date;
    url: string;
    venue: {
        name: string,
        location: string,
    }
    offers: EventOffer[];
}

export type BandsInTownEvent = {
    id: string;
    datetime: string;
    venue: {
        name: string;
        location: string;
    }
    offers: EventOffer[];
}