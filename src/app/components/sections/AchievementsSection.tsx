'use client';

import Image from 'next/image';
import * as React from 'react';

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel';
import { SectionHeading } from '@/app/components/ui/section-heading';
import { cn } from '@/app/lib/utils';

import CheckIcon from '@/app/assets/icons/Vector.svg';

type Slide = {
  id: string;
  imageSrc: string;
  imageAlt: string;
};

const slides: Slide[] = Array.from({ length: 9 }, (_, index) => ({
  id: `certificate-${index + 1}`,
  imageSrc: '/main-page/certificate.jpg',
  imageAlt: 'Сертификат',
}));

const Bullet = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className='flex items-start gap-3'>
      <span className='mt-0.5 flex h-4 w-4 items-center justify-center'>
        <CheckIcon className='h-4 w-4' />
      </span>
      <span className='text-black text-base leading-relaxed'>
        {children}
      </span>
    </li>
  );
};

const InfoCard = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col rounded-[32px] bg-[#F8F8F8] px-6 py-7 md:px-7 md:py-8 justify-between',
        className
      )}
    >
      <div className='text-black text-[20px] md:text-[24px] leading-tight whitespace-pre-line'>
        {title}
      </div>
      <div className='mt-4 text-black text-sm md:text-base leading-relaxed whitespace-pre-line'>
        {description}
      </div>
    </div>
  );
};

export const AchievementsSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(slides.length);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section className='container py-15 md:py-25'>
      <SectionHeading as='h3'>
        Наши достижения
      </SectionHeading>

      <div className='mt-8 grid grid-cols-1 xl:grid-cols-[375px_1fr_375px] gap-6 items-stretch'>
        {/* Левая колонка */}
        <div className='flex flex-col justify-between h-full'>
          <div className='space-y-6'>
            <div className='mb-10'>
              <div className='text-black text-xl leading-tight'>
                Экологичные материалы
              </div>
              <p className='mt-4 text-black text-base leading-relaxed max-w-[520px]'>
                Мы предлагаем строительные решения, безопасные для человека и
                окружающей среды. Все материалы проходят проверку на соответствие
                экологическим стандартам и не содержат вредных примесей. Строить
                можно не только качественно, но и с заботой о будущем.
              </p>
            </div>

            <ul className='space-y-3'>
              <Bullet>Безопасность для здоровья</Bullet>
              <Bullet>Экологическая сертификация</Bullet>
              <Bullet>Поддержка зелёного строительства</Bullet>
            </ul>
          </div>

          <div className='rounded-[32px] bg-[#F8F8F8] px-6 py-6 md:px-5 md:py-6'>
            <div className='flex items-start justify-between gap-6'>
              <div>
                <div className='text-black font-semibold text-[20px] md:text-[24px] mb-4 leading-tight'>
                  ISO 14001
                </div>
                <Image
                  src='/main-page/standart-icon.png'
                  alt='ISO 14001'
                  width={72}
                  height={72}
                  className='h-[56px] w-[56px] md:h-[64px] md:w-[64px] shrink-0'
                />
                <div className='mt-4 text-black text-[14px] md:text-base leading-relaxed max-w-[320px]'>
                  Международный стандарт экологического менеджмента
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Центр: сертификат (карусель) */}
        <div className='relative flex items-center justify-center'>
          <Carousel
            setApi={setApi}
            className='w-full'
            opts={{
              loop: true,
              align: 'center',
            }}
          >
            <div className='flex items-center justify-center'>
              <CarouselPrevious
                variant='ghost'
                className={cn(
                  'bg-white text-black hover:bg-white/90 shadow-md border-0 rounded-full z-20 w-15 h-15',
                  'relative left-auto right-auto translate-x-0 translate-y-0 flex-shrink-0'
                )}
                size='icon'
                iconClassName='!w-7 !h-7'
              />
              <div className='w-[510px] flex-shrink-0 mx-4'>
                <div className='rounded-[32px] bg-brand-secondary p-6 md:p-8'>
                  <CarouselContent className='-ml-4'>
                    {slides.map((slide, index) => (
                      <CarouselItem key={slide.id} className='pl-4'>
                        <div className='relative mx-auto w-full'>
                          <div className='rounded-[28px] bg-white p-4 md:p-5'>
                            <div className='relative h-[520px] md:h-[610px] w-full overflow-hidden rounded-[22px]'>
                              <Image
                                src={slide.imageSrc}
                                alt={slide.imageAlt}
                                fill
                                className='object-cover'
                                sizes='510px'
                                priority={index === 0}
                              />
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Точки */}
                  <div className='mt-6 flex items-center justify-center gap-2'>
                    {Array.from({ length: count }).map((_, idx) => {
                      const isActive = idx === current;
                      return (
                        <button
                          key={`dot-${idx}`}
                          type='button'
                          aria-label={`Перейти к слайду ${idx + 1}`}
                          className={cn(
                            'h-[10px] w-[10px] rounded-full transition-colors',
                            isActive ? 'bg-[#015BFF]' : 'bg-white/70 hover:bg-white'
                          )}
                          onClick={() => api?.scrollTo(idx)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <CarouselNext
                variant='ghost'
                className={cn(
                  'bg-white text-black hover:bg-white/90 shadow-md border-0 rounded-full z-20 w-15 h-15',
                  'relative left-auto right-auto translate-x-0 translate-y-0 flex-shrink-0'
                )}
                size='icon'
                iconClassName='!w-7 !h-7'
              />
            </div>
          </Carousel>
        </div>

        {/* Правая колонка */}
        <div className='flex flex-col h-full gap-6'>
          <InfoCard
            title='3 сертификата ISO'
            description='Международные стандарты качества, экологии и безопасности.'
            className='flex-1'
          />
          <InfoCard
            title={'100% продукции\nсоответствует ГОСТ'}
            description='Вся продукция соответствует требованиям государственных норм.'
            className='flex-1'
          />
          <InfoCard
            title={'12 лет работы по\nстандартам сертификации'}
            description='Работаем по стандартам ISO и ГОСТ с 2012 года.'
            className='flex-1'
          />
        </div>
      </div>
    </section>
  );
};

