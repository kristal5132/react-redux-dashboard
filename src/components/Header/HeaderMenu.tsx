import React, {useState} from "react"
import userImg from "../../assets/images/users-avatar/photo-1.png"
import {ProjectCreateModal} from "../Projects/ProjectCreateModal";
import {useDispatch, useSelector} from "react-redux";
import {userLogout} from "../../store/auth/actions";
import {closeModalAddProject, openModalAddProject} from "../../store/addProjectToggler/actions";

export const HeaderMenu = () => {
    const user = useSelector((state:any) => state.user.id);
    const isOpen = useSelector((state:any) => state.projectModal.isOpened);
    const dispatch = useDispatch();
    /*const [isOpen, setIsOpen] = useState(false);*/

    function handleCloseModal (e:MouseEvent) {
        e.preventDefault();
        dispatch(closeModalAddProject());
    }
    return (
        <div className="header-menu">

            {isOpen && (
                <ProjectCreateModal onClose={handleCloseModal}/>
            )}
            {user ? <>
                <button className="header-menu__add" onClick={() => dispatch(openModalAddProject())}>
                    Add
                    <span className="header-menu__add-plus">+</span>
                </button>
                <button className="header-menu__search"/>
                <button className="header-menu__notification"/>
                <img className="header-menu__user" alt="VIRTUS User Avatar" src={userImg}/>
                <span className="header-menu__arrow"/>
                <span className="header-menu__login" onClick={() => dispatch(userLogout())}>Log Out</span>
                </>: null
            }
        </div>
    )
};