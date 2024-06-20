"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import userGuide from '../source.json'

const getItem = (pathname: any) => {
    let child: any[] = []
    userGuide.forEach(guide => {
        guide.child.forEach(e => {
            child.push(e)
        })
    })
    return child.find(i => i.href == pathname)

}


const Provider = ({ children }: any) => {
    const pathname = usePathname()
    const item = getItem(pathname)
    return (
        <div className="container py-20">
            <div className='pb-10'>
                <Link href={'/help-center/buyer/user-guides'} className='flex hover:underline items-center gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <p className='font-semibold text-xl'>
                        User Guide for Buyers
                    </p>
                </Link>
            </div>
            <h1 className='pb-10'>{item?.title}</h1>
            <div className=' grid md:grid-cols-3 gap-10 '>
                <div className='col-span-2 flex flex-col gap-14'>
                    <div className='flex flex-col gap-6 p-10 bg-gray-100 rounded-sm'>
                        <p className='font-semibold text-xl'>Overview</p>
                        <p className='font-medium text-xl'>{item?.des}</p>
                    </div>
                    {children}
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <h2 className='pb-8'>Other guides</h2>
                    {
                        userGuide.map(guide => (<div key={guide.title} className='pb-10'>
                            <h5 className='py-4 pt-10 border-t border-black'>{guide.title}</h5>
                            <div className='flex flex-col gap-4'>
                                {
                                    guide.child.map((item, index) => (<Link href={item.href} key={item.title} className={`flex justify-between items-center cursor-pointer p-2 hover:bg-gray-100 text-gray-700 rounded-sm ${item.href == pathname && "bg-primary text-white hover:bg-primary"}`}>
                                        <div className='flex flex-col gap-4'>
                                            <h5>{item.title}</h5>
                                        </div>
                                        <div className='inline-block'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                    </Link>))
                                }
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Provider