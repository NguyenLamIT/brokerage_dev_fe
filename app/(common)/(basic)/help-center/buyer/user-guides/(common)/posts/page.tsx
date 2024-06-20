import Link from 'next/link'
import React from 'react'

const Posts = () => {
    return (
        <div className='text-xl'>
            <h2 className="pt-10 pb-6 ">Introduction</h2>
            <span className="">Creating posts on feed is a feature that is only available for buyers with access to Trade4go 's B2B Marketplace. Click <Link color="primary" className="text-blue-800"  href="/help-center/buyer/user-guides/verification">here</Link> to learn more.</span>
            <h2 className="pt-10 pb-6 ">How to create posts</h2>
            Once you have gained access to Trade4go 's B2B Marketplace, you may create posts on feed.
            <div className="pt-6 pb-2">To create a post:</div>
            <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
                <li className="pl-4">Click on the <span className="font-medium">Create a post</span> text box.</li>
                <li className="pl-4">
                    Type in your text (limit is 3000 characters). You can also choose to attach either an image or a video file.
                    <div className="pt-2">Note: URLs (like YouTube links) will be shown as link previews.</div>
                </li>
                <li className="pl-4">Click <span className="font-medium">Post</span> to upload it on your feed.</li>
            </ol>
            <div className="pt-2">You can edit or delete your comment by clicking the <span className="font-medium">View More</span> icon at the top right corner of your comment.</div>
            <h2 className="pt-10 pb-6 ">Where to see my posts</h2>
            <span className="">View and edit all your posts in the <Link color="primary" className="text-blue-800"  href="/buyer/profile">Profile</Link> page in your <Link color="primary" className="text-blue-800"  href="/buyer/profile">Company Workspace</Link>.</span>
        </div>
    )
}

export default Posts