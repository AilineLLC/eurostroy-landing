import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/app/lib/utils';

const sectionHeadingVariants = cva('text-black leading-tight', {
  variants: {
    size: {
      default: 'text-3xl',
      large: 'text-[34px] md:text-[44px]',
    },
    as: {
      h1: '',
      h2: '',
      h3: '',
    },
  },
  defaultVariants: {
    size: 'default',
    as: 'h2',
  },
});

export interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof sectionHeadingVariants> {
  as?: 'h1' | 'h2' | 'h3';
}

const SectionHeading = React.forwardRef<HTMLHeadingElement, SectionHeadingProps>(
  ({ className, size, as = 'h2', ...props }, ref) => {
    const Component = as;
    return (
      <Component
        ref={ref}
        className={cn(sectionHeadingVariants({ size, as, className }))}
        {...props}
      />
    );
  },
);

SectionHeading.displayName = 'SectionHeading';

export { SectionHeading, sectionHeadingVariants };

