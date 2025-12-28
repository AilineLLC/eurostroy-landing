import * as React from 'react';

interface ArrowLeftIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

export const ArrowLeftIcon = ({ className, color, ...props }: ArrowLeftIconProps) => (
  <svg
    width='31'
    height='24'
    viewBox='0 0 31 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...props}
  >
    <path
      d='M29.6667 11.75H1M1 11.75L11.75 22.5M1 11.75L11.75 1'
      stroke={color || 'currentColor'}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

