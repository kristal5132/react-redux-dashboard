const axios = require("axios");
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function resetPassword(value:{email:string, password:string,passwordConfirmation:string}) {

    let user = {
        "password": value.password,
        "confirmationPassword": value.passwordConfirmation,
        "email": value.email,
    };

    try {
        let response = await axios.post("/api/users/reset_password", user);
        console.log(response);
        if (response.data.message) {
            alert(response.data.message)
        }
        return response
    } catch (e) {
        console.log(e);
        alert("Something went wrong, try again")
    }
}