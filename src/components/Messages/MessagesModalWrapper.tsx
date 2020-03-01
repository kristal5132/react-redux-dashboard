import React from "react";
import {MessagesModal} from "./MessagesModal";
import {closeThreadsModal} from "../../store/messages/actions";
import {useDispatch} from "react-redux";


export const MessagesModalWrapper = () => {
    const dispatch = useDispatch();

    return (
        <div className="modal" onClick={(e) => {
            if (e.target === e.currentTarget) {
                dispatch(closeThreadsModal())
            }
        }}>
            <MessagesModal/>
        </div>
    )
};