import React from "react";
import Logo from "./Logo";
import User from "./User/User";
const Header = () => {
  return (
    <div className="Header contener">
      <Logo></Logo>
      <User></User>
    </div>
  );
};

export default Header;
