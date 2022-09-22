import React, { useState,useEffect } from 'react';
import "./sidebar.css";
import SidebarButton from './sidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard} from "react-icons/md";
import apiClient from '../../spotify';

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className='sidebar-container'>
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg" className='profile-image' alt="profile" />
        <div>
            <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
            <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
            <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
            <SidebarButton title="Favourites" to="/favourites" icon={<MdFavorite/>}/>
            <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
        </div>
        <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  )
}
