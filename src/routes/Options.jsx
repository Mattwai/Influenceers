import React from "react";
import pageStyle from "./routes.css";
import settings from "../pages/settingsPage.png";

export default function Options() {
  return (
    <div className="settingsBody">
      {<img src={settings} className="settings" />}
    </div>
  );
}
