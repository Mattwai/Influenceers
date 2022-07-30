import React from "react";
import navbarStyle from "./Navbar.css";
/* Importing the Link component from the react-router-dom package. */
/* Importing the Link component from the react-router-dom package. */
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/Clothes">Clothes</CustomLink>
        <CustomLink to="/Toys">Toys</CustomLink>
        <CustomLink to="/Food">Food</CustomLink>
        <CustomLink to="/Test">Homeware</CustomLink>
        <CustomLink to="/Test">Tools</CustomLink>
        <CustomLink to="/Test">Appliances</CustomLink>
        <CustomLink to="/Test">Books</CustomLink>
        <CustomLink to="/Test">Tech</CustomLink>
        <CustomLink to="/Test">Lifestyle</CustomLink>
      </ul>
    </nav>
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
