import {PROJECT_ADD, PROJECTS_ADD, PROJECTS_REMOVE} from "./actions"
import {LOADER_OFF, LOADER_ON} from "./actions";

const defaultState:any = {
    data: [],
    loader: false
};

export const projects = (state = defaultState, action:{type:string, payload: any}) => {
    switch (action.type) {
        case PROJECTS_ADD:
            return {
                ...state,
                data: [...state.data, ...action.payload]
            };
        case PROJECTS_REMOVE:
            return {
                ...state,
                data: []
            };
        case PROJECT_ADD:
            return {
                ...state,
                data: [action.payload, ...state.data]
            };
        case LOADER_ON: {
            return {
                ...state,
                loader: true
            };
        }
        case LOADER_OFF: {
            return {
                ...state,
                loader: false
            }
        }

        default: return state
    }
};