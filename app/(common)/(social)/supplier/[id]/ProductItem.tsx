import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ pd }: any) => {
  return (
    <Link
      href={"/product/" + pd.name.split(" ").join("-") + "-i." + pd.code}
      className="flex justify-between items-center pb-4 border-b border-gray-400"
    >
      <div className="w-full flex flex-col md:flex-row gap-5">
        <Image
          src={pd.avatar}
          alt="buyer"
          width={320}
          height={320}
          className="w-full md:w-80 h-80 object-cover"
        />
        <div className="flex flex-col gap-3">
          <p className="font-bold underline text-2xl line-clamp-2">{pd.name}</p>
          <p className="font-[650] text-[0.95rem] text-base text-gray-700 line-clamp-2 min-h-[3rem]">
            {Object.keys(pd.summary)
              .map((key: any) => `${key}: ${pd.summary[key]}`)
              .join(", ")}
          </p>
          {/* <div>
          <Button>Contacts Now</Button>
        </div> */}
        </div>
      </div>
    </Link>
  );
};

export default Product;
