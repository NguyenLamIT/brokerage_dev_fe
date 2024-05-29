'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"


const CarouseAutoPlay = ({ realtime }: any) => {
    return (
        <Carousel plugins={[
            Autoplay({
                delay: 2000
            }),
        ]}
            opts={{ loop: true }}
        >
            <CarouselContent>
                {realtime.map((r: any) => (
                    <CarouselItem
                        key={r.name}
                        className="md:basis-1/1 lg:basis-1/2 xl:basis-1/3 2xl:basis-1/5 3xl:basis-1/5"
                    >
                        <div className="p-1">
                            <div className="bg-white rounded-xl px-6 py-4 w-full flex flex-col items-center">
                                <p className="line-clamp-1">{r.name}</p>
                                <div
                                    className={`font-bold ${r.value < 0 ? "text-[#DE0D1B]" : "text-[#208C35]"
                                        } flex gap-4 items-center`}
                                >
                                    <Image
                                        src={r.value < 0 ? "/down.png" : "/top.png"}
                                        alt="top"
                                        width={13}
                                        height={13}
                                        className="h-3"
                                    />
                                    <p>{r.value}%</p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious src="/arrowleft.png" />
            <CarouselNext src="/arrowright.png" />
        </Carousel>

    )
}

export default CarouseAutoPlay