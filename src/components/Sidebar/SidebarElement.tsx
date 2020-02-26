import React from "react"
import {NavLink} from "react-router-dom";

interface objectString {
    href: string,
    src: string,
    id: number
}

export const SidebarElement = (props:objectString) => {
    if (props.href === "/") {
        return (
            <NavLink className="sidebar-nav__link" to={props.href} activeClassName="sidebar-nav_active" exact>
                <img className="sidebar-nav__link-img" src={props.src} alt="VIRTUS Nav element"/>
            </NavLink>
        )
    } else {
        return (
            <NavLink className="sidebar-nav__link" to={props.href} activeClassName="sidebar-nav_active">
                <img className="sidebar-nav__link-img" src={props.src} alt="VIRTUS Nav element"/>
            </NavLink>
        )
    }
};