import { Message } from "./data";
import { ChatList } from "./chat-list";
import React from "react";
import ChatBottombar from "./chat-bottombar";
import { Avatar, AvatarImage } from "../ui/avatar";

export function Chat({ setCount,messages, selectedUser, isMobile, setOpen, sendMess, setSelect, user, setMessages
}: any) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-20 flex p-2 justify-between items-center border-b">
        <div className="flex gap-2 items-center">
          <div onClick={() => setOpen()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="flex justify-center items-center">
              <AvatarImage
                src={messages.find((f:any) => f.code == selectedUser)?.avatar}
                alt={messages.find((f:any) => f.code == selectedUser)?.name}
                width={6}
                height={6}
                className="w-10 h-10  object-contain"
              />
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">{messages.find((f:any) => f.code == selectedUser)?.name}</span>
            </div>
          </div>
        </div>

        <div className="pr-4">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={() => setOpen(false)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg> */}
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <ChatList
          messages={messages}
          selectedUser={selectedUser}
          sendMessage={sendMess}
          isMobile={isMobile}
          user={user}
          setMessages={setMessages}
          setSelect={setSelect}
          setCount={setCount}
        />
      </div>
      <div>
        <ChatBottombar sendMessage={sendMess} isMobile={isMobile} />
      </div>

    </div>
  );
}
