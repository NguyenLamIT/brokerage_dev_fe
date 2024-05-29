import { Badge } from '@/components/ui/badge'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GuideItem = ({ value }: any) => {
    return (
        <Link href={'/guide/' + value?.title_slug} className="" target="_blank">
            <div className="flex flex-col gap-4 justify-end aspect-[1.3] relative">
                <Image
                    src={
                        value?.thumbnail_url
                    }
                    alt={value?.title}
                    width={392}
                    height={392}
                    className="w-full h-full absolute top-0 left-0 z-0 object-cover"
                />
                <div className="flex flex-col justify-between gap-4 z-10 text-white bg-gradient-to-b px-6 py-6 from-transparent to-black">
                    <div>
                        <Badge className="bg-white text-black hover:bg-white hover:text-black">Guide  </Badge>
                    </div>
                    <p className="font-bold text-xl  line-clamp-2 min-h-[3.5rem]">
                        {value?.title}
                    </p>
                    <div className="flex justify-between text-bold text-[#939AA1] z-20">
                        <div className="flex gap-[0.4375rem]">
                            <Image
                                src={"/penci.png"}
                                alt="penci"
                                width={24}
                                height={24}
                                className="w-6 h-6 object-cover"
                            />
                            <span>{value?.author}</span>
                        </div>
                        <div className="flex gap-[0.4375rem]">
                            <Image
                                src={"/time.png"}
                                alt="penci"
                                width={24}
                                height={24}
                                className="w-6 h-6 object-cover"
                            />
                            <span>
                                {moment(value?.public_date).format("MMM Do, YYYY")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GuideItem