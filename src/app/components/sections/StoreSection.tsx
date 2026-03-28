'use client'

import Image from "next/image";
import {Button} from "@/app/components/ui/button";
import {ArrowRight, BadgeCheckIcon} from "lucide-react";
import Catalog from '@/app/assets/icons/catalog.svg'
import Filters from '@/app/assets/icons/filters.svg'
import Tick from '@/app/assets/icons/tick.svg'
import Delivery from '@/app/assets/icons/delivery.svg'
import {Badge} from "@/app/components/ui/badge";
import { SHOP_URL } from '@/app/lib/constants/shop';

function StoreSection() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden container h-[700px] rounded-3xl ">
            <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                <Image
                    src="/tab-section.png"
                    alt="Фон магазина"
                    fill
                    className="object-cover"
                    quality={100}
                    priority
                />
            </div>

            <div className="relative z-10 h-full flex items-center p-8">
                <div className="flex-1 pr-10">
                    <h2 className="text-[42px] font-bold text-white mb-4">
                        Наш интернет-магазин
                    </h2>
                    <p className="text-md text-white/90 mb-8 max-w-[600px]">
                        5 000+ наименований в одном пространстве
                    </p>

                    <div className='flex items-center gap-2'>
                        <Badge
                            variant="secondary"
                            className="bg-white text-black dark:bg-blue-600 p-[10px] text-md space-x-2"
                        >
                            <Catalog className="!w-6 !h-6 " />
                            Удобный каталог
                        </Badge>
                        <Badge
                            variant="secondary"
                            className="bg-white text-black dark:bg-blue-600 p-[10px] text-md space-x-2"
                        >
                            <Filters className="!w-6 !h-6 " />
                            Фильтры
                        </Badge>
                        <Badge
                            variant="secondary"
                            className="bg-white text-black dark:bg-blue-600 p-[10px] text-md space-x-2"
                        >
                            <Tick className="!w-6 !h-6 " />
                            Наличие
                        </Badge>
                        <Badge
                            variant="secondary"
                            className="bg-white text-black dark:bg-blue-600 p-[10px] text-md space-x-2"
                        >
                            <Delivery className="!w-6 !h-6 " />
                            Доставка
                        </Badge>
                    </div>



                    <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="mt-5 flex items-center justify-between gap-2 pr-[5px] pl-[30px] rounded-full h-[60px] text-base w-[270px]">
                        Посмотреть каталог
                        <span className="flex items-center justify-center w-[50px] h-[50px] bg-white rounded-full">
                                <ArrowRight className="w-4 h-4 text-black" />
                        </span>
                    </Button>
                    </a>

                </div>

                <div className="relative w-[800px] h-[445px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/store.png"
                        alt="Интерьер нашего магазина"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default StoreSection;
