import React from 'react';
import { Avatar } from "@material-ui/core";
import './SidebarChat.css';


function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar src="https://avatars.dicebear.com/api/bottts/21e1.svg"/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat

