import Image from 'next/image';
import Link from 'next/link';

import { partnersData } from '@/app/lib/constants/partners';

const partners = Object.values(partnersData).map((partner) => ({
  id: partner.id,
  title: partner.title,
  description: partner.description,
  logo: partner.logo,
  image: partner.image,
  href: `/partners/${partner.id}`,
}));

export const PartnersCarouselSection = () => {
  return (
    <section className='container py-10 md:py-14'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {partners.map((partner, index) => (
          <div
            key={partner.id}
            className='relative overflow-hidden rounded-[28px] h-[480px] flex flex-col'
          >
            {/* Фон */}
            <Image
              src={partner.image}
              alt={partner.title}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
              priority={index === 0}
            />

            {/* Градиент — снизу сильный */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10' />

            {/* Лого бренда */}
            <div className='relative z-10 p-6'>
              <div className='inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5'>
                <span className='text-[14px] font-bold tracking-wide text-black'>
                  {partner.title}
                </span>
              </div>
            </div>

            {/* Контент внизу */}
            <div className='relative z-10 mt-auto p-6 pt-0'>
              <h3 className='text-white font-bold text-[22px] leading-tight'>
                {partner.title}
              </h3>
              <p className='mt-3 text-white/80 text-[15px] leading-relaxed'>
                {partner.description}
              </p>

              <Link
                href={partner.href}
                className='mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#015BFF] text-white h-12 text-[15px] font-medium hover:bg-[#0146CC] transition-colors'
              >
                Узнать подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
