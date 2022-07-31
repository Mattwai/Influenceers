import React from "react";
import footer from "../../images/footer.png";
import footerStyle from "./Footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <img src={footer} className="footer" />
    </div>
  );
}
