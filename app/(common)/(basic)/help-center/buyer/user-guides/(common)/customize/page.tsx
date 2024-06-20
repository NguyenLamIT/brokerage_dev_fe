import Link from 'next/link'
import React from 'react'

const Customize = () => {
    return (
        <div className='text-xl'>
            <h2 className="pt-10 pb-6 ">Introduction</h2>
            <span className=" ">Following other users on feed is a feature that is only available for buyers with access to Tridge's B2B Marketplace. Click <Link color="primary" className="text-blue-800"   href="/help-center/buyer/user-guides/verification">here</Link> to learn more.</span>
            <h2 className="pt-10 pb-6 ">Choose who to follow</h2>
            Since posts of users that you follow are prioritized on your feed, customize your feed by selecting who to follow.
            <div className="pt-6">To follow users, just click <span className="font-medium  ">Follow</span> on their user cards, found on either their profile page or on posts on feed.</div>
            <div className="pt-6">To view your following and followers list, go to <Link color="primary" className="text-blue-800"   href="/buyer/profile">Company Workspace - Profile</Link>.</div>
        </div>
    )
}

export default Customize