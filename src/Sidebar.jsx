import React from "react";
import "./sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div> 
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar" >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_number">2,234</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_number">2,514</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("softwareengineering")}
        {recentItem("programming")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};
