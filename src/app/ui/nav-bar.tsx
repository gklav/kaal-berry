'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import NewsletterForm from '@/app/ui/newsletter-form';

export default function NavBar() {
    const t = useTranslations('EventPage');
    const eventPageTitle = t('title');

    const links = [
        {
            name: eventPageTitle,
            href: '/events',
            type: 'page',
        },
        {
            name: 'Kaal Berry',
            href: '/',
            type: 'title',
        },
        {
            name: 'Contact',
            href: '#',
            type: 'page',
        }
    ];

    const socials = [
        {
            name: 'Instagram',
            href: '#',
        },
        {
            name: 'YouTube',
            href: '#',
        },
        {
            name: 'Facebook',
            href: '#',
        },
        {
            name: 'TikTok',
            href: '#',
        }
    ];

    const streamingServices = [
        {
            name: 'Spotify',
            href: '#',
        },
        {
            name: 'Deezer',
            href: '#',
        },
        {
            name: 'Apple Music',
            href: '#',
        },
        {
            name: 'Amazon Music',
            href: '#',
        },
        {
            name: 'Youtube Music',
            href: '#',
        }
    ];

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`flex w-screen`}>
            <div
                className={`md:hidden fixed h-screen z-10 duration-1000 ${isOpen ? `right-full` : `right-0`} ease-in-out`}>
                <div className={`fixed h-screen w-screen z-10 bg-red p-2`}>
                    <div className={`flex justify-between h-1/5`}>
                        <Link
                            className={`z-20 text-5xl`}
                            key="Kaal Berry"
                            href="/"
                            onClick={handleClick}
                        >
                            KAAL BERRY
                        </Link>
                    </div>
                    <div className={`h-1/5 text-2xl`}>
                        {
                            links.map((link) => {
                                return link.type === 'page'
                                    ? (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={handleClick}
                                        >
                                            <p className="py-2">{link.name}</p>
                                        </Link>
                                    )
                                    : '';
                            })
                        }
                    </div>
                    <div className={`h-1/5`}>
                        <NewsletterForm />
                    </div>
                    <div className={`h-1/5 w-full grid grid-cols-2 text-s`}>
                        <div>
                            {
                                socials.map((social) => {
                                    return (
                                        <Link
                                            key={social.name}
                                            href={social.href}
                                        >
                                            <p className="block">{social.name}</p>
                                        </Link>
                                    );
                                })
                            }
                        </div>
                        <div>
                            {
                                streamingServices.map((streaming) => {
                                    return (
                                        <Link
                                            key={streaming.name}
                                            href={streaming.href}
                                        >
                                            <p className="block">{streaming.name}</p>
                                        </Link>
                                    );
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
            <div className={`md:hidden w-screen absolute flex justify-end z-10 p-2`}>
                <div onClick={handleClick}>
                    <svg version="1.2" className="fill-white" role="presentation" viewBox="0 0 200 170" width="30">
                        <path id="s01" className="s0" d="m0 155.5h200v15h-200z"/>
                        <path id="s02" className="s0" d="m0 77.5h200v15h-200z"/>
                        <path id="s03" className="s0" d="m0-0.5h200v15h-200z"/>
                    </svg>
                </div>
            </div>
            <div className={`hidden md:flex w-screen justify-items-center justify-between text-xl p-1 px-2`}>
                {
                    links.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block text-align-center`}
                            >
                                <p className="block">{link.name}</p>
                            </Link>
                        );
                    })
                }
            </div>
        </nav>
    );
}