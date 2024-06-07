'use client'
import { getRequest } from '@/hook/apiClient'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const LoginGoogle = () => {
    const [url, setUrl] = useState('/callback/google');
    const linkRef = useRef<any>();
    const onLoginGoogle = () => {
        getRequest('/auth/login-social?type=google')
            .then(data => {
                setUrl(data?.callback_url)
                linkRef?.current?.click();
            })
    }


    return (
        <div className='w-full'>
            <a
                href={url}
                ref={linkRef}
                className="hidden"
            ></a>
            <button onClick={onLoginGoogle} className="w-full bg-white xl:bg-none border border-[#939aa1] h-14 flex justify-center items-center rounded-[6px] py-2">
                <div className="w-[2.5rem]">
                    <Image
                        src="/images/plan/google.svg"
                        width={38}
                        height={38}
                        alt=""
                        layout="responsive"
                    ></Image>
                </div>
            </button >
        </div>
    )
}

export default LoginGoogle