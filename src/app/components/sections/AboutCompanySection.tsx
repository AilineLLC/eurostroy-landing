import Image from 'next/image';

import { SectionHeading } from '@/app/components/ui/section-heading';

type StatCard = {
  title: string;
  description: string;
  iconSrc: string;
};

const stats: StatCard[] = [
  {
    title: 'Более 10 лет на рынке',
    description: 'Опыт, проверенный временем и доверием сотен партнёров',
    iconSrc: '/main-page/ranking.svg',
  },
  {
    title: 'Более 40 регионов',
    description: 'Широкая география — доставляем точно и в срок по всей стране',
    iconSrc: '/main-page/truck.svg',
  },
  {
    title: '3 собственных завода',
    description: 'Контроль качества и стабильность поставок на каждом этапе',
    iconSrc: '/main-page/buildings-2.svg',
  },
  {
    title: 'Свыше 50 000 тонн материалов в год',
    description: 'Большие объёмы — для любых задач и масштабов строительства',
    iconSrc: '/main-page/like-shapes.svg',
  },
];

export const AboutCompanySection = () => {
  return (
    <section className='container !mt-20'>
      <SectionHeading as='h3'>
        О компании
      </SectionHeading>

      <div className='mt-6 grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-4 xl:gap-6 items-start'>
        {/* Левая карточка с фото */}
        <div className='relative overflow-hidden rounded-[32px] w-[510px] h-[640px]'>
          <Image
            src='/main-page/company-1.jpg'
            alt='О компании'
            width={510}
            height={640}
            className='object-cover'
            priority={false}
          />

          <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent rounded-[32px]' />

          <div className='absolute inset-x-0 bottom-0 p-4 md:p-7'>
            <div className='max-w-[420px]'>
              <div className='text-white font-semibold text-[22px] md:text-[24px] leading-snug'>
                Основа надёжного строительства
              </div>
              <div className='mt-6 text-white/85 text-base leading-relaxed'>
                В строительной сфере я более 15 лет и с первого дня ставлю во главу угла качество, надёжность и долгосрочные отношения. Я верю, что современное строительство — это не просто материалы, а ответственность перед людьми и будущим
              </div>

              <div className='mt-6'>
                <Image
                  src='/main-page/company_sing.png'
                  alt='Подпись'
                  width={140}
                  height={70}
                  className='h-auto w-[120px] md:w-[140px]'
                />
              </div>

              <div className='mt-4 text-white/90 text-base'>
                Айбек Нурбеков - генеральный директор
              </div>
            </div>
          </div>
        </div>

        {/* Правая колонка */}
        <div>
          <div className='text-[#0B0B0B] text-[14px] md:text-[15px] leading-relaxed space-y-4'>
            <p>
              Наша история началась с идеи сделать поставки строительных
              материалов проще, быстрее и надёжнее. С момента основания мы
              прошли путь от локального поставщика до партнёра для строительных
              компаний по всей стране.
            </p>
            <p>
              За годы работы мы наладили прямые связи с производителями,
              расширили складские мощности и сформировали команду, которой можно
              доверять. Сегодня мы гордимся тем, что участвуем в строительстве
              сотен объектов — от частных домов до крупных жилых и коммерческих
              комплексов.
            </p>
            <p>
              Мы не стоим на месте и продолжаем развиваться, внедряя новые
              технологии, улучшая сервис и расширяя ассортимент, чтобы быть
              полезными каждому клиенту — от мастера-одиночки до генерального
              подрядчика.
            </p>
          </div>

          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-5'>
            {stats.map((card) => (
              <div
                key={card.title}
                className='relative overflow-hidden rounded-[32px] bg-[#F7FAFF] px-6 py-7 md:px-7 md:py-8 min-h-[200px]'
              >
                <div className='relative flex flex-col justify-between h-full z-10'>
                  <div className='text-[#015BFF] font-semibold text-[22px] md:text-[24px] leading-tight whitespace-pre-line max-w-[300px]'>
                    {card.title}
                  </div>
                  <div className='text-black text-base leading-relaxed whitespace-pre-line max-w-[300px]'>
                    {card.description}
                  </div>
                </div>

                <Image
                  src={card.iconSrc}
                  alt=''
                  width={190}
                  height={190}
                  className='pointer-events-none select-none absolute -right-0 top-[57%] -translate-y-1/2 opacity-90'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

