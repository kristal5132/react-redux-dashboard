import React from "react";
import userImg from "../../assets/images/users-avatar/photo-1.png"
import {months} from "./MessagesThread";

export const MessagesReceiverMg = (props:{text:string, time:string}) => {
    let time = new Date(props.time);
    let newTime = time.getDate() + " " + months[time.getMonth()] + " " + time.getFullYear() + ", " + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return (
        <div className="messages-receiver">
            <div className="messages-receiver__wrapper">
                <div className="messages-receiver__text">
                    {props.text}
                </div>
                <p className="messages-receiver__date">
                    {newTime}
                </p>
            </div>
            <img className="messages-receiver__avatar" alt="Virtus Receiver Message" src={userImg}/>
        </div>
    )
};