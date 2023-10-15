import React from 'react'
import "./Chat.scss"; 
import ChatHeader from './chat/ChatHeader';

export default function Chat() {
  return (
    <>
    <div className='chat'>
        {/* チャットのヘッダー */}
        <ChatHeader />
        {/* メッセージ */}
        <div className='ChatMessage'></div>
        {/* チャット入力部分*/}
        <div className='ChatInput'></div>
    </div>
    </>
  )
}
