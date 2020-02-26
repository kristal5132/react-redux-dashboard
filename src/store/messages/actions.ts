export const ADD_THREADS:string = "ADD_THREADS";
export const ADD_NEW_THREAD:string = "ADD_NEW_THREAD";
export const REMOVE_THREADS: string = "REMOVE_THREADS";

export const addThreads: any = (threads: object[]) => {
    return {
        type: ADD_THREADS,
        payload: threads
    }
};

export const addNewThread:any = (thread: object) => {
    return {
        type: ADD_NEW_THREAD,
        payload: thread
    }
};

export const removeThreads:any = () => {
    return {
        type: REMOVE_THREADS
    }
};