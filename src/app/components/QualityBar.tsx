import { Baloo_Bhaijaan_2 } from 'next/font/google';

const baloo_Bhaijaan_2 = Baloo_Bhaijaan_2({
  subsets: ['latin'],
  weight: '800',
});

export default function QualityBar() {
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

  return (
    <div className='flex w-full flex-col'>
      <div className='z-[10] flex aspect-[8/2] flex-col items-center justify-center rounded-full border-black bg-white'>
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
  );
}
