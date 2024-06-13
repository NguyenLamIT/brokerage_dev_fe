"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";
import { Chat } from "./chat";
export function ChatLayout({
  setOpen,
  select,
  setSelect,
  dataMess,
  sendMess,
  open,
  user,
  setDataMess,
  setCount,
  total
}: any) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div
      className="h-full flex w-full"
    >
      {
        !open ?
          <div
            className={"w-full transition-all ease-in-out"}
          >
            <Sidebar
              isCollapsed={isMobile}
              links={dataMess}
              isMobile={isMobile}
              setSelect={setSelect}
              setOpen={setOpen}
              setMessages={setDataMess}
              total={total}
            />
          </div> :
          <div className="w-full h-full">
            <Chat
              messages={dataMess}
              setMessages={setDataMess}
              selectedUser={select}
              isMobile={isMobile}
              setOpen={setOpen}
              sendMess={sendMess}
              setSelect={setSelect}
              user={user}
              setCount={setCount}
            />
          </div>
      }
    </div>
  );
}
