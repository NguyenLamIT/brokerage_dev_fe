'use client'
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import ChatBottombar from "./chat-bottombar";
import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";
import { formatDistanceToNow } from "date-fns";
import { enAU } from "date-fns/locale";
import { getRequest, postRequest } from "@/hook/apiClient";
import Loading from "../Loading";
import { useToast } from "../ui/use-toast";


export function ChatList({
  messages,
  selectedUser,
  setMessages,
  user,
  setSelect,
  setCount
}: any) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false)
  const { toast } = useToast();

  React.useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (selectedUser && !(messages.find((f: any) => f.code == selectedUser)?.loading)) {
      setLoading(true)
      getRequest(`/chat/messages?user_role=${user?.role}&target_code=${selectedUser}`)
        .then(data => {
          const loadMess = data?.data.map((mess: any) => (
            { id: mess?.id, unread: mess?.unread, code: mess?.target_user?.code, mess: mess?.message, avatar: mess?.target_user?.avatar, time: new Date() }
          ))

          const dt = messages.map((m: any) => {
            if (m.code == selectedUser) {
              return ({ ...m, unread: 0, chat: loadMess, loading: true })
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
                description: JSON.parse(err.request.response).message?JSON.parse(err.request.response).message:"Something went wrong!",
              });
            });
          }
          setMessages(dt)
          setCount((prev: any) => prev - 1)
          // setSelect({ ...selectedUser, chat: dt })
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
