import { Dongle } from 'next/font/google';
import Image from 'next/image';

const baloo_thambi_2 = Dongle({
  weight: '400',
  subsets: ['latin'],
});

export default function Flowercard() {
  return (
    <div className='grid h-24 w-full grid-cols-12 grid-rows-5 rounded-xl bg-gradient-to-br from-rose-300 to-red-600 p-2'>
      <h5
        className={`${baloo_thambi_2.className} z-[1] col-span-full col-start-1 row-span-1 row-start-1 self-center pl-1 pt-3 text-[1.5rem] text-[#00000063]`}
      >
        N<span>&#176;</span>001
      </h5>

      <h3 className='no-scrollbar z-[1] col-span-7 col-start-1 row-span-4 row-start-2 overflow-scroll pl-1 text-[1.3rem] text-white'>
        <b>Rosea Tullips</b>
      </h3>

      <div className='relative col-span-5 col-start-9 row-span-full row-start-1'>
        <Image
          src='/images/test/tullip.png'
          layout='fill'
          alt='capture logo'
          className='rounded-lg object-cover'
        ></Image>
      </div>

      <div className='relative col-span-4 col-start-4 row-span-5 row-start-1 opacity-15'>
        <Image
          src='/images/logo.png'
          layout='fill'
          alt='capture logo'
          className='rounded-lg object-contain'
        ></Image>
      </div>
    </div>
  );
}
