import {CardGrid} from "@/app/components/CardGrid";
import { Truck, Wallet, BookOpen, Calculator } from "lucide-react";

const services = [
    {
        title: 'Доставка',
        image: '/delivery-grid.png',
        size: 'small' as const,
        icon: <Truck size={22} strokeWidth={1.5} />,
    },
    {
        title: 'Оплата',
        image: '/wallet-grid.png',
        size: 'small' as const,
        icon: <Wallet size={22} strokeWidth={1.5} />,
    },
    {
        title: 'Академия КНАУФ и ЕВРОГИПС',
        image: '/bank-grid.png',
        size: 'large' as const,
        icon: <BookOpen size={22} strokeWidth={1.5} />,
    },
    {
        title: 'Центр сертификатов',
        image: '/calc-grid.png',
        size: 'medium' as const,
        icon: <Calculator size={22} strokeWidth={1.5} />,
    },
]

function Services() {
    return (
        <section className='container !mt-8'>
            <div className='space-y-4'>
                <h3 className='text-2xl md:text-3xl font-semibold'>Наши сервисы</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[210px] gap-4">
                    {services.map((service) => {
                        const size = service.size ?? 'small';
                        const colSpan =
                            size === 'large' ? 'col-span-2 row-span-2' :
                                size === 'medium' ? 'col-span-2' : 'col-span-1';

                        return (
                            <div key={service.title} className={colSpan}>
                                <CardGrid title={service.title} imageUrl={service.image} size={size} href={'#'} icon={service.icon}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;
