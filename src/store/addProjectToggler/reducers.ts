import {OPEN_ADD_PROJECT, CLOSE_ADD_PROJECT} from "./actions";

const defaultState:{isOpened:boolean} = {
    isOpened: false
};

export const projectModal = (state = defaultState, action: {type: string}) => {
    switch(action.type) {
        case OPEN_ADD_PROJECT:
            return {
                ...state,
                isOpened: true
            };
        case CLOSE_ADD_PROJECT:
            return {
                ...state,
                isOpened: false
            };
        default: return state
    }
};