import React from "react";
import {MessagesThreadsUsers} from "./MessagesThreadsUsers";
import {MessagesNewThread} from "./MessagesNewThread";

export const MessagesThreads = () => {
    return (
        <>
            <section className="messages-users">
                <MessagesThreadsUsers/>
                <MessagesNewThread/>
            </section>
        </>
    )
};