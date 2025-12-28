'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

import { SectionHeading } from '@/app/components/ui/section-heading';

import CheckAllIcon from '@/app/assets/icons/Check_All.svg';
import MonitorIcon from '@/app/assets/icons/monitor.svg';

type DirectionItem = {
  id: string;
  title: string;
  badgeLeft: string;
  badgeRight: string;
  description: string;
  bullets: string[];
};

const directions: DirectionItem[] = [
  {
    id: 'd1',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    badgeLeft: 'Lorem',
    badgeRight: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    bullets: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
  },
  {
    id: 'd2',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    badgeLeft: 'Lorem',
    badgeRight: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bullets: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
  },
  {
    id: 'd3',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    badgeLeft: 'Lorem',
    badgeRight: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bullets: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
  },
  {
    id: 'd4',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    badgeLeft: 'Lorem',
    badgeRight: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bullets: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
  },
  {
    id: 'd5',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    badgeLeft: 'Lorem',
    badgeRight: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bullets: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
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
                className={`w-[510px] h-[70px] text-left rounded-[15px] border px-4 flex items-center gap-4 transition-colors ${cardClass}`}
              >
                <span
                  className={`shrink-0 h-[50px] w-[50px] rounded-[10px] border flex items-center justify-center ${iconWrapClass}`}
                  aria-hidden='true'
                >
                  <MonitorIcon className='h-6 w-6' />
                </span>
                <span className='text-black text-[20px] leading-snug'>
                  {d.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: content */}
        <div className='rounded-[32px] bg-[#F8F8F8] p-4 md:p-6 xl:p-8 max-h-[527px]'>
          <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch'>
            <div className='relative overflow-hidden rounded-[22px] bg-white max-h-[467px] w-full lg:w-[510px] shrink-0'>
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
                <h3 className='text-black text-xl leading-snug'>
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

              <button
                type='button'
                className='mt-7 w-full rounded-[15px] bg-brand-accent text-white text-xl h-[60px]'
              >
                button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

