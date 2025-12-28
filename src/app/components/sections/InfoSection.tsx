'use client';

import InfoCard from "@/app/components/InfoCard";


 function InfoSection() {
    const cards = [
        {
            title: "Качество по ГОСТ и международным стандартам",
            description: "Вся продукция соответствует строгим требованиям качества",
            imageUrl: "/slide.png",
            badgeContent: "Сертификаты"
        },
        {
            title: "Собственные производственные мощности",
            description: "Контроль качества на всех этапах производства",
            imageUrl: "/slide.png",
            badgeContent: "Производство"
        },
        {
            title: "Широкий ассортимент материалов",
            description: "Более 500 позиций в каталоге продукции",
            imageUrl: "/slide.png",
            badgeContent: "Выбор"
        },
        {
            title: "Доставка по всему Кыргызстану",
            description: "Оперативная логистика в любой регион страны",
            imageUrl: "/slide.png",
            badgeContent: "Логистика"
        },
        {
            title: "Профессиональные консультации",
            description: "Техническая поддержка на всех этапах",
            imageUrl: "/slide.png",
            badgeContent: "Поддержка"
        },
        {
            title: "Гибкие условия сотрудничества",
            description: "Индивидуальный подход к каждому клиенту",
            imageUrl: "/slide.png",
            badgeContent: "Партнерство"
        }
    ];

    return (
        <section className="container py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Наши преимущества</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <InfoCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        badgeContent={card.badgeContent}
                        className="h-[400px]"
                        imageClassName="object-cover brightness-90"
                        gradientClassName="bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    />
                ))}
            </div>
        </section>
    );
}
export default InfoSection
