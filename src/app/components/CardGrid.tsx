import { Card, CardContent } from "@/app/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type CategoryCardSize = 'small' | 'medium' | 'large';

interface CategoryCardProps {
    title: string;
    imageUrl: string;
    href: string;
    size?: CategoryCardSize;
    icon?: ReactNode;
}

export function CardGrid({ title, imageUrl, href, size = 'small', icon }: CategoryCardProps) {
    const imageSizeClass = {
        small: 'h-40 w-40 lg:h-60 lg:w-60',
        medium: 'h-48 w-48 lg:h-80 lg:w-80 -bottom-10 right-2',
        large: 'h-64 w-64 lg:h-120 lg:w-120',
    }[size];

    const titleSizeClass = {
        small: 'w-[140px] lg:w-[175px]',
        medium: 'w-[180px] lg:w-[240px]',
        large: 'w-[200px] lg:w-[250px]',
    }[size]

    const imageSize = {
        small: '300px',
        medium: '300px',
        large: '500px',
    }[size];

    return (
        <Link href={href} className="group block h-full w-full">
            <Card className="h-full w-full relative flex flex-col bg-[#E6EFFF] transition-all hover:shadow-lg overflow-hidden rounded-4xl border-none shadow-none">
                <CardContent className="flex flex-col h-full p-4 pb-2">
                    {icon && (
                        <div className="absolute top-[15px] left-[15px] text-blue-500 flex items-center justify-center rounded-full bg-white w-9 h-9 md:w-[50px] md:h-[50px] shrink-0 [&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-[22px] md:[&>svg]:h-[24px]">
                            {icon}
                        </div>
                    )}
                    <div className="mt-auto flex justify-between items-end">
                        <div className={`absolute -bottom-10 -right-8 overflow-hidden ${imageSizeClass}`}>
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className="object-contain transition-transform group-hover:scale-105"
                                sizes={imageSize}
                            />
                        </div>
                        <h3 className={`relative text-xl lg:text-2xl font-semibold z-10 ${titleSizeClass}`}>{title}</h3>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
