import {
    ACTIVE_USER_IN_MODAL,
    ADD_MESSAGES,
    ADD_NEW_THREAD, ADD_SENDER_INFO, ADD_THREAD_ID,
    ADD_THREADS, CHANGE_CURRENT_THREAD_MESSAGE, CLOSE_THREADS_MODAL, LOADER_OFF_MESSAGES,
    LOADER_OFF_THREADS, LOADER_ON_MESSAGES,
    LOADER_ON_THREADS, OPEN_THREADS_MODAL, REMOVE_MESSAGES, REMOVE_SENDER_INFO, REMOVE_THREAD_ID,
    REMOVE_THREADS, SEARCH_INPUT, SEND_MESSAGE
} from "./actions";
import {IThread} from "../../interfaces";

const defaultState = {
    threads: [],
    loader: false,
    messages: [],
    threadId: "",
    loaderMessages: false,
    senderInfo: {},
    threadModal: false,
    searchInput: "",
    activeUser: ""
};

export const messages = (state = defaultState, action:{type:string, payload: any, threadId: string, date:string}) => {
    switch (action.type) {
        case ADD_THREADS:
            return {
                ...state,
                threads: [...state.threads, ...action.payload]
            };
        case ADD_NEW_THREAD:
            return {
                ...state,
                threads: [action.payload, ...state.threads]
            };
        case REMOVE_THREADS:
            return {
                ...state,
                threads: []
            };
        case LOADER_OFF_THREADS:
            return {
                ...state,
                loader: false
            };
        case LOADER_ON_THREADS:
            return {
                ...state,
                loader: true
            };
        case LOADER_ON_MESSAGES:
            return {
                ...state,
                loaderMessages: true
            };
        case LOADER_OFF_MESSAGES:
            return {
                ...state,
                loaderMessages: false
            };
        case ADD_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
        };
        case REMOVE_MESSAGES:
            return {
                ...state,
                messages: []
            };
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        case ADD_THREAD_ID:
            return {
                ...state,
                threadId: action.payload
            };
        case REMOVE_THREAD_ID:
            return {
                ...state,
                threadId: ""
            };
        case CHANGE_CURRENT_THREAD_MESSAGE:
            return {
                ...state,
                threads: state.threads.map((obj:IThread) => {
                    if (obj._id === action.threadId) {
                        obj.updated_at = action.date;
                        if (obj.message !== null) {
                            obj.message.body = action.payload;
                        } else {
                            obj.message = {
                                _id: "",
                                body: action.payload,
                                thread: action.threadId
                            }
                        }
                    } return obj;
                }).sort(function(a, b) {
                    let date1 = +new Date(a.updated_at);
                    let date2 = +new Date(b.updated_at);
                    return date2 - date1;
                })
            };
        case ADD_SENDER_INFO:
            return {
                ...state,
                senderInfo: action.payload
            };
        case REMOVE_SENDER_INFO:
            return {
                ...state,
                senderInfo: {}
            };
        case OPEN_THREADS_MODAL:
            return {
                ...state,
                threadModal: true
            };
        case CLOSE_THREADS_MODAL:
            return {
                ...state,
                threadModal: false
            };
        case SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.payload
            };
        case ACTIVE_USER_IN_MODAL:
            return {
                ...state,
                activeUser: action.payload
            };
        default: return state;
    }
};