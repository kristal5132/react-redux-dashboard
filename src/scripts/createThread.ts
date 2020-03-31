
const axios = require("axios");
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const createThread = async (userId:string) => {
    let user = {
        "user": {
            "_id": userId,
        }
    };

    let requestOptions:RequestInit = {
        headers: {
            "x-access-token": localStorage.token
        },
        redirect: 'follow'
    };

    const response = await axios.post(`/api/threads`, user, requestOptions);
    return response.data
};