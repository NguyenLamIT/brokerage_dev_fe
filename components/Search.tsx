"use client";
import { Input } from "@/components/ui/input";
import { getRequest } from "@/hook/apiClient";
import { Loader2, Search } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import CategoryItems from "./CategoryItems";

interface PropsSearch {
  placeholder: string;
  category_number: string;
}

const SearchBar = ({ placeholder, category_number }: PropsSearch) => {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    route.push("?keyword=" + event.target.value + (searchParams.get('category') ? ("&category=" + searchParams.get('category')) : ''), {
      scroll: false,
    });
  };
  const params = useParams<{ tag: string; item: string }>()
  useEffect(() => {
    setLoading(false)
  }, [params, setLoading])
  return (
    <div className="command-container z-10">
      <div className="bg-transparent w-full relative">
        <Input
          defaultValue={searchParams.get('keyword')||undefined}
          type="text"
          className="flex px-8 py-3 bg-gray-100 rounded-2xl w-full leading-5 pl-11"
          placeholder={placeholder}
          onChange={handleInputChange}
          startIcon={() => <Search className="h-5 w-5" />}
          endIcon={() =>
            loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <div></div>
          }
        />
      </div>
    </div>
  );
};

export default SearchBar;
