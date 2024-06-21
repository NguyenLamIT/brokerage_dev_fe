import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const menu = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "MarketPlace",
        child: [
            {
                title: "Social",
                href: "/social"
            },
            {
                title: "Products",
                href: "/product"
            },
            {
                title: "Suppliers",
                href: "/supplier"
            },
            {
                title: "Buyers",
                href: "/buyer"
            },
            {
                title: "Rfqs",
                href: "/rfq"
            }
        ]
    },
    {
        title: "Insight",
        child: [
            {
                title: "Overview",
                href: "/overview"
            },
            {
                title: "News",
                href: "/news"
            },
            {
                title: "On The Ground Update",
                href: "/on-the-ground-update"
            },
            {
                title: "Opinion",
                href: "/opinio"
            },
            {
                title: "Analysis",
                href: "/analysis"
            },
            {
                title: "Weekly Product Update",
                href: "/weekly-product-update"
            },
            {
                title: "Retailer Trends",
                href: "/retailer-trend"
            },
            {
                title: "Report",
                href: "/report"
            }
        ]
    },
    {
        title: "Help Center",
        child: [
            {
                title: "Overview",
                href: "/help-center"
            },
            {
                title: "Buyer",
                href: "/help-center/buyer/user-guides"
            },
            {
                title: "Seller",
                href: "/help-center/seller/user-guides"
            },
            {
                title: "Contact Us",
                href: "/contact-us"
            },
            {
                title: "Faq",
                href: "Faq"
            }
        ]
    },
    {
        title: "About",
        href: "/about-us"
    },
]

const MenuMobile = () => {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="flex flex-col gap-4">
                    <SheetClose asChild>
                        <Link href={"/"}>
                            <Image
                                src={"/trade4go.png"}
                                alt="logo"
                                width={128}
                                height={56}
                                className="h-14 w-auto object-contain"
                            />
                        </Link>
                    </SheetClose>
                    <Accordion type="single" collapsible className="w-full">
                        {
                            menu.map(m => {
                                if (m.child) {
                                    return (
                                        <AccordionItem value={m.title} key={m.title}>
                                            <AccordionTrigger className='text-xl'>{m.title}</AccordionTrigger>
                                            {
                                                m.child.map(c => (
                                                    <AccordionContent className='text-xl' key={c.title}>
                                                        <SheetClose asChild>
                                                            <Link href={c.href}>
                                                                {c.title}
                                                            </Link>
                                                        </SheetClose>
                                                    </AccordionContent>
                                                ))
                                            }
                                        </AccordionItem>
                                    )
                                }
                                else {
                                    return (
                                        <AccordionItem className='text-xl py-3 text-black font-medium' value={m.title} key={m.title}>
                                            <SheetClose asChild>
                                                <Link href={m.href}>
                                                    {m.title}
                                                </Link>
                                            </SheetClose>
                                        </AccordionItem>
                                    )
                                }
                            })
                        }
                    </Accordion>
                    {/* <SheetClose asChild>
                        <Link href={"/"}>
                            <Image
                                src={"/trade4go.png"}
                                alt="logo"
                                width={128}
                                height={56}
                                className="h-14 w-32 object-contain"
                            />
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href={"/social"}>
                            <Image
                                src={"/social.png"}
                                alt="logo"
                                width={128}
                                height={56}
                                className="h-14 w-32 object-contain"
                            />
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/social" className={"font-bold text-[#081540] w-full"}>
                            Social
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/product" className={"font-bold text-[#081540] w-full"}>
                            Products
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link
                            href="/supplier"
                            className={"font-bold text-[#081540] w-full"}
                        >
                            Suppliers
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link
                            href="/buyer"
                            className={"font-bold text-[#081540] w-full"}
                        >
                            Buyers
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link
                            href="/rfq"
                            className={"font-bold text-[#081540] w-full"}
                        >
                            Rfqs
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href={"/overview"}>
                            <Image
                                src={"/insight.png"}
                                alt="logo"
                                width={128}
                                height={56}
                                className="h-14 w-32 object-contain"
                            />
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/overview" className={"font-bold text-[#081540] w-full"}>
                            Overview
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/news" className={"font-bold text-[#081540] w-full"}>
                            News
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link
                            href="/on-the-ground-update"
                            className={"font-bold text-[#081540] w-full"}
                        >
                            On The Ground Update
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link
                            href="/opinio"
                            className={"font-bold text-[#081540] w-full"}
                        >
                            Opinion
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link
                            href="/analysis"
                            className={"font-bold text-[#081540] w-full"}
                        >
                            Analysis
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link
                            href="/weekly-product-update"
                            className={"font-bold text-[#081540] w-full"}
                        >
                            Weekly Product Update
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link
                            href="/retailer-trend"
                            className={"font-bold text-[#081540] w-full"}
                        >
                            Retailer Trends{" "}
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link
                            href="/report"
                            className={"font-bold text-[#081540] w-full"}
                        >
                            Report{" "}
                        </Link>
                    </SheetClose> */}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MenuMobile