import { Badge } from "@/components/ui/badge";
import { getRequest } from "@/hook/api";
import moment from "moment";
import { Metadata } from "next";
import Image from "next/image";
import { cache } from "react";
import NewsItem from "../../news/NewsItem";
import SupplierItem from "@/app/(common)/(social)/supplier/SupplierItem";
const getDetail = cache(async (id: string) => {
  const detail: any = await getRequest("/insight/on-the-ground-update/" + id);
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
    newsData,
    suppliersData,
    countryData
  ] = await Promise.all([
    getRequest(`/insight/suggest?number_posts=9?content_type=${detail.content_type}&current_slug=${detail.title_slug}&page=1`),
    getRequest("/supplier/list?limit=4"
      +
      "&category_code=" +
      detail?.product?.code
    ),
    getRequest("/config/countries"),

  ]);
  const news = newsData?.data
  const suppliers = suppliersData?.basic_supplier || []
  const countries: any[] = countryData?.data;
  return (
    <div className="container">
      <div className="grid md:grid-cols-3 pt-[3.125rem]">
        <div className="col-span-2">
          <p className="text-xl font-bold text-[#4A4A4A] pb-[0.875rem]">News</p>
          <p className="text-[2rem] font-bold text-[#4A4A4A] pb-[0.875rem]">
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
          <div className="flex justify-between items-center">
            <div className="flex gap-[1.875rem] text-bold text-[#939AA1]">
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
                <span>{moment(detail.public_date).format("MMM Do, YYYY")}</span>
              </div>
            </div>
            <div className="flex gap-2 relative w-52 justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                <path
                  fillRule="evenodd"
                  d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="absolute top-8 flex gap-[0.625rem] shadow-xl px-[0.8125rem] py-[0.3125rem]">
                <Image
                  alt="Facebook"
                  src={"/fb.png"}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
                <Image
                  alt="linkedin"
                  src={"/linkedin.png"}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
                <Image
                  alt="X"
                  src={"/x.png"}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
                <Image
                  alt="Mail"
                  src={"/mail.png"}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
                <Image
                  alt="Link"
                  src={"/Link.png"}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 pt-[4.125rem] gap-10 relative">
        <div className="col-span-2">
          <div className="flex flex-col gap-10">
            {
              detail?.summary &&
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-bold">Trade4go Summary</p>
                <div dangerouslySetInnerHTML={{ __html: detail?.summary }} />
              </div>
            }
            {
              detail?.content &&
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-bold">Original content</p>
                <div dangerouslySetInnerHTML={{ __html: detail?.content }} />
              </div>
            }
          </div>
          <div className="pt-[6.25rem]">
            <p className="font-bold text-xl pb-[2.5rem]">
              Read more relevant content
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[1.875rem] gap-y-[2.3125rem]">
              {news.slice(0, 6).map((value: any, index: any) => (
                <NewsItem href={`/${value?.content_type.split('_').join('-').toLowerCase()}/`} value={value} key={index} />
              ))}
            </div>
            <p className="font-bold text-xl py-[2.5rem]">
              Recommended suppliers for you
            </p>
            <div className="grid md:grid-cols-4 gap-3 pb-[4.375rem]">
              {suppliers.map((pd: any, index: any) => {
                const country = countries.find(
                  (country) => country.code == pd.supplier_country.code
                );
                return <SupplierItem key={index} pd={pd} country={country} />;
              })}
            </div>
          </div>
        </div>
        <div className="hidden md:block sticky h-20 top-32">
          <p className="text-2xl font-bold pb-[1rem]">What to read next</p>
          <div className="flex flex-col gap-[2.5rem]">
            {news.slice(6,).map((value: any, index: any) => (
              <NewsItem href={`/${value?.content_type.split('_').join('-').toLowerCase()}/`} value={value} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
