'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/app/components/ui/button';

function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white py-4'>
      <div className='container mx-auto px-4'>
        <div className='bg-gray-50 rounded-2xl px-6 py-4'>
          <div className='flex items-center justify-between gap-4'>
            {/* Левая часть: меню и навигация */}
            <div className='flex items-center gap-6'>
              {/* Иконка гамбургер-меню */}
              <button
                type='button'
                className='p-2 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer'
                aria-label='Меню'
              >
                <svg
                  width='40'
                  height='21'
                  viewBox='0 0 40 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-[40px] h-[21px]'
                >
                  <rect x='0' y='0' width='40' height='3' fill='black' />
                  <rect x='0' y='9' width='40' height='3' fill='black' />
                  <rect x='0' y='18' width='40' height='3' fill='black' />
                </svg>
              </button>

              {/* Навигационные ссылки */}
              <nav className='hidden md:flex items-center gap-6'>
                <Link
                  href='/discount'
                  className='flex items-center gap-2 text-gray-900 hover:text-[#015BFF] transition-colors'
                >
                  <Image
                    src='/main-page/discount-shape.svg'
                    alt='Акции'
                    width={20}
                    height={20}
                    className='w-5 h-5'
                  />
                  <span className='text-sm font-medium'>Акции</span>
                </Link>

                <Link
                  href='/delivery'
                  className='flex items-center gap-2 text-gray-900 hover:text-[#015BFF] transition-colors'
                >
                  <Image
                    src='/main-page/truck-fast.svg'
                    alt='Доставка'
                    width={20}
                    height={20}
                    className='w-5 h-5'
                  />
                  <span className='text-sm font-medium'>Доставка</span>
                </Link>

                <Link
                  href='/payment'
                  className='flex items-center gap-2 text-gray-900 hover:text-[#015BFF] transition-colors'
                >
                  <Image
                    src='/main-page/empty-wallet.svg'
                    alt='Оплата'
                    width={20}
                    height={20}
                    className='w-5 h-5'
                  />
                  <span className='text-sm font-medium'>Оплата</span>
                </Link>
              </nav>
            </div>

            {/* Центр: Логотип */}
            <div className='flex-1 flex justify-center'>
              <Link href='/' className='flex items-center gap-2'>
                <Image
                  src='/main-page/logo-main.png'
                  alt='LOGOGIPSUM'
                  width={150}
                  height={40}
                  className='h-10 w-auto'
                  priority
                />
              </Link>
            </div>

            {/* Правая часть: телефон и кнопка */}
            <div className='flex items-center gap-4'>
              {/* Телефон */}
              <div className='hidden lg:flex items-center gap-2 text-gray-900'>
                <Image
                  src='/main-page/call.svg'
                  alt='Телефон'
                  width={20}
                  height={20}
                  className='w-5 h-5'
                />
                <span className='text-sm font-medium'>+996 700 700 700</span>
              </div>

              {/* Кнопка "Посмотреть каталог" */}
              <Button
                className='rounded-lg bg-[#015BFF] text-white hover:bg-[#0146CC] px-[30px] py-[14px] h-auto text-base whitespace-nowrap'
                asChild
              >
                <Link href='/categories'>Посмотреть каталог</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
