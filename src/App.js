import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Feed } from "./Feed";
import Login from "./Login";
import Widgets from "./Widgets";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const helper = async () => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  };
  useEffect(() => {
    helper();
  }, []);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets/>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
