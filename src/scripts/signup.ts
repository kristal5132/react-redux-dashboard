const axios = require("axios");
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function signUp(name:string,email:string,password:string) {

    let user:{email: string, password: string, name: string} =  {
        "email": email,
        "password": password,
        "name": name
    };

    try {
        let response = await axios.post("/api/users/", user);
        if (response.statusText === "Created") {
            alert("You created account");
            return response
        } else alert ("This account already exists");
    } catch (e) {
        console.log(e);
        alert("Something went wrong, try again")
    }

}