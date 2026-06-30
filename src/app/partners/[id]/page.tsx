import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { partnersData } from '@/app/lib/constants/partners';
import { SHOP_URL } from '@/app/lib/constants/shop';
import Header from '@/app/layout/Header';
import Footer from '@/app/layout/Footer';
import { SectionHeading } from '@/app/components/ui/section-heading';
import { Button } from '@/app/components/ui/button';
import { ProjectSection } from '@/app/components/sections/ProjectSection';
import { PartnerProductsCarouselSection } from '@/app/components/sections/PartnerProductsCarouselSection';
import { PartnerSubscribeForm } from '@/app/components/PartnerSubscribeForm';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const partner = partnersData[id];

  if (!partner) {
    return { title: 'Партнёр не найден' };
  }

  return {
    title: `${partner.title} | Евротипс`,
    description: partner.description,
  };
}

const benefitIcons = [
  '/main-page/building.svg',
  '/main-page/verify.svg',
  '/main-page/box-tick.svg',
  '/main-page/star.svg',
  '/main-page/building.svg',
  '/main-page/box-tick.svg',
];

const directionIcons = [
  '/main-page/truck-blue.svg',
  '/main-page/3dcube.svg',
  '/main-page/designtools.svg',
  '/main-page/cpu.svg',
];

export default async function PartnerPage({ params }: PageProps) {
  const { id } = await params;
  const partner = partnersData[id];

  if (!partner) {
    notFound();
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='container flex-1 space-y-4 md:space-y-16 pb-6 sm:pb-16'>

        {/* Баннер */}
        <section className='relative w-full h-[220px] md:h-[460px] overflow-hidden rounded-[24px] md:rounded-[32px] mt-4 md:mt-8'>
          <div className='absolute inset-0'>
            <Image
              src='/main-page/bg-partner-detail.svg'
              alt=''
              fill
              className='object-cover'
              priority
            />
          </div>
          <div className='relative h-full flex flex-col justify-between p-6 md:p-12'>
            {/* Лого — всегда сверху слева */}
            <div>
              <img
                src={partner.logo}
                alt={partner.title}
                className='h-8 md:h-14 w-auto object-contain'
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            {/* Описание — внизу */}
            <p className='text-white text-[13px] md:text-[22px] font-normal leading-relaxed md:max-w-[680px]'>
              {partner.description}
            </p>
          </div>
        </section>

        {/* Описание + фото */}
        <section>
          <div className='flex flex-col lg:flex-row rounded-[24px] md:rounded-[32px] overflow-hidden bg-white'>
            {/* Текст */}
            <div className='flex-1 flex flex-col justify-center p-3 md:p-10'>
              <SectionHeading as='h3'>
                {partner.title}
              </SectionHeading>
              <p className='text-base text-black leading-relaxed mt-4 mb-8'>
                {partner.fullDescription}
              </p>
              <div className='flex gap-10 md:gap-16'>
                <div className='flex flex-col'>
                  <span className='text-[28px] md:text-[36px] text-[#2563EB] leading-none font-bold'>50+</span>
                  <span className='text-sm md:text-base text-black/70 mt-1'>Постоянных партнёров</span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-[28px] md:text-[36px] text-[#2563EB] leading-none font-bold'>25+</span>
                  <span className='text-sm md:text-base text-black/70 mt-1'>Складов по всей стране</span>
                </div>
              </div>
            </div>
            {/* Фото */}
            <div className='w-full lg:w-[640px] xl:w-[780px] flex-shrink-0 h-[220px] md:h-[320px] lg:h-auto'>
              <Image
                src='/main-page/build-image.jpg'
                alt={partner.title}
                width={780}
                height={480}
                className='object-cover w-full h-full'
                priority
              />
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section>
          <SectionHeading as='h2' size='large' className='mb-8 md:mb-12'>
            Преимущества
          </SectionHeading>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
            {partner.benefits.map((benefit, idx) => {
              const isBlue = idx % 2 === 0;
              return (
                <div
                  key={benefit.title}
                  className={`${isBlue ? 'bg-[#2563EB]' : 'bg-[#E6EFFF]'} rounded-[20px] md:rounded-[24px] p-6 md:p-8 flex flex-col`}
                >
                  <div className='w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-[10px] bg-white flex items-center justify-center mb-5'>
                    <img
                      src={benefitIcons[idx % benefitIcons.length]}
                      alt=''
                      className='w-7 h-7 md:w-8 md:h-8'
                    />
                  </div>
                  <h3 className={`${isBlue ? 'text-white' : 'text-black'} text-lg md:text-xl font-bold mb-3`}>
                    {benefit.title}
                  </h3>
                  <p className={`${isBlue ? 'text-white/85' : 'text-black/70'} text-sm md:text-base leading-relaxed`}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Специализация и направления */}
        <section>
          <SectionHeading as='h2' className='mb-8 md:mb-10'>
            Наша специализация и ключевые направления работы
          </SectionHeading>

          <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
            {/* Левая карточка */}
            <div className='relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-brand-accent p-6 md:p-10 flex flex-col justify-between min-h-[420px]'>
              {/* Декоративное фото — только на xl */}
              <div className='hidden xl:block absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none'>
                <Image
                  src='/main-page/job-img-card.png'
                  alt=''
                  fill
                  className='object-cover object-left'
                  priority
                />
                {/* Fade слева чтобы текст читался */}
                <div className='absolute inset-0 bg-gradient-to-r from-brand-accent via-brand-accent/60 to-transparent' />
              </div>

              <div className='relative z-10'>
                {/* Лого */}
                <img
                  src={partner.logo}
                  alt={partner.title}
                  className='h-8 md:h-10 w-auto max-w-[200px] object-contain mb-6'
                  style={{ filter: 'brightness(0) invert(1)' }}
                />

                <p className='text-white text-sm md:text-base leading-relaxed max-w-[340px]'>
                  {partner.description}
                </p>

                <div className='flex gap-8 md:gap-12 mt-6 md:mt-8'>
                  <div className='flex flex-col'>
                    <span className='text-white text-[32px] md:text-[42px] leading-none font-light'>200+</span>
                    <span className='text-white/70 text-sm mt-1'>Дизайнов</span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-white text-[32px] md:text-[42px] leading-none font-light'>20+</span>
                    <span className='text-white/70 text-sm mt-1'>Лет службы</span>
                  </div>
                </div>
              </div>

              <div className='relative z-10 mt-8 flex flex-col gap-3'>
                <div className='flex -space-x-3'>
                  {[
                    '/main-page/partner-ava-1.png',
                    '/main-page/partner-ava-2.png',
                    '/main-page/partner-ava-3.png',
                  ].map((src) => (
                    <div key={src} className='relative w-9 h-9 rounded-full overflow-hidden border-2 border-white'>
                      <Image src={src} alt='' fill className='object-cover' />
                    </div>
                  ))}
                </div>
                <div>
                  <div className='flex items-center gap-1 mb-1'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width='16' height='16' viewBox='0 0 18 18' fill='none'>
                        <path d='M9 0l2.472 6.464L18 7.545l-5.051 4.188L14.944 18 9 14.464 3.056 18l1.995-6.267L0 7.545l6.528-1.081z' fill='#F59E0B' />
                      </svg>
                    ))}
                  </div>
                  <p className='text-white/70 text-sm'>Клиенты доверяют качеству {partner.title}</p>
                </div>
              </div>
            </div>

            {/* Правая карточка */}
            <div className='bg-[#F7F7F7] rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex flex-col gap-6'>
              <h3 className='text-black text-[20px] md:text-[26px] font-semibold'>
                Основные направления работы
              </h3>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4'>
                {partner.features.slice(0, 4).map((feature, idx) => (
                  <div key={feature} className='bg-[#E6EFFF] rounded-[14px] md:rounded-[16px] p-4 flex items-start gap-3'>
                    <div className='bg-white rounded-[10px] md:rounded-[12px] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0'>
                      <Image src={directionIcons[idx % directionIcons.length]} alt='' width={22} height={22} />
                    </div>
                    <p className='text-brand-accent text-sm md:text-base font-medium leading-snug pt-1'>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4'>
                <p className='text-black/60 text-sm md:text-base leading-relaxed max-w-[300px]'>
                  Каждое направление — результат тщательной проработки и безупречного исполнения
                </p>
                <div className='flex gap-8'>
                  <div className='flex flex-col'>
                    <span className='text-black text-[36px] md:text-[44px] leading-none font-light'>1000+</span>
                    <span className='text-black/60 text-sm mt-1'>Проектов</span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-black text-[36px] md:text-[44px] leading-none font-light'>99%</span>
                    <span className='text-black/60 text-sm mt-1'>Качество</span>
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 mt-auto pt-2'>
                <div className='flex items-center gap-3 flex-1'>
                  <Image src='/main-page/icon-job.svg' alt='' width={36} height={36} className='shrink-0' />
                  <p className='text-black/60 text-sm leading-snug'>
                    Продукция соответствует международным стандартам качества
                  </p>
                </div>
                <Button className='h-12 px-8 rounded-[14px] shrink-0 text-sm md:text-base font-medium' asChild>
                  <Link href={SHOP_URL} target='_blank' rel='noopener noreferrer'>
                    Посмотреть продукцию
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <PartnerProductsCarouselSection brandName={partner.title} />

        <ProjectSection
          title={`Начните проект с ${partner.title}`}
          description='Подпишитесь на рассылку — будьте первыми, кто узнает об акциях и новинках'
          sideImage={null}
          fullWidth
          height={500}
        >
          <PartnerSubscribeForm />
        </ProjectSection>
      </main>
      <Footer />
    </div>
  );
}
