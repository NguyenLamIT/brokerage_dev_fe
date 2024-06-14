"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const SignOut = () => {
  return (
    <div
      onClick={async () => {
        await signOut({ redirect: false });
        setTimeout(() => {
          window.location.replace('/')
        }, 500)
      }}
    >
      Sign Out
    </div>
  );
};

export default SignOut;
