import { redirect } from 'next/navigation';
import { Anek_Kannada } from 'next/font/google';
import Image from 'next/image';

const anek_Kannada = Anek_Kannada({ subsets: ['latin'] });

export default function Footer() {
  return (
    <div className='logos-container grid h-full grid-cols-5 grid-rows-6'>
      <div className='pointer-events-none col-span-5 col-start-1 row-start-1 h-[50%] bg-gradient-to-b from-slate-400'>
        <Image
          src='/images/Footer/camera-mask.png'
          layout='fill'
          alt='capture logo'
          className='z-[2] mx-auto max-w-[25%] translate-y-[-47%] scale-[110%] object-contain'
        ></Image>

        <Image
          src='/images/Footer/camera.png'
          layout='fill'
          alt='capture logo'
          className='z-20 mx-auto max-w-[25%] translate-y-[-45%] object-contain'
        ></Image>
      </div>

      <div
        onClick={async () => {
          'use server';
          redirect('/capture');
        }}
        className='z-[1] col-span-1 col-start-1 row-span-full select-none transition-colors hover:bg-[hsla(324,98%,40%,0.12)]'
      ></div>

      <div className='relative col-span-1 col-start-1 row-span-3 row-start-2'>
        <Image
          src='/images/Footer/icon-capture.svg'
          layout='fill'
          alt='capture logo'
          className='scale-[85%] object-contain opacity-85'
        ></Image>
      </div>

      <div
        className={`${anek_Kannada.className} relative col-span-1 col-start-1 row-span-2 row-start-5 self-center text-center text-[#8C7A7A]`}
      >
        Capture
      </div>

      <div
        onClick={async () => {
          'use server';
          redirect('/scans');
        }}
        className='z-[1] col-span-1 col-start-2 row-span-full select-none transition-colors hover:bg-[hsla(324,98%,40%,0.12)]'
      ></div>

      <div className='relative col-span-1 col-start-2 row-span-3 row-start-2'>
        <Image
          src='/images/Footer/icon-scans.svg'
          layout='fill'
          alt='capture logo'
          className='scale-[85%]object-contain opacity-85'
        ></Image>
      </div>

      <div
        className={`${anek_Kannada.className} relative col-span-1 col-start-2 row-span-2 row-start-5 self-center text-center text-[#8C7A7A]`}
      >
        Scans
      </div>

      <div
        onClick={async () => {
          'use server';
          redirect('/stats');
        }}
        className='z-[1] col-span-1 col-start-4 row-span-full select-none transition-colors hover:bg-[hsla(324,98%,40%,0.12)]'
      ></div>

      <div className='relative col-span-1 col-start-4 row-span-3 row-start-2'>
        <Image
          src='/images/Footer/icon-stats.svg'
          layout='fill'
          alt='capture logo'
          className='scale-[85%] object-contain opacity-85'
        ></Image>
      </div>

      <div
        className={`${anek_Kannada.className} relative col-span-1 col-start-4 row-span-2 row-start-5 self-center text-center text-[#8C7A7A]`}
      >
        Stats
      </div>

      <div
        onClick={async () => {
          'use server';
          redirect('/profile');
        }}
        className='z-[1] col-span-1 col-start-5 row-span-full select-none transition-colors hover:bg-[hsla(324,98%,40%,0.12)]'
      ></div>

      <div className='relative col-span-1 col-start-5 row-span-3 row-start-2'>
        <Image
          src='/images/Footer/icon-profile.svg'
          layout='fill'
          alt='capture logo'
          className='scale-[85%] object-contain opacity-80'
        ></Image>
      </div>

      <div
        className={`${anek_Kannada.className} relative col-span-1 col-start-5 row-span-2 row-start-5 self-center text-center text-[#8C7A7A]`}
      >
        Profile
      </div>

      {/* <div className='relative col-span-1 col-start-3 row-span-5 row-start-2'>
            <Image
              src='/images/Footer/camera.png'
              layout='fill'
              alt='capture logo'
              className='translate-y-[-50%] scale-110 object-contain'
            ></Image>
          </div> */}
    </div>
  );
}
