import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/app/components/ui/button';

type ButtonConfig = {
  text: string;
  href: string;
  variant?: 'default' | 'outline';
  className?: string;
};

type ProjectSectionProps = {
  title?: string;
  description?: string;
  buttons?: ButtonConfig[];
  backgroundImage?: string;
  sideImage?: string | null;
  sideImageAlt?: string;
  className?: string;
  fullWidth?: boolean;
  height?: number;
};

const defaultProps: Required<Omit<ProjectSectionProps, 'className' | 'fullWidth' | 'height'>> = {
  title: 'Начните ваш проект вместе с нами',
  description:
    'Оставьте заявку — поможем с выбором материалов, рассчитаем объёмы и предложим оптимальные решения под ваш бюджет и сроки',
  buttons: [
    {
      text: 'Оставить заявку',
      href: '/contacts',
      variant: 'default',
      className: 'bg-[#015BFF] text-white hover:bg-[#0146CC] rounded-lg px-6 py-8 text-base md:text-xl',
    },
    {
      text: 'Перейти в магазин',
      href: '/categories',
      variant: 'outline',
      className:
        'bg-white text-[#015BFF] border-[#015BFF] hover:text-[#015BFF] rounded-lg px-6 py-8 text-base md:text-xl',
    },
  ],
  backgroundImage: '/main-page/bg-project.png',
  sideImage: '/main-page/project-man.png',
  sideImageAlt: 'Строитель',
};

export const ProjectSection = (props: ProjectSectionProps) => {
  const {
    title = defaultProps.title,
    description = defaultProps.description,
    buttons = defaultProps.buttons,
    backgroundImage = defaultProps.backgroundImage,
    sideImage,
    sideImageAlt = defaultProps.sideImageAlt,
    className = '',
    fullWidth = false,
    height = 420,
  } = props;

  // Если sideImage явно передан в props (включая null), используем его, иначе значение по умолчанию
  const displaySideImage = 'sideImage' in props ? (sideImage || null) : defaultProps.sideImage;

  return (
    <section
      className={`relative mt-[150px] ${fullWidth ? 'w-screen left-1/2 -translate-x-1/2' : 'w-full'} ${className}`}
      style={{ height: `${height}px` }}
    >
      {/* Фон без контейнера */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={backgroundImage}
          alt=''
          fill
          className='object-cover'
          priority={false}
        />
      </div>

      {/* Изображение справа - как фон */}
      {displaySideImage && (
        <div className='absolute right-[20%] -bottom-20 z-0 flex items-center justify-end pointer-events-none'>
          <div className='relative'>
            <Image
              src={displaySideImage}
              alt={sideImageAlt}
              width={538}
              height={632}
              className='object-contain object-right'
              priority={false}
            />
          </div>
        </div>
      )}

      {/* Контент в контейнере */}
      <div className='container relative z-30 h-full'>
        <div className='h-full flex items-center'>
          {/* Левая часть - текст и кнопки */}
          <div className='flex flex-col justify-center text-white py-8 gap-5'>
            <h3 className='text-2xl md:text-4xl lg:text-[42px] leading-tight'>
              {title}
            </h3>
            {description && (
              <p className='text-base leading-relaxed m-0'>{description}</p>
            )}
            {buttons && buttons.length > 0 && (
              <div className='flex flex-col sm:flex-row gap-7'>
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    asChild
                    variant={button.variant || 'default'}
                    className={button.className}
                  >
                    <Link href={button.href}>{button.text}</Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

