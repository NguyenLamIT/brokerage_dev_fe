import { getRequest } from "@/hook/api";
import moment from "moment";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import LoadMoreInsight from "./LoadmoreInsight";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Insight",
    description: "Insight",
};

const Insight = async (props: any) => {
    const keyword = props?.keyword || "";
    const category = props?.category || "";

    const [insightData] = await Promise.all([
        getRequest(
            "/insight/list-by-product?total_page=" +
            8 +
            "&keyword=" +
            keyword +
            "&code=" +
            category +
            "&level=3"
        ),
    ]);
    const insights: any[] = insightData?.data?.data;
    return (
        <div >
            <p className="text-3xl font-bold pb-3 text-[#081440]">Insights</p>
            <p className="py-3 text-[#081342]">
                {insightData?.data?.total + " Results"}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {insights.map((data: any, index: any) => {
                    return (
                        <Link key={index} href={`/${data?.content_type.split('_').join('-').toLowerCase()}/` + data?.title_slug} className="p-1" target="_blank">
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
                    );
                })}
            </div>
            <div className="flex justify-center text-[#081342] pb-20">
                <LoadMoreInsight keyword={keyword} category={category} length={insights.length} total={insightData?.data?.total} />
            </div>
        </div>
    );
};

export default Insight;
