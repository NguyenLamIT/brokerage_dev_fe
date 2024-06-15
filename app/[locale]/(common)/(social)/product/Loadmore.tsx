"use client";
import { Button } from "@/components/ui/button";
import { getRequest } from "@/hook/apiClient";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductItem from "./ProductItem";

const LoadMore = ({ length, total, countries }: any) => {
    const searchParams = useSearchParams()
    const category = searchParams.get('category') || ''
    const keyword = searchParams.get('keyword') || ''
    const supplier_code = searchParams.get('supplier_code') || " ";
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);
    useEffect(()=>{
        setPage(2)
        setData([])
    },[searchParams])
    const fetchData = () => {
        setLoading(true);
        getRequest("/product/list?limit=12" +
            "&page=" + page +
            "&keyword=" +
            keyword +
            "&category_code=" +
            category +
            "&supplier_code=" + supplier_code +
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
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {data.map((pd: any, index: any) => {
                    const country = countries.find(
                        (country: any) => country.code == pd.origin_country?.code
                    );
                    return (
                        <ProductItem key={index} pd={pd} country={country} />

                    );
                })}
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
