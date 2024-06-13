'use client'
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AnimatePresence, motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { enAU } from "date-fns/locale";
import { getRequest, postRequest } from "@/hook/apiClient";
import Loading from "../Loading";
import { useToast } from "../ui/use-toast";
import { Skeleton } from "../ui/skeleton";


export function ChatList({
  messages,
  selectedUser,
  setMessages,
  user,
  setCount
}: any) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false)
  const { toast } = useToast();
  const [load, setLoad] = useState(false)

  React.useEffect(() => {
    if (messagesContainerRef.current && !load) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;

    }
    const handleScroll = () => {
      if (messagesContainerRef.current) {
        const { scrollTop } = messagesContainerRef.current;
        if (scrollTop < 300 && !load) {
          const chat = messages.find((f: any) => f.code == selectedUser)
          if (chat?.chat?.length < chat.total)
            setLoad(true);
        }
      }
    };

    if (messagesContainerRef.current) {
      messagesContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [messages]);


  useEffect(() => {
    if (load) {
      fetchData()
    }
  }, [load])


  const fetchData = () => {
    const chat = messages.find((f: any) => f.code == selectedUser)
    getRequest(`/chat/messages?user_role=${user?.role}&target_code=${selectedUser}&page=${Math.floor(chat?.chat.length / 10) + 1}&limit=10`)
      .then(data => {
        const loadMess = data?.data.map((mess: any) => (
          { id: mess?.id, unread: mess?.unread, code: mess?.target_user?.code, mess: mess?.message, avatar: mess?.target_user?.avatar, time: new Date() }
        ))

        const dt = messages.map((m: any) => {
          if (m.code == selectedUser) {
            return ({ ...m, unread: 0, chat: [...loadMess, ...m?.chat], loading: true })
          }
          else return m
        })
        let ids: any = []
        loadMess.forEach((element: any) => {
          if (element?.unread == 1) {
            ids.push(element?.id)
          }
        });
        if (ids.length > 0) {
          postRequest('/chat/update-read-msg', {
            ids: ids
          }).catch((err) => {
            toast({
              variant: "destructive",
              title: "Fail!",
              description: JSON.parse(err.request.response).message != undefined ? (JSON.parse(err.request.response).message == "" ? Object.values(JSON.parse(err.request.response).data)[0][0] : JSON.parse(err.request.response).message) : "Something went wrong!",
            });
          });
        }
        setMessages(dt)
        setTimeout(() => setLoad(false), 100)
      })
  };

  useEffect(() => {
    if (selectedUser && !(messages.find((f: any) => f.code == selectedUser)?.loading)) {
      setLoading(true)
      getRequest(`/chat/messages?user_role=${user?.role}&target_code=${selectedUser}&page=1&limit=10`)
        .then(data => {
          const loadMess = data?.data.map((mess: any) => (
            { id: mess?.id, unread: mess?.unread, code: mess?.target_user?.code, mess: mess?.message, avatar: mess?.target_user?.avatar, time: new Date() }
          ))

          const dt = messages.map((m: any) => {
            if (m.code == selectedUser) {
              return ({ ...m, unread: 0, chat: loadMess, loading: true, total: data?.total_record })
            }
            else return m
          })
          let ids: any = []
          loadMess.forEach((element: any) => {
            if (element?.unread == 1) {
              ids.push(element?.id)
            }
          });
          if (ids.length > 0) {
            postRequest('/chat/update-read-msg', {
              ids: ids
            }).catch((err) => {
              toast({
                variant: "destructive",
                title: "Fail!",
                description: JSON.parse(err.request.response).message != undefined ? (JSON.parse(err.request.response).message == "" ? Object.values(JSON.parse(err.request.response).data)[0][0] : JSON.parse(err.request.response).message) : "Something went wrong!",
              });
            });
          }
          setMessages(dt)
          setCount((prev: any) => prev - 1)
          setLoading(false)
        })
    }
  }, [selectedUser])

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {
        loading ? <Loading /> :
          <div
            ref={messagesContainerRef}
            className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col"
          >
            <AnimatePresence>
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
              {messages.find((f: any) => f.code == selectedUser)?.chat?.map((message: any, index: any) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                  transition={{
                    opacity: { duration: 0.1 },
                    layout: {
                      type: "spring",
                      bounce: 0.3,
                      duration: messages.indexOf(message) * 0.05 + 0.2,
                    },
                  }}
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                  }}
                  className={cn(
                    "flex flex-col gap-2 p-4 whitespace-pre-wrap",
                    message.code !== selectedUser ? "items-end" : "items-start"
                  )}
                >
                  <div className="flex gap-3 items-center">
                    {message.code == selectedUser && (
                      <Avatar className="flex justify-center items-center">
                        <AvatarImage
                          src={message?.avatar}
                          alt={message.name}
                          width={6}
                          height={6}
                        />
                      </Avatar>
                    )}
                    <div className="bg-accent p-3 rounded-md max-w-xs flex flex-col">
                      <span>
                        {message.mess}
                      </span>
                      <span className="text-sm text-gray-400">
                        {formatDistanceToNow(new Date(message.time), {
                          addSuffix: true,
                          locale: enAU
                        })}
                      </span>
                    </div>
                    {message.code !== selectedUser && (
                      <Avatar className="flex justify-center items-center">
                        <AvatarImage
                          src={message?.avatar}
                          alt={message.name}
                          width={6}
                          height={6}
                        />
                      </Avatar>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
      }
    </div>
  );
}
