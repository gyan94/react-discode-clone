
import React, { useEffect, useState } from "react";
import "./Chat.scss";
import ChatHeader from "./chat/ChatHeader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChatMessage from "./chat/ChatMessage";
import { useAppSelector } from "../../app/hooks";
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  QuerySnapshot,
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { timeStamp } from "console";
import useCollection from "../../hooks/useCollection";

interface Messages {
  timeStamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

export default function Chat() {
  const channelName = useAppSelector((state) => state.channel.channelName);
  const user = useAppSelector((state) => state.user.user);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const [inputText, setInputText] = useState<string>("");
  const [message, setMessage] = useState<any>([]);

  useEffect(() => {
    let collectionRef = collection(
      db,
      "channels",
      channelId as string,
      "messages"
    );
    // リアルタイムのデータを切り取る onSnapshot(参照元,(snapshot) )
    onSnapshot(collectionRef, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timeStamp: doc.data().timeStamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessage(results);
      console.log(results);
    });
  }, [channelId]);

  // チャット送信するための入力値を取得
  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // 送信した時にリロードをさせない
    e.preventDefault();
    // channelsコレクションの中にあるmessagesコレクションの中にメッセージ情報を入れる
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      channelId as string,
      "messages"
    );

    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        message: inputText,
        timeStamp: serverTimestamp(),
        user: user,
      }
    );
  };

  // console.log();
  return (
    <>
      <div className="chat">
        {/* チャットのヘッダー */}
        <ChatHeader channelName={channelName} />
        {/* メッセージ */}
        <div className="chatMessage">
          <ChatMessage />
        </div>
        {/* チャット入力部分*/}
        <div className="chatInput">
          <AddCircleOutlineIcon />
          <form action="">
            <input
              type="text"
              placeholder="#Udemyへメッセージを送信"
              // チャット送信するための入力値を取得
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputText(e.target.value)
              }
            />
            <button
              type="submit"
              className="chatInputButton"
              // チャット送信するための入力値を取得
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                sendMessage(e)
              }
            >
              送信
            </button>
          </form>

          <div className="chatInputIcons">
            <CardGiftcardIcon />
            <GifIcon />
            <EmojiEmotionsIcon />
          </div>
        </div>
      </div>
    </>
  );
}