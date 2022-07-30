import React from "react";
import bodyStyle from "./Body.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import profile1 from "../../images/profile1.png";
import profile2 from "../../images/profile2.png";
import profile3 from "../../images/profile3.png";

export default function Body() {
  const myStyle = {
    listStyleType: "none",
  };
  return (
    <div className="body">
      <ul style={myStyle}>
        <CustomLink to="/profile1">
          <img src={profile1} alt="profile1" />
        </CustomLink>
        <CustomLink to="/">
          <img src={profile2} alt="profile2" />
        </CustomLink>
        <CustomLink to="/Food">
          <img src={profile3} alt="profile3" />
        </CustomLink>
      </ul>
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
