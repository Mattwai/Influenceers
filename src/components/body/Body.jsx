import React, { useState, useEffect } from "react";
import bodyStyle from "./Body.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import profile1 from "../../images/profile1.png";
import profile2 from "../../images/profile2.png";
import profile3 from "../../images/profile3.png";
import profile4 from "../../images/profile4.png";
import profile5 from "../../images/profile5.png";
import profile6 from "../../images/profile6.png";

export default function Body() {
  return (
    <div className="body">
      <div className="title">Discover:</div>
      <div className="grid-container">
        <div className="grid-item">
          <CustomLink to="/profile1">
            <img src={profile1} className="profile1preview" />
          </CustomLink>
        </div>
        <div class="grid-item">
          <CustomLink to="/">
            <img src={profile2} className="profile2preview" />
          </CustomLink>
        </div>
        <div class="grid-item">
          <CustomLink to="/Food">
            <img src={profile3} className="profile3preview" />
          </CustomLink>
        </div>
        <div class="grid-item">
          <CustomLink to="/Food">
            <img src={profile4} className="profile4preview" />
          </CustomLink>
        </div>
        <div class="grid-item">
          <CustomLink to="/Food">
            <img src={profile5} className="profile5preview" />
          </CustomLink>
        </div>
        <div class="grid-item">
          <CustomLink to="/Food">
            <img src={profile6} className="profile6preview" />
          </CustomLink>
        </div>
      </div>
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
