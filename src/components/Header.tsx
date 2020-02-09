import React from 'react';
import {Logo} from "./Logo";
import {HeaderMenu} from "./HeaderMenu";


export const Header:React.FC = () => {
    return (
        <header className="header">
            <Logo/>
            <HeaderMenu/>
        </header>
    )
};

