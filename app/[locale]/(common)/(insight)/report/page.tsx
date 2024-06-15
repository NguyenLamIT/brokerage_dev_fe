import CategoryInsight from "@/components/CategoryInsight";
import { Badge } from "@/components/ui/badge";
import { Command, CommandInput, CommandList } from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getRequest } from "@/hook/api";
import moment from "moment";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoadMore from "./Loadmore";
import ReportItem from "./ReportItem";
export const metadata: Metadata = {
  title: "Report Insight",
  description: "Report Insight",
};
const Report = async (props: any) => {
  const keyword = props?.searchParams?.keyword || " ";
  const search = props?.searchParams?.category || " ";
  const newsData = await getRequest("/insight/report?total_page=9&page=1" + "&category_code=" + search + "&keyword=" + keyword)
  const news: any[] = newsData?.data?.data;
  return (
    <div>
      <div className="relative">
        <Image
          src={"/E4ELWIAT.png"}
          alt="Jeollanamdo"
          width={1500}
          height={500}
          className="w-full aspect-[3] object-cover"
        />
        <div className="absolute md:scale-100 flex flex-col gap-4 top-8 left-1/2 transform -translate-x-1/2 w-4/5 md:w-1/2 lg:w-1/3 text-white text-center">
          <p className="font-semibold md:text-xl">Report</p>
          <p className="font-semibold md:text-5xl">
            Dive deep into the market and industry with our reports
          </p>
          <p className="font-semibold hidden md:block text-xl">
            In-depth reports on major topics adn trends in foods & agriculture
          </p>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-between py-[4.3125rem]">
          <div></div>
          <div className="flex gap-[0.875rem] items-center">
            <p className="text-081342">{newsData?.data?.total}  content</p>
            <CategoryInsight />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-[3.75rem]">
          {news.map((value, index) => (
            <ReportItem key={index} value={value}/>
          ))}
        </div>
        <div className="py-[4.625rem] flex justify-center gap-1 text-[#081342] font-bold">
          <LoadMore length={news.length} total={newsData?.data?.total} />
        </div>
      </div>
    </div>
  );
};

export default Report;