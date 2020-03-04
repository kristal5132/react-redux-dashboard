import {
    PROJECT_ADD,
    PROJECTS_ADD,
    PROJECTS_IN_COMPLETE,
    PROJECTS_IN_DEVELOPMENT, PROJECTS_IN_QUEUED,
    PROJECTS_IN_TESTING,
    PROJECTS_REMOVE, PROJECTS_SHOW_ALL
} from "./actions"
import {LOADER_OFF, LOADER_ON} from "./actions";
import {IProject} from "../../interfaces";

const defaultState:any = {
    data: [],
    filteredData: [],
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
        case PROJECTS_IN_COMPLETE: {
            return {
                ...state,
                filteredData: state.data.filter((obj:IProject) => obj.status === "Completed")
            }
        }
        case PROJECTS_IN_TESTING: {
            return {
                ...state,
                filteredData: state.data.filter((obj:IProject) => obj.status === "Testing")
            }
        }
        case PROJECTS_IN_DEVELOPMENT: {
            return {
                ...state,
                filteredData: state.data.filter((obj:IProject) => obj.status === "Development")
            }
        }
        case PROJECTS_IN_QUEUED: {
            return {
                ...state,
                filteredData: state.data.filter((obj:IProject) => obj.status === "Queued")
            }
        }
        case PROJECTS_SHOW_ALL: {
            return {
                ...state,
                filteredData: state.data
            }
        }
        default: return state
    }
};