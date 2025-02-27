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
            href: '/contact',
            type: 'page',
        }
    ];

    const socials = [
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/kaalberry',
        },
        {
            name: 'YouTube',
            href: 'https://www.youtube.com/@kaalberry',
        },
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/kaalberry',
        },
        {
            name: 'TikTok',
            href: 'https://www.tiktok.com/@kaalberry',
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
                    </div>

                </div>
            </div>
            <div className={`md:hidden w-screen absolute flex justify-end z-10 p-2`}>
                <div onClick={handleClick}>
                    <svg version="1.2" viewBox="0 0 200 170" width="30"
                         className={`${isOpen ? `hidden` : `block`} fill-white`}>
                        <path id="s01" className="s0" d="m0 155.5h200v15h-200z"/>
                        <path id="s02" className="s0" d="m0 77.5h200v15h-200z"/>
                        <path id="s03" className="s0" d="m0-0.5h200v15h-200z"/>
                    </svg>
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="30"
                         className={`${isOpen ? `block` : `hidden`} fill-white`}>
                        <path id="s04" className="s0" d="m200 186l-14 14-186-186 14-14z"/>
                        <path id="s05" className="s0" d="m14 200l-14-14 186-186 14 14z"/>
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