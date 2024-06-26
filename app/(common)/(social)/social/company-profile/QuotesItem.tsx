import Link from 'next/link'
import React from 'react'

const QuotesItem = ({ item }: any) => {
    return (
        <Link
            href={"/rfq/" + item?.product_name.split(" ").join("-") + "-i." + item?.rfq_code}
            className="flex font-semibold flex-col gap-4 p-2 rounded-lg border border-gray-200" >
            <p className="font-bold text-lg">Quote Info</p>
            <table className="border-separate border-spacing-1 w-full">
                <tbody className="flex flex-col gap-1">
                    <tr className="grid grid-cols-2">
                        <td className="text-gray-700 font-medium text-lg col-span-1">
                            Product Name
                        </td>
                        <td className="text-[#404040] text-lg font-semibold">
                            {item?.product_name}
                        </td>
                    </tr>
                    <tr className="grid grid-cols-2">
                        <td className="text-gray-700 font-medium text-lg col-span-1">
                            Offer Price
                        </td>
                        <td className="text-[#404040] text-lg font-semibold">
                            {item?.offer_price}
                        </td>
                    </tr>
                    <tr className="grid grid-cols-2">
                        <td className="text-gray-700 font-medium text-lg col-span-1">
                            Original Country
                        </td>
                        <td className="text-[#404040] text-lg font-semibold">
                            {item?.origin_country}
                        </td>
                    </tr>
                    <tr className="grid grid-cols-2">
                        <td className="text-gray-700 font-medium text-lg col-span-1">
                            Delivery Method
                        </td>
                        <td className="text-[#404040] text-lg font-semibold">
                            {item?.delivery_method}
                        </td>
                    </tr>
                    <tr className="grid grid-cols-2">
                        <td className="text-gray-700 font-medium text-lg col-span-1">
                            Estimate Delivery Date
                        </td>
                        <td className="text-[#404040] text-lg font-semibold">
                            {item?.estimated_delivery_date}
                        </td>
                    </tr>
                </tbody>
            </table>
        </Link>
    )
}

export default QuotesItem