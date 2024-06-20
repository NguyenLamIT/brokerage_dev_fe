import Link from 'next/link'
import React from 'react'

const Send = () => {
    return (
        <div className='text-xl'>
            <div className="mt-4">
                <div className="p-6 bg-blue-100">
                    <span color="onSurface" className="font-medium">Who can use this feature</span>
                    <div className="pt-3"><span color="onSurface" className="">Only premium users can send messages first. To learn about what you can do as a premium user, visit the <Link color="primary" className="text-blue-800" href="/about/trade-solution-pricing">Trade Solution plan</Link> page.</span></div>
                </div>
            </div>
            <h2 className="pt-10 pb-6 ">Send messages</h2>
            Once you have become a premium supplier, you may contact other verified users directly through the messaging feature.
            <div className="pt-6 pb-2">You can send messages to buyers and other verified suppliers by clicking <span className="font-medium">Send Message</span> on their user cards. Find their user cards in the following locations:</div>
            <ul className="list-disc flex flex-col gap-2 px-8">
                <li className="">Buyer or supplier profile page</li>
                <li className="">Posts on feed</li>
                <li className="">RFQ detail page</li>
            </ul>
            <div className="py-6"><span className="">For existing conversations, you can simply find the message window from your message list.</span></div>
            <span className="">Send messages to other suppliers through their product detail page or supplier card. Click <span className="font-medium">Contact Now</span>. Select the company representative you want to reach out and click <span className="font-medium">Send Message</span>.</span>
        </div>
    )
}

export default Send