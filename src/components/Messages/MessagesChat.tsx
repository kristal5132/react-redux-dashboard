import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addMessages,
    addSenderInfo,
    removeMessages,
    setMessagesLoaderOff,
    setMessagesLoaderOn
} from "../../store/messages/actions";
import {IMessage, IThread, IUser} from "../../interfaces";
import {MessagesReceiverMg} from "./MessagesReceiverMg";
import {MessagesSenderMg} from "./MessagesSenderMg";
import {MessagesChatNoMessages} from "./MessagesChatNoMessages";
import {Loader} from "../Loader";
import {getAllUsers} from "../../scripts/senderInfo";

const axios = require("axios");
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const MessagesChat = () => {
    const messages = useSelector((state:any) => state.messages.messages);
    const threadId = useSelector((state:any) => state.messages.threadId);
    const threads = useSelector((state:any) => state.messages.threads);
    const loaderMessages = useSelector((state:any) => state.messages.loaderMessages);
    const dispatch = useDispatch();

    useEffect( () => {
        const fetchData = async (id:string) => {
            dispatch(setMessagesLoaderOn());
            let requestOptions:RequestInit = {
                headers: {
                    "x-access-token": localStorage.token
                },
                redirect: 'follow'
            };

            const response = await axios.get(`/api/threads/messages/${id}`, requestOptions);
            const result = response.data;

            dispatch(addMessages(result));

            //getting sender info
            let senderId:string = "";
            threads.map((obj:IThread) => obj._id === threadId ?
            obj.users.map((obj) => obj._id !== localStorage.currentUser ? senderId = obj._id : null)
                : null);

            getAllUsers().then(result => {
                    dispatch(addSenderInfo(result.find((item:IUser) => item._id === senderId)));
            });

            dispatch(setMessagesLoaderOff());
        };

        if (threadId !== "") {
            fetchData(threadId);
        }


        return () => {
            dispatch (removeMessages());
        }
    },[dispatch, threadId]);

    const messagesEndRef:any = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView()
    };
    useEffect(scrollToBottom, [messages]);

    return (
        <div className="messages-chatMessages custom-scrollbar">
            { threadId ?
                messages.length > 0 ? messages.map((obj:IMessage) => obj.user._id === localStorage.currentUser ?
                <MessagesReceiverMg text={obj.body} time={obj.created_at} key={obj._id}/>:
                <MessagesSenderMg text={obj.body} time={obj.created_at} key={obj._id}/>)
                    : (loaderMessages ?  <Loader/> : <MessagesChatNoMessages/>)
                : null}
            <div ref={messagesEndRef} />
        </div>
    )
};