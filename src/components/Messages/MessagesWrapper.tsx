import React from "react";
import {MessagesThreads} from "./MessagesThreads";
import {MessagesChat} from "./MessagesChat";
import {MessagesSenderInfo} from "./MessagesSenderInfo";

export const MessagesWrapper = () => {
    return (
        <>
            <section className="messages-wrapper">
                <MessagesThreads/>
                <MessagesChat/>
                <MessagesSenderInfo/>
            </section>
        </>
    )
};