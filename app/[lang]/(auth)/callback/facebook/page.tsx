'use client'
import { getRequest } from '@/hook/apiClient'
import { signIn, useSession } from 'next-auth/react'
import { redirect, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
const Facebook = () => {
  const params = useSearchParams()
  const route = useRouter()
  useEffect(() => {
    (async () => {
      const queryParams = new URLSearchParams(params.toString());
      const queryString = queryParams.toString();
      const res = await signIn("credentials", {
        type: 'facebook',
        params: queryString,
        redirect: false,
      });
      if (!res?.error) {
        route.push("/");}
    })()
  }, []);

  return (
    <div>Login susuces, wait</div>
  )
}

export default Facebook