import CategoryInsight from "@/components/CategoryInsight";
import SearchBar from "@/components/Search";
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
import GuideItem from "./GuideItem";
export const metadata: Metadata = {
  title: "Guide Insight",
  description: "Guide Insight",
};
const Guide = async (props: any) => {
  const keyword = props?.searchParams?.keyword || " ";
  const search = props?.searchParams?.category || " ";
  const newsData = await getRequest("/insight/guide?total_page=12&page=1" + "&category_code=" + search + "&keyword=" + keyword)
  const news: any[] = newsData?.data?.data;
  return (
    <div className="container">
      <div className="flex justify-between pt-[4.3125rem]">
        <div>
          <p className="text-[2rem] font-bold text-[#081440]">Guide
          </p>
          <p className="text-[#081440] font-normal">
            Comprehensive A to Z market information on entering specific agri-food markets across the globe
          </p>
        </div>
        <div className="flex gap-[0.875rem] items-center">
          <p className="text-081342">{newsData?.data?.total} content</p>
          <CategoryInsight />
        </div>
      </div>
      <div className="pt-8 pb-[3.125rem]">
        <SearchBar placeholder="Search For Guide" category_number="2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[1.5625rem] gap-y-[1.5625rem]">
        {news.map((value, index) => (
          <GuideItem key={index} value={value}/>
        ))}
      </div>
      <div className="py-1 flex justify-center gap-1 text-[#081342] font-bold">
        <LoadMore length={news.length} total={newsData?.data?.total} />
      </div>
    </div>
  );
};

export default Guide;
