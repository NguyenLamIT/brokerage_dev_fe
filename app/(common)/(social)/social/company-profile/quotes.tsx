"use client";
import { useEffect, useState } from "react";
import { getRequest } from "@/hook/apiClient";
import Loading from "@/components/Loading";
import QuotesItem from "./QuotesItem";
import LoadMoreQuotes from "./LoadMoreQuotes";

const QuotesTab = () => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            getRequest(
                "/rfq/quote-list?page=1&limit=6"
            )
                .then((data: any) => setData(data))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        })();
    }, []);
    if (loading) return <Loading />;
    return (
        <div className="py-8 gap-12 relative container">
            <div className="flex flex-col gap-4">
                <p className="text-3xl font-bold text-primary pb-8">Quotes List</p>
                <div className="grid md:grid-cols-3 gap-4">
                    {data?.data.map((item: any, index: any) => (
                        <QuotesItem item={item} key={index} />
                    ))}
                </div>
                {data?.data && (
                    <LoadMoreQuotes
                        length={data?.data.length}
                        total={data?.total}
                    />
                )}
            </div>
        </div>
    );
};
export default QuotesTab;
