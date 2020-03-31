import {USER_LOGOUT, USER_LOGIN} from "./actions";

const defaultState = {
    id: localStorage.getItem("currentUser") || ""
};

export const user = (state = defaultState, action:{type:string, payload:string,
    setToLocalStorage: () => void, clearLocalStorage: () => void}) => {
    switch (action.type) {
        case USER_LOGIN: {
            action.setToLocalStorage();
            return {
                ...state,
                id: action.payload
            }
        }

        case USER_LOGOUT: {
            action.clearLocalStorage();
            return {
                ...state,
                id: ""
            }
        }
        default: return state;
    }
};