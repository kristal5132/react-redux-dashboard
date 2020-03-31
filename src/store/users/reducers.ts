import {ADD_ALL_USERS} from "./actions";

const defaultState:[] = [];

export const users = (state = defaultState, action: {type:string, payload:any}) => {
    switch (action.type) {
        case ADD_ALL_USERS:
            return {
                ...state,
                users: action.payload
            };
        default: return state;
    }
};