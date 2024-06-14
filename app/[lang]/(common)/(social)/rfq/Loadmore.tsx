"use client";
import { Button } from "@/components/ui/button";
import { getRequest } from "@/hook/apiClient";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import RFQItem from "./RFQItem";

const LoadMore = ({ length, total, user }: any) => {
    const searchParams = useSearchParams()
    const category = searchParams.get('category') || ''
    const keyword = searchParams.get('keyword') || ''
    const supplier_code = searchParams.get('supplier_code') || " ";
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        setPage(2)
        setData([])
    }, [searchParams])
    const fetchData = () => {
        setLoading(true);
        getRequest("/rfq/list?limit=4" +
            "&page=" + page +
            "&keyword=" +
            keyword +
            "&category_code=" +
            category +
            "&level=1")
            .then((data) => {
                setData((prev: any) => [...prev, ...data?.data]);
                setPage((prev) => prev + 1);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {data.map((dt:any) => (
                    <RFQItem dt={dt} key={dt.code} user={user} />
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
