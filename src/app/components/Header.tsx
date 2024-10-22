import Image from 'next/image';

function Header() {
  return (
    <div className='h-full touch-none overscroll-none'>
      <div className='border-container fixed -mt-[65vw] aspect-[751/501] w-full'>
        <Image
          src='/images/header-background.png'
          alt='header background'
          layout='fill'
          className='-z-20'
        ></Image>
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
