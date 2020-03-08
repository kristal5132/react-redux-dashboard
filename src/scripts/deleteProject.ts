
const axios = require("axios");
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const deleteProjectRequest = async (id:string) => {

    let requestOptions:RequestInit = {
        headers: {
            "x-access-token": localStorage.token
        },
        redirect: 'follow'
    };

    const response = await axios.delete(`/api/projects/${id}`, requestOptions);
    return response.data
};