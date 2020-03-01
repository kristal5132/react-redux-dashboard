export const PROJECTS_ADD:string = "PROJECTS_ADD";
export const PROJECT_ADD:string = "PROJECT_ADD";

export const LOADER_ON:string = "LOADER_ON";
export const PROJECTS_REMOVE:string = "PROJECTS_REMOVE";

export const LOADER_OFF:string = "LOADER_OFF";

export const addProjects:any = (projects:object[]) => {
    return {
        type: PROJECTS_ADD,
        payload: projects
    }
};

export const addProject:any = (project:[]) => {
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

