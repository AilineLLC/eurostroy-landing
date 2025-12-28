'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/avatar';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel';
import { SectionHeading } from '../ui/section-heading';

interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  time: string;
  text: string;
  image: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: '1',
    author: 'Александр',
    city: 'г.Бишкек',
    rating: 3,
    date: '16 апреля',
    time: '13:54',
    text: 'Сотрудничаю с компанией уже несколько лет и всегда остаюсь доволен. Первое знакомство произошло при масштабном ремонте квартиры - выбор материалов впечатлил, все было в наличии, консультанты помогли подобрать оптимальные варианты в рамках бюджета. После этого опыта решил заказать материалы для строительства загородного дома. Качество продукции на высоте - все материалы соответствуют заявленным характеристикам и стандартам. Пунктуальная доставка - очень важно при строгих сроках строительства. Отдельная благодарность менеджерам за оперативные ответы на вопросы, полезные рекомендации и готовность помочь в любой ситуации.',
    image: '/main-page/review-image.jpg',
    avatar: '/main-page/review-ava.jpg',
  },
  {
    id: '2',
    author: 'Александр',
    city: 'г.Бишкек',
    rating: 3,
    date: '16 апреля',
    time: '13:54',
    text: 'Сотрудничаю с компанией уже несколько лет и всегда остаюсь доволен. Первое знакомство произошло при масштабном ремонте квартиры - выбор материалов впечатлил, все было в наличии, консультанты помогли подобрать оптимальные варианты в рамках бюджета. После этого опыта решил заказать материалы для строительства загородного дома. Качество продукции на высоте - все материалы соответствуют заявленным характеристикам и стандартам. Пунктуальная доставка - очень важно при строгих сроках строительства. Отдельная благодарность менеджерам за оперативные ответы на вопросы, полезные рекомендации и готовность помочь в любой ситуации.',
    image: '/main-page/review-image.jpg',
    avatar: '/main-page/review-ava.jpg',
  },
  {
    id: '3',
    author: 'Александр',
    city: 'г.Бишкек',
    rating: 3,
    date: '16 апреля',
    time: '13:54',
    text: 'Сотрудничаю с компанией уже несколько лет и всегда остаюсь доволен. Первое знакомство произошло при масштабном ремонте квартиры - выбор материалов впечатлил, все было в наличии, консультанты помогли подобрать оптимальные варианты в рамках бюджета. После этого опыта решил заказать материалы для строительства загородного дома. Качество продукции на высоте - все материалы соответствуют заявленным характеристикам и стандартам. Пунктуальная доставка - очень важно при строгих сроках строительства. Отдельная благодарность менеджерам за оперативные ответы на вопросы, полезные рекомендации и готовность помочь в любой ситуации.',
    image: '/main-page/review-image.jpg',
    avatar: '/main-page/review-ava.jpg',
  },
  {
    id: '4',
    author: 'Александр',
    city: 'г.Бишкек',
    rating: 3,
    date: '16 апреля',
    time: '13:54',
    text: 'Сотрудничаю с компанией уже несколько лет и всегда остаюсь доволен. Первое знакомство произошло при масштабном ремонте квартиры - выбор материалов впечатлил, все было в наличии, консультанты помогли подобрать оптимальные варианты в рамках бюджета. После этого опыта решил заказать материалы для строительства загородного дома. Качество продукции на высоте - все материалы соответствуют заявленным характеристикам и стандартам. Пунктуальная доставка - очень важно при строгих сроках строительства. Отдельная благодарность менеджерам за оперативные ответы на вопросы, полезные рекомендации и готовность помочь в любой ситуации.',
    image: '/main-page/review-image.jpg',
    avatar: '/main-page/review-ava.jpg',
  },
];

export const ReviewsSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <section className='container'>
      <div className='relative mt-8 mb-20'>
        <Carousel
          setApi={setApi}
          className='w-full'
          opts={{
            loop: true,
            align: 'start',
            slidesToScroll: 1,
            duration: 20,
            dragFree: false,
          }}
        >
          <CarouselContent className='-ml-2 md:-ml-4 [&>*]:will-change-transform'>
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className='pl-2 md:pl-4 basis-full md:basis-1/2'
              >
                <div className='bg-[#F8F8F8] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm h-full flex flex-col md:flex-row p-[30px]'>
                  {/* Изображение дома */}
                  <div className='relative rounded-2xl md:rounded-3xl w-full md:w-[300px] lg:w-[350px] h-[250px] md:h-auto flex-shrink-0'>
                    <Image
                      src={review.image}
                      alt={`Отзыв от ${review.author}`}
                      fill
                      className='object-cover rounded-2xl md:rounded-3xl'
                      sizes='(max-width: 768px) 100vw, 300px'
                    />
                  </div>

                  {/* Контент отзыва */}
                  <div className='p-4 md:p-6 flex flex-col flex-1'>
                    {/* Информация о пользователе */}
                    <div className='flex items-start gap-3 mb-4'>
                      <Avatar className='w-10 h-10 md:w-12 md:h-12 flex-shrink-0'>
                        <AvatarImage
                          src={review.avatar}
                          alt={review.author}
                        />
                        <AvatarFallback>
                          {review.author.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div className='flex-1 min-w-0'>
                        <div className='flex items-start justify-between'>
                          <div className='flex-1 min-w-0'>
                            <h4 className='font-medium text-base text-black'>
                              {review.author}
                            </h4>
                            <p className='text-xs text-gray-600'>
                              {review.city}
                            </p>
                          </div>

                          {/* Рейтинг и дата справа */}
                          <div className='flex flex-col items-end gap-1 flex-shrink-0'>
                            {/* Рейтинг */}
                            <div className='flex items-center gap-1'>
                              {Array.from({ length: 5 }, (_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 md:w-5 md:h-5 ${i < review.rating
                                    ? 'text-[#FFA502] fill-[#FFA502]'
                                    : 'text-gray-300 fill-gray-300'
                                    }`}
                                />
                              ))}
                            </div>

                            {/* Дата и время */}
                            <div className='flex items-center gap-2 text-[12px] text-[#A7A7A7]'>
                              <span>{review.date}</span>
                              <span>{review.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Текст отзыва */}
                    <p className='text-sm md:text-base text-gray-700 leading-relaxed flex-1'>
                      {review.text}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
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
    </section>
  );
};
