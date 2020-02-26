import React from "react";
import userImg from "../../assets/images/users-avatar/photo-3.png"
import {IThread} from "../../interfaces";

export const MessagesThread = (props:{data:IThread}) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
    /*let senderName;
    props.users.map((obj:any) => {
        if (obj.name === localStorage.currentUser) {
            senderName = obj.name;
        }
    });*/
    const senderName = props.data.users.map(function(obj) {
        let senderName;
        if (obj._id !== localStorage.currentUser) {
            senderName = obj.name;
        }
        return senderName;
    });
    const date = props.data.updated_at.slice(0,10);
    const newSplitString = new Date(date);
    const newDate = newSplitString.getDate() + " " + months[newSplitString.getMonth()];

    return (
        <div className="messages-user">
            <div className="messages-user__wrapper">
                <img className="messages-user__avatar" src={userImg} alt="Virtus User Avatar"/>
                <h2 className="messages-user__name">{senderName}</h2>
                <h3 className="messages-user__time">{newDate}</h3>
            </div>
            <p className="messages-user__text">{props.data.message !== null ? props.data.message.body: ""}</p>
        </div>
    )
};