'use client';

import { Play } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel';
import { SectionHeading } from '@/app/components/ui/section-heading';

const videoThumbnails = [
  {
    id: 'best-1',
    image: '/main-page/best-1.jpg',
    alt: 'Видео превью 1',
  },
  {
    id: 'best-2',
    image: '/main-page/best-2.jpg',
    alt: 'Видео превью 2',
  },
  {
    id: 'best-1-duplicate',
    image: '/main-page/best-1.jpg',
    alt: 'Видео превью 1',
  },
  {
    id: 'best-2-duplicate',
    image: '/main-page/best-2.jpg',
    alt: 'Видео превью 2',
  },
];

export const BestChooseUsSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <section className='container pt-10 md:pt-30 pb-5 md:pb-15'>
      <SectionHeading as='h3'>
        Нас выбирают лучшие
      </SectionHeading>

      <div className='relative mt-8'>
        <Carousel
          setApi={setApi}
          className='w-full'
          opts={{
            loop: true,
            align: 'start',
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className='-ml-2 md:-ml-4'>
            {videoThumbnails.map((thumbnail) => (
              <CarouselItem
                key={thumbnail.id}
                className='pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4'
              >
                <div className='relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer'>
                  <Image
                    src={thumbnail.image}
                    alt={thumbnail.alt}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />

                  {/* Overlay с затемнением */}
                  <div className='absolute inset-0 bg-black/30 z-[5]' />

                  {/* Кнопка воспроизведения */}
                  <div className='absolute inset-0 flex items-center justify-center z-10'>
                    <div className='w-[60px] h-[60px] md:w-[76px] md:h-[76px] rounded-full bg-[#015BFF] flex items-center justify-center shadow-lg hover:bg-[#0146CC] transition-colors'>
                      <Play className='w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1' />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
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
      </div>
    </section>
  );
};

