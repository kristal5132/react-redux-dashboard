import {
    PROJECTS_IN_COMPLETE,
    PROJECTS_IN_DEVELOPMENT,
    PROJECTS_IN_QUEUED,
    PROJECTS_IN_TESTING, PROJECTS_SHOW_ALL
} from "../projects/actions";

export const CHANGE_FILTER: string = "CHANGE_FILTER";


export const changeFilter = (filter:string) => {
    return {
        type: CHANGE_FILTER,
        payload: filter
    }
};

export const projectsFilterInDevelopment = () => {
    return {
        type: PROJECTS_IN_DEVELOPMENT
    }
};

export const projectsFilterInTesting = () => {
    return {
        type: PROJECTS_IN_TESTING
    }
};

export const projectsFilterInQueued = () => {
    return {
        type: PROJECTS_IN_QUEUED
    }
};

export const projectsFilterInComplete = () => {
    return {
        type: PROJECTS_IN_COMPLETE
    }
};

export const projectsFilterShowAll = () => {
    return {
        type: PROJECTS_SHOW_ALL
    }
};