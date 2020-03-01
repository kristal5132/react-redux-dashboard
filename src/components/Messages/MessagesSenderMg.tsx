import React from "react";
import userImg from "../../assets/images/users-avatar/photo-3.png"
import {months} from "./MessagesThread";

export const MessagesSenderMg = (props:{text:string, time:string}) => {
    let time = new Date(props.time);
    let newTime = time.getDate() + " " + months[time.getMonth()] + " " + time.getFullYear() + ", " + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return (
        <div className="messages-sender">
            <img className="messages-sender__avatar" alt="Virtus Sender Message" src={userImg}/>
            <div className="messages-sender__wrapper">
                <div className="messages-sender__text">
                    {props.text}
                </div>
                <p className="messages-sender__date">
                    {newTime}
                </p>
            </div>
        </div>
    )
};