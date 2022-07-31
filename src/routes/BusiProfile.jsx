import React from "react";
import busProfile from "../pages/busiProfile.png";
import profile1Icon from "../images/profile1Icon.png";
import pageStyle from "./routes.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function BusiProfile() {
  return (
    <div className="busiProfileBody">
      <img src={busProfile} className="busiProfile" />
      <CustomLink to="/profile1">
        <img src={profile1Icon} className="profile1Icon" />
      </CustomLink>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
