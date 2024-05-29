"use client";
import { Button } from "@/components/ui/button";
import { getRequest } from "@/hook/apiClient";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import RetailerTrendItem from "./RetailerTrendItem";

const LoadMore = ({ length, total }: any) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('category') || ''
    const keyword = searchParams.get('keyword') || ''
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);
    const fetchData = () => {
        setLoading(true);
        getRequest("/insight/retailer-trend?total_page=9" + total + "&page=" + page + "&type=" + search + "&keyword=" + keyword)
            .then((data) => {
                setData((prev: any) => [...prev, ...data?.data]);
                setPage((prev) => prev + 1);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };
    useEffect(()=>{
        setPage(2)
        setData([])
    },[searchParams])
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[1.6875rem] gap-y-[3.125rem]">
                {data.map((dt: any, index: any) => (
                    <RetailerTrendItem key={index} value={dt} />
                ))}
            </div>
            {length + data.length < total && (
                <div className="w-full flex pt-4 justify-center items-center">
                    {loading ? (
                        <Button disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button>
                    ) : (
                        <Button onClick={fetchData} variant="outline" size={"lg"}>
                            Load more
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default LoadMore;
