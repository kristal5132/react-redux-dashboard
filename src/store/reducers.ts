import {combineReducers} from "redux";
import {projects} from "./projects/reducers";
import {user} from "./auth/reducers";
import {USER_LOGOUT} from "./auth/actions";
import {projectModal} from "./addProjectToggler/reducers";
import {messages} from "./messages/reducers";
import {users} from "./users/reducers";
import {filters} from "./filter/reducers";

const appReducer = combineReducers({
    projects,
    user,
    projectModal,
    messages,
    users,
    filters
});

export const rootReducer = (state:any, action:any) => {
    if (action.type === USER_LOGOUT) {
        state = undefined
    }
    return appReducer(state, action)
};