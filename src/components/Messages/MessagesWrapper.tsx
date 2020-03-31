import React from "react";
import {MessagesThreads} from "./MessagesThreads";
import {MessagesChatWrapper} from "./MessagesChatWrapper";
import {MessagesSenderInfo} from "./MessagesSenderInfo";
import {useSelector} from "react-redux";

export const MessagesWrapper = () => {
    const threadId = useSelector((state:any) => state.messages.threadId);
    return (
        <>
            <section className="messages-wrapper">
                <MessagesThreads/>
                <MessagesChatWrapper/>
                {threadId ? <MessagesSenderInfo/>: null}
            </section>
        </>
    )
};