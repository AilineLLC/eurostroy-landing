import Link from "next/link";
import Image from "next/image";
import { SubscribeForm } from "@/app/components/SubscribeForm";

 function Footer() {
    return (
        <footer className="text-black py-12 px-4 md:px-8 bg-[#F8F8F8] font-medium mt-10">
            <div className="max-w-[1590px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="space-y-2 md:col-span-3">
                    <div>
                        <Image src={'/logo.JPG'} alt={'logo'} width={300} height={300}/>
                    </div>
                    <p className="text-md leading-normal">
                        Покупайте строительные материалы, не выходя из дома — удобно, выгодно и с гарантией качества.
                    </p>
                    <div className="space-y-2 text-sm">
                        <p className='flex items-center gap-2'>г. Бишкек, ул. Горького 1/2</p>
                        <p className='flex items-center gap-2'> +996 700 700 700</p>
                        <Link href="mailto:evro@js@gmail.com" className="text-black hover:underline flex items-center gap-2">
                            evro@js@gmail.com
                        </Link>
                    </div>
                </div>

                <div className="md:col-span-2 md:col-start-5">
                    <h2 className="font-semibold text-lg mb-4">Карта сайта</h2>
                    <ul className="space-y-2 text-sm">
                        {['Главная', 'О компании', 'Основные деятельности', 'Приемущества'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="hover:underline">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-2 md:col-start-7">
                    <ul className="space-y-2 text-sm">
                        {['География и партнеры', 'Отзывы', 'Сервисы', 'Достижения'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="hover:underline">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='md:col-span-5 md:col-start-10'>
                    <SubscribeForm />
                </div>
            </div>

            <div className="max-w-[1590px] mx-auto mt-12 pt-6 border-t border-gray-300 text-sm text-black">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className='mt-10 text-md'>© 2022 – 2025 Евротипс</p>
                    <p className="mt-10 max-w-[780px] text-sm">
                        Продолжая использовать наш сайт, вы даете своё добровольное и ясно выраженное согласие на обработку файлов <a href="#" className='text-[#015BFF]'>Cookies</a> и других пользовательских данных, в соответствии с <a href="#" className='text-[#015BFF]'>Политикой конфиденциальности</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
}
export default Footer
