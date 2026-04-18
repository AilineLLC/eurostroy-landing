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

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const partner = partnersData[id];

  if (!partner) {
    return {
      title: 'Партнёр не найден',
    };
  }

  return {
    title: `${partner.title} | Евротипс`,
    description: partner.description,
  };
}

export default async function PartnerPage({ params }: PageProps) {
  const { id } = await params;
  const partner = partnersData[id];

  if (!partner) {
    notFound();
  }

  const brandName = partner.title.replace(/^Партн[её]р\s+/i, '').trim() || partner.title;

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='container flex-1'>
        {/* Баннер партнера */}
        <section className='relative w-full h-[500px] overflow-hidden rounded-[32px] mx-auto my-8 max-w-[1590px] container'>
          {/* Фон из SVG */}
          <div className='absolute inset-0'>
            <Image
              src='/main-page/bg-partner-detail.svg'
              alt=''
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Контент баннера */}
          <div className='relative h-full flex items-end justify-between pb-8 md:pb-12 px-8 md:px-12'>
            {/* Логотип партнера слева внизу */}
            <div className='flex-shrink-0'>
              <img
                src='/main-page/partner-logo-1.png'
                alt={partner.title}
                className='h-auto w-auto object-contain'
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>

            {/* Текст справа внизу */}
            <div className='flex-shrink-0 text-left text-white max-w-[700px]'>
              <p className='text-[24px] font-normal leading-relaxed mb-1'>
                Человечность, Партнерство, Преданность делу, Дух предпринимательства
              </p>
            </div>
          </div>
        </section>

        {/* Секция с описанием и изображением */}
        <section className='w-full mx-auto my-8 container !mt-20'>
          <div className='flex flex-col lg:flex-row gap-0 bg-white rounded-[32px]'>
            {/* Левая часть - текст */}
            <div className='flex-1 flex flex-col justify-center pr-10'>
              {/* Заголовок */}
              <SectionHeading
                as='h3'
              >
                Knauf — инновации в строительстве
              </SectionHeading>

              {/* Описание */}
              <p className='text-base text-black mb-8 leading-relaxed mt-6'>
                KNAUF — это глобальный бренд в области строительства, внутренней отделки и
                дизайна с мощной научно-производственной базой в России. В сотрудничестве с
                нашими партнёрами, обеспечивая широкое распространение продукции KNAUF, на
                протяжении трёх десятилетий мы предлагаем корпоративным и частным клиентам
                передовые технологические решения в области сухого строительства и отделки
                помещений, тепло- и звукоизоляции, а также модульных конструкций потолков и
                стен. Сочетая глобальную экспертизу и локальное производство, мы делаем
                высокое качество доступным.
              </p>

              {/* Статистика */}
              <div className='flex flex-col sm:flex-row gap-6 md:gap-20'>
                {/* Первая статистика */}
                <div className='flex flex-col'>
                  <span className='text-[32px] text-[#2563EB] leading-none mb-2'>
                    50+
                  </span>
                  <span className='text-base text-black'>
                    Постоянных партнёров
                  </span>
                </div>

                {/* Вторая статистика */}
                <div className='flex flex-col'>
                  <span className='text-[32px] text-[#2563EB] leading-none mb-2'>
                    25+
                  </span>
                  <span className='text-base text-black'>
                    Складов по всей стране
                  </span>
                </div>
              </div>
            </div>

            {/* Правая часть - изображение */}
            <div className='flex-shrink-0 min-w-[780px] min-h-[365px] rounded-[32px] overflow-hidden'>
              <Image
                src='/main-page/build-image.jpg'
                alt='Промышленный комплекс Knauf'
                width={780}
                height={365}
                className='object-cover w-full h-[365px] rounded-[32px]'
                priority
              />
            </div>
          </div>
        </section>

        {/* Секция Преимущества */}
        <section className='w-full mx-auto my-8 !mt-20'>
          <SectionHeading
            as='h2'
            size='large'
            className='mb-12'
          >
            Преимущества
          </SectionHeading>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Карточка 1: Более 350 сотрудников */}
            <div className='bg-[#2563EB] rounded-[24px] p-8 flex flex-col'>
              <div className='w-[60px] h-[60px] rounded-[10px] bg-white flex items-center justify-center mb-6'>
                <img
                  src='/main-page/building.svg'
                  alt=''
                  className='w-[33px] h-[33px]'
                />
              </div>
              <h3 className='text-white text-xl mb-4'>
                Более 350 сотрудников
              </h3>
              <p className='text-white text-base leading-relaxed'>
                В компании работает более чем 350 сотрудников, которые трудятся на 2 производственных площадках и по всей территории России.
              </p>
            </div>

            {/* Карточка 2: Продукция из натуральных компонентов */}
            <div className='bg-[#E6EFFF] rounded-[24px] p-8 flex flex-col'>
              <div className='w-[60px] h-[60px] rounded-[10px] bg-white flex items-center justify-center mb-6'>
                <img
                  src='/main-page/verify.svg'
                  alt=''
                  className='w-[33px] h-[33px]'
                />
              </div>
              <h3 className='text-black text-xl font-bold mb-4'>
                Продукция из натуральных компонентов
              </h3>
              <p className='text-black text-base leading-relaxed'>
                Только натуральные природные компоненты и никаких фенол-формальдегидных и акриловых смол.
              </p>
            </div>

            {/* Карточка 3: Мультинациональность */}
            <div className='bg-[#2563EB] rounded-[24px] p-8 flex flex-col'>
              <div className='w-[60px] h-[60px] rounded-[10px] bg-white flex items-center justify-center mb-6'>
                <img
                  src='/main-page/box-tick.svg'
                  alt=''
                  className='w-[33px] h-[33px]'
                />
              </div>
              <h3 className='text-white text-xl font-bold mb-4'>
                Мультинациональность
              </h3>
              <p className='text-white text-base leading-relaxed'>
                КНАУФ, основанная в 1932 году, является семейной компанией по производству строительных материалов и систем, в которой трудится множество сотрудников различных национальностей.
              </p>
            </div>

            {/* Карточка 4: 2 производственные площадки в России */}
            <div className='bg-[#E6EFFF] rounded-[24px] p-8 flex flex-col'>
              <div className='w-[60px] h-[60px] rounded-[10px] bg-white flex items-center justify-center mb-6'>
                <img
                  src='/main-page/building.svg'
                  alt=''
                  className='w-[33px] h-[33px]'
                />
              </div>
              <h3 className='text-black text-xl font-bold mb-4'>
                2 производственные площадки в России
              </h3>
              <p className='text-black text-base leading-relaxed'>
                Компания владеет двумя современными заводами по производству минеральной тепло- и звукоизоляции в г. Ступино, Московская область и г. Тюмень, Тюменская область.
              </p>
            </div>

            {/* Карточка 5: € 6.5 МИЛЛИАРДА */}
            <div className='bg-[#2563EB] rounded-[24px] p-8 flex flex-col'>
              <div className='w-[60px] h-[60px] rounded-[10px] bg-white flex items-center justify-center mb-6'>
                <img
                  src='/main-page/box-tick.svg'
                  alt=''
                  className='w-[33px] h-[33px]'
                />
              </div>
              <h3 className='text-white text-xl font-bold mb-4'>
                € 6.5 МИЛЛИАРДА
              </h3>
              <p className='text-white text-base leading-relaxed'>
                Оборот компании в 2016 году составил €6.5 миллиарда.
              </p>
            </div>

            {/* Карточка 6: Соответствие стандартам */}
            <div className='bg-[#E6EFFF] rounded-[24px] p-8 flex flex-col'>
              <div className='w-[60px] h-[60px] rounded-[10px] bg-white flex items-center justify-center mb-6'>
                <img
                  src='/main-page/star.svg'
                  alt=''
                  className='w-[33px] h-[33px]'
                />
              </div>
              <h3 className='text-black text-xl font-bold mb-4'>
                Соответствие стандартам
              </h3>
              <p className='text-black text-base leading-relaxed'>
                Продукция имеет все необходимые сертификаты и соответствует требованиям безопасности
              </p>
            </div>
          </div>
        </section>

        {/* Наша специализация и ключевые направления работы */}
        <section className='w-full mx-auto my-8 !mt-20'>
          <SectionHeading
            as='h2'
          >
            Наша специализация и ключевые направления работы
          </SectionHeading>

          <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch mt-10'>
            {/* Левая карточка */}
            <div className='rounded-[32px] overflow-hidden relative flex flex-col h-full'>
              {/* Фоновое изображение */}
              <div className='absolute z-20 w-[980.24px] h-[620px] -right-140 -bottom-10 w-1/2 rounded-[32px] overflow-hidden'>
                <Image
                  src='/main-page/job-img-card.png'
                  alt=''
                  width={980.24}
                  height={620}
                  priority
                />
              </div>
              {/* Левая половина */}
              <div className='relative bg-brand-accent p-8 md:p-10 flex flex-col justify-between w-full h-full z-10 rounded-[32px]'>
                <div>
                  <div className='h-[32px] md:h-[40px] w-auto mb-6 relative'>
                    <Image
                      src='/main-page/partner-logo-1.png'
                      alt='KNAUF INSULATION'
                      fill
                      className='object-contain object-left'
                      priority
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>

                  <p className='text-white text-base leading-relaxed max-w-[360px]'>
                    КНАУФ — это мировой бренд в сфере строительства, внутренней отделки и
                    дизайна с мощной научно-производственной базой в России.
                  </p>

                  <div className='grid grid-cols-2 gap-10 mt-8 max-w-[360px]'>
                    <div className='flex flex-col'>
                      <span className='text-white text-[42px] leading-none'>
                        200+
                      </span>
                      <span className='text-white text-base mt-2'>
                        Дизайнов
                      </span>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-white text-[42px] leading-none'>
                        20+
                      </span>
                      <span className='text-white text-base mt-2'>
                        Лет службы
                      </span>
                    </div>
                  </div>
                </div>

                <div className='mt-8 flex flex-col items-start gap-4'>
                  <div className='flex -space-x-3'>
                    {[
                      '/main-page/partner-ava-1.png',
                      '/main-page/partner-ava-2.png',
                      '/main-page/partner-ava-3.png',
                    ].map((src) => (
                      <div
                        key={src}
                        className='relative w-10 h-10 rounded-full overflow-hidden border-2 border-white'
                      >
                        <Image
                          src={src}
                          alt=''
                          fill
                          className='object-cover'
                        />
                      </div>
                    ))}
                  </div>

                  <div className='flex flex-col'>
                    <div className='flex items-center gap-1 mb-2'>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <svg
                          key={idx}
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9 0l2.472 6.464L18 7.545l-5.051 4.188L14.944 18 9 14.464 3.056 18l1.995-6.267L0 7.545l6.528-1.081z'
                            fill='#F59E0B'
                          />
                        </svg>
                      ))}
                    </div>
                    <p className='text-white text-sm leading-snug max-w-[385px]'>
                      Клиенты доверяют качеству и надёжности Knaufinsulation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая карточка */}
            <div className='bg-[#F7F7F7] rounded-[32px] p-8 md:p-10 flex flex-col min-h-[420px]'>
              <div>
                <h3 className='text-black text-[22px] md:text-[26px] font-semibold'>
                  Основные направления работы
                </h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                  {[
                    {
                      icon: '/main-page/truck-blue.svg',
                      text: 'Создание прочных и надёжных люков.',
                    },
                    {
                      icon: '/main-page/3dcube.svg',
                      text: 'Производство продукции для разных помещений и условий',
                    },
                    {
                      icon: '/main-page/designtools.svg',
                      text: 'Разработка эстетичных и функциональных решений',
                    },
                    {
                      icon: '/main-page/cpu.svg',
                      text: 'Контроль качества и соответствие стандартам',
                    },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className='bg-brand-secondary rounded-[16px] p-4 flex items-start gap-4'
                    >
                      <div className='bg-white rounded-[12px] w-12 h-12 flex items-center justify-center shrink-0'>
                        <Image
                          src={item.icon}
                          alt=''
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className='text-brand-accent text-base font-medium leading-snug'>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className='mt-8 flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between'>
                  <p className='text-black/70 text-base leading-relaxed max-w-[420px]'>
                    Каждое направление нашей работы — это результат тщательной проработки и
                    безупречного исполнения
                  </p>

                  <div className='flex items-end gap-12'>
                    <div className='flex flex-col'>
                      <span className='text-black text-[40px] md:text-[48px] leading-none'>
                        1000+
                      </span>
                      <span className='text-black/70 text-sm md:text-base mt-2'>
                        Проектов
                      </span>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-black text-[40px] md:text-[48px] leading-none'>
                        99%
                      </span>
                      <span className='text-black/70 text-sm md:text-base mt-2'>
                        качество
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='flex items-center gap-4'>
                  <Image
                    src='/main-page/icon-job.svg'
                    alt=''
                    width={40}
                    height={40}
                    className='shrink-0'
                  />
                  <p className='text-black/70 text-sm leading-snug'>
                    Продукция соответствует международным стандартам качества
                  </p>
                </div>

                <div className='flex items-center w-full'>
                  <Button
                    className='h-12 px-10 rounded-[14px] w-full text-base font-medium'
                    asChild
                  >
                    <Link
                      href={SHOP_URL}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Посмотреть продукцию
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PartnerProductsCarouselSection brandName={brandName} />
        <ProjectSection
          title={`Начните проект с ${brandName}`}
          description='Оставьте заявку — поможем с выбором материалов и предложим оптимальные решения под ваш бюджет и сроки'
          buttons={[
            {
              text: 'Оставить заявку',
              href: '/contacts',
              variant: 'default',
              className: 'bg-[#015BFF] text-white hover:bg-[#0146CC] rounded-lg px-6 py-8 text-base md:text-xl',
            },
            {
              text: 'Посмотреть продукцию',
              href: SHOP_URL,
              variant: 'outline',
              className:
                'bg-white text-[#015BFF] border-[#015BFF] hover:text-[#015BFF] rounded-lg px-6 py-8 text-base md:text-xl',
            },
          ]}
          sideImage={null}
          fullWidth
          height={500}
        />

      </main>
      <Footer />
    </div>
  );
}
