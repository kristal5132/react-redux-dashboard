import {combineReducers} from "redux";
import {projects} from "./projects/reducers";
import {user} from "./auth/reducers";
import {USER_LOGOUT} from "./auth/actions";
import {projectModal} from "./addProjectToggler/reducers";
import {messages} from "./messages/reducers";

const appReducer = combineReducers({
    projects,
    user,
    projectModal,
    messages
});

export const rootReducer = (state:any, action:any) => {
    if (action.type === USER_LOGOUT) {
        state = undefined
    }
    return appReducer(state, action)
};