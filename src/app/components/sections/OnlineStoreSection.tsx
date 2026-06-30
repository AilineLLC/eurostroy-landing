import Image from 'next/image';

import { ArrowButton } from '@/app/components/ui/arrow-button';
import { SHOP_URL } from '@/app/lib/constants/shop';

export const OnlineStoreSection = () => {
  const features = [
    {
      title: 'Удобный каталог',
      icon: '/main-page/catalog.svg',
    },
    {
      title: 'Фильтры',
      icon: '/main-page/setting-4.svg',
    },
    {
      title: 'Наличие',
      icon: '/main-page/tick-circle.svg',
    },
    {
      title: 'Доставка',
      icon: '/main-page/truck-blue.svg',
    },
  ];

  return (
    <section className='container'>
      <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[32px] overflow-hidden'>
        {/* Фон на всю секцию */}
        <Image
          src='/main-page/bg-partner.png'
          alt=''
          fill
          className='object-cover'
          priority={false}
        />

        {/* Левая часть */}
        <div className='relative z-10 min-h-[420px] lg:min-h-[600px] flex flex-col justify-between p-5 md:p-7'>
          <div className='flex flex-col h-full justify-center'>
            {/* Заголовки */}
            <div className='mb-6 md:mb-10'>
              <h3 className='text-white text-2xl md:text-[42px] leading-tight mb-3 md:mb-4 font-semibold'>
                Наш интернет-магазин
              </h3>
              <p className='text-white text-sm md:text-base'>
                5 000+ наименований в одном пространстве
              </p>
            </div>

            {/* Кнопки с иконками */}
            <div className='flex flex-wrap gap-2 md:gap-4'>
              {features.map((feature) => (
                <button
                  key={feature.title}
                  className='bg-white rounded-lg px-3 py-2 flex items-center gap-2 md:gap-3'
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className='flex-shrink-0 w-5 h-5 md:w-6 md:h-6'
                  />
                  <span className='text-[#0B0B0B] text-sm md:text-base font-medium text-left whitespace-nowrap'>
                    {feature.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Кнопка "Перейти в магазин" */}
            <div className='mt-6 md:mt-16'>
              <ArrowButton href={SHOP_URL}>
                Перейти в магазин
              </ArrowButton>
            </div>
          </div>
        </div>

        {/* Правая часть с изображением магазина — скрыта на мобильных */}
        <div className='hidden lg:flex relative z-10 min-h-[600px] items-center justify-center pr-7'>
          <div className='relative w-full h-full max-w-full'>
            <Image
              src='/main-page/shop.png'
              alt='Интернет-магазин'
              fill
              className='object-contain'
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

