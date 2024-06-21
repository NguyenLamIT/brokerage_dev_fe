import { Metadata } from 'next';
import React from 'react'
import userGuide from './source.json'
import Link from 'next/link';

export const metadata: Metadata = {
    title: "User Guide for Buyers",
    description: "User Guide for Buyers",
};


const UserGuide = () => {
    return (
        <div className='container py-20 flex flex-col gap-10 md:w-2/3'>
            <h1 className='text-5xl'>User Guide for Buyers</h1>
            <h5>Everything buyers need to know to get started in Trade4go</h5>
            {
                userGuide.map(guide => (<div key={guide.title} className='pb-10'>
                    <h2 className='py-10 border-t border-black'>{guide.title}</h2>
                    <div className='flex flex-col gap-10'>
                        {
                            guide.child.map((item, index) => (<Link href={item.href} key={item.title} className={`${index != 0 && "border-t border-gray-300 pt-10"} flex justify-between items-center cursor-pointer hover:underline`}>
                                <div className='flex flex-col gap-4'>
                                    <h3>{item.title}</h3>
                                    <h5 className='decoration-white underline text-gray-500'>{item.des}</h5>
                                </div>
                                <div className='inline-block'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </Link>))
                        }
                    </div>
                </div>))
            }
        </div>
    )
}

export default UserGuide