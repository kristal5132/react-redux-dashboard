import {ADD_NEW_THREAD, ADD_THREADS, REMOVE_THREADS} from "./actions";

const defaultState = {
    threads: []
};

export const messages = (state = defaultState, action:{type:string, payload: any}) => {
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
        default: return state;
    }
};