import Image from 'next/image';

function Header() {
  return (
    <div className='h-full'>
      <div className='border-container fixed -mt-[65vw] aspect-[751/501] w-full'>
        <Image
          src='/images/header-background.png'
          alt='header background'
          layout='fill'
          className='-z-20'
        ></Image>

        <div className='flex h-full w-full justify-end'>
          <div className='relative mr-[2%] aspect-square h-[100%] w-[22%]'>
            <Image
              src='/images/header-camera.png'
              alt='header background'
              layout='fill'
              className='z-10 translate-y-[27.5%] object-contain'
            ></Image>
          </div>
        </div>
      </div>

      <div className='border-container fixed -mt-[6vw] aspect-[390/62] w-full'>
        <Image
          src='/images/header-balk.svg'
          alt='header background'
          layout='fill'
          className='z-10'
        ></Image>
      </div>
    </div>
  );
}

export default Header;
