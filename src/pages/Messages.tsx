import React from "react"
import {MessagesMenu} from "../components/PageMenu/MessagesMenu"
import {MessagesWrapper} from "../components/Messages/MessagesWrapper";

export const Messages:React.FC = () => {
    return (
        <>
            <section className="messages-container">
                <MessagesMenu/>
                <MessagesWrapper/>
            </section>
        </>
    )
};