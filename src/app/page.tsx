import Image from 'next/image';
import bandPic from '../../public/assets/kb-round.webp';
import NewsletterForm from '@/app/ui/newsletter-form';

export default function Home() {

    return (
        <main className={`flex flex-col w-full justify-center items-center mt-20`}>

            <h1 className={`text-3xl md:hidden pb-10`}>Kaal Berry</h1>

            <Image
                src={bandPic}
                alt={`Kaal Berry`}
                quality={100}
                loading={`lazy`}
                className={`w-[300px] rounded-full`}
                placeholder={`blur`}
            />

            <div className="flex gap-4 pt-10">
                <a target="_blank" href="https://www.instagram.com/kaalberry/" aria-label="Kaal Berry on Instagram">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                         className="w-10 h-10 hover:fill-red"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                </a>
                <a target="_blank" href="https://www.youtube.com/@kaalberry" aria-label="Kaal Berry on Youtube">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512"
                         className="w-10 h-10 hover:fill-red"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                </a>
                <a target="_blank" href="https://www.tiktok.com/@kaalberry" aria-label="Kaal Berry on TikTok">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                         className="w-10 h-10 hover:fill-red"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                    </svg>
                </a>
            </div>

            <NewsletterForm/>
        </main>
    );
}
