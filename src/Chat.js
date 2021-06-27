import React, { useState, useEffect } from 'react';
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random * 5000));
    }, []);

    const sendMessage = (e) => {

    }

    return (
      <div className='chat'>
        <div className="chat__header">
          <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}/>

          <div className="chat__headerInfo">
            <h3>Room name</h3>
            <p>Last seen at...</p>
          </div>

          <div className="chat__headerRight">
              <IconButton>
                <SearchOutlined />
              </IconButton>
              <IconButton>
                <AttachFile />
              </IconButton>
              <IconButton>
                <MoreVert />
              </IconButton>
          </div>
        </div>    

        <div className="chat__body">
            <p className={`chat__message ${true && 'chat__receiver'}`}>
            <span className="chat__name">Mahatma Gandhi</span>Heyyyyyy<span className="chat__timestamp">3:52pm</span></p>
        </div>

        <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
                <input value={input} onChange={} type="text" placeholder="Type a message" />
                <button onClick={sendMessage} type="submit">Send a Message</button>
            </form>
            <MicIcon />
        </div>
      </div>
    )
}

export default Chat;
