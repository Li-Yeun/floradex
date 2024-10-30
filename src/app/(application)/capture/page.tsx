import Image from 'next/image';

import { Libre_Franklin, Baloo_Bhaijaan_2 } from 'next/font/google';
import FlowerDetailsCard from '@/app/components/FlowerDetailsCard';
import FlowerCaptureImage from '@/app/components/FlowerCaptureImage';

const libre_Franklin = Libre_Franklin({ subsets: ['latin'], weight: '900' });
const baloo_Bhaijaan_2 = Baloo_Bhaijaan_2({
  subsets: ['latin'],
  weight: '800',
});

export default function CapturePage() {
  // Container Size
  const MAX_WIDTH = 800;
  const MAX_HEIGHT = 1024;

  //Page Content
  const title = 'Rosea Tullips';

  return (
    <>
      <div>
        <FlowerCaptureImage MAX_WIDTH={MAX_WIDTH} MAX_HEIGHT={MAX_HEIGHT} />
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
