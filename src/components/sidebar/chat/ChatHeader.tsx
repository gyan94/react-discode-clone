<<<<<<< HEAD
import React from "react";
import "./ChatHeader.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";

interface ChatHeaderProps {
  channelName: string | null;
}

export default function ChatHeader(props: ChatHeaderProps) {
  const { channelName } = props;
  return (
    <>
      <div className="chatHeader">
        <div className="chatHeaderLeft">
          <h3>
            <span className="chatHeaderHash"></span>
            {channelName}
          </h3>
        </div>

        <div className="chatHeaderRight">
          <NotificationsIcon />
          <PushPinIcon />
          <PeopleIcon />
          <div className="chatHeaderSearch">
            <input type="text" placeholder="検索" />
            <SearchIcon />
          </div>
          <SendIcon />
          <HelpIcon />
        </div>
      </div>
    </>
  );
=======
import React from 'react'
import "./ChatHeader.scss"

export default function ChatHeader() {
  return (
    <>
    <div className='CharHeader'>
        <div className='ChatheaderLeft'>
            <h3>
                <span className='ChatHeaderhash'></span>
                Udemy
            </h3>
        </div>
        
        <div className='ChatHeaderRight'>
            
        </div>
    </div>
    </>
  )
>>>>>>> e58d7d3335509d4ffb00cb3200f95008c9dfd11b
}
