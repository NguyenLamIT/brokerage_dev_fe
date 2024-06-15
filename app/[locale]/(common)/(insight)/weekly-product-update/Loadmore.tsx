"use client";
import { Button } from "@/components/ui/button";
import { getRequest } from "@/hook/apiClient";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { Badge } from "@/components/ui/badge";

const LoadMore = ({ length, total }: any) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('category') || ''
    const keyword = searchParams.get('keyword') || ''
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);
    const fetchData = () => {
        setLoading(true);
        getRequest("/insight/weekly-product-update?total_page=8" + "&page=" + page + "&category_code=" + search + "&keyword=" + keyword)
            .then((data) => {
                setData((prev: any) => [...prev, ...data?.data?.data]);
                setPage((prev) => prev + 1);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };
    useEffect(() => {
        setPage(2)
        setData([])
    }, [searchParams])
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[1.6875rem] gap-y-[1.0625rem]">
                {data.map((dt: any, index: any) => (
                    <Link
                        key={index}
                        href={'/weekly-product-updates/' + dt?.title_slug}
                        target="_blank"
                        className="flex gap-[1.3125rem]"
                    >
                        <Image
                            src={
                                dt?.thumbnail_url
                            }
                            alt={dt?.title}
                            width={132}
                            height={132}
                            className="w-[8.25rem] aspect-square object-cover"
                        />
                        <div>
                            <div className="flex flex-col">
                                <div className="py-[0.625rem]">
                                    <Badge> {dt.content_type.split('_').join(" ")}</Badge>
                                </div>
                                <p className="font-bold text-xl  line-clamp-2 min-h-[3.5rem]">
                                    {dt?.title}
                                </p>
                                <div className="flex justify-between text-bold text-gray-700  pt-[0.8125rem]">
                                    <div className="flex gap-[0.4375rem]">
                                        <Image
                                            src={"/penci.png"}
                                            alt="penci"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 object-cover"
                                        />
                                        <span>{dt?.author}</span>
                                    </div>
                                    <div className="flex gap-[0.4375rem]">
                                        <Image
                                            src={"/time.png"}
                                            alt="penci"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 object-cover"
                                        />
                                        <span>{moment(dt?.public_date, 'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}</span>
                                    </div>
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

export default LoadMore;
