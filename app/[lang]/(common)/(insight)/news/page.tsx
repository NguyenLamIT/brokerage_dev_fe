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
import NewsItem from "./NewsItem";
import SearchBar from "@/components/Search";
import CategoryInsight from "@/components/CategoryInsight";
import LoadMore from "./LoadMore";
export const metadata: Metadata = {
  title: "News Insight",
  description: "News Insight",
};



const News = async (props: any) => {
  const keyword = props?.searchParams?.keyword || " ";
  const search = props?.searchParams?.category || " ";
  const newsData = await getRequest("/insight/news?total_page=12&page=1" + "&category_code=" + search + "&keyword=" + keyword)
  const news: any[] = newsData?.data?.data;
  return (
    <div className="container pb-12">
      <div className="flex flex-col md:flex-row justify-between pt-[4.3125rem]">
        <div>
          <p className="text-[2rem] font-bold text-[#081440]">News</p>
          <p className="text-[#081440] font-normal">
            The latest agricultural news, including updates on policy, business,
            technology, and more
          </p>
        </div>
        <div className="flex gap-[0.875rem] items-center">
          <p className="text-081342">{newsData?.data?.total} content</p>
          <CategoryInsight />
        </div>
      </div>
      <div className="pt-8 pb-[3.125rem]">
        <SearchBar placeholder="Search For news" category_number="2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[1.6875rem] gap-y-[3.125rem]">
        {news.map((value, index) => (
          <NewsItem key={index} value={value} />
        ))}
      </div>
      <div className="py-[3.125rem] flex justify-center gap-1 text-[#081342] font-bold">
        <LoadMore length={news.length} total={newsData?.data?.total} />
      </div>
    </div>
  );
};

export default News;
