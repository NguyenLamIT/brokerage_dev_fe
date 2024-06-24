import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BrowseProducts = () => {
    return (
        <div className='text-xl'>
            <h2 className="pt-10 pb-6 ">Search for products</h2>
            <div className="pb-2">How to search for products in Trade4go :</div>
            <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
                <li className="pl-4">Click the search field at the top of <Link color="primary" className="text-blue-800" href="/product">MarketPlace product</Link>.</li>
                <li className="pl-4">Type what you are looking for.</li>
                <li className="pl-4">To search for a product, select the relevant products that appear in the dropdown as you type. To search using specific keywords, type the keyword and press enter.</li>
            </ol>
            <div className="pt-6 flex justify-center"><Image  width={1200} height={600} className='md:w-2/3 h-auto' src="/images/guide/product_search.PNG" alt="image" /></div>
            <h2 className="pt-10 pb-6 ">Contacting the supplier</h2>
            To send messages or book meetings with suppliers, refer to the guides below to learn more.
            <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/buyer/user-guides/messages">Send messages</Link></div>
        </div>
    )
}

export default BrowseProducts