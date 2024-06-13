'use client';
import { pusherClient } from "@/lib/pusher/client";
import { useEffect, useState } from "react";
import { ChatLayout } from "./chat/chat-layout";
import { getSession } from "next-auth/react";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { getRequest } from "@/hook/apiClient";
import Loading from "./Loading";

export default function MessageList() {
    const [dataMess, setDataMess] = useState<any>([])
    const [open, setOpen] = useState<any>(false)
    const [user, setUser] = useState<any>()
    const [select, setSelect] = useState<any>()
    const [newData, setNewData] = useState<any>()
    const [openMenu, setOpenMenu] = useState(false)
    const [loading, setLoading] = useState<any>()
    const [count, setCount] = useState<any>(0)
    const [total, setTotal] = useState<any>(0)
    useEffect(() => {
        if (!open) {
            localStorage.removeItem("user-mess")
        }
    }, [openMenu])
    const { toast } = useToast()
    useEffect(() => {
        setLoading(true)
        if (user?.code) {
            getRequest(`/chat/messages?page=1&limit=10`)
                .then(data => {
                    const dt = data?.data.map((mess: any) => (
                        { code: mess?.target_user?.code, unread: mess?.unread, name: mess?.target_user?.name, avatar: mess?.target_user?.avatar, chat: [{ code: mess?.target_user?.code, mess: mess?.message, avatar: mess?.target_user?.avatar, time: new Date() }] }
                    ))
                    setDataMess(dt)
                    setTotal(data?.total_record)
                    setLoading(false)
                })

            const channel = pusherClient
                .subscribe('private-chat')
                .bind("Private-User." + user?.code, (data: any) => {
                    setNewData(data)
                });

            return () => {
                channel.unbind();
            };
        }
    }, [user]);

    useEffect(() => {
        if (newData) {
            if (!openMenu) {
                toast({
                    variant: "success",
                    title: "Success",
                    description: `${newData?.name} send messenger to you`,
                    action: (
                        <ToastAction altText="Check" onClick={() => {
                            setSelect(newData.root)
                            setTimeout(() => {
                                setOpen(true)
                            }, 100)
                            setOpenMenu(true)
                        }}>Check</ToastAction>
                    ),
                });
            }
            const check = dataMess.find((userSend: any) => newData.root == userSend?.code)
            if (check) {
                let dt = dataMess.map((userSend: any) => {
                    if (newData.root == userSend?.code) {
                        return ({ ...userSend,chat: [...userSend.chat, { code: newData.root, mess: newData.mess, avatar: newData.avatar, time: newData.time }] })
                    }
                    else return userSend
                })
                setDataMess(dt)
            }
            else {
                setDataMess((prev: any) => [{ code: newData.root, name: newData?.name, avatar: newData?.avatar, chat: [{ code: newData.root, mess: newData.mess, avatar: newData.avatar, time: newData.time }] }, ...prev])
            }
        }
    }, [newData])

    useEffect(() => {
        getSession()
            .then(session => {
                if (session?.user) {
                    setUser(session?.user)
                }
            })
        getRequest('/chat/count-unread-msg')
            .then((data: any) => setCount(data?.data))
    }, [])

    const sendMess = (message: any) => {
        let time = new Date()
        axios.post('/api/send-message', { root: user?.code, code: select, message: message, avatar: user?.avatar, time, name: user?.last_name, role: user?.role })
            .then(() => {
                let dt = dataMess.map((userSend: any) => {
                    if (userSend?.code == select) {
                        return ({ ...userSend, chat: [...userSend.chat, { code: user?.code, mess: message, avatar: user?.avatar, time }] })
                    }
                    else return userSend
                })
                setDataMess([...dt])
                // setSelect({ ...select, chat: [...select.chat, { code: user?.code, mess: message, avatar: user?.avatar, time: time }] })
            })

    }

    return (
        <div id="bell-chat" onClick={() => {
            const userJson = localStorage.getItem("user-mess");
            const user_mess = userJson ? JSON.parse(userJson) : '';

            if (user_mess) {
                const check = dataMess.find((userSend: any) => user_mess?.code == userSend?.code)
                if (check) {
                    setSelect(check.code)
                    // setSelect({ ...check })
                }
                else {
                    setSelect(user_mess?.code)
                    // setSelect({ code: user_mess?.code, name: user_mess?.last_name, avatar: user_mess?.avatar, chat: [] })
                    setDataMess((prev: any) => [{ code: user_mess?.code, name: user_mess?.last_name, avatar: user_mess?.avatar, chat: [] }, ...prev])
                }
            }
            localStorage.removeItem("user-mess")
            if (!openMenu) {
                setOpen(true)
            }
            setOpenMenu(true)
        }}>
            <DropdownMenu open={openMenu} onOpenChange={setOpenMenu}>
                <DropdownMenuTrigger asChild>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                        {
                            count > 0 &&
                            <div className="bg-red-500 text-white absolute -top-3 -right-3 aspect-square h-5 rounded-full text-center flex items-center text-sm font-bold justify-center">
                                <span className="text-center">{count < 10 ? count : `9+`}</span>
                            </div>
                        }
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" w-[100vw] h-[calc(100vh-5rem)] md:w-[30vw] md:h-[50vh]">
                    {
                        loading ?
                            <div className="w-full h-full">
                                <Loading />
                            </div>
                            :
                            <ChatLayout total={total} setCount={setCount} user={user} open={open} setOpen={setOpen} select={select} setSelect={setSelect} dataMess={dataMess} setDataMess={setDataMess} sendMess={sendMess} />
                    }
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    );
};