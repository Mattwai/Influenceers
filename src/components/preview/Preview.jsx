import React from "react";
import previewStyle from "./Preview.css";
import trending from "../../images/trending.png";
import promoImg from "../../images/promo.gif";

export default function Preview() {
  return (
    <div className="preview">
      {/* <div className="trends">
        <img src={trending} alt="trending" />
      </div> */}
      <div className="promo">
        <img src={promoImg} alt="promo" />
      </div>
    </div>
  );
}
