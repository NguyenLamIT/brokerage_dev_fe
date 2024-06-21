import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Rfqs = () => {
    return (
        <div className='text-xl'>
            <h2 className="pt-10 pb-6 ">Introduction</h2>
            <span className="">The Create RFQs feature is only available for buyers with access to Trade4go 's B2B Marketplace. Click <Link color="primary" className="text-blue-800" href="/help-center/buyer/user-guides/verification">here</Link> to learn more.</span>
            <h2 className="pt-10 pb-6 ">How to create RFQs</h2>
            Once you have gained access to Trade4go 's B2B Marketplace, you may create 10 RFQs (for basic users) and receive quotes from verified suppliers on the platform.
            <div className="pt-6 pb-2">Create an RFQ:</div>
            <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
                <li className="pl-4">
                    Click on <span className="font-medium">Create RFQ</span> in the following locations.
                    <div className="pt-2">
                        <ul className="list-disc flex flex-col gap-2 px-8">
                            <li className="">Left side of feed. (Desktop)</li>
                            <li className="">Create RFQ banner on feed.</li>
                            <li className="">RFQ list page</li>
                            <li className="">Market Overview page</li>
                        </ul>
                    </div>
                </li>
                <li className="pl-4">Fill out your contact details and company information.</li>
                <li className="pl-4">Share details of your request like product specifications, expected order quantity, logistics and payment terms, sourcing countries, and your other requirements. Remember to mark your non-negotiable factors accordingly.</li>
                <li className="pl-4">Click <span className="font-medium">Submit RFQ</span>.</li>
            </ol>
            <div className="pt-2">Note: RFQs are valid for 30 days. You can receive quotes from suppliers within that timeframe.</div>
            <h2 className="pt-10 pb-6 ">How to view and select quotes from suppliers</h2>
            Once RFQs are created, suppliers may respond to your request and submit quotes.
            <div className="pt-6"><span className="">To view quotes you've received, go to the <Link color="primary" className="text-blue-800" href="/buyer/sourcing-requests">RFQs</Link> page under <span className="font-medium">Company Workspace</span>.</span></div>
            <div className="pt-6  flex justify-center"><Image  width={1200} height={600} className='md:w-2/3 h-auto' src="https://cdn-new.tridge.com/assets/2JRUUMCI.png" alt="image" /></div>
            <div className="pt-6 pb-2">To view the contact information of suppliers who submitted quotes:</div>
            <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
                <li className="pl-4">Review the information in the request detail page or you may also click <span className="font-medium">Download CSV</span> to get a CSV file with the complete quote details.</li>
                <li className="pl-4">To get in touch with a supplier, select the quote you want to proceed with.</li>
                <li className="pl-4">Click <span className="font-medium">Reveal Supplier Info</span> to get access to their contact details.</li>
            </ol>
            <h2 className="pt-10 pb-6 ">What happens when the RFQ is closed</h2>
            RFQs are only valid for 30 days. Once RFQs expire, all supplier information will be revealed even if you didn’t have the chance to select and reveal supplier information.
        </div>
    )
}

export default Rfqs