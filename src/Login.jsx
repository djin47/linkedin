import React, { useState } from "react";
import "./login.css";
import { auth } from "./firebase.js";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { login } from "./features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const loginToApp = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        //alert(userAuth);
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = async () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, {
      displayName: name,
      photoURL: profilePic?"":profilePic,
    })
      .then(() => {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: name,
            photoURL: profilePic,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => {
            setProfilePic(e.target.value);
          }}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          type="password"
        />
        <button
          type="submit"
          onClick={(e) => {
            loginToApp(e);
          }}
        >
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span
          className="login_register"
          onClick={() => {
            register();
          }}
        >
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
