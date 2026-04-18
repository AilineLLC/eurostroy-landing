'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel';
import { SectionHeading } from '@/app/components/ui/section-heading';
import { SHOP_URL } from '@/app/lib/constants/shop';

type ProductCard = {
  id: string;
  title: string;
  countLabel: string;
  imageSrc: string;
  href: string;
};

type PartnerProductsCarouselSectionProps = {
  brandName: string;
};

const products: ProductCard[] = [
  {
    id: 'product-1',
    title: 'Композитная черепица',
    countLabel: '150 товаров',
    imageSrc: '/main-page/product-1.png',
    href: SHOP_URL,
  },
  {
    id: 'product-2',
    title: 'Гибкая черепица shinglas',
    countLabel: '230 товаров',
    imageSrc: '/main-page/product-2.png',
    href: SHOP_URL,
  },
  {
    id: 'product-3',
    title: 'Композитная черепица',
    countLabel: '150 товаров',
    imageSrc: '/main-page/product-1.png',
    href: SHOP_URL,
  },
  {
    id: 'product-4',
    title: 'Гибкая черепица shinglas',
    countLabel: '230 товаров',
    imageSrc: '/main-page/product-2.png',
    href: SHOP_URL,
  },
];

export const PartnerProductsCarouselSection = ({
  brandName,
}: PartnerProductsCarouselSectionProps) => {
  return (
    <section className='w-full mx-auto my-8 !mt-20'>
        <SectionHeading as='h3'>
          Продукция {brandName}
        </SectionHeading>

      <div className='relative mt-8'>
        <Carousel
          className='w-full'
          opts={{
            align: 'start',
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className='-ml-6'>
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className='pl-6 basis-full sm:basis-1/2 lg:basis-1/4'
              >
                <div className='rounded-[32px] bg-[#F8F8F8] p-6 flex h-full min-h-[420px] flex-col'>
                  <div className='relative h-[190px] w-full'>
                    <Image
                      src={product.imageSrc}
                      alt={product.title}
                      fill
                      className='object-contain'
                      sizes='(max-width: 640px) 86vw, (max-width: 1024px) 42vw, 25vw'
                    />
                  </div>

                  <h3 className='mt-6 text-black text-lg leading-snug'>
                    {product.title}
                  </h3>
                  <p className='mt-3 text-[#9A9A9A] text-base leading-none'>
                    {product.countLabel}
                  </p>

                  <div className='mt-auto'>
                    <Link
                      href={product.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#E6EFFF] text-[#015BFF] text-base transition-colors hover:bg-[#DCE9FF]'
                    >
                      Посмотреть товар
                      <Image
                        src='/main-page/arrow-right.svg'
                        alt=''
                        width={18}
                        height={18}
                        className='h-[18px] w-[18px]'
                      />
                    </Link>
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


