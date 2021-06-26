import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar } from '@material-ui/core';

function Chat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random * 5000));
    }, []);

    return (
      <div className='chat'>
        <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}/>
        </div>    

        <div className="chat__body">

        </div>

        <div className="chat__footer">

        </div>
      </div>
    )
}

export default Chat;
