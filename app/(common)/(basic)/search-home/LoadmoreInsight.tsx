"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getRequest } from "@/hook/apiClient";
import { Loader2 } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const LoadMoreInsight = ({ length, total, keyword, category }: any) => {
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);
    const fetchData = () => {
        setLoading(true);
        getRequest(
            "/insight/list-by-product?total_page=8" +
            "&keyword=" +
            keyword +
            "&code=" +
            category +
            "&level=3" +
            "&page=" +
            page
        )
            .then((data) => {
                setData((prev: any) => [...prev, ...data?.data?.data]);
                setPage((prev) => prev + 1);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.map((data: any, index: any) => (
                    <Link key={data?.title_slug} href={`/${data?.content_type.split('_').join('-').toLowerCase()}/` + data?.title_slug} className="p-1" target="_blank">
                        <div className="flex flex-col">
                            <div className="py-[0.625rem]">
                                <Badge> {data.content_type.split('_').join(" ")}</Badge>
                            </div>
                            <p className="font-bold text-xl line-clamp-2 min-h-[3.5rem]">
                                {data.title}
                            </p>
                            <div className="flex justify-between font-bold text-gray-700  pt-[0.8125rem]">
                                <div className="flex gap-[0.4375rem]">
                                    <Image
                                        src={"/penci.png"}
                                        alt="penci"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 object-cover"
                                    />
                                    <span className="text-bold">{data.author}</span>
                                </div>
                                <div className="flex gap-[0.4375rem]">
                                    <Image
                                        src={"/time.png"}
                                        alt="penci"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 object-cover"
                                    />
                                    <span>
                                        {moment(data.public_date, 'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}
                                    </span>
                                    {/* <span>{data.public_date}</span> */}
                                </div>
                            </div>
                        </div>
                    </Link>
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

export default LoadMoreInsight;
