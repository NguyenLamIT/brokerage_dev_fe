"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { getRequest } from "@/hook/apiClient";
import { Search, TrendingUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export const formatSearch = (data: any) => {
  const { buyer, post, product, rfq, supplier } = data;
  let search: any = [];
  post &&
    post.forEach((element: any) => {
      search.push({
        name: "Post - " + element.name,
        href:
          "/post/" + element.name.split(" ").join("-") + "-i." + element.code,
      });
    });
  product &&
    product.forEach((element: any) => {
      search.push({
        name: "Product - " + element.name,
        href:
          "/product/" +
          element.name.split(" ").join("-") +
          "-i." +
          element.code,
      });
    });
  buyer?.data &&
    buyer?.data.forEach((element: any) => {
      search.push({
        name: "Buyer - " + element.name,
        href:
          "/buyer/" + element.name.split(" ").join("-") + "-i." + element.code,
      });
    });
  rfq &&
    rfq.forEach((element: any) => {
      search.push({
        name: "RFQ - " + element.name,
        href:
          "/rfq/" + element.name.split(" ").join("-") + "-i." + element.code,
      });
    });
  supplier?.basic_supplier &&
    supplier?.basic_supplier.forEach((element: any) => {
      search.push({
        name: "Supplier - " + element.name,
        href:
          "/supplier/" +
          element.name.split(" ").join("-") +
          "-i." +
          element.code,
      });
    });
  return search;
};

const SocialMarketplaceSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [select, setSelect] = useState("ALL");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [keyword, setKeyword] = useState("");
  const route = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setData([]);
    setLoading(true);
    getRequest(
      `/product/list-category-level-3?keyword=${keyword}&page=1&limit=15`
    )
      .then((data) => {
        setLoading(false);
        setData(() => {
          const newData: any = [];
          data?.data.forEach((element: any) => {
            newData.push({
              name: element.name,
              href:
                select === "ALL"
                  ? "/search?category=" + element.code
                  : select.toLowerCase() + "?category=" + element.code,
              avatar: element.avatar,
            });
          });
          return [...newData];
        });
      })
      .catch((err) => console.log(err));
  }, [select, keyword]);

  const toggleCommandList = () => {
    setIsOpen(true);
  };
  const handleClickOutside = (event: any) => {
    if (event.target.closest(".command-container")) return;
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="bg-white border border-gray-200 p-4">
      <div className="command-container z-10  container px-0 md:px-8 py-6">
        <div className="bg-transparent w-full relative ">
          <div className="flex gap-2">
            <Select
              onValueChange={(e) => setSelect(e)}
              value={select}
              defaultValue="ALL"
            >
              <SelectTrigger className="w-44 border-b px-7 py-3 bg-gray-100 rounded-2xl h-14 text-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ALL">All</SelectItem>
                  <SelectItem value="PRODUCT">Products</SelectItem>
                  <SelectItem value="Suppliers">Suppliers</SelectItem>
                  <SelectItem value="BUYER">Buyers</SelectItem>
                  <SelectItem value="SUPPLIER">RFQs</SelectItem>
                  {/* <SelectItem value="POST">Posts</SelectItem> */}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="w-full relative">
              <Input
                type="text"
                className="flex px-8 py-3 bg-gray-100 rounded-2xl w-full leading-5 pl-11"
                placeholder={"Search social marketplact"}
                onClick={toggleCommandList}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter")
                    route.push(
                      select === "ALL"
                        ? "/search?keyword=" + keyword
                        : select.toLowerCase() + "?keyword=" + keyword
                    );
                }}
                startIcon={() => <Search className="h-5 w-5" />}
              />
              <div
                className={`absolute z-10 w-full bg-white top-16 list-none p-4 rounded-md shadow-md ${
                  isOpen ? "" : "hidden"
                }`}
              >
                <div
                  className="flex flex-col h-[40vh] overflow-auto"
                  ref={containerRef}
                >
                  {data.map((d: any, index: any) => (
                    <Link
                      href={d.href}
                      key={index}
                      className="flex items-center gap-3 hover:bg-gray-100 cursor-pointer w-full px-1"
                    >
                      <Image
                        src={d.avatar}
                        alt="image"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                      <div className="px-3 py-2 ">{d.name}</div>
                    </Link>
                  ))}
                  {loading && (
                    <div className="flex flex-col gap-3 w-full">
                      <Skeleton className="h-5 w-full px-3 py-2" />
                      <Skeleton className="h-5 w-full px-3 py-2" />
                      <Skeleton className="h-5 w-full px-3 py-2" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMarketplaceSearch;
