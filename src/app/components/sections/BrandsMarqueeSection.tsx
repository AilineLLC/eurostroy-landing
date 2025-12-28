import Image from 'next/image';

type PartnerLogo = {
  src: string;
  alt: string;
};

const logos: PartnerLogo[] = [
  { src: '/franklin.png', alt: 'Franklin' },
  { src: '/henkel.png', alt: 'Henkel' },
  { src: '/knauf.png', alt: 'Knauf' },
  { src: '/techno.png', alt: 'Технониколь' },
  { src: '/vilpe.png', alt: 'Vilpe' },
  { src: '/arbiton.png', alt: 'Arbiton' },
];

export const BrandsMarqueeSection = () => {
  return (
    <section className="bg-white">
      <div className="container py-7 md:py-9">
        <div
          className="relative w-full overflow-hidden flex items-center group"
          aria-label="Логотипы партнёров"
        >
          <div
            className="flex-shrink-0 flex items-center min-w-max will-change-transform marquee-inner"
            style={{
              animation: 'marquee-scroll 30s linear infinite',
            }}
          >
            {/* Первая группа */}
            <div className="flex-shrink-0 flex items-center gap-12 md:gap-16 min-w-max">
              {logos.map((logo) => (
                <div
                  key={logo.src}
                  className="flex-shrink-0 flex items-center justify-center pr-12 md:pr-16"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={220}
                    height={56}
                    className="h-11 md:h-[52px] w-auto object-contain"
                    sizes="220px"
                  />
                </div>
              ))}
            </div>

            {/* Вторая группа (дубликат) */}
            <div className="flex-shrink-0 flex items-center gap-12 md:gap-16 min-w-max" aria-hidden="true">
              {logos.map((logo) => (
                <div
                  key={`${logo.src}-dup1`}
                  className="flex-shrink-0 flex items-center justify-center pr-12 md:pr-16"
                >
                  <Image
                    src={logo.src}
                    alt=""
                    width={220}
                    height={56}
                    className="h-11 md:h-[52px] w-auto object-contain"
                    sizes="220px"
                  />
                </div>
              ))}
            </div>

            {/* Третья группа (для перестраховки) */}
            <div className="flex-shrink-0 flex items-center gap-12 md:gap-16 min-w-max" aria-hidden="true">
              {logos.map((logo) => (
                <div
                  key={`${logo.src}-dup2`}
                  className="flex-shrink-0 flex items-center justify-center pr-12 md:pr-16"
                >
                  <Image
                    src={logo.src}
                    alt=""
                    width={220}
                    height={56}
                    className="h-11 md:h-[52px] w-auto object-contain"
                    sizes="220px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

