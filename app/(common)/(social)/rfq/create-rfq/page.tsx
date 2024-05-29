import React from "react";
import Data from "./data";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { IUserProfile } from "@/type/user-profile.interface";
const Create = async () => {
  const session = await getServerSession(options);
  const user: IUserProfile = session?.user;
  return (
    <Data user={user}></Data>
  );
};

export default Create;
