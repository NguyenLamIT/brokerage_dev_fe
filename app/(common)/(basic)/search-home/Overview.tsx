import BuyerItem from '../../(social)/buyer/BuyerItem';
import ProductItem from '../../(social)/product/ProductItem';
import RFQItem from '../../(social)/rfq/RFQItem';
import SupplierItem from '../../(social)/supplier/SupplierItem';
import { Badge } from '@/components/ui/badge';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Overview = ({ data, countries, user }: any) => {
    const { products, basic_supplier, insights, rfqs, buyers } = data;

    return (
        <div className='flex flex-col'>
            {products?.length > 0 && (
                <div className='py-8 pt-0 border-b border-gray-300 '>
                    <div className="flex justify-between pb-8 items-center">
                        <p className="font-bold text-3xl">Products</p>
                        <TabsList className="p-0 bg-transparent">
                            <TabsTrigger value="product" className="bg-transparent text-xl text-blue-900 font-bold">View all</TabsTrigger>
                        </TabsList>
                    </div>
                    <div className="grid md:grid-cols-6 gap-10">
                        {products
                            ?.slice(0, 6)
                            .map((pd: any, index: any) => {
                                const country = countries.find(
                                    (country: any) => country.code == pd.country?.name
                                );
                                return (
                                    <ProductItem pd={pd} country={country} key={index} />
                                );
                            })}
                    </div>
                </div>
            )}
            {basic_supplier?.length > 0 && (
                <div className='py-8 border-b border-gray-300 '>
                    <div className="flex justify-between pb-8 items-center">
                        <p className="font-bold text-3xl">Suppliers</p>
                        <TabsList className="p-0 bg-transparent">
                            <TabsTrigger value="supplier" className="bg-transparent text-xl text-blue-900 font-bold">View all</TabsTrigger>
                        </TabsList>
                    </div>
                    <div className="grid md:grid-cols-6 gap-10">
                        {basic_supplier.slice(0, 6).map((pd: any, index: any) => {
                            const country = countries.find(
                                (country: any) => country.code == pd.supplier_country.code
                            );
                            return (
                                <SupplierItem key={index} pd={pd} country={country} />
                            );
                        })}
                    </div>
                </div>
            )}
            {insights?.length > 0 && (
                <div className='py-8 border-b border-gray-300 '>
                    <div className="flex justify-between pb-8 items-center">
                        <p className="font-bold text-3xl">Insights</p>
                        <TabsList className="p-0 bg-transparent">
                            <TabsTrigger value="insight" className="bg-transparent text-xl text-blue-900 font-bold">View all</TabsTrigger>
                        </TabsList>
                    </div>
                    <div className="grid md:grid-cols-4 gap-10">
                        {insights.slice(0, 4).map((data: any, index: any) => {
                            return (
                                <Link key={index} href={`/${data?.content_type.split('_').join('-').toLowerCase()}/` + data?.title_slug} className="p-1" target="_blank">
                                    <div className="flex flex-col">
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
                            );
                        })}
                    </div>
                </div>
            )}
            {rfqs?.length > 0 && (
                <div className='py-8 border-b border-gray-300 '>
                    <div className="flex justify-between pb-8 items-center">
                        <p className="font-bold text-3xl">Rfqs</p>
                        <TabsList className="p-0 bg-transparent">
                            <TabsTrigger value="rfq" className="bg-transparent text-xl text-blue-900 font-bold">View all</TabsTrigger>
                        </TabsList>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                        {rfqs
                            ?.slice(0, 6)
                            .map((pd: any, index: any) => {
                                return (
                                    <RFQItem dt={pd} user={user} key={index} />
                                );
                            })}
                    </div>
                </div>
            )}
            {buyers.data?.length > 0 && (
                <div className='py-8 border-b border-gray-300 '>
                    <div className="flex justify-between pb-8 items-center">
                        <p className="font-bold text-3xl">Buyer</p>
                        <TabsList className="p-0 bg-transparent">
                            <TabsTrigger value="buyer" className="bg-transparent text-xl text-blue-900 font-bold">View all</TabsTrigger>
                        </TabsList>
                    </div>
                    <div className="grid md:grid-cols-4 gap-10">
                        {buyers?.data
                            ?.slice(0, 4)
                            .map((pd: any, index: any) => {
                                const country = countries.find(
                                    (country: any) => country.code == pd.country?.name
                                );
                                return (
                                    <BuyerItem pd={pd} country={country} key={index} />
                                );
                            })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Overview