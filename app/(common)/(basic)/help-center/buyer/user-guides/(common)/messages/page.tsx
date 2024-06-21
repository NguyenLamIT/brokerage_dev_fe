import Link from 'next/link'
import React from 'react'

const Messages = () => {
    return (
        <div className='text-xl'>
                <h2 className="pt-10 pb-6 ">Introduction</h2>
                <span className="">Messaging is only available for buyers with access to Trade4go 's B2B Marketplace. Click <Link color="primary" className="text-blue-800" href="/help-center/buyer/user-guides/verification">here</Link> to learn more.</span>
                <h2 className="pt-10 pb-6 ">Send messages</h2>
                Once you have gained access to Trade4go 's B2B Marketplace, you may contact other verified suppliers and buyers directly on the platform through Trade4go 's messaging feature.
                <div className="pt-6 pb-2">You can send messages to other verified buyers and suppliers by clicking <span className="font-medium  ">Send Message</span> on their user cards. Find their user cards in the following locations:</div>
                <ul className="list-disc flex flex-col gap-2 px-8">
                    <li className="">Buyer or supplier profile page</li>
                    <li className="">Posts on feed</li>
                    <li className="">Product detail page</li>
                </ul>
                <div className="pt-6">For existing conversations, you can simply find the message window from your message list.</div>
                <div className="pt-6"><span className="">To send messages to suppliers, you can also search for supplier profile and click <span className="font-medium  ">Contact Now</span>. Select the company representative you want to reach out and click <span className="font-medium  ">Send Message</span>.</span></div>
        </div>
    )
}

export default Messages