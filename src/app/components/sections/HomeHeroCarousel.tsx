'use client';

import Image from 'next/image';
import * as React from 'react';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/app/components/ui/carousel';
import { ArrowButton } from '@/app/components/ui/arrow-button';
import { SHOP_URL } from '@/app/lib/constants/shop';

type Slide = {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
};

const pad2 = (n: number) => String(n).padStart(2, '0');

export const HomeHeroCarousel = () => {
  const slides: Slide[] = [
    {
      id: 'slide-1',
      imageSrc: '/main-page/home-banner.jpg',
      title: 'Ваш надежный поставщик строительных материалов',
      description:
        'Мы знаем всё о строительных материалах и поставках. Работаем стабильно и точно, чтобы вы получали нужное — вовремя и без лишних хлопот. Подходим к каждому проекту с вниманием, независимо от его масштаба',
      ctaHref: SHOP_URL,
      ctaLabel: 'Посмотреть каталог',
    },
    {
      id: 'slide-2',
      imageSrc: '/main-page/home-banner.jpg',
      title: 'Ваш надежный поставщик строительных материалов',
      description:
        'Мы знаем всё о строительных материалах и поставках. Работаем стабильно и точно, чтобы вы получали нужное — вовремя и без лишних хлопот. Подходим к каждому проекту с вниманием, независимо от его масштаба',
      ctaHref: SHOP_URL,
      ctaLabel: 'Посмотреть каталог',
    },
    {
      id: 'slide-3',
      imageSrc: '/main-page/home-banner.jpg',
      title: 'Ваш надежный поставщик строительных материалов',
      description:
        'Мы знаем всё о строительных материалах и поставках. Работаем стабильно и точно, чтобы вы получали нужное — вовремя и без лишних хлопот. Подходим к каждому проекту с вниманием, независимо от его масштаба',
      ctaHref: SHOP_URL,
      ctaLabel: 'Посмотреть каталог',
    },
  ];

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

  React.useEffect(() => {
    if (!api || count <= 1 || typeof window === 'undefined') return;

    const interval = window.setInterval(() => {
      const nextIndex = (current + 1) % count;
      api.scrollTo(nextIndex);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [api, current, count]);

  const progressPercent = count > 1 ? ((current + 1) / count) * 100 : 100;

  return (
    <div className='relative w-full overflow-hidden rounded-[28px] bg-gray-100'>
      <Carousel
        setApi={setApi}
        className='w-full'
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className='h-full'>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className='h-full'>
              <div className='relative h-[820px] w-full overflow-hidden rounded-[28px]'>
                <Image
                  src={slide.imageSrc}
                  alt='Баннер'
                  fill
                  className='object-cover'
                  priority={index === 0}
                />

                {/* Затемнение/градиент слева, как в макете */}
                <div className='absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent' />

                {/* Контент */}
                <div className='absolute inset-0 px-6 py-10 md:px-12 md:py-14'>
                  <div className='flex h-full flex-col justify-center'>
                    <div className='max-w-[620px]'>
                      <h1 className='whitespace-pre-line text-white font-semibold leading-[1.05] text-[34px] lg:text-[42px]'>
                        {slide.title}
                      </h1>

                      <p className='mt-5 whitespace-pre-line text-white/85 text-[12px] md:text-[13px] leading-relaxed max-w-[520px]'>
                        {slide.description}
                      </p>

                      <div className='mt-7'>
                        <ArrowButton href={slide.ctaHref}>
                          {slide.ctaLabel}
                        </ArrowButton>
                      </div>
                    </div>
                  </div>

                  {/* Карточки справа снизу */}
                  <div className='absolute bottom-10 right-10 hidden lg:flex items-end gap-5'>
                    <div className='flex h-[115px] w-[340px] items-center gap-4 rounded-2xl border border-[#CBCBCB] bg-white/20 p-3 backdrop-blur-md'>
                      <div className='flex h-20 w-20 items-center justify-center rounded-2xl border border-[#E6EFFF] bg-white/10'>
                        <Image
                          src='/main-page/medal-star.svg'
                          alt=''
                          width={35}
                          height={35}
                          className='h-[35px] w-[35px]'
                        />
                      </div>
                      <div className='min-w-0'>
                        <div className='text-white font-semibold text-[20px] leading-none'>
                          10 лет
                        </div>
                        <div className='mt-2 text-white/85 text-[16px] leading-snug'>
                          опыта в поставках
                          <br />
                          строительных материалов
                        </div>
                      </div>
                    </div>

                    <div className='flex h-[115px] w-[510px] items-center gap-4 rounded-2xl border border-[#CBCBCB] bg-white/20 p-3 backdrop-blur-md'>
                      <div className='flex h-20 w-20 items-center justify-center rounded-2xl border border-[#E6EFFF] bg-white/10'>
                        <Image
                          src='/main-page/verify.svg'
                          alt=''
                          width={35}
                          height={35}
                          className='h-[35px] w-[35px]'
                        />
                      </div>
                      <div className='min-w-0'>
                        <div className='text-white font-semibold text-[20px] leading-none'>
                          Охват
                        </div>
                        <div className='mt-2 text-white/85 text-[16px] leading-snug'>
                          Работаем по всей стране — от частных объектов
                          <br />
                          до масштабных строительных проектов
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Индикатор 01 — 03 слева снизу */}
                  <div className='absolute bottom-10 left-10 hidden md:flex items-center gap-4'>
                    <span className='text-white/90 text-base font-medium'>
                      {pad2(current + 1)}
                    </span>
                    <div className='relative h-[2px] w-[240px] bg-white/35 rounded-full overflow-hidden'>
                      <div
                        className='absolute left-0 top-0 h-full bg-white rounded-full'
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span className='text-white/70 text-base font-medium'>
                      {pad2(count)}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

