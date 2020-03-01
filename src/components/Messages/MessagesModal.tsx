import React from 'react';
import {CloseButton} from "../CloseButton";
import {
    closeThreadsModal, removeThreads,
    setThreadsLoaderOff,
    setThreadsLoaderOn,
    textInSearchInput
} from "../../store/messages/actions";
import {useDispatch, useSelector} from "react-redux";
import {InputBlock} from "../Form/InputBlock";
import {getAllUsers} from "../../scripts/senderInfo";
import {addAllUsers} from "../../store/users/actions";
import {ModalUsersWrapper} from "../Modal/ModalUsersWrapper";
import {IThread} from "../../interfaces";
import {createThread} from "../../scripts/createThread";

const axios = require("axios");
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const MessagesModal = () => {
    const searchInput = useSelector((state:any) => state.messages.searchInput);
    const threads = useSelector((state:any) => state.messages.threads);
    const activeUser = useSelector((state:any) => state.messages.activeUser);
    const dispatch = useDispatch();


    getAllUsers().then(result => {
        dispatch(addAllUsers(result));
    });

    const reloadThreads = async () => {
            dispatch(setThreadsLoaderOn());
            dispatch(removeThreads());
            dispatch(setThreadsLoaderOff());
    };

    const startNewThread = () => {
        if (threads.find((obj:IThread) => obj.users.find(obj => obj._id === activeUser))) {
            alert("This thread already exist!")
        } else {
            createThread(activeUser).then(result => console.log(result));
            reloadThreads();
        }
    };

    return (
        <div className="threads-modal">
            <CloseButton onClick={() => dispatch(closeThreadsModal())}/>
            <h2 className="modal-body__title">Add new conversation</h2>
            <div className="threads-modal__search">
                <InputBlock type="text" id="search" label="Search" value={searchInput} className="form__field" placeholder="Search" onChange={(event:React.ChangeEvent<HTMLInputElement>) => dispatch(textInSearchInput(event.target.value)) }/>
            </div>
            <ModalUsersWrapper/>
            <div className="threads-modal__submit-wrapper">
                <button className="messages-conversation__button threads-modal__submit" onClick={() => startNewThread()}>
                    Add
                </button>
            </div>

        </div>
    )
};