import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./feed.css";
import { InputOption } from "./InputOption";
import Post from "./Post";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { db } from "./firebase.js";
import { addDoc, orderBy, query } from "firebase/firestore";
import { collection, getDocs, serverTimestamp } from "firebase/firestore";
import FlipMove from "react-flip-move";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

export const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const abc = async () => {
    await getDocs(query(collection(db, "posts"),orderBy("timestamp","desc"))).then((snapshot) => {
      const newData = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setPosts(newData);
    });
  };

  useEffect(() => {
    abc();
  }, [posts]);

  const sendPost = async (e) => {
    e.preventDefault();
    if (input === "") {
    } else {
      const postRef = collection(db, "posts");
      console.log(db);
      await addDoc(postRef, {
        name: user.displayName,
        description: user.email,  
        message: input,
        photoUrl: user.photoUrl || null,
        timestamp: serverTimestamp(),
      });
      console.log("hello");
      setInput("");
    }
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_iputOptions">
          <InputOption Icon={ImageIcon} title={"Photo"} color={"#70B5F9"} />
          <InputOption
            Icon={SubscriptionsIcon}
            title={"Video"}
            color={"#E7A33E"}
          />
          <InputOption Icon={EventNoteIcon} title={"Event"} color={"#C0CBCD"} />
          <InputOption
            Icon={CalendarViewDayIcon}
            title={"Write article"}
            color={"#7FC15E"}
          />
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              name={post.name}
              discription={post.description}
              photoUrl={post.photoUrl}
              message={post.message}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};
