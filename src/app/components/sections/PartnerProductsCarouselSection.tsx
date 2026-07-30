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
import { useProducts } from '@/app/lib/api/hooks/useProducts';
import type { Product } from '@/app/lib/api/types/products';
import { SHOP_URL } from '@/app/lib/constants/shop';

type PartnerProductsCarouselSectionProps = {
  brandName: string;
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className='flex shrink-0 gap-0.5'>
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8 1L9.854 5.757L15 6.174L11.25 9.407L12.472 14.5L8 11.75L3.528 14.5L4.75 9.407L1 6.174L6.146 5.757L8 1Z'
          fill={star <= Math.round(rating) ? '#FFBA08' : '#E0E0E0'}
        />
      </svg>
    ))}
  </div>
);

const getImageUrl = (path: string | null | undefined) =>
  path ? `${process.env.NEXT_PUBLIC_API_BASE_URL ?? ''}/Uploads/${path}` : null;

const ProductCard = ({ product }: { product: Product }) => (
  <div className='rounded-2xl bg-[#F8F8F8] flex flex-col h-full min-h-[320px] overflow-hidden py-[10px]'>
    {/* Image area */}
    <div className='relative h-[190px] w-full flex items-center justify-center p-4'>
      {getImageUrl(product.image?.path) ? (
        <Image
          src={getImageUrl(product.image?.path)!}
          alt={product.name}
          fill
          className='object-contain p-4'
          sizes='(max-width: 640px) 86vw, (max-width: 1024px) 42vw, 25vw'
        />
      ) : (
        <div className='h-full w-full rounded-xl bg-[#F5F5F5]' />
      )}
    </div>

    {/* Divider */}
    <div className='border-t border-[#F0F0F0] mx-4' />

    {/* Content */}
    <div className='flex flex-col flex-1 p-4 pt-3 gap-1'>
      {/* Name + Rating */}
      <div className='flex items-start justify-between gap-2'>
        <h3 className='text-[#0B0B0B] font-semibold text-[15px] leading-snug'>
          {product.name}
        </h3>
        {product.rating != null && <StarRating rating={product.rating} />}
      </div>

      {/* Button */}
      <div className='mt-auto'>
        <Link
          href={`${SHOP_URL}/categories/${product.id}`}
          target='_blank'
          rel='noopener noreferrer'
          className='flex h-10 w-full items-center justify-center rounded-full bg-[#015BFF] text-white text-[15px] font-medium transition-colors hover:bg-[#0050E0]'
        >
          Посмотреть
        </Link>
      </div>
    </div>
  </div>
);

export const PartnerProductsCarouselSection = ({
  brandName,
}: PartnerProductsCarouselSectionProps) => {
  const { data, isLoading, isError } = useProducts();
  const products = data?.data ?? [];

  return (
    <section className='w-full mx-auto my-8 !mt-20'>
      <SectionHeading as='h3'>Продукция {brandName}</SectionHeading>

      <div className='relative mt-8'>
        {isLoading && (
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className='rounded-2xl bg-white min-h-[380px] animate-pulse'
              />
            ))}
          </div>
        )}

        {isError && (
          <p className='text-[#9A9A9A] text-base'>Не удалось загрузить товары.</p>
        )}

        {!isLoading && !isError && products.length > 0 && (
          <Carousel
            className='w-full'
            opts={{ align: 'start', slidesToScroll: 1 }}
          >
            <CarouselContent className='-ml-6'>
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className='pl-6 basis-full sm:basis-1/2 lg:basis-1/4'
                >
                  <ProductCard product={product} />
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
        )}
      </div>
    </section>
  );
};
