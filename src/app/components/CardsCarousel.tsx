import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/app/components/ui/carousel";

interface CardsCarouselProps {
    cards: unknown[]
}


export function CardsCarousel({ cards }: CardsCarouselProps) {
    return (
        <div className="relative">
            <Carousel
                opts={{
                    align: "start",
                    slidesToScroll: 1,
                }}
                className="w-full"
            >
                <CarouselContent>

                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6" />
            </Carousel>
        </div>
    )
}
