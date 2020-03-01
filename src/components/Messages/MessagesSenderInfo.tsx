import React from "react";
import userImg from "../../assets/images/users-avatar/lsize-avatar.png";
import {useSelector} from "react-redux";


export const MessagesSenderInfo = () => {
    const senderInfo = useSelector((state:any) => state.messages.senderInfo);
    return (
        <>
            <section className="messages-senderinfo">
                <img className="messages-senderinfo__avatar" src={userImg} alt="Virtus Sender Info"/>
                <h2 className="messages-senderinfo__name">{senderInfo.name}</h2>
                <h3 className="messages-senderinfo__position">{senderInfo.position}</h3>
                <p className="messages-senderinfo__describe">{senderInfo.description}</p>
                <p className="messages-senderinfo__contact">Email</p>
                <p className="messages-senderinfo__contact-text">{senderInfo.email}</p>
                <p className="messages-senderinfo__contact">Phone</p>
                <p className="messages-senderinfo__contact-text">{senderInfo.phone}</p>
                <p className="messages-senderinfo__contact">Address</p>
                <p className="messages-senderinfo__contact-text">{senderInfo.address}</p>
                <p className="messages-senderinfo__contact">Organization</p>
                <p className="messages-senderinfo__contact-text">{senderInfo.organization}</p>
            </section>
        </>
    )
};
