import React from "react";
import "./SidebarChannel.scss";
import { DocumentData } from "firebase/firestore";
import { useAppDispatch } from "../../app/hooks";
import { setChannelInfo } from "../../features/channelSlice";

type ChannelProps = {
  id: string;
  channel: DocumentData;
};

const SidebarChannel = (props: ChannelProps) => {
  const { id, channel } = props;
  // チャンネルの選択状態を管理
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className="sidebarChannel"
        onClick={() =>
          dispatch(
            setChannelInfo({
              channelId: id,
              channelName: channel.channel.channelName,
            })
          )
        }
      >
        <h4>
          <span className="sidebarChannelHash">#</span>
          {channel.channel.channelName}
        </h4>
      </div>
    </>
  );
};

export default SidebarChannel;
