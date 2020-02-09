import React, {useState} from "react"
import userImg from "../assets/images/users-avatar/photo-1.png"
import {ProjectCreateModal} from "./ProjectCreateModal";

export const HeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleCloseModal (e:MouseEvent) {
        e.preventDefault();
        setIsOpen(false);
    }
    return (
        <div className="header-menu">
            <button className="header-menu__add" onClick={() => setIsOpen(true)}>
                Add
                <span className="header-menu__add-plus">+</span>
            </button>

            {isOpen && (
                <ProjectCreateModal onClose={handleCloseModal}/>
            )}
            <button className="header-menu__search"/>
            <button className="header-menu__notification"/>
            <img className="header-menu__user" alt="VIRTUS User Avatar" src={userImg}/>
            <span className="header-menu__arrow"/>
        </div>
    )
};