import React, {useContext, useState} from "react"
import userImg from "../../assets/images/users-avatar/photo-1.png"
import {ProjectCreateModal} from "../Projects/ProjectCreateModal";
import {Context} from "../Context";

export const HeaderMenu = () => {
    const {logOut, userId} = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);

    function handleCloseModal (e:MouseEvent) {
        e.preventDefault();
        setIsOpen(false);
    }
    return (
        <div className="header-menu">

            {isOpen && (
                <ProjectCreateModal onClose={handleCloseModal}/>
            )}
            {userId ? <>
                <button className="header-menu__add" onClick={() => setIsOpen(true)}>
                    Add
                    <span className="header-menu__add-plus">+</span>
                </button>
                <button className="header-menu__search"/>
                <button className="header-menu__notification"/>
                <img className="header-menu__user" alt="VIRTUS User Avatar" src={userImg}/>
                <span className="header-menu__arrow"/>
                <span className="header-menu__login" onClick={() => {logOut();}}>Log Out</span>
                </>: null
            }
        </div>
    )
};