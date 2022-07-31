import React from "react";
import food from "../pages/food.png";
import pageStyle from "./routes.css";

export default function Food() {
  return (
    <div className="foodBody">
      <img src={food} className="food" />
    </div>
  );
}
