import creator from "../pages/creatorProfile.png";
import React, { useState, useEffect } from "react";
import pageStyle from "./routes.css";
import CustomPopup from "../components/popup/CustomPopup";
import purchase from "../pages/purchase.png";
import { useReward } from "react-rewards";

export default function Profile1() {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  const { reward: confettiReward, isAnimating: isConfettiAnimating } =
    useReward("confettiReward", "confetti");
  const { reward: balloonsReward, isAnimating: isBalloonsAnimating } =
    useReward("balloonsReward", "balloons");
  return (
    <div className="profileBody">
      <img src={creator} className="profile1" />
      <div className="popup">
        <button
          className="popupButton"
          onClick={(e) => setVisibility(!visibility)}
        >
          <img src={purchase} className="purchase" />
        </button>

        <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="Photo: 1 Post"
        >
          <h2>$100</h2>
          <h3>Click comfirm to request:</h3>
          <button
            disabled={isConfettiAnimating || isBalloonsAnimating}
            onClick={() => {
              confettiReward();
              balloonsReward();
            }}
          >
            <span id="confettiReward" />
            <span id="balloonsReward" />
            CONFIRM
          </button>
        </CustomPopup>
      </div>
    </div>
  );
}
