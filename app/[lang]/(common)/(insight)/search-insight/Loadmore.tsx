"use client";
import { Button } from "@/components/ui/button";
import { getRequest } from "@/hook/apiClient";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import SearchItem from "./SearchItem";

const LoadMore = ({ length, total }: any) => {
    const searchParams = useSearchParams()
    const country = searchParams.get('country')
    const keyword = searchParams.get('keyword') || ''
    const category = searchParams.get('category')
    const topic = searchParams.get('topic')
    const level = searchParams.get('level')
    const type = searchParams.get('type')



    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        setData([])
    }, [searchParams])
    const fetchData = () => {
        setLoading(true);
        getRequest("/insight/search"
            + "?key=" + keyword
            + "&total_page=5"
            + "&page=" + page
            + (level ? ("&level=" + level) : '')
            + (country ? ("&country_code=" + country) : '')
            + (topic ? ("&topic_id=" + topic) : '')
            + (category ? ("&category_code=" + category) : '')
            + (type ? ("&content_type=" + type) : '')
        )
            .then((data) => {
                setData((prev: any) => [...prev, ...data?.data?.data]);
                setPage((prev) => prev + 1);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };
    return (
        <div className="w-full">
            {
                data.map((sch: any, index: any) => (
                    <SearchItem key={index} sch={sch}/>
                ))
            }
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
