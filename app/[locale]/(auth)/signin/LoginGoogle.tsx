'use client'
import { getRequest } from '@/hook/apiClient'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const LoginGoogle = () => {
    const onLoginGoogle = () => {
        getRequest('/auth/login-social?type=google')
            .then(data => {
                const url = data?.callback_url;
                if (url) {
                    const a = document.createElement('a');
                    a.href = url;
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }
            })
    }

    return (
        <div className='w-full'>
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