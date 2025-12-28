'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel';
import { cn } from '@/app/lib/utils';

type PartnerCard = {
  id: string;
  title: string;
  description: string;
  href: string;
};

const partners: PartnerCard[] = [
  {
    id: 'arbiton-1',
    title: 'Партнёр Arbiton',
    description:
      'Современные решения для полов, подложек и отделки. Стильно, надёжно, удобно.',
    href: '/contacts',
  },
  {
    id: 'arbiton-2',
    title: 'Партнёр Arbiton',
    description:
      'Современные решения для полов, подложек и отделки. Стильно, надёжно, удобно.',
    href: '/contacts',
  },
  {
    id: 'arbiton-3',
    title: 'Партнёр Arbiton',
    description:
      'Современные решения для полов, подложек и отделки. Стильно, надёжно, удобно.',
    href: '/contacts',
  },
  {
    id: 'arbiton-4',
    title: 'Партнёр Arbiton',
    description:
      'Современные решения для полов, подложек и отделки. Стильно, надёжно, удобно.',
    href: '/contacts',
  },
  {
    id: 'arbiton-5',
    title: 'Партнёр Arbiton',
    description:
      'Современные решения для полов, подложек и отделки. Стильно, надёжно, удобно.',
    href: '/contacts',
  },
];

const getLoopDistance = (index: number, current: number, count: number) => {
  const diff = Math.abs(index - current);
  return Math.min(diff, count - diff);
};

export const PartnersCarouselSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(partners.length);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    const onSettle = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    api.on('settle', onSettle);

    return () => {
      api.off('select', onSelect);
      api.off('settle', onSettle);
    };
  }, [api]);

  const progressPercent = count > 1 ? ((current + 1) / count) * 100 : 100;

  return (
    <section className='container py-10 md:py-14'>
      <div className='relative'>
        <Carousel
          setApi={setApi}
          className='w-full'
          opts={{
            loop: true,
            align: 'center',
            duration: 25,
            watchDrag: true,
            watchSlides: true,
            skipSnaps: false,
            dragFree: false,
          }}
        >
          <CarouselContent className='py-1 -ml-4 [&>*]:will-change-transform'>
            {partners.map((partner, index) => {
              const distance = getLoopDistance(index, current, count);
              const isActive = distance === 0;

              const opacityClass = isActive
                ? 'opacity-100'
                : distance === 1
                  ? 'opacity-75'
                  : 'opacity-65';

              return (
                <CarouselItem
                  key={partner.id}
                  className={cn(
                    'basis-auto pl-4',
                    'flex items-center justify-center',
                    'transition-opacity duration-300 ease-out'
                  )}
                >
                  <div
                    className={cn(
                      'relative overflow-hidden rounded-[28px]',
                      'mx-auto',
                      'w-[510px] h-[510px]',
                      'transform-gpu transition-all duration-300 ease-out',
                      'will-change-transform',
                      opacityClass,
                      !isActive && 'scale-[0.804]'
                    )}
                    style={{
                      transformOrigin: 'center center',
                    }}
                  >
                    <Image
                      src='/main-page/partner-card.jpg'
                      alt=''
                      fill
                      className='object-cover'
                      sizes='(max-width: 640px) 88vw, (max-width: 1024px) 55vw, 36vw'
                      priority={index === 0}
                    />

                    {/* Затемнение/градиент для читаемости текста */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/5' />

                    {/* Лого бренда */}
                    <div className='absolute left-6 top-6'>
                      <div className='flex items-center justify-center rounded-full bg-white px-5 py-3'>
                        <Image
                          src='/main-page/partner-brand.png'
                          alt='Arbiton'
                          width={118}
                          height={32}
                          className='h-8 w-auto'
                        />
                      </div>
                    </div>

                    {/* Контент */}
                    <div className='absolute inset-x-0 bottom-0 p-6'>
                      <h3 className='text-white font-semibold text-[18px] md:text-[20px] leading-tight'>
                        {partner.title}
                      </h3>
                      <p className='mt-2 text-white/85 text-[12px] md:text-[13px] leading-relaxed max-w-[420px]'>
                        {partner.description}
                      </p>

                      <Link
                        href={partner.href}
                        className={cn(
                          'mt-5 inline-flex w-full items-center justify-center',
                          'rounded-full bg-[#015BFF] text-white',
                          'h-12 text-[14px] md:text-[15px] font-medium',
                          'hover:bg-[#0146CC] transition-colors'
                        )}
                      >
                        Узнать подробнее
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious
            variant='ghost'
            className='absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black hover:bg-white/90 shadow-md border-0 rounded-full z-20'
            size='icon-2xl'
            iconClassName='!w-7 !h-5'
          />
          <CarouselNext
            variant='ghost'
            className='absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white text-black hover:bg-white/90 shadow-md border-0 rounded-full z-20'
            size='icon-2xl'
            iconClassName='!w-7 !h-5'
          />
        </Carousel>

        {/* Прогресс-линиия как в макете */}
        <div className='mt-8 flex justify-center'>
          <div className='relative h-[3px] w-full max-w-[620px] rounded-full bg-[#DDE7FF] overflow-hidden'>
            <div
              className='absolute left-0 top-0 h-full rounded-full bg-[#015BFF]'
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
