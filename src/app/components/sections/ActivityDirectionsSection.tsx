'use client';

import Image from 'next/image';
import { JSX, useMemo, useState } from 'react';

import { SectionHeading } from '@/app/components/ui/section-heading';

import CheckAllIcon from '@/app/assets/icons/Check_All.svg';

const PaintIcon = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M2 21a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1'/>
    <path d='M8 17V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12'/>
    <path d='M10 8h6M10 12h6M10 16h2'/>
  </svg>
);

const FacadeIcon = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
    <rect x='3' y='9' width='18' height='12' rx='1'/>
    <path d='M3 9l9-6 9 6'/>
    <rect x='9' y='13' width='6' height='8'/>
  </svg>
);

const InteriorIcon = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
    <rect x='2' y='3' width='20' height='18' rx='2'/>
    <path d='M9 3v18M2 9h7M2 15h7'/>
  </svg>
);

const MixIcon = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M6 3h12l2 7H4L6 3z'/>
    <path d='M4 10c0 6 2 9 8 9s8-3 8-9'/>
    <path d='M10 14h4'/>
  </svg>
);

const PlumbingIcon = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M12 2a5 5 0 0 0-5 5c0 3 5 10 5 10s5-7 5-10a5 5 0 0 0-5-5z'/>
    <circle cx='12' cy='7' r='1.5' fill='currentColor' stroke='none'/>
    <path d='M5 20h14'/>
  </svg>
);

const ElectricIcon = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M13 2L4.5 13H11L10 22l9-13h-6.5L13 2z'/>
  </svg>
);

type DirectionItem = {
  id: string;
  title: string;
  badgeLeft: string;
  badgeRight: string;
  description: string;
  bullets: string[];
  Icon: () => JSX.Element;
};

const directions: DirectionItem[] = [
  {
    id: 'd1',
    title: 'Лакокрасочные материалы',
    badgeLeft: 'Ассортимент',
    badgeRight: 'Решение',
    Icon: PaintIcon,
    description:
      'Подбираем материалы под конкретные условия эксплуатации: от влагостойких покрытий для сырых помещений до износостойких красок для высокой проходимости. Гарантируем 100% попадание в цвет при колеровке, экологичность и стойкость покрытия, которое не выцветет годами.',
    bullets: [
      'Интерьерные и фасадные краски',
      'Эмали и защитные лаки',
      'Специализированные грунтовки',
    ],
  },
  {
    id: 'd2',
    title: 'Внешняя отделка и фасады',
    badgeLeft: 'Ассортимент',
    badgeRight: 'Решение',
    Icon: FacadeIcon,
    description:
      'Комплексный подход к защите здания от климатических воздействий. Наши материалы помогают надежно утеплить объект, исключить промерзание стен и создать эстетичный, долговечный экстерьер, устойчивый к перепадам температур.',
    bullets: [
      'Фасадные панели',
      'Минеральные и полимерные утеплители',
      'Гидро- и пароизоляционные плёнки, крепежные системы',
    ],
  },
  {
    id: 'd3',
    title: 'Внутренняя отделка (KNAUF и аналоги)',
    badgeLeft: 'Ассортимент',
    badgeRight: 'Решение',
    Icon: InteriorIcon,
    description:
      'Всё необходимое для быстрого возведения перегородок и качественного чернового ремонта. Материалы обладают идеальной геометрией, что ускоряет монтаж конструкций любой сложности и обеспечивает идеальную базу для финишной отделки.',
    bullets: [
      'Гипсокартон (в т.ч. влаго- и огнестойкий)',
      'Металлические профили',
      'Потолочные системы и комплектующие',
    ],
  },
  {
    id: 'd4',
    title: 'Сухие строительные смеси',
    badgeLeft: 'Ассортимент',
    badgeRight: 'Решение',
    Icon: MixIcon,
    description:
      'Сертифицированные смеси, которые экономят время строительных бригад. Обеспечивают безупречное выравнивание поверхностей, исключают появление усадочных трещин и гарантируют мощную адгезию на долгие годы.',
    bullets: [
      'Профессиональные штукатурки и шпатлёвки',
      'Плиточные клеи высокой фиксации',
      'Наливные полы быстрого приготовления',
    ],
  },
  {
    id: 'd5',
    title: 'Сантехника и водоснабжение',
    badgeLeft: 'Ассортимент',
    badgeRight: 'Решение',
    Icon: PlumbingIcon,
    description:
      'Комплектуем объекты инженерными сетями, которые работают бесперебойно. Используем продукцию только проверенных заводов, чтобы полностью исключить риск протечек и обеспечить стабильное давление в системах водоснабжения и отопления.',
    bullets: [
      'Трубы различного диаметра и высокопрочные фитинги',
      'Запорная арматура',
      'Современное сантехническое оборудование',
    ],
  },
  {
    id: 'd6',
    title: 'Электрика и освещение',
    badgeLeft: 'Ассортимент',
    badgeRight: 'Решение',
    Icon: ElectricIcon,
    description:
      'Помогаем собрать безопасную и долговечную электросеть, которая строго соответствует всем современным нормам пожарной безопасности и выдерживает заявленные нагрузки без перебоев.',
    bullets: [
      'Кабельно-проводниковая продукция по ГОСТ',
      'Защитная автоматика и распределительные щиты',
      'Розетки и выключатели',
    ],
  },
];

export const ActivityDirectionsSection = () => {
  const [activeId, setActiveId] = useState(directions[0]?.id ?? '');

  const active = useMemo(
    () => directions.find((d) => d.id === activeId) ?? directions[0],
    [activeId],
  );

  return (
    <section className='container py-10 md:py-14'>
      <SectionHeading as='h3'>
        Основные направления деятельности
      </SectionHeading>

      <div className='mt-8 grid grid-cols-1 xl:grid-cols-[520px_1fr] gap-6 xl:gap-8 items-start'>
        {/* Left: tabs */}
        <div className='space-y-3'>
          {directions.map((d) => {
            const isActive = d.id === activeId;
            const iconWrapClass = isActive
              ? 'bg-brand-accent border-brand-accent text-white'
              : 'bg-white border-[#E6E6E6] text-brand-accent';
            const cardClass = isActive
              ? 'border-brand-accent bg-white'
              : 'border-[#E6E6E6] bg-white';

            return (
              <button
                key={d.id}
                type='button'
                onClick={() => setActiveId(d.id)}
                className={`w-full text-left rounded-[12px] border px-3 py-2.5 flex items-center gap-3 transition-colors ${cardClass}`}
              >
                <span
                  className={`shrink-0 h-[38px] w-[38px] rounded-[8px] border flex items-center justify-center ${iconWrapClass}`}
                  aria-hidden='true'
                >
                  <d.Icon />
                </span>
                <span className='text-black text-sm xl:text-[16px] leading-snug'>
                  {d.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: content */}
        <div className='rounded-[32px] bg-[#F8F8F8] p-4 md:p-6 xl:p-8'>
          <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch'>
            <div className='relative overflow-hidden rounded-[22px] bg-white h-[280px] md:h-[360px] lg:max-h-[467px] w-full lg:w-[510px] shrink-0'>
              <div className='absolute left-5 top-5 z-10 flex items-center gap-3'>
                <span className='rounded-full bg-white px-4 py-2 text-[14px] leading-none'>
                  {active.badgeLeft}
                </span>
                <span className='rounded-full bg-white px-4 py-2 text-[14px] leading-none'>
                  {active.badgeRight}
                </span>
              </div>

              <Image
                src='/main-page/activity.jpg'
                alt='Activity'
                width={1120}
                height={840}
                className='h-full max-h-[467px] w-full object-cover'
                priority={false}
              />
            </div>

            <div className='flex flex-col justify-between flex-1'>
              <div>
                <h3 className='text-black text-xl leading-snug font-semibold'>
                  {active.title}
                </h3>

                <p className='mt-3 text-black text-base leading-snug tracking-normal'>
                  {active.description}
                </p>

                <div className='mt-6 space-y-4'>
                  {active.bullets.map((t, index) => (
                    <div key={`${active.id}-bullet-${index}`} className='flex items-start gap-3'>
                      <CheckAllIcon className='mt-[2px] h-5 w-5 text-brand-accent shrink-0' />
                      <div className='text-[#0B0B0B] text-base md:text-[16px] leading-snug'>
                        {t}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <button
                type='button'
                className='mt-7 w-full rounded-[15px] bg-brand-accent text-white text-xl h-[60px]'
              >
                button
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

