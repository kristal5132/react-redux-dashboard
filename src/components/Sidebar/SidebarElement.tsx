import React from "react"

interface objectString {
    href: string,
    src: string
}

export const SidebarElement = (props:objectString) => {
    return (
        <a className="sidebar-nav__link" href={props.href}>
            <img className="sidebar-nav__link-img" src={props.src} alt="VIRTUS Nav element"/>
        </a>
    )
};