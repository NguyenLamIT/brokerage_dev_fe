import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Rfqs = () => {
    return (
        <div className='text-xl'>
            <h2 className="pt-10 pb-6">Introduction</h2>
            The submit quote feature is only available for premium suppliers, and basic suppliers with a published profile.
            <div className="py-6"><span className=" ">For more information about publishing your supplier profile, go to <Link color="primary" className="text-blue-800" href="/help-center/seller/user-guides/basic">Publish your basic supplier profile</Link>.</span></div>
            <h2 className="pt-10 pb-6">How to find RFQs</h2>
            <div className="pb-2">Find RFQs in the following locations:</div>
            <ul className="list-disc flex flex-col gap-2 px-8">
                <li className="">Menu MarketPlace -&gt; RFQs</li>
                <li className="">Enter keyword then hit enter</li>
            </ul>
            <div className="pt-6">You will receive emails based on the products you've uploaded on your profile. Upload all products that you supply to receive notifications for all relevant RFQs.</div>
            <h2 className="pt-10 pb-6">How to submit quotes</h2>
            <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
                <li className="pl-4">Find the RFQ you need.</li>
                <li className="pl-4">Click to button "Submit Quote" in RFQ list or RFQ detail.</li>
                <li className="pl-4">Fill full information then submit.</li>
            </ol>
            <h2 className="pt-10 pb-6">Managing submitted quotes</h2>
            <span className=" ">You can view submitted quotes in <Link color="primary" className="text-blue-800" href="/seller/sourcing-request-offers">Company Workspace - Quotes</Link>.</span>
            <div className="pt-6 flex justify-center"><Image width={1200} height={600} className='md:w-2/3 h-auto' src="https://cdn-new.tridge.com/assets/BZKQ4XTU.png" alt="image" /></div>
            <div className="py-6"><span className=" ">Once your quote is selected by a buyer, you will receive an email with their contact information (phone number and email included). These details will also be available at the quote detail page.</span></div>
            <span className=" ">If your quote is not selected, you will still receive the buyer's email address via a notification email once the RFQ expires. This allows you to contact the buyer to submit an updated quote.</span>
        </div>
    )
}

export default Rfqs