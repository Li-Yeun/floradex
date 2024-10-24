import Flowercard from '@/app/components/Flowercard';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <Image
        src='/images/logo.png'
        layout='fill'
        alt='capture logo'
        className='pointer-events-none scale-90 object-scale-down opacity-5'
      ></Image>

      <div className='flex flex-col items-center justify-center bg-white pt-[3rem]'>
        <input
          type='text'
          placeholder='search for ...'
          className='z-0 mt-[2rem] h-[2.5rem] w-[18rem] max-w-[80%] rounded-[20px] border-[1px] border-[#B5B5B5] pl-4'
        />

        <div className='z-0 mb-32 mt-[2rem] flex w-[40rem] max-w-[90%] flex-col items-center justify-center gap-5'>
          <Flowercard />

          <Flowercard />
          <Flowercard />
        </div>
      </div>
    </>
  );
}
