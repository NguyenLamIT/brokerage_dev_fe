"use client";
import Loading from "@/components/Loading";
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
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";


const SearchComponent = ({ load }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [keyword, setKeyword] = useState("");
  const route = useRouter();
  const [loadingSearch, setLoadingSearch] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    setLoadingSearch(false)
  }, [searchParams, setLoadingSearch])
  const fetchData = () => {
    getRequest(`/insight/suggest-search?type=CATEGORY`)
      .then(data => {
        let search: any = [];
        data?.data.forEach((element: any) => {
            search.push({
              name: element.name,
              href: `/search-insight?level=${element?.level}&category=` + element.code,
            });
        });
        setData((prev) => [...prev, ...search]);
        setLoading(false)
      })
      .catch(err => console.log(err))
  }


  useEffect(() => {
    setLoading(true)
    fetchData()
  }, []);

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
    <div className="command-container z-10">
      {
        loadingSearch && <div className="fixed h-screen w-screen opacity-50 bg-slate-100 z-40 top-0 right-0"><Loading /></div>
      }
      <div className="bg-transparent w-full relative">
        <div className="flex gap-2">
          <Input
            type="text"
            className="flex px-8 py-3 bg-gray-100 rounded-2xl w-full leading-5 pl-11"
            placeholder={"Search insight"}
            onClick={toggleCommandList}
            onChange={e => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsOpen(false);
                if (load) {
                  setLoadingSearch(true)
                }
                route.push("/search-insight?keyword=" + keyword + "&level=2");
              }
            }}
            startIcon={() => <Search className="h-5 w-5" />}
          />
        </div>
        <div
          className={`absolute z-10 w-full bg-white top-14 list-none h-64 overflow-auto p-4 rounded-md shadow-md ${isOpen ? "" : "hidden"
            }`}
        >
          <div className="flex flex-col">
            {data.map((d: any, index: any) => (
              <Link onClick={() => {
                setIsOpen(false)
                if (load) {
                  setLoadingSearch(true)
                }
              }} href={d.href} key={index} className="flex items-center gap-3 hover:bg-gray-100 cursor-pointer w-full px-1">
                <div
                  className="px-3 py-2 "
                >
                  {d.name}
                </div>
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
  );
};

export default SearchComponent;
