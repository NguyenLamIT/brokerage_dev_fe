import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import SignOut from "./auth/SignOut";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { LogOut, Menu, User } from "lucide-react";
import { NavigationMenuInsight } from "./MenuInsight";
import SwitchRoleHearder from "./SwitchRoleHearder";
import { formatRole } from "./HeaderSocial";
import MessageList from "./Chat";
import MenuMobile from "./MenuMobile";

const HeaderInsight = async () => {
  const session = await getServerSession(options);
  return (
    <div className="border border-gray-200">
      <div className="container flex items-center justify-between py-4">
        <MenuMobile />
        <div className=" gap-4 items-center w-96 hidden md:flex">
          <Link href={"/"}>
            <Image
              src={"/trade4go.png"}
              alt="logo"
              width={128}
              height={56}
              className="h-14 w-32 object-contain"
            />
          </Link>
        </div>
        <Link href={"/"} className="pl-4 w-full block md:hidden">
          <Image
            src={"/trade4go.png"}
            alt="logo"
            width={128}
            height={56}
            className="h-14 w-32 object-contain"
          />
        </Link>

        <div className="!font-bold hidden md:block">
          <NavigationMenuInsight />
        </div>
        <div className="flex items-center gap-5 w-96 justify-end">
          <div className="gap-1 hidden lg:flex items-center">
            <Image
              src={"/flag.png"}
              alt="flag"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <div className="font-bold">EN</div>
          </div>
          {session?.user ? (
            <div className="flex gap-5 items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="w-14 h-14 cursor-pointer">
                    <AvatarImage
                      src={session.user?.avatar}
                      alt={session.user?.last_name}
                    />
                    <AvatarFallback>
                      {session.user?.last_name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href={"/my-account"}>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                    </Link>
                    <div>
                      <SwitchRoleHearder />
                    </div>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <SignOut />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex flex-col">
                <strong>{session?.user?.last_name}</strong>
                <span>{session?.user?.role == "SELLER" ? formatRole("SUPPLIER") : formatRole(session?.user?.role)} role</span>
              </div>
            </div>
          ) : (
            <Button>
              <Link href={"/api/auth/signin"}>Sign in</Link>
            </Button>
          )}
          {
            session?.user &&
            <MessageList />
          }

        </div>
      </div>
    </div>
  );
};

export default HeaderInsight;
