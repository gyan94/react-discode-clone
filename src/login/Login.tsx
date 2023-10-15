import React from "react";
import "./Login.scss";
import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export const Login = () => {
  const SignIn = () => {
    // Googleログイン画面を表示する
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message);
    });
  };

  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>

      <Button onClick={SignIn}>ログイン</Button>
    </div>
  );
};
