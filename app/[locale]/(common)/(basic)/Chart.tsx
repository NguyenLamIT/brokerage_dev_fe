"use client"

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import moment from 'moment';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartLine = ({ home_price_data }: any) => {
    const state = {
        series: [{
            name: "latest",
            data: home_price_data?.latestYearSeries
        },
        {
            name: "previous",
            data: home_price_data?.previousYearSeries
        }
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [3, 3],
                curve: 'straight',
                dashArray: [0, 8],
                colors: ['#000000', '#000000']
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                show: false,
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false,
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            grid: {
                borderColor: '#f1f1f1',
            }
        },


    } as any
    return (
        <div className='p-4 bg-gray-100 rounded-md py-16'>
            <div className='flex flex-col gap-12'>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <Chart options={{ ...state.options, tooltip: { enabled: false }, legend: { show: false }, chart: { toolbar: { show: false } } }} series={state.series} type="line" height={96} width={"100%"} />
                    </div>
                    <div className='flex flex-col gap-4 min-h-24'>
                        <p className='font-bold text-3xl'>YoY Change Rate</p>
                        <div className='flex'>
                            <div className='p-2 rounded-lg bg-green-700 font-bold text-xl text-white'>{`+${home_price_data.yoyChangeRate}%`}</div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='w-[25%] border-t-[3px] border-black'></div>
                        <p className='font-bold text-gray-600 text-3xl pt-2'>Lastest Wholesale Price</p>
                        <p className='text-gray-600 font-bold text-xl'> {moment(home_price_data.latestWeeklyPrice.date, 'DD-MM-YYYY').format("MMM, YYYY")}</p>
                        <p className='text-5xl font-bold'>{home_price_data.latestWeeklyPrice.priceAvg}</p>
                        <p className='text-gray-600 font-bold text-xl'>{home_price_data.latestWeeklyPrice.currency + '/' + home_price_data.latestWeeklyPrice.itemUnit.unitLabel}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='w-[25%] border-t-[3px] border-black border-dashed'></div>
                        <p className='font-bold text-gray-600 text-3xl pt-2'>Previous Wholesale Price</p>
                        <p className='text-gray-600 font-bold text-xl'> {moment(home_price_data.previousWeeklyPrice.date, 'DD-MM-YYYY').format("MMM, YYYY")}</p>
                        <p className='text-5xl font-bold'>{home_price_data.previousWeeklyPrice.priceAvg}</p>
                        <p className='text-gray-600 font-bold text-xl'>{home_price_data.previousWeeklyPrice.currency + '/' + home_price_data.previousWeeklyPrice.itemUnit.unitLabel}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChartLine