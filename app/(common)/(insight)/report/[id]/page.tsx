import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getRequest } from "@/hook/api";
import moment from "moment";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cache } from "react";
import NewsItem from "../../news/NewsItem";
const getDetail = cache(async (id: string) => {
  const detail: any = await getRequest("/insight/report/" + id);
  return detail?.data[0];
});

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const detail: any = await getDetail(params.id);
  return {
    title: detail.title,
    openGraph: {
      images: [],
    },
  };
}

const Detail = async ({ params }: any) => {
  const detail = await getDetail(params.id);
  const [
    newsData
  ] = await Promise.all([
    getRequest(`/insight/suggest?number_posts=9?content_type=${detail.content_type}&current_slug=${detail.title_slug}&page=1`),
  ]);
  const news = newsData?.data
  return (
    <div>
      <div className="relative">
        <Image
          src={
            detail?.thumbnail_url
          }
          alt={detail?.title}
          width={1900}
          height={354}
          className="w-full aspect-video md:aspect-[5.4] object-cover"
        />
        <div className="w-full h-full mx-auto absolute top-0 bg-black opacity-35">
        </div>
        <div className="w-full h-full mx-auto  absolute top-0">
          <div className="container">
            <div className="md:grid grid-cols-3 pt-[3.125rem]">
              <div className="col-span-2 ">
                <div className="text-base flex gap-[0.875rem] items-center pb-[0.875rem]">
                  <span className="font-bold text-white ">Retailer Trends</span>{" "}
                  <div className="text-white bg-[#2C2FF2] px-3 py-1 text-[0.625rem] font-bold">
                    Premium
                  </div>
                </div>
                <p className="text-[2rem] font-bold text-white pb-[0.875rem]">
                  {detail?.title}
                </p>
                <div className="flex flex-wrap gap-[0.625rem] pb-[0.875rem]">
                  {
                    detail?.
                      topies.map((value: any, index: any) => (
                        <Badge key={index}>{value?.name}</Badge>
                      ))
                  }
                </div>
                <div className="flex gap-[1.875rem] font-bold text-gray-200">
                  <div className="flex gap-[0.4375rem]">
                    <Image
                      src={"/penci.png"}
                      alt="penci"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-cover"
                    />
                    <span>{detail?.author}</span>
                  </div>
                  <div className="flex gap-[0.4375rem]">
                    <Image
                      src={"/time.png"}
                      alt="penci"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-cover"
                    />
                    <span>{moment(detail.public_date,'DD-MM-YYYY HH:mm:ss').format("MMM Do, YYYY")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid md:grid-cols-3 pt-[4.125rem] gap-10 relative">
          <div className="col-span-2">
            <div dangerouslySetInnerHTML={{ __html: detail?.content }} />

            <div className="text-xl pt-8">
              Source: <span className="text-[081342] underline">{detail?.author}</span>
            </div>
            <div className="pt-[6.25rem]">
              <p className="font-bold text-xl pb-[2.5rem]">
                Read more relevant content
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[1.875rem] gap-y-[2.3125rem] pb-20">
                {news.slice(0,6).map((value: any, index: any) => (
                  <NewsItem value={value} key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block sticky h-20 top-32">
            <p className="text-2xl font-bold pb-[1rem]">What to read next</p>
            <div className="flex flex-col gap-[2.5rem]">
              {news.slice(6,).map((value: any, index: any) => (
                <NewsItem value={value} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
