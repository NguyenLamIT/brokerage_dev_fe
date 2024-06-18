import { Metadata } from 'next';
import React from 'react'
import FormContactUs from './form';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { IUserProfile } from '@/type/user-profile.interface';
import { getRequest } from '@/hook/api';


export const metadata: Metadata = {
    title: "ContactUs",
    description: "ContactUs"
};


const ContactUs = async () => {
    const session = await getServerSession(options);
    const user: IUserProfile = session?.user;
    const country = await getRequest("/config/countries")
    return (
        <div>
            <FormContactUs user={user} country={country}/>
        </div>
    )
}

export default ContactUs