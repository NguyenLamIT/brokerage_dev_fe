"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const SignOut = () => {
  const router = useRouter()
  return (
    <div
      onClick={async() => {
        await signOut({ redirect: false })
        router.push("/signin");
      }}
    >
      Sign Out
    </div>
  );
};

export default SignOut;
