import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RetailerTrendItem = ({ value }: any) => {
    return (
        <Link href={'/retailer-trend/' + value?.title_slug} target="_blank">
            <Image
                src={value?.thumbnail_url
                }
                alt={value?.title}
                width={160}
                height={100}
                className="w-full aspect-[1.6] object-cover pb-[1.1875rem]"
            />
            <div className="flex flex-col">
                <div className="text-base flex gap-[0.625rem] items-center">
                    <span className="font-bold text-[#4A4A4A] ">Retailer Trends</span>{" "}
                    <div className="text-white bg-[#2C2FF2] px-3 py-1 text-[0.625rem] font-bold">
                        Premium
                    </div>
                </div>
                <p className="font-bold text-xl pt-[0.625rem] pb-[0.8125rem]">
                    {value?.title}
                </p>
                <div className="flex justify-between font-bold text-gray-700  pt-[0.8125rem]">
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
                            {moment(value.public_date,'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RetailerTrendItem