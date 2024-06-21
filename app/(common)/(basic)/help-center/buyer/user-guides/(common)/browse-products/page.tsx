import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BrowseProducts = () => {
    return (
        <div className='text-xl'>
            <h2 className="pt-10 pb-6 ">Search for products</h2>
            <div className="pb-2">How to search for products in Trade4go :</div>
            <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
                <li className="pl-4">Click the search field at the top of <Link color="primary" className="text-blue-800" href="/find-suppliers">Find Suppliers</Link>.</li>
                <li className="pl-4">Type what you are looking for.</li>
                <li className="pl-4">To search for a product, select the relevant products that appear in the dropdown as you type. To search using specific keywords, type the keyword and press enter.</li>
            </ol>
            <div className="pt-6 flex justify-center"><Image  width={1200} height={600} className='md:w-2/3 h-auto' src="https://cdn-new.tridge.com/assets/ITYJLZV7.png" alt="image" /></div>
            <div className="pt-6 pb-2">You can sort and filter your search results to find the exact product that you need:</div>
            <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
                <li className="pl-4">Search for a product.</li>
                <li className="pl-4">Click the <span className="font-medium">Advanced</span> filter button.</li>
                <li className="pl-4">Select the country of origin or other product attributes you want to filter by.</li>
                <li className="pl-4">Click <span className="font-medium">Show Results</span>.</li>
            </ol>
            <h2 className="pt-10 pb-6 ">Contacting the supplier</h2>
            To send messages or book meetings with suppliers, refer to the guides below to learn more.
            <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/buyer/user-guides/messages">Send messages</Link></div>
            <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/buyer/user-guides/video-calls">Book video call meetings</Link></div>
        </div>
    )
}

export default BrowseProducts