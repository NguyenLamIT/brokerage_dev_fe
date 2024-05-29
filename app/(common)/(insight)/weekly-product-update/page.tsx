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
export const metadata: Metadata = {
  title: "Weekly Product Updates  Insight",
  description: "Weekly Product Updates Insight",
};
const WeeklyProductUpdates = async (props: any) => {
  const keyword = props?.searchParams?.keyword || " ";
  const search = props?.searchParams?.category || " ";
  const weeklyProductData = await getRequest("/insight/weekly-product-update?total_page=8&page=1" + "&category_code=" + search + "&keyword=" + keyword)
  const weeklyProducts: any[] = weeklyProductData?.data?.data;
  return (
    <div className="container pb-14">
      <div className="flex flex-col md:flex-row justify-between pt-[4.3125rem]">
        <div>
          <p className="text-[2rem] font-bold text-[#081440]">
            Weekly Product Updates
          </p>
          <p className="text-[#081440] font-normal">
            Trending agricultural topics, delivered by our global market
            analysts
          </p>
        </div>
        <div className="flex gap-[0.875rem] items-center">
          <p className="text-081342">{weeklyProductData?.data?.total}  content</p>
          <CategoryInsight />
        </div>
      </div>
      <div className="pt-8 pb-[3.125rem]">
        <SearchBar placeholder="Search For Weekly Product Update" category_number="2" />
      </div>
      <div className="grid xl:grid-cols-2 gap-[2.3125rem]">
        <div className="flex flex-col gap-[0.8125rem] justify-between">
          <Link href={'/weekly-product-update/' + weeklyProducts[0]?.title_slug} className="" target="_blank">
            <div className="flex flex-col gap-4 justify-end aspect-[1.3] md:aspect-[2.3] relative">
              <Image
                src={weeklyProducts[0]?.thumbnail_url}
                alt={weeklyProducts[0]?.title}
                width={392}
                height={392}
                className="w-full h-full absolute top-0 left-0 z-0 object-cover"
              />
              <div className="flex flex-col justify-between gap-4 z-10 text-white bg-gradient-to-b px-6 py-6 from-transparent to-black">
                <div>
                  <Badge className="bg-white text-black hover:bg-white hover:text-black">
                    Weekly Product Updates
                  </Badge>
                </div>
                <p className="font-bold text-xl  line-clamp-2 min-h-[3.5rem]">
                  {weeklyProducts[0]?.title}
                </p>
                <div className="flex justify-between font-bold text-gray-200 z-20">
                  <div className="flex gap-[0.4375rem]">
                    <Image
                      src={"/penci.png"}
                      alt="penci"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-cover"
                    />
                    <span>                  {weeklyProducts[0]?.author}
                    </span>
                  </div>
                  <div className="flex gap-[0.4375rem]">
                    <Image
                      src={"/time.png"}
                      alt="penci"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-cover"
                    />
                    <span>{moment(weeklyProducts[1]?.public_date, 'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="grid lg:grid-cols-2 gap-[0.8125rem]">
            {
              weeklyProducts.slice(1, 3).map((value, index) =>
                <Link key={index} href={'/weekly-product-update/' + value?.title_slug} className="" target="_blank">
                  <div className="flex flex-col gap-4 justify-end aspect-[1.3] relative">
                    <Image
                      src={
                        value?.thumbnail_url
                      }
                      alt={value?.title}
                      width={392}
                      height={392}
                      className="w-full h-full absolute top-0 left-0 z-0 object-cover"
                    />
                    <div className="flex flex-col justify-between gap-4 z-10 text-white bg-gradient-to-b px-6 py-6 from-transparent to-black">
                      <div>
                        <Badge className="bg-white text-black hover:bg-white hover:text-black">
                          Weekly Product Updates
                        </Badge>
                      </div>
                      <p className="font-bold text-xl  line-clamp-2 min-h-[3.5rem]">
                        {value?.title}
                      </p>
                      <div className="flex justify-between font-bold text-gray-200 z-20">
                        <div className="flex gap-[0.4375rem]">
                          <Image
                            src={"/penci.png"}
                            alt="penci"
                            width={24}
                            height={24}
                            className="w-6 h-6 object-cover"
                          />
                          <span>{value?.title}</span>
                        </div>
                        <div className="flex gap-[0.4375rem]">
                          <Image
                            src={"/time.png"}
                            alt="penci"
                            width={24}
                            height={24}
                            className="w-6 h-6 object-cover"
                          />
                          <span>{moment(value?.public_date, 'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            }
          </div>
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col w-full gap-[1.0625rem]">
            {weeklyProducts.slice(3,).map((value, index) => (
              <Link
                key={index}
                href={'/weekly-product-update/' + value?.title_slug}
                target="_blank"
                className="flex gap-[1.3125rem] w-full"
              >
                <Image
                  src={
                    value?.thumbnail_url
                  }
                  alt={value?.title}
                  width={132}
                  height={132}
                  className="w-[8.25rem] aspect-square object-cover"
                />
                <div>
                  <div className="flex flex-col">
                    <div className="py-[0.625rem]">
                      <Badge> {value.content_type.split('_').join(" ")}</Badge>
                    </div>
                    <p className="font-bold text-xl  line-clamp-2 min-h-[3.5rem]">
                      {value?.title}
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
                        <span>{value?.author}</span>
                      </div>
                      <div className="flex gap-[0.4375rem]">
                        <Image
                          src={"/time.png"}
                          alt="penci"
                          width={24}
                          height={24}
                          className="w-6 h-6 object-cover"
                        />
                        <span>{moment(value?.public_date, 'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
      <div className="py-[1.0625rem] flex justify-center gap-1 text-[#081342] font-bold">
        <LoadMore length={weeklyProducts.length} total={weeklyProductData?.data?.total} />
      </div>
    </div>
  );
};

export default WeeklyProductUpdates;
