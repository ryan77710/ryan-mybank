import React from "react";
import UserIcon from "./UserIcon";
import Username from "../User/Username";

const User = () => {
  return (
    <div className="User">
      <Username></Username>
      <UserIcon></UserIcon>
    </div>
  );
};

export default User;
