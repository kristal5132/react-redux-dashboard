import React from "react"
import {SidebarElement} from "./SidebarElement";
import homeImg from "../assets/images/sidebar/home.png"
import menuImg from "../assets/images/sidebar/menu.png"
import trendingUpImg from "../assets/images/sidebar/trending-up.png"
import messagesImg from "../assets/images/sidebar/messages.png"
import accountMultipleImg from "../assets/images/sidebar/account-multiple.png"


export const Sidebar:React.FC = () => {
    const sidebarNavElements = [
        {
            id: "1",
            link: "#",
            src: homeImg
        },
        {
            id: "2",
            link: "#",
            src: menuImg
        },
        {
            id: "3",
            link: "#",
            src: trendingUpImg
        },
        {
            id: "4",
            link: "#",
            src: messagesImg
        },
        {
            id: "5",
            link: "#",
            src: accountMultipleImg
        }
    ];
    return (
        <nav className="sidebar-nav">
            {sidebarNavElements.map(obj => <SidebarElement key={obj.id} href={obj.link} src={obj.src}/>)}
        </nav>
    )
};