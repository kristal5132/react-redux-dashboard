import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendMessageData} from "../../scripts/sendMessage";
import {changeCurrentThreadMessage, sendMessage} from "../../store/messages/actions";

const axios = require("axios");
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const MessagesChatInput = () => {
    //TODO: try to change all any types on redux
    const threadId = useSelector((state:any) => state.messages.threadId);
    const dispatch = useDispatch();
    let textAreaValue:any = useRef(null);

    const onClick = () => {
        sendRequestMessage();
    };

    const onKeyEnter = (event:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendRequestMessage();
        }
    };

    const sendRequestMessage = () => {
        sendMessageData(threadId, textAreaValue.current.value).then(result => {
                let date = new Date().toString();
                dispatch(sendMessage(result));
                dispatch(changeCurrentThreadMessage(result.body, threadId, date));
                textAreaValue.current.value = "";
            }
        );
    };


    return (
        <div className="messages-chat__inputwrap">
            <textarea placeholder="Write a message" className="messages-chat__textarea" ref={textAreaValue} onKeyPress={(event) => onKeyEnter(event)} />
            <button className="messages-chat__send" onClick={() => onClick()}  />
        </div>
    )
};