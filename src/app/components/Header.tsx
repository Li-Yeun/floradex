import Image from 'next/image';

function Header() {
  return (
    <div className='h-full'>
      <div className='relative aspect-[751/501] h-full w-full'>
        <Image
          src='/images/header-background.png'
          alt='header background'
          layout='fill'
          className='z-10 object-cover object-right-bottom'
        ></Image>

        <div className='relative flex h-full w-full justify-end'>
          <div className='absolute bottom-[10%] right-[3%] aspect-square h-auto w-[20%]'>
            <Image
              src='/images/header-camera.png'
              alt='header background'
              layout='fill'
              className='z-20 object-contain'
            ></Image>
          </div>
        </div>

        <div className='relative aspect-[390/62]'>
          <Image
            src='/images/header-balk.svg'
            alt='header background'
            layout='fill'
            className='oject-contain z-30 translate-y-[-40%]'
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Header;
