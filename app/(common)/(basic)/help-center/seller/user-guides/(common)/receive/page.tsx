import Link from 'next/link'
import React from 'react'

const Receive = () => {
    return (
        <div className='text-xl'>
            <h2 className="pt-10 pb-6 ">Introduction</h2>
            Only basic suppliers with a published profile and premium suppliers can receive messages.
            <div className="py-6"><span className=" ">For more information about publishing your supplier profile, go to <Link color="primary" className="text-blue-800" href="/help-center/seller/user-guides/basic">Publish your basic supplier profile</Link>, or <Link color="primary" className="text-blue-800" href="/help-center/seller/user-guides/premium">Publish your premium supplier profile</Link>.</span></div>
            Note: Basic suppliers can only reply to received messages. To be able to send messages first, upgrade to a premium supplier account.
            <h2 className="pt-10 pb-6 ">Receive messages</h2>
            <div className="pb-2">Users can send you messages through your:</div>
            <ul className="list-disc flex flex-col gap-2 px-8">
                <li className="">Product detail page</li>
                <li className="">Supplier profile page</li>
                <li className="">Posts on feed</li>
            </ul>
            <div className="py-6"><span className=" ">Every time you receive a message, you will be notified via email.</span></div>
            <div className="py-6"><span className=" ">The messages you receive will be displayed in your message list. Open the message window to reply.</span></div>
            <span className=" ">Actively participate in Trade4go  to increase the chance of receiving messages from other users.</span>
        </div>
    )
}

export default Receive