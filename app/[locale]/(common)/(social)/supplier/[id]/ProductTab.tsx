import { getRequest } from '@/hook/api';
import React from 'react'
import LoadMore from './LoadMore';
import ProductItem from '../../product/ProductItem';

const ProductTab = async ({ user, id, countries }: any) => {
    let products = [];
    let total_product;
    try {
        let p_ = await getRequest(
            "/product/list?supplier_code=" + id + "&page=1&limit=4"
        );
        products = p_?.data;
        total_product = p_?.total_record;
    } catch (error) { }
    return (
        <div className="flex flex-col gap-4 col-span-2 ">
            <p className="text-3xl font-bold">Products</p>
            <div className="flex flex-col gap-3">
                <div className='grid md:grid-cols-4 gap-10'>
                    {products?.length > 0 ? products.map((pd: any, index: any) => {
                        const country = countries.find(
                            (country: any) => country.code == pd.origin_country?.code
                        );
                        return (
                            <ProductItem key={index} pd={pd} country={country} />

                        );
                    }) : (
                        <div className="text-lg text-[#8C8585]">
                            There are no product to be shown yet.
                        </div>
                    )}
                </div>
                <LoadMore
                    countries={countries}
                    id={id}
                    length={products.length}
                    total={total_product}
                />
            </div>
        </div>
    )
}

export default ProductTab