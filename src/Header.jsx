import React from "react";
import "./header.css";
import './HeaderOption';
import SearchIcon from "@mui/icons-material/Search";
import { HeaderOption } from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

export const Header = () => {
  const dispatch = useDispatch();
  const logOutApp = ()=>{
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="" />
        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title={"Home"} />
        <HeaderOption Icon={SupervisorAccountIcon} title={"My Network"}/>
        <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"} />
        <HeaderOption Icon={ChatIcon} title={"Messaging"}/>
        <HeaderOption Icon={NotificationsIcon} title={"Notifications"}/>
        <HeaderOption onClick={logOutApp} avatar={true} title={'me'}/>
      </div>
    </div>
  );
};
