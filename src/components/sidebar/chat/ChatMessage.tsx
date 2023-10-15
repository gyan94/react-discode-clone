import React from "react";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

const ChatMessage = () => {
  return (
    <>
      <div className="message">
        <Avatar />
        <div className="messageInfo">
          <h4>
            <span className="messageTimestamp"></span>
          </h4>
          <p>message</p>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
