"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const SignOut = () => {
  const route = useRouter()
  return (
    <div
      className="w-full"
      onClick={() => {
        signOut({ callbackUrl: process.env.NEXT_URL});
      }}
    >
      Sign Out
    </div>
  );
};

export default SignOut;
