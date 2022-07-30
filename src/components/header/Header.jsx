import React from "react";
import headerStyle from "./Header.css";
import logo from "../../images/logo.png";
import account from "../../images/account.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={"header"}>
      <div className="homeLogo">
        <Link to="/" className="homeLogo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="profileLogo">
        <Link to="/BusiProfile" className="account">
          <img src={account} alt="account" />
        </Link>
      </div>
    </div>
  );
}
