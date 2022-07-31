import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import messages from "../images/messages.png";
import chatSide from "../images/chatSide.png";
import thanks from "../images/thanks.png";
import pageStyle from "./routes.css";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

export default function Message() {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="messageBody">
      <div className="messageDivs">
        <div>
          <Grid container spacing={0}>
            <Grid item md={4}>
              <div className="chatSideContainer">
                <img src={chatSide} className="chatSide" />
              </div>
            </Grid>
            <Grid item md={8}>
              <div className="bigMessagesContainer">
                <div className="messagesContainer">
                  <img src={messages} className="messages" />
                  {visibility ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <div className="thanksContainer">
                        <img src={thanks} className="thanks" />
                      </div>
                    </motion.div>
                  ) : null}
                </div>
                <div className="textbox">
                  <form>
                    {" "}
                    <label>
                      <input className="messageInput" type="text" name="name" />
                    </label>
                    <input
                      type="reset"
                      value="Submit"
                      className="messageSubmit"
                      onClick={(e) => setVisibility(!visibility)}
                    />
                  </form>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
