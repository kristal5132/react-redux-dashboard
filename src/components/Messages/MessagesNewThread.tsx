import React from "react";
import {MessagesModalWrapper} from "./MessagesModalWrapper";
import {useDispatch, useSelector} from "react-redux";
import {openThreadsModal} from "../../store/messages/actions";

export const MessagesNewThread = () => {
    const isModalOpened = useSelector((state:any) => state.messages.threadModal);
    const dispatch = useDispatch();
    return (
        <>
            <div className="messages-conversation">
                <button className="messages-conversation__button" onClick={() => dispatch(openThreadsModal())}>New conversation</button>
            </div>
            {isModalOpened? <MessagesModalWrapper/> : null}
        </>
    )
};