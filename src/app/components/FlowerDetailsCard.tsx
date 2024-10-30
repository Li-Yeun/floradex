import { ABeeZee, Grenze_Gotisch } from 'next/font/google';
const grenze_Gotisch = Grenze_Gotisch({ subsets: ['latin'], weight: '400' });

const aBeeZee = ABeeZee({ subsets: ['latin'], weight: '400' });

export default function FlowerDetailsCard(props: { title: string }) {
  return (
    <div
      className={`flex w-[100%] flex-col items-center rounded-[25px] border-[5px] border-x-[2px] border-[#0b0b0b33] bg-white`}
    >
      <div className='mt-[1.5rem] flex aspect-[8/2] w-[3rem] items-center justify-center rounded-[20px] bg-[#000000ba]'>
        <div className='h-[50%] w-[80%] rounded-[20px] bg-[#ffffff]'></div>
      </div>

      <div
        className={`${aBeeZee.className} no-overflow max-w-full px-[1rem] pb-[8rem] pt-[1.5rem]`}
      >
        <hr className='pb-[1.5rem]' />
        <div className='flex flex-col items-center justify-center'>
          <span
            className={`${grenze_Gotisch.className} max-w-full text-[4rem] leading-[4rem]`}
          >
            {props.title}
          </span>
        </div>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum
        totam iste voluptate similique repellat consectetur mollitia quis magni
        numquam, rerum tempore minus sequi, voluptatem accusamus natus deserunt
        doloribus non fugit aliquam perspiciatis corrupti. Eius saepe odit
        consequuntur rem dicta illo quam voluptatum, veritatis minus delectus ex
        natus repudiandae aliquid at, sapiente et totam alias, possimus in eaque
        itaque soluta pariatur non impedit! Asperiores necessitatibus sit nisi
        fugit. Fugiat vero ipsam dolor, illo maiores ipsa consequuntur dicta
        aperiam distinctio. Quas a, reprehenderit, inventore nihil error
        quaerat, culpa provident dolor praesentium perspiciatis corporis libero
        quam vitae! Aliquid modi autem magni dolorum, pariatur voluptas earum
        praesentium perspiciatis commodi facilis maxime distinctio impedit
        ratione, dicta explicabo. Veniam saepe, veritatis quos similique tenetur
        natus! Consequatur soluta voluptates, rem libero, illo officia et nam a
        impedit totam beatae odit reprehenderit. Consequatur libero quam ipsum
        eos officiis nisi ipsa iste numquam nemo dolore quas, accusantium natus
        ad aspernatur non porro quidem tempora odio culpa recusandae veritatis.
        Non cum nostrum adipisci enim voluptatibus veritatis doloremque nemo
        culpa tenetur maxime, eveniet assumenda quas perferendis? Quidem iste,
        pariatur voluptates inventore error itaque sunt, magnam deserunt quasi
        et totam animi repellat, amet tempore impedit odio laboriosam aut sit
        sequi nostrum.
        <hr className='mt-[2.5rem]' />
      </div>
    </div>
  );
}
