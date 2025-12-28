import * as React from 'react';

interface ArrowRightIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

export const ArrowRightIcon = ({ className, color, ...props }: ArrowRightIconProps) => (
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
      d='M1.00033 11.75H29.667M29.667 11.75L18.917 22.5M29.667 11.75L18.917 1'
      stroke={color || 'currentColor'}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

