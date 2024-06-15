import { Badge } from '@/components/ui/badge'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AnalysisItem = ({ value }: any) => {
    return (
        <Link href={'/analysis/' + value?.title_slug} target="_blank" className="border border-gray-200 rounded-sm p-2">
            <div className="flex flex-col">
                <div className="py-[0.625rem]">
                    <Badge> {value.content_type.split('_').join(" ")}</Badge>
                </div>
                <p className="font-bold text-xl line-clamp-2 min-h-[3.5rem]">
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
                            {moment(value.public_date, 'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default AnalysisItem