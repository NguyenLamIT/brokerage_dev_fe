import SearchBar from "@/components/Search";
import { getRequest } from "@/hook/api";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import BuyerItem from "./BuyerItem";
import Category from "@/components/Category";
import LoadMore from "./Loadmore";

export const metadata: Metadata = {
  title: "Buyer",
  description: "Buyer",
};

const buyer = async (props: any) => {
  const page = +props?.searchParams?.page || 1;
  const limit = 4 * page;
  const keyword = props?.searchParams?.keyword || " ";
  const category = props?.searchParams?.category || " ";

  const [buyerData, countryData] = await Promise.all([
    getRequest(
      "/buyer/list?limit=8" +
      "&page=1" +
      "&keyword=" +
      keyword +
      "&category_code=" +
      category +
      "&level=1"
    ),
    getRequest("/config/countries"),
  ]);
  const buyers: any[] = buyerData?.data;
  const countries: any[] = countryData?.data;
  return (
    <div className="container">
      <div className="relative">
        <Image
          src={"/banner2.png"}
          alt="Jeollanamdo"
          width={1683}
          height={547}
          className="w-full h-52 object-cover"
        />
        {/* <div className="absolute flex flex-col gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 text-white text-center">
          <p className="font-bold text-2xl">Jeollanamdo</p>
          <p>We delivery nature, health, and the taste of Korea </p>
          <div>
            <Button className="text-[#081440]" variant={"outline"}>
              View details
            </Button>
          </div>
        </div> */}
      </div>
      <p className="text-3xl font-bold py-7 text-[#081440]">Buyers</p>
      <div>
        <SearchBar placeholder="Search buyers" category_number="10" />
        <Category />
      </div>
      <p className="py-3 text-[#081342]">
        {buyerData.total_record + " Results"}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {buyers?.map((pd: any, index: any) => {
          const country = countries.find(
            (country) => country.code == pd.country.code
          );
          return <BuyerItem pd={pd} country={country} key={index} />;
        })}
      </div>
      <div className="flex justify-center text-[#081342] pt-4 pb-20">
        <LoadMore length={buyers.length} total={buyerData?.total_record} countries={countries} />

      </div>
    </div>
  );
};

export default buyer;
