'use client'
import Loading from '@/components/Loading'
import { Checkbox } from '@/components/ui/checkbox'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CheckItem = ({ value, href }: any) => {
    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const [code, setCode] = useState(searchParams.get(href))
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(false)
    }, [searchParams, setLoading])


    function handleSearch(term: any, vl: any) {
        setLoading(true)
        const params = new URLSearchParams(searchParams);
        if (term) {
            setCode(vl?.code)
            params.set(href, vl?.code);
            if (href == "category") {
                params.set('level', "1");
            }
        }
        else {
            setCode('')
            params.set(href, '');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <div>
            {
                loading && <div className="fixed h-screen w-screen opacity-50 bg-slate-100 z-40 top-0 right-0"><Loading /></div>
            }
            {
                value.map((vl: any, index: any) => (
                    <div key={index} className='flex items-center gap-4'>
                        <Checkbox checked={vl.code == code} onCheckedChange={e => handleSearch(e, vl)} />
                        <div className='text-xl text-gray-600'>{vl?.name} {vl?.count ? `(${vl?.count})` : ''}</div>
                    </div>
                ))
            }

        </div>
    )
}

export default CheckItem