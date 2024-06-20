import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


export const metadata: Metadata = {
    title: "Help Center",
    description: "Help Center",
};

const helps = [
    {
        title: "Buyers’ Guide",
        des: "Everything buyers need to know to get started in Tridge",
        href: "/help-center/buyer/user-guides"
    },
    {
        title: "Suppliers’ Guide",
        des: "Everything suppliers need to know to get started in Tridge.",
        href: "/help-center/seller/user-guides"
    },
    {
        title: "FAQ",
        des: "Find quick answers in our FAQ",
        href: "/faq"
    }
]

const HelpCenter = () => {
    return (
        <div className='w-full'>
            <div className='relative z-30 h-96'>
                <div className='z-10 absolute top-0 right-0 w-full h-full flex items-center'>
                    <h1 className='text-6xl text-white container'>How can we help you?</h1>
                </div>
                <Image src={'/J372JLO6.png'} alt='help-center-bg' width={2000} height={1000} className='z-0 w-full h-full object-cover absolute top-0 right-0' />
            </div>
            <div className='container py-20 flex flex-col gap-20'>
                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        helps.map(help => (
                            <div key={help.title} className='pt-10 border-t border-blue-800 flex flex-col gap-6'>
                                <h1>{help.title}</h1>
                                <p className='text-xl'>{help.des}</p>
                                <div>
                                    <Link href={help.href} className='border border-gray-400 inline-block p-2 hover:bg-gray-400'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex flex-col md:flex-row gap-10 justify-between p-10 bg-gray-200 md:items-center'>
                    <div className='flex flex-col gap-6'>
                        <h2>Require additional assistance?</h2>
                        <h5>Our dedicated team is here to assist you.</h5>
                    </div>
                    <Link href={'/contact-us'}>
                        <Button size={'lg'}>Contact Us</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HelpCenter