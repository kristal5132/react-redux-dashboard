import React from "react";
import {MessagesChatInput} from "./MessagesChatInput";
import {MessagesChat} from "./MessagesChat";
import {useSelector} from "react-redux";


export const MessagesChatWrapper = () => {
    const threadId = useSelector((state:any) => state.messages.threadId);
    return (
        <>
            <section className="messages-chat">
                <MessagesChat/>
                {threadId ? <MessagesChatInput/> : null}
            </section>
        </>
    )
};