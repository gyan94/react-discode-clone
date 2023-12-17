<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> e58d7d3335509d4ffb00cb3200f95008c9dfd11b
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
<<<<<<< HEAD
import { auth, db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";

import useCollection from "../../hooks/useCollection";
import { addDoc, collection } from "firebase/firestore";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  const { documents: channels } = useCollection("channels");

  const addChannel = async () => {
    let channelName: string | null = prompt("新しいチャンネルを作成します");

    if (channelName) {
      await addDoc(collection(db, "channels"), { channelName: channelName });
    }
  };

=======

const Sidebar = () => {
>>>>>>> e58d7d3335509d4ffb00cb3200f95008c9dfd11b
  return (
    <>
      <div className="sidebar">
        {/* 左サイドバー */}
        <div className="sidebarLeft">
          <div className="serverIcon">
<<<<<<< HEAD
            <img src="./discordIcon.png" alt="" />
          </div>
          <div className="serverIcon">
            <img src="./discordIcon.png" alt="" />
=======
            <img src="./logo192.png" alt="" />
          </div>
          <div className="serverIcon">
            <img src="./logo192.png" alt="" />
>>>>>>> e58d7d3335509d4ffb00cb3200f95008c9dfd11b
          </div>
        </div>
        {/* 右サイドバー */}
        <div className="sidebarRight">
          <div className="sidebarTop">
            <h3>Discord</h3>
            <ExpandMoreIcon />
          </div>
          {/* sidebarChannels */}
          <div className="sidebarChannels">
            <div className="sidebarChannelsHeader">
              <div className="sidebarHeader">
                <ExpandMoreIcon />
                <h4>testチャンネル</h4>
              </div>
<<<<<<< HEAD
              <AddIcon
                className="sidebarAddIcon"
                onClick={() => addChannel()}
              />
            </div>
            <div>
              {channels.map((channel) => (
                <SidebarChannel
                  channel={channel}
                  id={channel.id}
                  key={channel.id}
                />
              ))}
=======
              <AddIcon className="sidebarAddIcon" />
            </div>
            <div>
              <SidebarChannel />
              <SidebarChannel />
              <SidebarChannel />
              <SidebarChannel />
>>>>>>> e58d7d3335509d4ffb00cb3200f95008c9dfd11b
            </div>
          </div>
          {/* サイドバーフッター */}
          <div className="sidebarFooter">
            <div className="sidebarAccount">
<<<<<<< HEAD
              <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
=======
              <img src="./icon.png" alt="" />
              <div className="accountName">
                <h4>りゅうき</h4>
                <span>#8162</span>
>>>>>>> e58d7d3335509d4ffb00cb3200f95008c9dfd11b
              </div>
            </div>
            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
