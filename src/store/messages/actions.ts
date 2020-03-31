import {IMessage, IUser} from "../../interfaces";

export const ADD_THREADS:string = "ADD_THREADS";
export const ADD_NEW_THREAD:string = "ADD_NEW_THREAD";
export const REMOVE_THREADS: string = "REMOVE_THREADS";
export const LOADER_ON_THREADS: string = "LOADER_ON_THREADS";
export const LOADER_OFF_THREADS: string = "LOADER_OFF_THREADS";
export const LOADER_OFF_MESSAGES: string = "LOADER_OFF_MESSAGES";
export const LOADER_ON_MESSAGES: string = "LOADER_ON_MESSAGES";
export const ADD_MESSAGES: string = "ADD_MESSAGES";
export const REMOVE_MESSAGES: string = "REMOVE_MESSAGES";
export const SEND_MESSAGE: string = "SEND_MESSAGE";
export const ADD_THREAD_ID: string = "ADD_THREAD_ID";
export const REMOVE_THREAD_ID: string = "ADD_THREAD_ID";
export const CHANGE_CURRENT_THREAD_MESSAGE: string = "CHANGE_CURRENT_THREAD_MESSAGE";
export const ADD_SENDER_INFO: string = "ADD_SENDER_INFO";
export const REMOVE_SENDER_INFO: string = "REMOVE_SENDER_INFO";
export const OPEN_THREADS_MODAL: string = "OPEN_THREADS_MODAL";
export const CLOSE_THREADS_MODAL: string = "CLOSE_THREADS_MODAL";
export const SEARCH_INPUT: string = "SEARCH_INPUT";
export const ACTIVE_USER_IN_MODAL: string = "ACTIVE_USER_IN_MODAL";


export const addThreads: (threads:object[]) => {type:string, payload: object[]} = (threads) => {
    return {
        type: ADD_THREADS,
        payload: threads
    }
};

export const addNewThread:(thread:object) => {type:string, payload: object} = (thread) => {
    return {
        type: ADD_NEW_THREAD,
        payload: thread
    }
};

export const removeThreads:() => {type:string} = () => {
    return {
        type: REMOVE_THREADS
    }
};


export const setThreadsLoaderOn: () => {type:string} = () => {
    return {
        type: LOADER_ON_THREADS
    }
};

export const setThreadsLoaderOff: () => {type:string} = () => {
    return {
        type: LOADER_OFF_THREADS
    }
};

export const setMessagesLoaderOn: () => {type:string} = () => {
    return {
        type: LOADER_ON_MESSAGES
    }
};

export const setMessagesLoaderOff: () => {type:string} = () => {
    return {
        type: LOADER_OFF_MESSAGES
    }
};

export const addMessages: (messages:object[]) => {type: string, payload: object[]} = (messages) => {
    return {
        type: ADD_MESSAGES,
        payload: messages
    }
};

export const removeMessages: () => {type:string} = () => {
    return {
        type: REMOVE_MESSAGES
    }
};

export const sendMessage: (message: IMessage) => {type:string, payload: IMessage} = (message) => {
    return {
        type: SEND_MESSAGE,
        payload: message
    }
};


export const addThreadId: (id:string) => {type: string, payload:string} = (id) => {
    return {
        type: ADD_THREAD_ID,
        payload: id
    }
};

export const changeCurrentThreadMessage:(message: string, id: string, date: string) => {type: string, payload: string, date: string} = (message , id, date) => {
    return {
        type: CHANGE_CURRENT_THREAD_MESSAGE,
        payload: message,
        threadId: id,
        date: date
    }
};

export const removeThreadId: () => {type: string} = () => {
    return {
        type: REMOVE_THREAD_ID
    }
};

export const addSenderInfo: (info:IUser) => {type: string, payload: IUser} = (info) => {
    return {
        type: ADD_SENDER_INFO,
        payload: info
    }
};

export const removeSenderInfo: () => {type: string} = () => {
    return {
        type: REMOVE_SENDER_INFO
    }
};

export const openThreadsModal: () => {type:string} = () => {
    return {
        type: OPEN_THREADS_MODAL
    }
};

export const closeThreadsModal: () => {type:string} = () => {
    return {
        type: CLOSE_THREADS_MODAL
    }
};

export const textInSearchInput: (text:string) => {type:string, payload:string} = (text) => {
    return {
        type: SEARCH_INPUT,
        payload: text
    }
};

export const setActiveUserInModal: (id:string) => {type:string, payload: any} = (id) => {
    return {
        type: ACTIVE_USER_IN_MODAL,
        payload: id
    }
};