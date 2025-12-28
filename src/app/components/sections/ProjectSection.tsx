import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/app/components/ui/button';

export const ProjectSection = () => {
  return (
    <section className='relative w-full h-[420px] mt-[150px]'>
      {/* Фон без контейнера */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/main-page/bg-project.png'
          alt=''
          fill
          className='object-cover'
          priority={false}
        />
      </div>

      {/* Изображение справа - как фон */}
      <div className='absolute right-[125px] -bottom-20 z-0 flex items-center justify-end pointer-events-none'>
        <div className='relative'>
          <Image
            src='/main-page/project-man.png'
            alt='Строитель'
            width={538}
            height={632}
            className='object-contain object-right'
            priority={false}
          />
        </div>
      </div>

      {/* Контент в контейнере */}
      <div className='container relative z-30 h-full'>
        <div className='h-full flex items-center'>
          {/* Левая часть - текст и кнопки */}
          <div className='flex flex-col justify-center text-white py-8 gap-5'>
            <h3 className='text-2xl md:text-4xl lg:text-[42px] leading-tight'>
              Начните ваш проект вместе с нами
            </h3>
            <p className='text-base leading-relaxed m-0'>
              Оставьте заявку — поможем с выбором материалов, рассчитаем объёмы и предложим оптимальные решения под ваш бюджет и сроки
            </p>
            <div className='flex flex-col sm:flex-row gap-7'>
              <Button
                asChild
                className='bg-[#015BFF] text-white hover:bg-[#0146CC] rounded-lg px-6 py-8 text-base md:text-xl'
              >
                <Link href='/contacts'>Оставить заявку</Link>
              </Button>
              <Button
                asChild
                variant='outline'
                className='bg-white text-[#015BFF] border-[#015BFF] hover:text-[#015BFF] rounded-lg px-6 py-8 text-base md:text-xl'
              >
                <Link href='/categories'>Перейти в магазин</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

