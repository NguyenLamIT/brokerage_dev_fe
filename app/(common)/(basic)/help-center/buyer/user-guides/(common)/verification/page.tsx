import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Verification = () => {
  return (
    <div className='text-xl'>
      <h2 className="pt-10 pb-6 ">Introduction</h2>
      <div className="pb-6">After <Link color="primary" className="text-blue-800" href="/help-center/buyer/user-guides/register">registering as a buyer</Link>, you need to fulfill two requirements to participate in Tridge's B2B Marketplace:</div>
      <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
        <li className="pl-4">Become a verified buyer by uploading your business documents.</li>
        <li className="pl-4">Add at least one product of interest to your <Link color="primary" className="text-blue-800" href="/buyer/profile">Profile</Link>.</li>
      </ol>
      <div className="pt-6">Refer to the guides below to learn more.</div>
      <h2 className="pt-10 pb-6 ">How to become a verified buyer</h2>
      You may become a verified buyer by creating an account with a Tridge-verified work email. Otherwise, you need to upload a specified business document and get verified to participate in the platform. The verification process is conducted by Tridge and is free of charge.
      <div className="pt-6 pb-2">How to become a verified buyer:</div>
      <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
        <li className="pl-4">Go to your <Link className="text-blue-800" href="/settings/verification">Settings</Link> and click <span className="font-medium">Company Verification</span> tab.</li>
        <li className="pl-4">Upload your company’s business registration certificate or your name card for review. Click <span className="font-medium">Submit for review</span>.</li>
        <li className="pl-4">The review process may take up to 72 hours. Please wait for an email regarding the approval of your business documents.</li>
        <li className="pl-4">If your business documents are rejected, this means that Tridge was unable to verify the documents as certified or that the documents did not match your company information. Please follow any instructions provided in the email and re-upload your documents after making the appropriate changes.</li>
      </ol>
      <div className="pt-6 flex justify-center"><Image width={1200} height={600} className='md:w-2/3 h-auto' src="https://cdn-new.tridge.com/assets/352EGEL6.png" alt="image" /></div>
      <h2 className="pt-10 pb-6 ">Requirements for a valid business registration certificate</h2>
      <div className="pb-2">To ensure that your business registration certificate is approved, please make sure that your document meets the required conditions specified below:</div>
      <ul className="list-disc flex flex-col gap-2 px-8">
        <li className="">Company name: The company name provided in the certificate must match the company name in your Tridge account. If there are any discrepancies, get in touch with us so we can make the necessary changes.</li>
        <li className="">Registered address: Address stated in the document should match the official address of your company.</li>
        <li className="">Name of the owner or CEO: Name of the owner or CEO, if mentioned in the certificate, must match the name listed in your company records.</li>
        <li className="">Validity of the certificate: Ensure your certificate is not expired.</li>
        <li className="">Legal authority issuing the certificate: The document must be issued by a recognized and authorized government entity.</li>
        <li className="">Business registration number: The business registration number in the certificate should be valid and should be the one assigned to your company.</li>
      </ul>
      <div className="pt-2">Note: To expedite the review process, consider uploading a business registration certificate in English.</div>
      <h2 className="pt-10 pb-6 ">Requirements for a valid name card</h2>
      <div className="pb-2">To ensure that your name card is approved, please make sure that your name card meets the required conditions specified below:</div>
      <ul className="list-disc flex flex-col gap-2 px-8">
        <li className="">Company name: The company name provided in the name card must match the company name of your Tridge account.</li>
        <li className="">Personnel name: The first and last name presented on the name card must match the name of your Tridge account.</li>
      </ul>
      <div className="pt-2">Note: To expedite the review process, consider uploading a name card in English.</div>
      <h2 className="pt-10 pb-6 ">How to add a product of interest</h2>
      <div className="pb-6">Please follow the steps below to participate in Tridge's B2B Marketplace as a buyer.</div>
      <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
        <li className="pl-4">Go to your <Link color="primary" className="text-blue-800" href="/buyer/profile">Company Workspace</Link> and click <span className="font-medium">Profile</span>.</li>
        <li className="pl-4">In the <span className="font-medium">Products</span> section, click the <span className="font-medium">Add</span> button.</li>
        <li className="pl-4">Select your product of interest, then add your preferred sourcing countries and detailed specifications.</li>
      </ol>
      <h2 className="pt-10 pb-6 ">Add profile information</h2>
      <div className="pb-6">Apart from adding a product of interest, we recommend that you provide the following information in your company profile to better demonstrate the validity of your company.</div>
      <ul className="list-disc text-xl flex flex-col gap-2 px-6">
        <li className="">Company Logo</li>
        <li className="">About: Buyer company information including your company business type, year established, annual revenue, company address, company website, and any other company details.</li>
        <li className="">Verification details: Additional documentation that proves the legitimacy of your company. Any documents uploaded will be verified by Tridge, free of charge. (Note: The documents provided will not be disclosed to any third party)</li>
        <li className="">Products: The products you’re interested in sourcing and detailed specifications for the products will be shown in this section. Click <span className="font-medium">Add</span> to add a product of interest to your profile.</li>
        <li className="">Photos &amp; Videos</li>
        <li className="">Import History</li>
        <li className="">Our People: The members of your company will be visible in this section. For each company representative, you may choose to add additional information such as a user profile picture, official designation, and a short intro message (Note: Other verified users may follow, and message your company and your representatives through the <span className="font-medium">Send Message</span> or <span className="font-medium">Follow</span> buttons.)</li>
      </ul>
      <h2 className="pt-10 pb-6 ">Start participating in Tridge's B2B Marketplace</h2>
      Once you have become a verified buyer and added a product of interest, you can participate in Tridge's B2B Marketplace.
      <div className="pt-6">You may now start sourcing for products and connecting with other users. Refer to the guides below to learn more.</div>
      <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/buyer/user-guides/browse-products">Browse products</Link></div>
      <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/buyer/user-guides/rfqs">Create RFQs</Link></div>
      <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/buyer/user-guides/trade-assist">Request Trade Assist</Link></div>
      <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/buyer/user-guides/posts">Create posts</Link></div>
      <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/buyer/user-guides/customize">Customize your feed</Link></div>
      <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/buyer/user-guides/endorsements">Submit endorsements</Link></div>
    </div>
  )
}

export default Verification