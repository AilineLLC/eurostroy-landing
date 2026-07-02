'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/app/components/ui/button';
import { SHOP_URL } from '@/app/lib/constants/shop';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white my-3 md:my-6'>
      <div className='container mx-auto px-4 w-full'>
        <div className='bg-gray-50 rounded-2xl px-4 md:px-6 py-[5px]'>
          <div className='flex items-center justify-between gap-2 md:gap-4 h-[65px]'>
            {/* Левая часть: меню и навигация */}
            <div className='flex items-center gap-3 md:gap-6'>
              <button
                type='button'
                onClick={() => setIsMenuOpen((v) => !v)}
                className='p-2 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer shrink-0'
                aria-label='Меню'
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M18 6L6 18M6 6l12 12' stroke='black' strokeWidth='2.5' strokeLinecap='round' />
                  </svg>
                ) : (
                  <svg
                    width='40'
                    height='21'
                    viewBox='0 0 40 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-[28px] h-[16px] md:w-[40px] md:h-[21px]'
                  >
                    <rect x='0' y='0' width='40' height='3' fill='black' />
                    <rect x='0' y='9' width='40' height='3' fill='black' />
                    <rect x='0' y='18' width='40' height='3' fill='black' />
                  </svg>
                )}
              </button>

              {/* Навигационные ссылки — только md+ */}
              <nav className='hidden md:flex items-center gap-6'>
                <Link
                  href='https://shop.eurogips.kg/discount'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-gray-900 hover:text-[#015BFF] transition-colors'
                >
                  <Image src='/main-page/discount-shape.svg' alt='Акции' width={20} height={20} className='w-5 h-5' />
                  <span className='text-sm font-medium'>Акции</span>
                </Link>
                <Link
                  href='https://shop.eurogips.kg/address'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-gray-900 hover:text-[#015BFF] transition-colors'
                >
                  <Image src='/main-page/truck-fast.svg' alt='Доставка' width={20} height={20} className='w-5 h-5' />
                  <span className='text-sm font-medium'>Доставка</span>
                </Link>
                <Link
                  href='https://shop.eurogips.kg/payment'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-gray-900 hover:text-[#015BFF] transition-colors'
                >
                  <Image src='/main-page/empty-wallet.svg' alt='Оплата' width={20} height={20} className='w-5 h-5' />
                  <span className='text-sm font-medium'>Оплата</span>
                </Link>
              </nav>
            </div>

            {/* Центр: Логотип */}
            <div className='flex-1 flex justify-center'>
              <Link href='/' className='flex items-center'>
                <Image
                  src='/logo-accent.png'
                  alt='LOGOGIPSUM'
                  width={350}
                  height={100}
                  className='h-10 md:h-16 w-auto'
                  priority
                />
              </Link>
            </div>

            {/* Правая часть: телефон и кнопка */}
            <div className='flex items-center gap-2 md:gap-4'>
              <div className='hidden lg:flex items-center gap-2 text-gray-900'>
                <Image src='/main-page/call.svg' alt='Телефон' width={20} height={20} className='w-5 h-5' />
                <span className='text-sm font-medium'>+996 700 700 700</span>
              </div>

              <Button
                className='rounded-lg bg-[#015BFF] text-white hover:bg-[#0146CC] px-3 md:px-[30px] py-[10px] md:py-[14px] h-auto text-sm md:text-base whitespace-nowrap'
                asChild
              >
                <Link href={SHOP_URL} target='_blank' rel='noopener noreferrer'>
                  <span className='hidden sm:inline'>Посмотреть каталог</span>
                  <span className='sm:hidden'>Каталог</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className='md:hidden mt-2 bg-gray-50 rounded-2xl px-6 py-4 space-y-1'>
            <Link
              href='https://shop.eurogips.kg/discount'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 text-gray-900 hover:text-[#015BFF] transition-colors py-3 border-b border-gray-100'
              onClick={() => setIsMenuOpen(false)}
            >
              <Image src='/main-page/discount-shape.svg' alt='Акции' width={20} height={20} className='w-5 h-5' />
              <span className='text-base font-medium'>Акции</span>
            </Link>
            <Link
              href='https://shop.eurogips.kg/address'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 text-gray-900 hover:text-[#015BFF] transition-colors py-3 border-b border-gray-100'
              onClick={() => setIsMenuOpen(false)}
            >
              <Image src='/main-page/truck-fast.svg' alt='Доставка' width={20} height={20} className='w-5 h-5' />
              <span className='text-base font-medium'>Доставка</span>
            </Link>
            <Link
              href='https://shop.eurogips.kg/payment'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 text-gray-900 hover:text-[#015BFF] transition-colors py-3 border-b border-gray-100'
              onClick={() => setIsMenuOpen(false)}
            >
              <Image src='/main-page/empty-wallet.svg' alt='Оплата' width={20} height={20} className='w-5 h-5' />
              <span className='text-base font-medium'>Оплата</span>
            </Link>
            <div className='flex items-center gap-3 text-gray-900 py-3'>
              <Image src='/main-page/call.svg' alt='Телефон' width={20} height={20} className='w-5 h-5' />
              <a href='tel:+996700700700' className='text-base font-medium'>+996 700 700 700</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
