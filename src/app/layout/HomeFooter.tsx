import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@/app/components/Icon';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { mediaLinks } from '@/app/lib/constants/mediaLinks';
import { ArrowRightIcon } from '../components/ui/ArrowRightIcon';

const eurogipsElements = [
  { name: 'Вакансии', href: '/vacancies' },
  { name: 'Сертификаты', href: '/certificates' },
  { name: 'Документы', href: '/documents' },
  { name: 'Поддержка', href: '/support' },
  { name: 'Доставка', href: '/address' },
  { name: 'Оплата', href: '/payment' },
  { name: 'Контакты', href: '/contacts' },
];

export const HomeFooter = () => (
  <footer>
    <div className='relative z-20 h-[100px] bg-white'></div>
    <div className='text-black pb-12 pt-20 px-4 md:px-8 bg-[#F8F8F8] font-medium'>
      <div className='max-w-[1590px] mx-auto grid grid-cols-1 md:grid-cols-8 gap-8'>
        <div className='space-y-2 col-span-3'>
          <div>
            <Image
              className='m-0'
              src='/main-page/logo-main.png'
              alt='logo'
              width={150}
              height={40}
            />
          </div>
          <p className='text-md leading-normal mb-[60px] max-w-[410px]'>
            Покупайте строительные материалы, не выходя из дома — удобно, выгодно
            и с гарантией качества.
          </p>
          <div className='space-y-4 text-normal'>
            <p className='flex items-center gap-2'>
              <Icon name='location' /> г. Бишкек, ул. Горького 1/2
            </p>
            <p className='flex items-center gap-2'>
              <Icon name='phone' /> +996 700 700 700
            </p>
            <Link
              href='mailto:evro@js@gmail.com'
              className='text-black hover:underline flex items-center gap-2'
            >
              <Icon name='mail' /> evro@js@gmail.com
            </Link>
          </div>
        </div>

        <div className='col-span-2'>
          <h2 className='text-xl mb-3'>Карта сайта</h2>
          <div className='grid grid-cols-2 gap-8'>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link href='/home' className='hover:underline'>
                  Главная
                </Link>
              </li>
              <li>
                <Link href='#about' className='hover:underline'>
                  О компании
                </Link>
              </li>
              <li>
                <Link href='/activity' className='hover:underline whitespace-nowrap'>
                  Основные деятельности
                </Link>
              </li>
              <li>
                <Link href='#advantages' className='hover:underline'>
                  Преимущества
                </Link>
              </li>
            </ul>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link href='#geography' className='hover:underline'>
                  География и партнеры
                </Link>
              </li>
              <li>
                <Link href='#reviews' className='hover:underline'>
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href='#services' className='hover:underline'>
                  Сервисы
                </Link>
              </li>
              <li>
                <Link href='#achievements' className='hover:underline'>
                  Достижения
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='col-span-3'>
          <div className='flex flex-col gap-3 items-end space-y-1 mb-[60px]'>
            <h3 className='text-xl m-0'>Подпишитесь на нашу рассылку</h3>
            <div className='flex gap-2 relative min-w-[375px]'>
              <Input
                placeholder='Введите email'
                className='flex-1 p-[20px] h-[60px] rounded-[16px] bg-white text-black placeholder:text-[#D9D9D9]'
              />
              <Button
                variant='default'
                className='absolute right-0 rounded-[16px] w-[60px] h-[60px] cursor-pointer'
              >
                <ArrowRightIcon className='!w-6 !h-6' />
              </Button>
            </div>
          </div>
          <div className='flex gap-[15px] mt-[30px] justify-end'>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href={mediaLinks.facebook}
            >
              <Image
                src='/social-media-icons/Facebook.svg'
                alt='facebook icon'
                width={49}
                height={49}
              />
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href={mediaLinks.instagram}
            >
              <Image
                src='/social-media-icons/Instagram.svg'
                alt='instagram icon'
                width={49}
                height={49}
              />
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href={mediaLinks.whatsapp}
            >
              <Image
                src='/social-media-icons/WhatsApp.svg'
                alt='whatsapp icon'
                width={49}
                height={49}
              />
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href={mediaLinks.youtube}
            >
              <Image
                src='/social-media-icons/Youtube.svg'
                alt='youtube icon'
                width={49}
                height={49}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className='max-w-[1590px] mx-auto mt-12 pt-10 border-t border-gray-300 text-base text-black'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-normal'>© 2022-2025 Еврогипс</p>
          <div className='flex flex-wrap items-center gap-3 text-base'>
            <Link href='#' className='underline'>
              Пользовательское соглашение
            </Link>
            <span>•</span>
            <Link href='#' className='underline'>
              Политика конфиденциальности
            </Link>
            <span>•</span>
            <Link href='#' className='underline'>
              Публичная оферта
            </Link>
            <span>•</span>
            <Link href='#' className='underline'>
              Политика использования файлов cookie
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

