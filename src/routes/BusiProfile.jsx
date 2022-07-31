import React from "react";
import busProfile from "../pages/busiProfile.png";
import pageStyle from "./routes.css";

export default function BusiProfile() {
  return (
    <div className="busiProfileBody">
      <img src={busProfile} className="busiProfile" />
    </div>
  );
}
