export const USER_LOGIN:string = "USER_LOGIN";
export const USER_LOGOUT:string = "USER_LOGOUT";



export const userLogin = (id:string) => {
    return {
        type: USER_LOGIN,
        payload: id,
        setToLocalStorage: () => {
            localStorage.setItem("currentUser", id);
        }
    }
};

export const userLogout = () => {
    return {
        type: USER_LOGOUT,
        clearLocalStorage: () => {
            localStorage.clear();
        }
    }
};