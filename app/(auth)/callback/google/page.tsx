'use client'
import { getRequest } from '@/hook/apiClient'
import { useSession } from 'next-auth/react'
import { redirect, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const Google = () => {
    const params = useSearchParams()
    const { update } = useSession();

    useEffect(() => {
        const queryParams = new URLSearchParams(params.toString())
        const queryString = queryParams.toString()
        console.log(queryString)
        getRequest(`/auth/google/callback?${queryString}`)
            .then(data => {
                update({ create: data })
                    .then(() => redirect('/'))
            })
    }, [])

    return (
        <div>Login susuces, wait</div>
    )
}

export default Google