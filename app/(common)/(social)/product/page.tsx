import SearchBar from "@/components/Search";
import { getRequest } from "@/hook/api";
import { IProduct } from "@/type/product.interface";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import ProductItem from "./ProductItem";
import Category from "@/components/Category";
import LoadMore from "./Loadmore";

export const metadata: Metadata = {
  title: "Product",
  description: "Product",
};

const Product = async (props: any) => {
  const page = +props?.searchParams?.page || 1;
  const keyword = props?.searchParams?.keyword || " ";
  const category = props?.searchParams?.category || " ";
  const supplier_code = props?.searchParams?.supplier_code || " ";
  const [productData, countryData] = await Promise.all([
    getRequest(
      "/product/list?limit=12" +
      "&page=1" +
      "&keyword=" +
      keyword +
      "&category_code=" +
      category +
      "&supplier_code=" + supplier_code +
      "&level=1"
    ),
    getRequest("/config/countries"),
  ]);
  const products: IProduct[] = productData?.data;
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
      </div>
      <p className="text-3xl font-bold py-7 text-[#081440]">Products</p>
      <div>
        <SearchBar placeholder="Search products" category_number="10" />
        <Category />
      </div>
      <p className="py-3 text-[#081342]">
        {productData?.total_record + " Results"}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {products.map((pd: any, index: any) => {
          const country = countries.find(
            (country) => country.code == pd.origin_country?.code
          );
          return (
            <ProductItem key={index} pd={pd} country={country} />

          );
        })}
      </div>
      <div className="flex justify-center text-[#081342] pt-4 pb-20">
        <LoadMore length={products.length} total={productData?.total_record} countries={countries} />
      </div>
    </div>
  );
};

export default Product;
