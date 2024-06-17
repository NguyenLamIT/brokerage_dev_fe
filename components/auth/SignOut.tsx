"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  return (
    <div
      className="w-full"
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
