'use client';

import { useState } from 'react';
import Link from 'next/link';

import { SHOP_URL } from '@/app/lib/constants/shop';

export function PartnerSubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/Marketing/EmailSubscription/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className='flex flex-col gap-3 mt-2 sm:mt-[15px]'>
      <div className='flex flex-col sm:flex-row sm:items-start gap-3'>
        {status === 'success' ? (
          <p className='text-white font-medium text-sm sm:text-base'>
            Вы успешно подписались на рассылку!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className='flex flex-col gap-2 flex-1 sm:flex-none'>
            <div className='flex items-center bg-white rounded-full shadow-xl w-full sm:w-auto h-12 sm:h-[60px] p-1 sm:p-1.5'>
              <input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={status === 'loading'}
                required
                className='flex-1 min-w-0 pl-4 sm:pl-6 pr-2 h-full text-xs sm:text-base text-gray-700 placeholder-[#D9D9D9] bg-transparent border-none outline-none sm:w-[260px]'
                placeholder='Введите вашу почту'
              />
              <button
                type='submit'
                disabled={status === 'loading'}
                className='shrink-0 h-full px-3 sm:px-8 text-xs sm:text-sm font-medium text-white bg-[#015BFF] rounded-full disabled:opacity-70 transition-opacity whitespace-nowrap'
              >
                {status === 'loading' ? 'Отправка...' : 'Получать предложения'}
              </button>
            </div>
            {status === 'error' && (
              <p className='text-white/80 text-xs sm:text-sm'>
                Ошибка. Проверьте email и попробуйте снова.
              </p>
            )}
          </form>
        )}

        <Link
          href={SHOP_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center w-full sm:w-auto sm:h-[60px] rounded-lg bg-white text-[#015BFF] hover:bg-white/90 transition-colors px-6 py-3 text-sm sm:text-base font-medium whitespace-nowrap'
        >
          Посмотреть каталог
        </Link>
      </div>
    </div>
  );
}
