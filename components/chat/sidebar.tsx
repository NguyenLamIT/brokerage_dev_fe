"use client";

import { Avatar, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import { Message } from "./data";
import { getRequest, postRequest } from "@/hook/apiClient";
import { useEffect, useRef, useState } from "react";


export function Sidebar({ links, isMobile, setSelect, setOpen, setMessages, total, messages }: any) {
  const navbar = useRef<any>(null)
  const [load, setLoad] = useState(false)
  const [page, setPage] = useState(2);
  const fetchData = () => {
    getRequest(`/chat/messages?page=${page}&limit=10`)
      .then(data => {
        const dt = data?.data.map((mess: any) => (
          { code: mess?.target_user?.code, unread: mess?.unread, name: mess?.target_user?.name, avatar: mess?.target_user?.avatar, chat: [{ code: mess?.target_user?.code, mess: mess?.message, avatar: mess?.target_user?.avatar, time: new Date() }] }
        ))
        setPage((prev) => prev + 1);
        setMessages((prev: any) => [...prev, ...dt])
      })
      .finally(() => setLoad(false));
  };
  console.log(messages?.length, total)
  useEffect(() => {
    const handleScroll = () => {
      if (navbar.current) {
        const { scrollTop, scrollHeight, clientHeight } = navbar.current;
        if (scrollHeight - scrollTop - clientHeight < 300) {
          if (messages?.length < total)
            setLoad(true);
        }
      }
    };

    if (navbar.current) {
      navbar.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (navbar.current) {
        navbar.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [navbar, total, messages]);


  useEffect(() => {
    if (load) {
      fetchData()
    }
  }, [load])
  return (
    <div
      data-collapsed={isMobile}
      className="relative group flex flex-col h-full w-full gap-4 bord "
    >
      <nav className="w-full gap-3 overflow-auto" ref={navbar}>
        {links.map((link: any, index: any) =>
          <div key={index} className="border-b">

            <div
              key={index}
              onClick={() => {
                setSelect(link?.code)
                setOpen(true)
              }}
              className={`flex gap-3 justify-between items-center w-full hover:bg-gray-100 p-2 rounded-md cursor-pointer`}
            >
              <div className="flex gap-3 items-start">
                <Avatar className="flex justify-center items-center">
                  <AvatarImage
                    src={link.avatar}
                    alt={link.name}
                    width={6}
                    height={6}
                    className="w-10 h-10 "
                  />
                </Avatar>
                <div className="flex flex-col ">
                  <span>{link.name}</span>
                  {link.chat.length > 0 && (
                    <span className="text-zinc-300 text-xs truncate ">
                      {link.chat[link.chat.length - 1].mess}
                    </span>
                  )}
                </div>

              </div>
              {
                link?.unread == 1 &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                </svg>
              }
            </div>
          </div>

        )}
        {
          load &&
          <div className='flex flex-col gap-4'>
            <div className="flex items-start gap-4 bg-white p-2 rounded-md">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className='w-full flex flex-col gap-3'>
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-[80%]" />
              </div>
            </div>

          </div>

        }
      </nav>
    </div>
  );
}
