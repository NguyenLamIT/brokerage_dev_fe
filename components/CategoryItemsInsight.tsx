'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import Loading from "./Loading";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const CategoryItemsInsight = ({ category }: any) => {
    const route = useRouter()
    const searchParams = useSearchParams()
    const search = searchParams.get('category') || ''
    const keyword = searchParams.get('keyword') || ''

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(false)
    }, [search, setLoading])

    return (
        <div className="flex gap-3 py-2">
            {
                loading && <div className="fixed h-screen w-screen opacity-50 bg-slate-100 z-40 top-0 right-0"><Loading /></div>
            }
            <Select onValueChange={e => {
                setLoading(true)
                route.push("?category=" + e + "&keyword=" + keyword, { scroll: false })
            }}>
                <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {category.map((d: any, index: any) => (
                            <SelectItem
                                key={index} value={d?.code}>{d?.name}</SelectItem>

                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default CategoryItemsInsight;
