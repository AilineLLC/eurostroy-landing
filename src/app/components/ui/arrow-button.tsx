import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/app/lib/utils';

interface ArrowButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'white';
}

export const ArrowButton = ({
  href,
  onClick,
  children,
  className,
  variant = 'default',
}: ArrowButtonProps) => {
  const baseClasses = cn(
    'inline-flex items-center gap-4 rounded-full',
    'bg-[#015BFF] text-white hover:bg-[#0146CC] transition-colors',
    'pl-5 pr-1 py-1 text-[20px]',
    className
  );

  const arrowIconSrc =
    variant === 'white'
      ? '/main-page/arrow-right.svg'
      : '/main-page/arrow-right.svg';

  const content = (
    <>
      <span>{children}</span>
      <span className='flex h-12 w-12 items-center justify-center rounded-full bg-white'>
        <Image
          src={arrowIconSrc}
          alt=''
          width={24}
          height={24}
          className='h-6 w-6'
        />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} type='button'>
      {content}
    </button>
  );
};

