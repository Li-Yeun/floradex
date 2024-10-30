import Image from 'next/image';

import { Libre_Franklin, Baloo_Bhaijaan_2 } from 'next/font/google';
import QualityBar from './QualityBar';

const libre_Franklin = Libre_Franklin({ subsets: ['latin'], weight: '900' });
const baloo_Bhaijaan_2 = Baloo_Bhaijaan_2({
  subsets: ['latin'],
  weight: '800',
});

export default function FlowerCaptureImage(props: {
  MAX_WIDTH: number;
  MAX_HEIGHT: number;
}) {
  return (
    <div className='relative w-full max-w-full'>
      <div
        style={{ height: `${props.MAX_HEIGHT}px` }}
        className='absolute w-full max-w-full'
      >
        <Image
          src='/images/test/tullip.png'
          layout='fill'
          alt='capture logo'
          className='z-[0] justify-self-center object-cover blur-xl'
        ></Image>
      </div>

      <div className='black-gradient absolute z-10 h-[16rem] max-h-[20%] w-full'></div>

      <div
        style={{
          maxWidth: `${props.MAX_WIDTH}px`,
          maxHeight: `${props.MAX_HEIGHT}px`,
          aspectRatio: `${props.MAX_WIDTH}/${props.MAX_HEIGHT}`,
        }}
        className='relative mx-auto'
      >
        <Image
          src='/images/test/tullip.png'
          layout='intrinsic' // Keeps height based on image’s dimensions
          width={props.MAX_WIDTH} // Set the image width here
          height={props.MAX_HEIGHT} // Set the image height here
          alt='capture logo'
          className='z-[0] justify-self-center bg-gray-500 bg-opacity-10 bg-clip-padding object-contain object-top backdrop-blur backdrop-contrast-100 backdrop-saturate-100 backdrop-filter'
        ></Image>

        <div className='absolute top-0 ml-[.8rem] mt-[1.5rem] w-[7rem] max-w-[35%]'>
          <QualityBar />
        </div>

        <div
          className={`absolute right-0 top-0 z-[10] mr-[.7rem] mt-[3rem] text-center text-[2rem] leading-6 drop-shadow-[0px_2px_1px_rgba(0,0,0,.5)]`}
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
      </div>
    </div>
  );
}
