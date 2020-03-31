import React from "react";

import userImg from "../../assets/images/users-avatar/lsize-avatar.png"
import {useDispatch, useSelector} from "react-redux";
import {setActiveUserInModal} from "../../store/messages/actions";


export const ModalUser = (props: {name:string, description: string, id:string}) => {
    const dispatch = useDispatch();
    const activeUser = useSelector((state:any) => state.messages.activeUser);

    return (
            <div className={activeUser === props.id ? "modal-users__item modal-users__item_active" : "modal-users__item"} onClick={() => dispatch(setActiveUserInModal(props.id))}>
                <img src={userImg} alt="Virtus User" className="modal-users__avatar"/>
                <h2 className="modal-users__name">
                    {props.name}
                </h2>
                <p className="modal-users__description">
                    {props.description}
                </p>
            </div>
    )
};