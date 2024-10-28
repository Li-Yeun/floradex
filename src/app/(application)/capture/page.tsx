import Image from 'next/image';

import {
  Libre_Franklin,
  Baloo_Bhaijaan_2,
  ABeeZee,
  Grenze_Gotisch,
} from 'next/font/google';

const libre_Franklin = Libre_Franklin({ subsets: ['latin'], weight: '900' });
const baloo_Bhaijaan_2 = Baloo_Bhaijaan_2({
  subsets: ['latin'],
  weight: '800',
});

const aBeeZee = ABeeZee({ subsets: ['latin'], weight: '400' });
const grenze_Gotisch = Grenze_Gotisch({ subsets: ['latin'], weight: '400' });

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

      <div
        style={{ maxWidth: `${MAX_WIDTH}px` }}
        className={`relative z-[30] mt-[-2rem] flex w-[100%] flex-1 flex-col items-center justify-self-center rounded-[25px] border-[5px] border-x-[2px] border-[#0b0b0b33] bg-white`}
      >
        <div className='mt-[1.5rem] flex aspect-[8/2] w-[3rem] items-center justify-center rounded-[20px] bg-[#000000ba]'>
          <div className='h-[50%] w-[80%] rounded-[20px] bg-[#ffffff]'></div>
        </div>

        <div
          className={`${aBeeZee.className} no-overflow max-w-full px-[1rem] pb-[8rem] pt-[1.5rem]`}
        >
          <hr className='pb-[2rem]' />
          <div className='tex- flex flex-col items-center justify-center'>
            <span
              className={`${grenze_Gotisch.className} max-w-full text-[4rem] leading-[3rem]`}
            >
              {title}
            </span>
          </div>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum
          totam iste voluptate similique repellat consectetur mollitia quis
          magni numquam, rerum tempore minus sequi, voluptatem accusamus natus
          deserunt doloribus non fugit aliquam perspiciatis corrupti. Eius saepe
          odit consequuntur rem dicta illo quam voluptatum, veritatis minus
          delectus ex natus repudiandae aliquid at, sapiente et totam alias,
          possimus in eaque itaque soluta pariatur non impedit! Asperiores
          necessitatibus sit nisi fugit. Fugiat vero ipsam dolor, illo maiores
          ipsa consequuntur dicta aperiam distinctio. Quas a, reprehenderit,
          inventore nihil error quaerat, culpa provident dolor praesentium
          perspiciatis corporis libero quam vitae! Aliquid modi autem magni
          dolorum, pariatur voluptas earum praesentium perspiciatis commodi
          facilis maxime distinctio impedit ratione, dicta explicabo. Veniam
          saepe, veritatis quos similique tenetur natus! Consequatur soluta
          voluptates, rem libero, illo officia et nam a impedit totam beatae
          odit reprehenderit. Consequatur libero quam ipsum eos officiis nisi
          ipsa iste numquam nemo dolore quas, accusantium natus ad aspernatur
          non porro quidem tempora odio culpa recusandae veritatis. Non cum
          nostrum adipisci enim voluptatibus veritatis doloremque nemo culpa
          tenetur maxime, eveniet assumenda quas perferendis? Quidem iste,
          pariatur voluptates inventore error itaque sunt, magnam deserunt quasi
          et totam animi repellat, amet tempore impedit odio laboriosam aut sit
          sequi nostrum.
          <hr className='mt-[2.5rem]' />
        </div>
      </div>

      <div className='absolute top-0 ml-[3%] mt-[8%] flex w-[7rem] max-w-[35%] flex-col'>
        <div className='z-[100] flex aspect-[8/2] flex-col items-center justify-center rounded-full border-black bg-white'>
          <div className='h-[65%] w-[90%] drop-shadow-[0px_2px_1px_rgba(0,0,0,.5)]'>
            {/* <div className='h-full w-[100%] rounded-full bg-[#ff0000] drop-shadow-[0px_2px_1px_rgba(0,0,0,.3)]'></div> */}
            <progress
              value={progress_value}
              max={100}
              className={`${temparture(progress_value)} filled:rounded-full unfilled:bg-[#ff000000] unfilled:rounded-full h-full w-full animate-[size_2s_ease-out] appearance-none rounded-full align-top`}
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
    </>
  );
}
