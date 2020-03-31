import React from "react"
import logo from "../assets/images/header/logo.png";

export const Logo:React.FC = () => {
    return (
        <a href="/">
            <img className="header-logo" src={logo} alt="VIRTUS"/>
        </a>
    )
};