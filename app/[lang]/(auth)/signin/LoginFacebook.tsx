'use client'
import { getRequest } from '@/hook/apiClient'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const LoginFacebook = () => {
    const onLoginFacebook = () => {
        getRequest('/auth/login-social?type=facebook')
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
            <button onClick={onLoginFacebook} className="w-full bg-[#0866FF] border border-[#939aa1] h-14 flex justify-center items-center rounded-[6px] py-2">
                <div className="w-[2.5rem]">
                  <Image
                    src="/images/plan/facebook-white.svg"
                    width={38}
                    height={38}
                    alt=""
                  ></Image>
                </div>
              </button>
        </div>
    )
}

export default LoginFacebook