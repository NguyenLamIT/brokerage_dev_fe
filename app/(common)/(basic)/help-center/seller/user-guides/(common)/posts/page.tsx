import Link from 'next/link'
import React from 'react'

const Posts = () => {
    return (
        <div className='text-xl'>
            <h2 className="pt-10 pb-6">Introduction</h2>
            Creating posts are only available for premium suppliers and basic suppliers with a published profile.
            <div className="pt-6"><span className="  ">For more information about publishing your supplier profile, go to <Link color="primary" className="text-blue-800" href="/help-center/seller/user-guides/basic">Publish your basic supplier profile</Link></span></div>
            <h2 className="pt-10 pb-6">How to create posts</h2>
            <span color="onSurfaceSubtle" className="  ">Once you have published your supplier profile, you may create posts on feed.</span>
            <div className="pt-6 pb-2">To create a post:</div>
            <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
                <li className="pl-4"><span className="  ">Click on the <span className="font-medium">Create a post</span> text box.</span></li>
                <li className="pl-4">
                    <span className="  ">Type in your text (limit is 3000 characters). You can also choose to attach either an image or a video file.</span>
                    <div className="pt-2"><span className="  ">Note: URLs (like YouTube links) will be shown as link previews.</span></div>
                </li>
                <li className="pl-4"><span className="  ">Click <span className="font-medium">Post</span> to upload it on your feed.</span></li>
            </ol>
            <div className="pt-6"><span className="  ">You can edit or delete your post by clicking the <span className="font-medium">View More</span> icon at the top right corner of your post.</span></div>
            <h2 className="pt-10 pb-6">Where to see my posts</h2>
            <span className="  ">You can view and edit all your posts in the <Link color="primary" className="text-blue-800" href="/social/company-profile?type=posts">posts</Link> tab in <span className="font-medium">Company Workspace</span>.</span>
        </div>
    )
}

export default Posts