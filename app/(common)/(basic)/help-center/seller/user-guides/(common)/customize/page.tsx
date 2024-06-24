import Link from 'next/link'
import React from 'react'

const Customize = () => {
    return (
        <div className='text-xl'>
            <h2 className="pt-10 pb-6 ">Introduction</h2>
            Following other users on feed is a feature that is only available for premium suppliers and basic suppliers with a published profile.
            <div className="pt-6"><span className="">For more information about publishing your supplier profile, go to <Link color="primary" className="text-blue-800" href="/help-center/seller/user-guides/basic">Publish your basic supplier profile</Link>.</span></div>
            <h2 className="pt-10 pb-6 ">Choose who to follow</h2>
            <span className="">Since posts of users that you follow are prioritized on your feed, customize your feed by selecting who to follow.</span>
            <div className="py-6"><span className="">To follow users, just click <span className="font-medium ">Follow</span> on their user cards, found on either their profile page or on posts on feed.</span></div>
            <span className="">To view your following and followers list, go to <Link color="primary" className="text-blue-800" href="/social/company-profile?type=posts">Company Workspace - Profile</Link>.</span>
        </div>
    )
}

export default Customize