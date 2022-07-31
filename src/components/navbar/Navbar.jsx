import React from "react";
import navbarStyle from "./Navbar.css";
/* Importing the Link component from the react-router-dom package. */
/* Importing the Link component from the react-router-dom package. */
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/Toys">Clothes</CustomLink>
        <CustomLink to="/Toys">Toys</CustomLink>
        <CustomLink to="/Food">Food</CustomLink>
        <CustomLink to="/Toys">Homeware</CustomLink>
        <CustomLink to="/Toys">Tools</CustomLink>
        <CustomLink to="/Toys">Appliances</CustomLink>
        <CustomLink to="/Toys">Books</CustomLink>
        <CustomLink to="/Toys">Tech</CustomLink>
        <CustomLink to="/Toys">Lifestyle</CustomLink>
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
