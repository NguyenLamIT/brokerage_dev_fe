import SendMessage from "@/components/SendMessage";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactNow from "./ContactNow";

const SupplierItem = ({ pd, country }: any) => {
  return (
    <div className="flex flex-col gap-4 border border-gray-200 rounded-lg p-2">
      <Link
        target="_blank"
        href={
          "/supplier/" +
          pd.supplier_name.split(" ").join("-") +
          "-i." +
          pd.supplier_code
        }
        className="flex flex-col gap-2"
      >
        <Image
          src={pd.supplier_avatar}
          alt={pd.name}
          width={266}
          height={266}
          className="aspect-video w-full object-cover"
        />
        <div className="flex gap-3 justify-between">
          <div>
            <div className="flex gap-2 items-start">
              <p className="font-bold text-[#081440] line-clamp-2 min-h-[3.5rem] text-xl">{pd.supplier_name}</p>
              <div className="w-4 h-4 mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-blue-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

            </div>
            <div className="flex gap-2 items-center">
              <Image
                src={country?.image}
                alt="flag"
                width={21}
                height={18}
                className="w-6 h-5"
              />
              <p className="font-bold text-xs">{country?.name}</p>

            </div>
          </div>
          <Image
            src={pd.supplier_avatar}
            alt={pd.supplier_name}
            width={40}
            height={40}
            className="aspect-square w-10 h-10 object-cover"
          />
        </div>
        <p className="font-[650] text-[0.95rem] text-base text-gray-700 line-clamp-2 min-h-[3rem]">
          {pd?.supplier_summary}
        </p>
      </Link>
      <Link
        className="flex gap-6 items-center justify-between p-1 ring-[1px] ring-gray-300 rounded-md"
        href={"/product/" + pd.name.split(" ").join("-") + "-i." + pd.code}
      >
        <div className="flex gap-3 items-center">
          <Image
            src={pd.avatar}
            alt={pd.name}
            width={56}
            height={56}
            className="w-10 h-10 aspect-square object-cover"
          />
          <p className="text-base font-semibold break-all line-clamp-1">{pd.name}</p>
        </div>
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
      </Link>

      <div className="flex gap-2 items-center">
        <ContactNow representative={pd?.representative} />
      </div>
    </div>
  );
};

export default SupplierItem;
