
const axios = require("axios");
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAllUsers = async () => {
    let requestOptions:RequestInit = {
        headers: {
            "x-access-token": localStorage.token
        },
        redirect: 'follow'
    };

    let response = await axios.get("https://geekhub-frontend-js-9.herokuapp.com/api/users/all", requestOptions);
    return await response.data;
};