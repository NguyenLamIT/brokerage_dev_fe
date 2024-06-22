import SearchBar from "@/components/Search";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Command, CommandInput, CommandList } from "@/components/ui/command";
import { Separator } from "@/components/ui/separator";
import { getRequest } from "@/hook/api";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";
import SearchInsight from "../search-insight/page";
import SearchComponent from "../search-insight/Search";
import { convertHtmlToPlainText } from "@/heppler";
export const metadata: Metadata = {
  title: "Overview Insight",
  description: "Overview Overview Insight",
};
const Overview = async () => {
  const [
    suggestInsightData,
    opinioData,
    newsData,
    groundUpdateData,
    weeklyProductData,
    topicData
  ] = await Promise.all([
    getRequest("/insight/suggest?number_posts=5"),
    getRequest("/insight/on-the-ground-update?total_page=3&page=1"),
    getRequest("/insight/news?total_page=4&page=1"),
    getRequest("/insight/on-the-ground-update?total_page=2&page=1"),
    getRequest("/insight/weekly-product-update?total_page=5&page=1"),
    getRequest("/insight/topic?id=3&total_page=5")
  ]);
  const suggest: any[] = suggestInsightData?.data;
  const opinio: any[] = opinioData?.data?.data;
  const news: any[] = newsData?.data?.data;
  const groundUpdate: any[] = groundUpdateData?.data?.data;
  const weeklyProduct: any[] = weeklyProductData?.data?.data;
  const topics: any[] = topicData?.data?.data;

  return (
    <div className="container py-16">
      <SearchComponent />
      <div className="pt-9">
        <div className="pb-6 flex justify-between">
          <p className="font-bold text-2xl text-[#081440]">Latest</p>
        </div>
        <div>
          <Carousel length={suggest?.length - 3} opts={{
            align: "start",
          }}>
            <CarouselContent className="p-1 flex">
              {suggest.map((data: any) => (
                <CarouselItem
                  key={data.title_slug}
                  className="md:basis-1/2 lg:basis-1/4 cursor-pointer"
                >
                  <Link href={`/${data?.content_type.split('_').join('-').toLowerCase()}/` + data?.title_slug} className="p-1" target="_blank">
                    <div className="flex flex-col">
                      {/* <p className="font-bold text-[#4A4A4A] text-base  pb-[0.625rem]">
                        {data.content_type.split('_').join(" ")}
                      </p> */}
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious src="/left.png" />
            <CarouselNext src="/right.png" />
          </Carousel>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-[4.5rem] py-8">
        <div className="flex flex-col justify-between">
          <span className="font-bold text-2xl text-[#081440]">
            Featured
          </span>

          <Link href={`/${opinio[0]?.content_type.split('_').join('-').toLowerCase()}/` + opinio[0]?.title_slug} target="_blank">
            <div className="flex flex-col">
              <Image
                src={opinio[0]?.thumbnail_url}
                alt="khai tay"
                width={362}
                height={121}
                className="w-full aspect-[3/1] object-cover"
              />
              <div className="py-[0.625rem]">
                <Badge> {opinio[0].content_type.split('_').join(" ")}</Badge>
              </div>
              <p className="font-bold text-xl line-clamp-2  min-h-[3.5rem] ">
                {opinio[0].title}
              </p>
              <div className="flex justify-between font-bold text-gray-700 pt-[0.8125rem]">
                <div className="flex gap-[0.4375rem]">
                  <Image
                    src={"/penci.png"}
                    alt="penci"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-cover"
                  />
                  <span>{opinio[0].author}</span>
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
                    {moment(opinio[0].public_date, 'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <Link href={`/${opinio[1]?.content_type.split('_').join('-').toLowerCase()}/` + opinio[1]?.title_slug} target="_blank">
            <div className="flex flex-col">
              <Image
                src={opinio[1]?.thumbnail_url}
                alt="khai tay"
                width={362}
                height={121}
                className="w-full aspect-[3/1] object-cover"
              />
              <div className="py-[0.625rem]">
                <Badge> {opinio[1].content_type.split('_').join(" ")}</Badge>
              </div>
              <p className="font-bold text-xl line-clamp-2  min-h-[3.5rem]">
                {opinio[1].title}
              </p>
              <div className="flex justify-between font-bold text-gray-700 pt-[0.8125rem]">
                <div className="flex gap-[0.4375rem]">
                  <Image
                    src={"/penci.png"}
                    alt="penci"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-cover"
                  />
                  <span>{opinio[1].author}</span>
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
                    {moment(opinio[1].public_date, 'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-span-3 flex flex-col justify-between">
          <Link href={`/${opinio[2]?.content_type.split('_').join('-').toLowerCase()}/` + opinio[2]?.title_slug} target="_blank">
            <div className="flex flex-col">
              <Image
                src={opinio[2]?.thumbnail_url}
                alt={opinio[2]?.title}
                width={796}
                height={325}
                className="w-full aspect-[3.5] object-cover"
              />
              <div className="py-[0.625rem]">
                <Badge> {opinio[2].content_type.split('_').join(" ")}</Badge>
              </div>
              <p className="font-bold text-xl line-clamp-2  min-h-[3.5rem]">
                {opinio[2]?.title}
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
                  <span>{opinio[2].author}</span>
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
                    {moment(opinio[2].public_date, 'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4.4375rem] pt-[3.1875rem]">
            <Link href={`/${groundUpdate[0]?.content_type.split('_').join('-').toLowerCase()}/` + groundUpdate[0]?.title_slug} target="_blank">
              <div className="flex flex-col">
                <div className="py-[0.625rem]">
                  <Badge> {groundUpdate[0].content_type.split('_').join(" ")}</Badge>
                </div>
                <p className="font-bold text-xl  line-clamp-2  min-h-[3.5rem] ">
                  {groundUpdate[0].title}
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
                    <span>{groundUpdate[0].author}</span>
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
                      {moment(groundUpdate[0].public_date, 'DD-MM-YYYY HH:mm:ss').format(
                        "MMM Do, YYYY"
                      )}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </Link>
            <Link href={`/${groundUpdate[1]?.content_type.split('_').join('-').toLowerCase()}/` + groundUpdate[1]?.title_slug} target="_blank">
              <div className="flex flex-col">
                <div className="py-[0.625rem]">
                  <Badge> {groundUpdate[1].content_type.split('_').join(" ")}</Badge>
                </div>
                <p className="font-bold text-xl  line-clamp-2  min-h-[3.5rem]">
                  {groundUpdate[1].title}
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
                    <span>{groundUpdate[1].author}</span>
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
                      {moment(groundUpdate[1].public_date, 'DD-MM-YYYY HH:mm:ss').format(
                        "MMM Do, YYYY"
                      )}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {
            news.map((value: any, index: any) => (
              <Link href={'/news/' + value?.title_slug} key={index} target="_blank">
                <div className="flex flex-col">
                  <div className="py-[0.625rem]">
                    <Badge> {value.content_type.split('_').join(" ")}</Badge>
                  </div>
                  <p className="font-bold text-xl  line-clamp-2  min-h-[3.5rem]">
                    {value?.title}
                  </p>
                  <div className="flex justify-between font-bold text-gray-700 pt-[0.8125rem]">
                    <div className="flex gap-[0.4375rem]">
                      <Image
                        src={"/penci.png"}
                        alt="penci"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-cover"
                      />
                      <span>{value.author}</span>
                    </div>
                    <div className="flex gap-[0.4375rem]">
                      <Image
                        src={"/time.png"}
                        alt="penci"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-cover"
                      />
                      {moment(value.public_date, 'DD-MM-YYYY HH:mm:ss').format(
                        "MMM Do, YYYY"
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <Separator className="my-4" />
      <div className="py-8">
        <div className="flex gap-3 items-center">
          <p className="font-bold text-2xl text-[#081440]">
            {" "}
            Weekly Product Updates
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
        <Carousel length={suggest.length - 3} opts={{
          align: "start",
        }}>
          <CarouselContent className="p-1">
            {weeklyProduct.map((data: any) => (
              <CarouselItem
                key={data.title_slug}
                className=" md:basis-1/3 lg:basis-1/4 cursor-pointer"
              >
                <Link href={'/weekly-product-update/' + data?.title_slug} className="p-4" target="_blank">
                  <div className="flex flex-col gap-4 border border-gray-200 justify-end aspect-[5/6] rounded-lg relative">
                    <Image
                      src={data.thumbnail_url}
                      alt={data.title}
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
                      <p className="font-bold text-xl line-clamp-2 min-h-[3.5rem]">{data.title}</p>
                      <div className="flex justify-between font-bold text-gray-200 z-20">
                        <div className="flex gap-[0.4375rem]">
                          <Image
                            src={"/penci.png"}
                            alt="penci"
                            width={24}
                            height={24}
                            className="w-6 h-6 object-cover"
                          />
                          <span>{data.author}</span>
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
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious src="/left.png" />
          <CarouselNext src="/right.png" />
        </Carousel>
      </div>
      <Separator className="my-4" />
      <div className="py-8 flex flex-col gap-8">
        <div className="flex gap-3 items-center">
          <p className="font-bold text-2xl text-[#081440]">
            {" "}
            Innovation & Technology
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
        <Link href={`/${topics[0]?.content_type.toLowerCase()}/` + topics[0]?.title_slug} target="_blank" className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src={topics[0]?.thumbnail_url}
            alt={topics[0]?.title}
            width={392}
            height={392}
            className="w-full h-full object-cover aspect-video"
          />
          <div>
            <div className="flex flex-col gap-4 md:p-4">
              <div className="py-[0.625rem]">
                <Badge> {topics[0].content_type.split('_').join(" ")}</Badge>
              </div>
              <p className="font-bold text-xl line-clamp-2">
                {topics[0]?.title}
              </p>
              {/* <div dangerouslySetInnerHTML={{ __html: topics[0]?.content }} className="line-clamp-6 break-all" /> */}
              <div>{convertHtmlToPlainText(topics[0]?.content)}</div>
              <div className="flex justify-between font-bold text-gray-700 z-20">
                <div className="flex gap-[0.4375rem] text-gray-700 font-bold">
                  <Image
                    src={"/penci.png"}
                    alt="penci"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-cover"
                  />
                  <span> {topics[0]?.author}</span>
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
                    {moment(topics[0].public_date, 'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[4.4375rem]">
          {
            topics.slice(1,)
              .map((value: any, index: any) => (
                <Link key={index} href={`/${value?.content_type.split('_').join('-').toLowerCase()}/` + topics[0]?.title_slug} target="_blank">
                  <div className="flex flex-col">
                    <div className="py-[0.625rem]">
                      <Badge> {value.content_type.split('_').join(" ")}</Badge>
                    </div>
                    <p className="font-bold text-xl line-clamp-2 min-h-[3.5rem]">
                      {value.title}
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
                        <span>
                          {moment(value.public_date, 'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

              ))
          }
        </div>
      </div>
      <Separator className="my-4" />
      <div className="pt-12 pb-32 flex flex-col gap-5 items-center">
        <p className="font-bold text-4xl text-center text-[#081342]">
          Always stay up-to-date with our daily newsletter
        </p>
        <p className="text-2xl text-[#081342] text-center">
          Our newsletter brings you regular updates on emerging trends and
          developments in agri-foods across the globe.
        </p>
        {/* <Button>Learn more</Button> */}
      </div>
    </div>
  );
};

export default Overview;
