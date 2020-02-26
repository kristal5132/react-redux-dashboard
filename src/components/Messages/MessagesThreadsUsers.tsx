import React, {useEffect} from "react";
import {MessagesThread} from "./MessagesThread";
import {useDispatch, useSelector} from "react-redux";
import {addThreads, removeThreads} from "../../store/messages/actions";
import {IThread} from "../../interfaces";

const axios = require("axios");
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const MessagesThreadsUsers = () => {
    const threads = useSelector((state:any) => state.messages.threads);
    const dispatch = useDispatch();

    useEffect( () => {
        const fetchData = async () => {
            let requestOptions:RequestInit = {
                headers: {
                    "x-access-token": localStorage.token
                },
                redirect: 'follow'
            };

            const response = await axios.get('/api/threads', requestOptions);
            const result = response.data;

            dispatch(addThreads(result));

        };
        fetchData();

        return () => {
            dispatch (removeThreads());
        }
    },[dispatch]);

    return (
        <div className="messages-users__wrapper custom-scrollbar">
            {/*<MessagesThread name="Petya" time="8 February" text="Ich Will"/>*/}
            {threads.map((obj:IThread) => <MessagesThread data={obj} key={obj._id}/> )}
        </div>
    )
};