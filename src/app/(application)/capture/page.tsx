import Image from 'next/image';

import {
  Libre_Franklin,
  Baloo_Bhaijaan_2,
  ABeeZee,
  Grenze_Gotisch,
} from 'next/font/google';
import FlowerDetailsCard from '@/app/components/FlowerDetailsCard';

const libre_Franklin = Libre_Franklin({ subsets: ['latin'], weight: '900' });
const baloo_Bhaijaan_2 = Baloo_Bhaijaan_2({
  subsets: ['latin'],
  weight: '800',
});

export default function CapturePage() {
  // Container Size
  const MAX_WIDTH = 800;
  const MAX_HEIGHT = 1024;
  //Progress Bar
  const temparture = (value: number) => {
    if (value <= 20) {
      return 'filled:bg-red-500';
    } else if (value <= 40) {
      return `filled:animate-[orange_2s_ease-out] filled:bg-orange-500`;
    } else if (value <= 60) {
      return 'filled:animate-[yellow_2s_ease-out] filled:bg-yellow-500';
    } else if (value <= 80) {
      return 'filled:animate-[lime_2s_ease-out] filled:bg-lime-500';
    } else {
      return 'filled:animate-[green_2s_ease-out] filled:bg-green-500';
    }
  };
  const progress_value = 80;

  //Page Content
  const title = 'Rosea Tullips';

  return (
    <>
      <div className='black-gradient absolute z-10 h-[16rem] max-h-[20%] w-full'></div>

      <div
        style={{ height: `${MAX_HEIGHT}px` }}
        className='absolute w-full max-w-full'
      >
        <Image
          src='/images/test/tullip.png'
          layout='fill'
          alt='capture logo'
          className='z-[0] justify-self-center object-cover blur-xl'
        ></Image>
      </div>

      <div className='relative w-full max-w-full'>
        <Image
          src='/images/test/tullip.png'
          layout='intrinsic' // Keeps height based on image’s dimensions
          width={MAX_WIDTH} // Set the image width here
          height={MAX_HEIGHT} // Set the image height here
          alt='capture logo'
          className='z-[0] justify-self-center bg-gray-500 bg-opacity-10 bg-clip-padding object-contain object-top backdrop-blur backdrop-contrast-100 backdrop-saturate-100 backdrop-filter'
        ></Image>
      </div>

      <div className='absolute top-0 ml-[3%] mt-[8%] flex w-[7rem] max-w-[35%] flex-col'>
        <div className='z-[100] flex aspect-[8/2] flex-col items-center justify-center rounded-full border-black bg-white'>
          <div className='h-[65%] w-[90%] drop-shadow-[0px_2px_1px_rgba(0,0,0,.5)]'>
            {/* <div className='h-full w-[100%] rounded-full bg-[#ff0000] drop-shadow-[0px_2px_1px_rgba(0,0,0,.3)]'></div> */}
            <progress
              value={progress_value}
              max={100}
              className={`${temparture(progress_value)} h-full w-full animate-[size_2s_ease-out] appearance-none rounded-full align-top filled:rounded-full unfilled:rounded-full unfilled:bg-[#ff000000]`}
            ></progress>
          </div>
        </div>
        <span
          className={`${baloo_Bhaijaan_2.className} z-[10] self-center justify-self-center text-center text-[1.2rem] text-white`}
        >
          quality {progress_value}%
        </span>
      </div>

      <div
        className={`absolute right-0 top-0 z-[10] mr-[3%] mt-[12%] text-center text-[2rem] leading-6 drop-shadow-[0px_2px_1px_rgba(0,0,0,.5)]`}
      >
        <span
          className={`btn-shine new-gradient ${libre_Franklin.className} drop-shadow-[0px_2px_1px_rgba(0,0,0,.1)]`}
        >
          NEW
        </span>
        <br />
        <span
          className={`${baloo_Bhaijaan_2.className} text-[.6em] tracking-wide text-white`}
        >
          Nr#001
        </span>
      </div>

      <div
        style={{ maxWidth: `min(${MAX_WIDTH}px, 100%)` }}
        className='relative z-20 mt-[-2rem] flex-1 justify-self-center'
      >
        <FlowerDetailsCard title={title} />
      </div>
    </>
  );
}
