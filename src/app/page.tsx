import Image from 'next/image';

import { Domine } from 'next/font/google';
const domine = Domine({ subsets: ['latin'] });

import './globals.css';
import { useEffect } from 'react';

export default function Home() {
  return (
    <div className='bg-floragreen relative box-border flex max-h-[100%] flex-1 border-red-500 pt-10'>
      <div className='grid flex-1 grid-cols-12 grid-rows-12'>
        <div className='relative col-span-12 row-span-4 row-start-1 border-[0px] border-red-600'>
          <div>
            <Image
              src='/images/logo-grass.png'
              alt='header background'
              layout='fill'
              className='col object-fill opacity-[26%]'
            ></Image>

            <Image
              src='/images/logo-text.png'
              alt='header background'
              layout='fill'
              className='col object-contain px-[10%] opacity-80'
            ></Image>

            <Image
              src='/images/logo-mini-flower.png'
              alt='header background'
              layout='fill'
              className='absolute translate-x-[-20%] translate-y-[-35%] scale-75 object-contain px-[10%]'
            ></Image>
          </div>
        </div>

        <div className='relative col-span-12 row-span-3 row-start-5 border-[0px] border-blue-600'>
          <Image
            src='/images/logo.png'
            alt='header background'
            layout='fill'
            className='col scale-90 object-contain opacity-[26%]'
          ></Image>
        </div>

        <div className='relative col-span-12 row-span-3 row-start-9 flex flex-col items-center justify-center gap-5 border-[0px] border-blue-600'>
          <button
            className={`title-button ${domine.className} w-[20rem] max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap rounded-3xl bg-[rgba(0,0,0,.78)] text-[200%] text-white`}
          >
            login
          </button>

          <button
            className={`title-button ${domine.className} w-[20rem] max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap rounded-3xl bg-white text-[200%] text-black`}
          >
            scan
          </button>
        </div>
      </div>
    </div>
  );
}
