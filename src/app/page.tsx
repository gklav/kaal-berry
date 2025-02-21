import Image from 'next/image';
import bandPic from '../../public/assets/kb-round-300.webp';

export default function Home() {

  return (
      <main className={`flex flex-col w-full justify-center items-center mt-40`}>
          
          <h1 className={`text-3xl md:hidden`}>Kaal Berry</h1>
          
          <Image src={bandPic} alt={`Kaal Berry`} loading={`lazy`} width={300} quality={100} className={`py-10 md:pt-0`} />

      </main>
  );
}
