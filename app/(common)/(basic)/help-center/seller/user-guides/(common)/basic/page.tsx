import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Basic = () => {
    return (
        <div className='text-xl'>
            <h2 className="pt-10 pb-6 ">Introduction</h2>
            <span className="">After <Link color="primary" className="text-blue-800" href="/help-center/seller/user-guides/register">registering as a supplier</Link>, the next step is to publish your supplier profile.</span>
            <div className="pt-6"><span className="">Start by going to <Link color="primary" className="text-blue-800" href="/company-information">Profile</Link> and click the <span className="font-medium">Company information</span> tab.</span></div>
            <div className="pt-6 pb-2">To publish a basic supplier profile, you need to fulfill two requirements:</div>
            <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
                <li className="pl-4">Get verified by uploading your business documents.</li>
                <li className="pl-4">Upload at least one product at <Link color="primary" className="text-blue-800" href="/social/company-profile?type=overview">Company profile</Link>.</li>
            </ol>
            <div className="pt-6"><span className="">The banner at the top will display your status in meeting these requirements.</span></div>
            <h2 className="pt-10 pb-6 ">Get verified</h2>
            <span className="">
                Trade4go  is designed to be an environment for verified buyers and suppliers to interact based on trust. Thus, only verified buyers and suppliers may participate in Trade4go 's B2B Marketplace.
                <div className="pt-6">You may become a verified supplier by creating an account with a Trade4go -verified work email. If your work email is confirmed as one of Trade4go -verified work emails, you will be identified as a verified company upon completion of registration and will not need to take further steps to become verified. However, we recommend that you provide as many details as possible in the verification details section under your company profile to better demonstrate the validity of your company.</div>
                <div className="pt-6">If you have not registered with a Trade4go -verified work email, it is mandatory to upload your business documents and become verified to participate in the platform. The verification process is conducted by Trade4go  and is free of charge.</div>
            </span>
            <div className="pt-6 pb-2">How to upload your business documents:</div>
            <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
                <li className="pl-4">Go to your <Link color="primary" className="text-blue-800" href="/my-account">My account</Link> and click <span className="font-medium">Company Verification</span> tab.</li>
                <li className="pl-4">Upload your company’s business registration certificate or your name card for review. Click <span className="font-medium">Submit for review</span>.</li>
                <li className="pl-4">The review process may take up to 72 hours. Please wait for an email regarding the approval of your business documents.</li>
                <li className="pl-4">If your business documents are rejected, this means that Trade4go  was unable to verify the documents as certified or that the documents did not match your company information. Please follow any instructions provided in the email and re-upload your documents after making the appropriate changes.</li>
                <li className="pl-4">Once your business documents are approved and a product is uploaded, your profile will be published.</li>
            </ol>
            <h2 className="pt-10 pb-6 ">Requirements for a valid business registration certificate</h2>
            <div className="pb-2">To ensure that your business registration certificate is approved, please make sure that your document meets the required conditions specified below:</div>
            <ul className="list-disc flex flex-col gap-2 px-8">
                <li className="">Company name: The company name provided in the certificate must match the company name in your Trade4go  account. If there are any discrepancies, get in touch with us so we can make the necessary changes.</li>
                <li className="">Registered address: Address stated in the document should match the official address of your company.</li>
                <li className="">Name of the owner or CEO: Name of the owner or CEO, if mentioned in the certificate, must match the name listed in your company records.</li>
                <li className="">Validity of the certificate: Ensure your certificate is not expired.</li>
                <li className="">Legal authority issuing the certificate: The document must be issued by a recognized and authorized government entity.</li>
                <li className="">Business registration number: The business registration number in the certificate should be valid and should be the one assigned to your company.</li>
            </ul>
            <div className="pt-2">Note: To expedite the review process, consider uploading a business registration certificate in English.</div>
            <h2 className="pt-10 pb-6 ">Requirements for a valid name card</h2>
            <span className="">To ensure that your name card is approved, please make sure that your name card meets the required conditions specified below:</span>
            <ul className="list-disc flex flex-col gap-2 px-8">
                <li className="">Company name: The company name provided in the name card must match the company name of your Trade4go  account.</li>
                <li className="">Personnel name: The first and last name presented on the name card must match the name of your Trade4go  account.</li>
            </ul>
            <div className="pt-2">Note: To expedite the review process, consider uploading a business registration certificate in English.</div>
            <h2 className="pt-10 pb-6 ">Add products</h2>
            <span className="">To upload your products, click the <span className="font-medium">Products</span> tab, click <span className="font-medium">Add</span>, and complete the form.</span>
            <div className="pt-6">
                <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
                    <li className="pl-4">Fill in the name of the product.</li>
                    <li className="pl-4">Search and select the relevant product category.</li>
                    <li className="pl-4">Select the company representatives to be displayed in the product detail page. They will be the assigned contact person for this product.</li>
                    <li className="pl-4">Provide details and product specifications.</li>
                    <li className="pl-4">(Optional) If the product has received any awards, kindly provide details.</li>
                    <li className="pl-4">Select the country of origin for the product.</li>
                    <li className="pl-4">(Optional) Fill in production capacity, export volume, and the seasonality of the product.</li>
                    <li className="pl-4">(Optional) Write a detailed description of the product.</li>
                    <li className="pl-4">Upload photos of the product.</li>
                    <li className="pl-4">Click <span className="font-medium">Add Product</span> to upload the product.</li>
                </ol>
            </div>
            <div className="pt-6"><span className="">Note: Ensure your products stand out by providing comprehensive details. <span className="font-medium">The more information you provide, the higher your product will rank</span>, increasing the chances of connecting with potential buyers. Upload photos of your product and fill in the optional fields to maximize your exposure.</span></div>
            <div className="py-6"><span className="">Once you have completed uploading a product, a checkmark will be displayed in the top banner indicating that you have completed this step.</span></div>
            <h2 className="pt-10 pb-6 ">Add profile information</h2>
            <span className="">Once your profile is published, buyers will be able to search for and view your profile, and send you messages.</span>
            <div className="pt-6 pb-2">To be recognized as a trustworthy supplier, we recommend adding the following to your profile details:</div>
            <ul className="list-disc flex flex-col gap-2 px-8">
                <li className="">Company Logo</li>
                <li className="">Company Story</li>
                <li className="">Products</li>
                <li className="">Company Details</li>
                <li className="">Verification Details: Additional documentation that proves the legitimacy of your company. Any documents uploaded will be verified by Trade4go , free of charge. (Note: The documents provided will not be disclosed to any third party). Companies who get verified will receive a Trade4go  verification badge for their profile.</li>
                <li className="">Photos &amp; Videos</li>
                <li className="">
                    <div className="pb-1">Certifications: To upload certifications, go to <span className="font-medium">Certifications</span> tab, click <span className="font-medium">Add Certification</span>, and complete the form.</div>
                    <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
                        <li className="pl-4">Search for the certificate you want to add. (If the certificate is not in the list, click <span className="font-medium">+ New Certificate</span> and enter certification name, organization name, and website URL.)</li>
                        <li className="pl-4">Enter the certification number.</li>
                        <li className="pl-4">Fill in the issuing organization of the certificate.</li>
                        <li className="pl-4">Select the certification issuance date.</li>
                        <li className="pl-4">Choose the validity period of the certificate and click <span className="font-medium">Create Certification</span> to add the certificate.</li>
                    </ol>
                </li>
                <li className="">Our People: The members of your company will be visible in this section. For each company representative, you may choose to add additional information such as a user profile picture, official designation, and a short intro message (Note: Other verified users may follow, and message your company and your representatives through the <span className="font-medium">Send Message</span> or <span className="font-medium">Follow</span> buttons.)</li>
            </ul>
            <div className="pt-6"><span color="onSurfaceSubtle" className="  ">Note: Enhance your profile's visibility by offering detailed information. The more details you provide, the higher your profile will rank, boosting your chances of connecting with potential buyers. Upload comprehensive details about your company, including photos and videos, to maximize your exposure.</span></div>
            <h2 className="pt-10 pb-6 ">Start participating in Trade4go 's B2B Marketplace</h2>
            Once your profile is published, you may now start connecting with other users in Trade4go 's B2B Marketplace. Refer to the guides below to learn more.
            <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/seller/user-guides/rfqs">Submit quotes to buyers’ RFQs</Link></div>
            <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/seller/user-guides/receive">Receive messages</Link></div>
            <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/seller/user-guides/posts">Create posts</Link></div>
            <div className="pt-2"><Link color="primary" className="text-blue-800" href="/help-center/seller/user-guides/customize">Customize your feed</Link></div>
        </div>
    )
}

export default Basic