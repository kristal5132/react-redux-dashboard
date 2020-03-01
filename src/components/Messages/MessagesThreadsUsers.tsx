import React, {useEffect} from "react";
import {MessagesThread} from "./MessagesThread";
import {useDispatch, useSelector} from "react-redux";
import {addThreads, setThreadsLoaderOff, setThreadsLoaderOn} from "../../store/messages/actions";
import {IThread} from "../../interfaces";
import {MessagesNoThreads} from "./MessagesNoThreads";
import {Loader} from "../Loader";

const axios = require("axios");
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const MessagesThreadsUsers = () => {
    //TODO: Add message if there no threads
    const threads = useSelector((state:any) => state.messages.threads);
    const loader =  useSelector((state:any) => state.messages.loader);
    const dispatch = useDispatch();

    useEffect( () => {
        const fetchData = async () => {
            dispatch(setThreadsLoaderOn());
            let requestOptions:RequestInit = {
                headers: {
                    "x-access-token": localStorage.token
                },
                redirect: 'follow'
            };

            const response = await axios.get('/api/threads', requestOptions);
            const result = response.data;
            if (threads.length === 0) {
                dispatch(addThreads(result.reverse()));
            }
            dispatch(setThreadsLoaderOff());
        };
        fetchData();

    },[dispatch, threads.length]);

    return (
        <div className="messages-users__wrapper custom-scrollbar">
            {loader ?
                <Loader/>:
                threads.length > 0 ? threads.map((obj:IThread) => <MessagesThread data={obj} key={obj._id}/>) : <MessagesNoThreads/> }
        </div>
    )
};