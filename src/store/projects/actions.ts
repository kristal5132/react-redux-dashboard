import {IProject} from "../../interfaces";

export const CLOSE_MODAL_OPTIONS_PROJECTS:string = "CLOSE_MODAL_OPTIONS_PROJECTS";
export const OPEN_MODAL_OPTIONS_PROJECTS:string = "OPEN_MODAL_OPTIONS_PROJECTS";
export const SELECTED_PROJECT_OPTION: string = "CURRENT_PROJECT_OPTION";
export const OPEN_UPDATE_PROJECT_MODAL:string = "OPEN_UPDATE_PROJECT_MODAL";
export const CLOSE_UPDATE_PROJECT_MODAL:string = "CLOSE_UPDATE_PROJECT_MODAL";

export const UPDATE_PROJECT:string = "UPDATE_PROJECT";


export const PROJECTS_ADD:string = "PROJECTS_ADD";
export const PROJECT_ADD:string = "PROJECT_ADD";
export const PROJECT_REMOVE:string = "PROJECT_REMOVE";

export const LOADER_ON:string = "LOADER_ON";
export const PROJECTS_REMOVE:string = "PROJECTS_REMOVE";

export const LOADER_OFF:string = "LOADER_OFF";

export const PROJECTS_IN_DEVELOPMENT:string = "PROJECTS_IN_DEVELOPMENT";
export const PROJECTS_IN_TESTING:string = "PROJECTS_IN_TESTING";
export const PROJECTS_IN_QUEUED:string = "PROJECTS_IN_QUEUED";
export const PROJECTS_IN_COMPLETE:string = "PROJECTS_IN_COMPLETE";
export const PROJECTS_SHOW_ALL:string = "PROJECTS_SHOW_ALL";


export const addProjects = (projects:object[]) => {
    return {
        type: PROJECTS_ADD,
        payload: projects
    }
};

export const addProject = (project: []) => {
    return {
        type: PROJECT_ADD,
        payload: project
    }
};

export const setLoaderOn = () => {
    return {
        type: LOADER_ON
    }
};

export const setLoaderOff = () => {
    return {
        type: LOADER_OFF
    }
};

export const removeProjects = () => {
    return {
        type: PROJECTS_REMOVE
    }
};

export const openModalOptionsInProjects = () => {
    return {
        type: OPEN_MODAL_OPTIONS_PROJECTS
    }
};

export const closeModalOptionsInProjects = () => {
    return {
        type: CLOSE_MODAL_OPTIONS_PROJECTS
    }
};

export const setSelectedProjectOption = (id: string) => {
    return {
        type: SELECTED_PROJECT_OPTION,
        payload: id
    }
};

export const projectRemove = (id:string) => {
    return {
        type: PROJECT_REMOVE,
        payload: id,
        func: (state:any) => {
            return state.data.filter((obj:IProject) => obj._id !== id);
        }
    }
};

export const openUpdateProjectModal = () => {
    return {
        type: OPEN_UPDATE_PROJECT_MODAL
    }
};

export const closeUpdateProjectModal = () => {
    return {
        type: CLOSE_UPDATE_PROJECT_MODAL
    }
};

export const updateProject = (project: IProject) => {
    return {
        type: UPDATE_PROJECT,
        func: (state: any) => {
            const index = state.data.findIndex((obj:IProject) => obj._id === project._id);
            state.data.splice(index, 1, project);
            return state.data
        }
    }
};




