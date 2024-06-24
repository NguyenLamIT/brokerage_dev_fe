import Link from 'next/link'
import React from 'react'

const Receive = () => {
    return (
        <div className='text-xl'>
            <h2 className="pt-10 pb-6 ">Introduction</h2>
            Every one can send and receive message for eachother
            <h2 className="pt-10 pb-6 ">Receive messages</h2>
            <div className="pb-2">Users can send you messages through your:</div>
            <ul className="list-disc flex flex-col gap-2 px-8">
                <li className="">Product detail page</li>
                <li className="">Supplier profile page</li>
            </ul>
            <div className="py-6"><span className=" ">Every time you receive a message, you will be notified via email.</span></div>
            <div className="py-6"><span className=" ">The messages you receive will be displayed in your message list at the top of right corner. Focus to message icon to show.</span></div>
            <span className=" ">Actively participate in Trade4go  to increase the chance of receiving messages from other users.</span>
        </div>
    )
}

export default Receive