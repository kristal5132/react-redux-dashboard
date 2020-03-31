import React from "react"
import {SidebarElement} from "./SidebarElement";
import homeImg from "../../assets/images/sidebar/home.png"
import menuImg from "../../assets/images/sidebar/menu.png"
import trendingUpImg from "../../assets/images/sidebar/trending-up.png"
import messagesImg from "../../assets/images/sidebar/messages.png"
import accountMultipleImg from "../../assets/images/sidebar/account-multiple.png"



export const Sidebar:React.FC = () => {

    const sidebarNavElements = [
        {
            link: "/home",
            src: homeImg
        },
        {
            link: "/",
            src: menuImg
        },
        {
            link: "/stats",
            src: trendingUpImg
        },
        {
            link: "/messages",
            src: messagesImg
        },
        {
            link: "/account",
            src: accountMultipleImg
        }
    ];
    return (
        <nav className="sidebar-nav">
            {sidebarNavElements.map((obj, index) =>
                <SidebarElement key={index} href={obj.link} src={obj.src} id={index}/>
            )}
        </nav>
    )
};