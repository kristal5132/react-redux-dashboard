const axios = require("axios");
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function loginToApp (values:{email:string, password: string}) {

    let user: { email: string, password: string } = {
        "email": values.email,
        "password": values.password
    };

    try {
        let response = await axios.post("/api/users/login/", user);

        if (response.status === 200) {
            localStorage.setItem('token', response.headers['x-auth-token']);
        }
    } catch (e) {
        console.log(e);
        alert("Login or password is incorrect, try again")
    }
}