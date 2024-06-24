import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#081342]'>
      <div className='container grid grid-cols-1 md:grid-cols-3 items-center gap-16 py-9'>
        <Image src={'/trade4go.png'} alt='logo' width={191} height={72} />
        <div className='flex flex-col gap-4 pt-5 col-span-2'>
          <div className='grid grid-cols-2 md:grid-cols-4  gap-5 text-white font-bold'>
            <Link href={'/overview'} className='md:col-start-2'>Insights</Link>
            <Link href={'/social'}>Marketplace</Link>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5 text-[#939AA1] font-bold uppercase'>
            <Link href={'/faq'}>FAQ</Link>
            <Link href={'/contact-us'}>Contact Us</Link>
            <Link href={'/about-us'}>About Trade4go</Link>
            <Link href={'/help-center'}>Help Center</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
