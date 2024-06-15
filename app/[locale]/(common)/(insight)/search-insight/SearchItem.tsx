import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SearchItem = ({sch}:any) => {
  return (
    <Link href={`/${sch?.content_type.toLowerCase()}/` + sch?.title_slug} target="_blank" className='flex gap-5 justify-between items-center border-b border-gray-200'>
    <div className="flex flex-col pb-[2.3125rem] w-full">
        <p className="font-bold text-[#4A4A4A] text-base py-[1.1875rem]">
            {sch.content_type.split('_').join(" ")}
        </p>
        <p className="font-bold text-xl line-clamp-2 min-h-[3.5rem]">
            {sch?.title}
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
                <span>{sch?.author}</span>
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
                    {moment(sch.public_date, 'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}
                </span>
            </div>
        </div>
    </div>
    <div className="h-full aspect-square"
    >
        <Image
            src={sch?.thumbnail_url}
            alt={sch?.title}
            width={121}
            height={121}
            className="h-full aspect-square object-cover rounded-sm"
        />

    </div>
</Link>
  )
}

export default SearchItem