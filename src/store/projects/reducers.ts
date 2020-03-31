import {
    CLOSE_MODAL_OPTIONS_PROJECTS, CLOSE_UPDATE_PROJECT_MODAL,
    OPEN_MODAL_OPTIONS_PROJECTS, OPEN_UPDATE_PROJECT_MODAL,
    PROJECT_ADD, PROJECT_REMOVE,
    PROJECTS_ADD,
    PROJECTS_IN_COMPLETE,
    PROJECTS_IN_DEVELOPMENT, PROJECTS_IN_QUEUED,
    PROJECTS_IN_TESTING,
    PROJECTS_REMOVE, PROJECTS_SHOW_ALL, SELECTED_PROJECT_OPTION, UPDATE_PROJECT
} from "./actions"
import {LOADER_OFF, LOADER_ON} from "./actions";
import {IProject} from "../../interfaces";

const defaultState:any = {
    data: [],
    filteredData: [],
    loader: false,
    isOpenProjectsOptions: false,
    selectedProject: "",
    isOpenUpdateProject: false
};

export const projects = (state = defaultState, action:{type:string, payload: any, func: any}) => {
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
        case OPEN_MODAL_OPTIONS_PROJECTS:
            return {
                ...state,
                isOpenProjectsOptions: !state.isOpenProjectsOptions
            };

        case CLOSE_MODAL_OPTIONS_PROJECTS:
            return {
                ...state,
                isOpenProjectsOptions: false
            };
        case SELECTED_PROJECT_OPTION:
            return {
                ...state,
                selectedProject: action.payload
            };
        case PROJECT_REMOVE:
            return {
                ...state,
                data: action.func(state)
            };
        case OPEN_UPDATE_PROJECT_MODAL:
            return {
                ...state,
                isOpenUpdateProject: true
            };
        case CLOSE_UPDATE_PROJECT_MODAL:
            return {
                ...state,
                isOpenUpdateProject: false
            };
        case UPDATE_PROJECT:
            return {
                ...state,
                data: action.func(state)
            };
        default: return state
    }
};