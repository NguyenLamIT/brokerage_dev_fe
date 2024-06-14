'use client';

import { i18nConfig } from '@/i18n';
import redirectToLocale from '@/lib/i18n/redirectToLocale';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuTrigger } from './ui/dropdown-menu';
import Image from 'next/image';



export default function LocaleSelector({ lang }: any) {

    const pathname = usePathname();

    const localeInfo = {
        en: {
            native: 'English',
            english: 'English',
            image: '/flag.png'
        },
        fi: { native: 'Suomi', english: 'Finnish', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/800px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png' },
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Image
                        src={localeInfo[lang as keyof typeof localeInfo].image}
                        alt="flag"
                        width={20}
                        height={20}
                        className="w-5 h-5 rounded-full object-cover cursor-pointer"
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        {i18nConfig.locales.map((locale, index) => {
                            return (
                                <Link key={index} href={redirectToLocale(locale, pathname)}>
                                    <li className="flex w-full gap-3 items-start justify-center px-3 py-1 hover:bg-neutral-100">
                                        <Image
                                            src={localeInfo[locale].image}
                                            alt="flag"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 rounded-full object-cover cursor-pointer"
                                        />
                                        <p className="font-bold text-neutral-600">
                                            {localeInfo[locale].english}
                                        </p>
                                    </li>
                                </Link>
                            );
                        })}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

        </>
    );
}
