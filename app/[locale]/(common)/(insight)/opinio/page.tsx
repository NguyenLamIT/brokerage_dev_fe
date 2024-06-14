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
import OpinionItem from "./OpinionItem";
import CategoryInsight from "@/components/CategoryInsight";
import LoadMore from "./LoadMore";
import SearchBar from "@/components/Search";
export const metadata: Metadata = {
  title: "Opinion Insight",
  description: "Opinion Insight",
};
const Opinio = async (props: any) => {
  const keyword = props?.searchParams?.keyword || " ";
  const search = props?.searchParams?.category || " ";
  const opinioData = await getRequest("/insight/opinio?total_page=6&page=1" + "&category_code=" + search + "&keyword=" + keyword)
  const opinios: any[] = opinioData?.data?.data;
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between pt-[4.3125rem]">
        <div>
          <p className="text-[2rem] font-bold text-[#081440]">Opinion</p>
          <p className="text-[#081440] font-normal">
            Trending agricultural topics, delivered by our global market
            analysts
          </p>
        </div>
        <div className="flex gap-[0.875rem] items-center">
          <p className="text-081342">{opinioData?.data?.total} content</p>
          <CategoryInsight />
        </div>
      </div>
      <div className="pt-8 pb-[3.125rem]">
        <SearchBar placeholder="Search For opinion" category_number="2" />
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-[1.5625rem] gap-y-[1.5625rem]">
        {opinios.map((value, index) => (
          <OpinionItem key={index} value={value} />
        ))}
      </div>
      <div className="py-[1.5625rem] flex justify-center gap-1 text-[#081342] font-bold">
        <LoadMore length={opinios.length} total={opinioData?.data?.total} />
      </div>
    </div>
  );
};

export default Opinio;
