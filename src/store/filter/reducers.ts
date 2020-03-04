import {CHANGE_FILTER} from "./actions";

const defaultState = {
    projectFilter: null
};

export const filters = (state = defaultState, action:{type:string, payload: any}) => {
    switch(action.type) {
        case CHANGE_FILTER:
            return {
                ...state,
                projectFilter: action.payload
            };
        default: return state;
    }
};