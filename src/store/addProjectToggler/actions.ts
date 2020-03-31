export const OPEN_ADD_PROJECT: string = "OPEN_ADD_PROJECT";
export const CLOSE_ADD_PROJECT: string = "CLOSE_ADD_PROJECT";

export const openModalAddProject = () => {
    return {
        type: OPEN_ADD_PROJECT,
        projectModal: true
    }
};

export const closeModalAddProject = () => {
    return {
        type: CLOSE_ADD_PROJECT,
        projectModal: false
    }
};