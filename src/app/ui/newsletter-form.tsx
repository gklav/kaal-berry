'use client';

import { newsletterSubscribe } from '@/app/lib/newsletter';
import Form from 'next/form';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function NewsletterForm() {
    const [error, setError] = useState<boolean>(false)
    const [submission, setSubmission] = useState<string | null>(null);

    const t = useTranslations('Newsletter');

    async function handleSubmit(formData: FormData) {
        setError(false);
        setSubmission(null);

        const email = formData.get('email') as string;
        const response = await newsletterSubscribe(email);

        if(!response) {
            setSubmission(t('error'));
            setError(true);
        } else {
            setSubmission(t('success'));
        }
    }

    return (
        <>
            <div className={`px-6 py-10`}>
                <p>{t('title')}</p>
                <Form action={handleSubmit} className={`${submission ? `hidden` : `flex`}`}>
                    <div className={`flex rounded-full`}>
                        <input
                            type="email"
                            name="email"
                            placeholder={t('placeholder')}
                            required={true}
                            className={`text-xs placeholder-white pr-4 w-full bg-transparent border-b-2 border-white`}
                        />
                        <button type={`submit`}
                                className={`px-2 py-1 border-white border-2 border-l-0 rounded-r-full`}>{t('submission')}</button>
                    </div>
                    <p className={`${error ? `inline` : `hidden`} text-red`}>
                        {error}
                    </p>
                </Form>
                <div className={`${submission && !error ? `flex` : `hidden`} px-6 py-10`}>
                    <p className={`text-xs`}>{t('thanks')}</p>
                </div>
                <div className={`${submission && error ? `flex` : `hidden`} px-6 py-10`}>
                    <p className={`text-xs text-red`}>{t('error')}</p>
                </div>
            </div>

        </>
    );
}