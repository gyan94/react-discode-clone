import React, { useEffect } from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/sidebar/Chat";
import { Login } from "./login/Login";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./utils/ErrorFallback";
function App() {
  // ユーザー情報を取ってくる
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // ログイン状態をチェック
  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            // payloadの指定
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      <div className="App">
        {user ? (
          <>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Sidebar />
            </ErrorBoundary>
            <Chat />
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </div>
    </>
  );
}

export default App;
