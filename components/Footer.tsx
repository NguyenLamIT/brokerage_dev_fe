import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#081342]'>
      <div className='container grid grid-cols-1 md:grid-cols-3 items-center gap-16 py-9'>
        <Image src={'/trade4go.png'} alt='logo' width={191} height={72} />
        <div className='flex flex-col gap-4 pt-5 col-span-2'>
          <div className='flex flex-col md:flex-row gap-16 text-white font-bold'>
            <p>Data & Analytics</p>
            <p>Insights</p>
            <p>Social Marketplace</p>
            <p>Fulfillment Solution</p>
          </div>
          <div className='flex flex-col md:flex-row  gap-16 text-[#939AA1] font-bold uppercase'>
            <Link href={'/faq'}>FAQ</Link>
            <Link href={'/contact-us'}>Contact Us</Link>
            <Link href={'/about-us'}>About Trade4go</Link>
            <p>Expertise exchangwe</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
