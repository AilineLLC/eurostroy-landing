'use client'

import {Button} from "@/app/components/ui/button";
import { SHOP_URL } from '@/app/lib/constants/shop';

function GetInTouch() {
    return (
        <section className="h-[600px] bg-[url('/getInTouch.png')] bg-cover bg-center relative">
            <div className="container relative z-10 flex flex-col items-start justify-center h-full text-left text-white">
                <h3 className="text-3xl md:text-5xl font-bold mb-4">
                    Начните ваш проект вместе с нами
                </h3>
                <p className="max-w-2xl text-lg md:text-xl mb-8">
                    Оставьте заявку — поможем с выбором материалов, рассчитаем объёмы и предложим оптимальные решения под ваш бюджет и сроки
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className='h-[65px] px-[30px] py-[20px] w-[223px] text-xl'>Оставить заявку</Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-white text-black hover:bg-gray-100 h-[65px] px-[30px] py-[20px] w-[223px] text-xl text-[#015BFF]"
                        asChild
                    >
                        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                            Перейти в магазин
                        </a>
                    </Button>
                </div>
            </div>
        </section>

    );
}

export default GetInTouch;
