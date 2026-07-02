'use client';

import { Play, X } from 'lucide-react';
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
import { useReviews } from '@/app/lib/api/hooks/useReviews';
import type { Review } from '@/app/lib/api/types/reviews';

const getYoutubeEmbedUrl = (url?: string | null) => {
  if (!url) return null;

  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]+)/,
  );

  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : null;
};

export const ReviewsSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [playingReview, setPlayingReview] = React.useState<Review | null>(null);
  const { data: reviews = [], isLoading, isError } = useReviews();

  const activeEmbedUrl = getYoutubeEmbedUrl(playingReview?.video_url);

  return (
    <section className='container pt-10 md:pt-30 pb-5 md:pb-15'>
      <SectionHeading as='h3'>
        Нас выбирают лучшие
      </SectionHeading>

      {isLoading && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className='h-[300px] md:h-[360px] rounded-2xl md:rounded-3xl bg-gray-100 animate-pulse'
            />
          ))}
        </div>
      )}

      {!isLoading && !isError && reviews.length > 0 && (
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
              {reviews.map((review, index) => {
                const embedUrl = getYoutubeEmbedUrl(review.video_url);

                return (
                  <CarouselItem
                    key={`${review.name}-${index}`}
                    className='pl-2 md:pl-4 basis-full md:basis-1/2'
                  >
                    <div className='bg-[#F8F8F8] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm h-full flex flex-col md:flex-row p-4 md:p-[30px]'>
                      <div
                        className={`relative rounded-2xl md:rounded-3xl w-full md:w-[260px] lg:w-[300px] h-[180px] sm:h-[220px] md:h-auto flex-shrink-0 bg-gray-200 overflow-hidden ${embedUrl ? 'group cursor-pointer' : ''
                          }`}
                        onClick={() => embedUrl && setPlayingReview(review)}
                      >
                        {review.avatar_url && (
                          <Image
                            src={review.avatar_url}
                            alt={`Отзыв от ${review.name}`}
                            fill
                            unoptimized
                            className='object-cover rounded-2xl md:rounded-3xl transition-transform duration-300 group-hover:scale-105'
                            sizes='(max-width: 768px) 100vw, 300px'
                          />
                        )}

                        {embedUrl && (
                          <>
                            <div className='absolute inset-0 bg-black/20' />
                            <div className='absolute inset-0 flex items-center justify-center'>
                              <div className='w-[60px] h-[60px] rounded-full bg-[#015BFF] flex items-center justify-center shadow-lg group-hover:bg-[#0146CC] transition-colors'>
                                <Play className='w-8 h-8 text-white fill-white ml-1' />
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      <div className='p-4 md:p-6 flex flex-col flex-1'>
                        <div className='mb-4'>
                          <h4 className='font-medium text-base text-black'>
                            {review.name}
                          </h4>
                          <p className='text-xs text-gray-600'>
                            {[review.position, review.company]
                              .filter(Boolean)
                              .join(', ')}
                          </p>
                        </div>

                        <p className='text-sm md:text-base text-gray-700 leading-relaxed flex-1 whitespace-pre-line'>
                          {review.content}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious
              variant='ghost'
              className='absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black hover:bg-white/90 shadow-md border-0 rounded-full z-20 w-15 h-15'
              size='icon'
              iconClassName='!w-7 !h-7'
            />
            <CarouselNext
              variant='ghost'
              className='absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white text-black hover:bg-white/90 shadow-md border-0 rounded-full z-20 w-15 h-15'
              size='icon'
              iconClassName='!w-7 !h-7'
            />
          </Carousel>
        </div>
      )}

      {activeEmbedUrl && (
        <div
          className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4'
          onClick={() => setPlayingReview(null)}
        >
          <div
            className='relative w-full max-w-3xl aspect-video'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type='button'
              onClick={() => setPlayingReview(null)}
              className='absolute -top-10 right-0 text-white hover:text-gray-300'
              aria-label='Закрыть'
            >
              <X className='w-8 h-8' />
            </button>
            <iframe
              src={activeEmbedUrl}
              className='w-full h-full rounded-xl'
              allow='autoplay; encrypted-media; picture-in-picture'
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
