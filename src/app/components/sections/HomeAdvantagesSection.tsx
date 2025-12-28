import Image from 'next/image';

import { SectionHeading } from '@/app/components/ui/section-heading';

type AdvantageCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  textColor: string;
};

const advantages: AdvantageCard[] = [
  {
    title: 'Качество по ГОСТ и международным стандартам',
    description:
      'Материалы соответствуют ГОСТ и международным требованиям безопасности и надёжности',
    imageSrc: '/main-page/GOST.png',
    imageAlt: 'ГОСТ и международные стандарты',
    bgColor: 'bg-[#015BFF]',
    textColor: 'text-white',
  },
  {
    title: 'Собственные инженерные решения и техподдержка',
    description:
      'Предлагаем готовые технические решения и профессиональную поддержку на каждом этапе.',
    imageSrc: '/main-page/plane.png',
    imageAlt: 'Инженерные решения и техподдержка',
    bgColor: 'bg-gradient-to-br from-[#E6EFFF] to-white',
    textColor: 'text-black',
  },
  {
    title: 'Прямые поставки от производителя',
    description:
      'Без посредников — по честным ценам и с гарантией стабильных объёмов.',
    imageSrc: '/main-page/cars.png',
    imageAlt: 'Прямые поставки от производителя',
    bgColor: 'bg-gradient-to-br from-[#E6EFFF] to-white',
    textColor: 'text-black',
  },
];

export const HomeAdvantagesSection = () => {
  return (
    <section className='container py-10 md:py-14'>
      <SectionHeading as='h3'>
        Преимущества
      </SectionHeading>

      <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Левая карточка - синяя */}
        <div
          className={`relative overflow-hidden rounded-[32px] ${advantages[0].bgColor} p-10 md:p-15 h-[550px] flex flex-col justify-between`}
        >
          <div className={`relative z-10 ${advantages[0].textColor} flex justify-center flex-col items-center`}>
            <h3 className='text-xl md:text-2xl leading-tight mb-4 text-center'>
              {advantages[0].title}
            </h3>
            <p className='text-base leading-relaxed opacity-90 text-center max-w-[450px]'>
              {advantages[0].description}
            </p>
          </div>

          <div className='absolute right-1/2 -bottom-[50px] w-[735px] h-[492px] opacity-90 translate-x-1/2'>
            <Image
              src={advantages[0].imageSrc}
              alt={advantages[0].imageAlt}
              width={250}
              height={250}
              className='object-contain w-full h-full'
              priority={false}
            />
          </div>
        </div>

        {/* Правая колонка - две карточки */}
        <div className='h-[550px] flex flex-col gap-6'>
          {/* Верхняя карточка */}
          <div
            className={`relative overflow-hidden rounded-[32px] ${advantages[1].bgColor} p-6 md:p-8 flex-1 flex flex-col justify-between`}
          >
            <div className={`relative z-10 ${advantages[1].textColor}`}>
              <h3 className='text-xl md:text-2xl leading-tight mb-4 max-w-[500px]'>
                {advantages[1].title}
              </h3>
              <p className='text-base leading-relaxed max-w-[400px]'>
                {advantages[1].description}
              </p>
            </div>

            <div className='absolute right-0 -bottom-[60px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] opacity-90'>
              <Image
                src={advantages[1].imageSrc}
                alt={advantages[1].imageAlt}
                width={370}
                height={370}
                className='object-contain w-full h-full'
                priority={false}
              />
            </div>
          </div>

          {/* Нижняя карточка */}
          <div
            className={`relative overflow-hidden rounded-[32px] ${advantages[2].bgColor} p-6 md:p-8 flex-1 flex flex-col justify-between`}
          >
            <div className={`relative z-10 ${advantages[2].textColor}`}>
              <h3 className='text-xl md:text-2xl leading-tight mb-4 max-w-[500px]'>
                {advantages[2].title}
              </h3>
              <p className='text-base leading-relaxed max-w-[400px]'>
                {advantages[2].description}
              </p>
            </div>

            <div className='absolute right-0 -bottom-[70px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] opacity-90'>
              <Image
                src={advantages[2].imageSrc}
                alt={advantages[2].imageAlt}
                width={350}
                height={350}
                className='object-contain w-full h-full'
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

