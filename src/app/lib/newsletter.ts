'use server'

export async function newsletterSubscribe(email: string): Promise<boolean> {
    const url = process.env.NEWSLETTER_API_URL as string;
    const apiKey = process.env.NEWSLETTER_API_KEY as string;
    const listIdsString = process.env.NEWSLETTER_LIST_IDS as string;
    const listIds = listIdsString.split(',').map(id => parseInt(id, 10));

    if (!email || !email.match(/^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        return false;
    }

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'api-key': apiKey
        },
        body: JSON.stringify({
            email,
            listIds,
            updateEnabled: true,
        })
    };
    
    const response = await fetch(url, options);

    if (!response.ok) {
        console.error(await response.json());
        return false;
    }

    return true;
}