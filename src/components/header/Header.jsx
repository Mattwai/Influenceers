import React from "react";
import headerStyle from "./Header.css";
import logo from "../../images/logo.png";
import accountLogo from "../../images/account.png";
import menu from "../../images/menu.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={"header"}>
      <div className="homeLogo">
        <Link to="/" className="imgLogo">
          <img src={logo} className="logo" />
        </Link>
        <Link to="/Options" className="optionsIcon">
          <img src={menu} className="options" />
        </Link>
        <Link to="/BusiProfile" className="profileLogo">
          <img src={accountLogo} className="accountLogo" />
        </Link>
      </div>
    </div>
  );
}
