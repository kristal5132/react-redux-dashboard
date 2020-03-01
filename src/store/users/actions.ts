import {IUser} from "../../interfaces";

export const ADD_ALL_USERS: string = "ALL_USERS";

export const addAllUsers: (users:IUser[]) => {type:string, payload:object[]} = (users) => {
    return {
        type: ADD_ALL_USERS,
        payload: users
    }
};