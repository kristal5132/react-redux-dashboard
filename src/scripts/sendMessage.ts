const axios = require("axios");
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const sendMessageData = async (threadId:string, text:string) => {
    let message = {
        "thread": {
            "_id": threadId,
        },
        "message": {
            "body": text
        }
    };

    let requestOptions:RequestInit = {
        headers: {
            "x-access-token": localStorage.token
        },
        redirect: 'follow'
    };

    const response = await axios.post(`/api/threads/messages/`, message, requestOptions);
    // doing this because state need to get key result.user._id not result.user
    let result = response.data;
    let userId = response.data.user;
    delete result.user;
    result.user = {
        _id: userId
    };

    return result;
};