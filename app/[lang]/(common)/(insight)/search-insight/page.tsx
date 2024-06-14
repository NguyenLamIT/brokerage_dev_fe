import React from 'react'
import Search from './Search'
import { getRequest } from '@/hook/api';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import CheckItem from './CheckItem';
import moment from 'moment';
import LoadMore from './Loadmore';
import SearchItem from './SearchItem';

export const metadata: Metadata = {
    title: "Search Insight",
    description: "Search Insight",
};

const SearchInsight = async (props: any) => {
    const keyword = props?.searchParams?.keyword || '';
    const country = props?.searchParams?.country;
    const category = props?.searchParams?.category;
    const topic = props?.searchParams?.topic;
    const level = props?.searchParams?.level || 1;
    const type = props?.searchParams?.type;

    const [
        countriesData,
        categoiesData,
        topiesData,
        searchData
    ] = await Promise.all([
        getRequest("/insight/countries"),
        getRequest("/config/insight_content_type"),
        getRequest("/insight/topies"),
        getRequest("/insight/search"
            + "?key=" + keyword
            + "&total_page=5"
            + "&page=1"
            + (level ? ("&level=" + level) : '')
            + (country ? ("&country_code=" + country) : '')
            + (topic ? ("&topic_id=" + topic) : '')
            + (category ? ("&category_code=" + category) : '')
            + (type ? ("&content_type=" + type) : '')
        ),
    ]);
    const countries = countriesData?.data
    const categoies = categoiesData?.data
    const topies = topiesData?.data.map((topic: any) => ({ code: topic?.id, ...topic }))
    const search = searchData?.data?.data
    return (
        <div className='container flex flex-col gap-8 py-16'>
            <Search load/>
            <div className='text-2xl font-bold'>{`Search for "${keyword ? keyword : (category ? category : " ")}"`}</div>
            <div className='grid grid-cols-3 gap-16'>
                <div className='col-span-2'>
                    <p>{searchData?.data?.total} content</p>
                    <div>
                        {
                            search.map((sch: any, index: any) => (
                              <SearchItem key={index} sch={sch}/>
                            ))
                        }
                        <LoadMore length={search.length} total={searchData?.data?.total} />
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='text-2xl font-bold'>Filter</p>
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl font-bold'>Market Country</p>
                        <div className='flex flex-col gap-2'>
                            <CheckItem value={countries.slice(0, 9)} href="country" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl font-bold'>Content Type</p>
                        <div className='flex flex-col gap-2'>
                            <CheckItem value={categoies} href="type" />

                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl font-bold'>Topic</p>
                        <div className='flex flex-col gap-2'>
                            <CheckItem value={topies} href="topic" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchInsight