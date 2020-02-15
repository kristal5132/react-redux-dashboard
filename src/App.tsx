import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Projects} from "./pages/Projects";
import {Context} from "./components/Context";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ResetPassword} from "./pages/ResetPassword";


const App:React.FC = () => {

    const [data, setData] = useState<any[]>([]);
    const [userId, setUserId] = useState<string>(localStorage.getItem("currentUser") || "");

    const addProject = (project:object) => {
        setData(prev => [project, ...prev])
    };

    const addNewUser = (id:string) => {
        setUserId(id);
        localStorage.setItem("currentUser", id);
        console.log(userId);
    };

    const logOut = () => {
        setUserId("");
        localStorage.clear();
    };

    return (
        <BrowserRouter>
            <Context.Provider value={{addProject, addNewUser, logOut, userId}}>
                <div className="App">
                    <Header/>
                    <main className="main">
                        {userId? <section className="sidebar">
                            <Sidebar/>
                        </section> : null}

                        {/*pages*/}
                        {userId? <Projects data={data} setData={setData}/>:
                            <Switch>
                                <Route component={Login} path="/" exact/>
                                <Route component={SignUp} path="/signup"/>
                                <Route component={ResetPassword} path="/resetpass"/>
                            </Switch>
                        }
                    </main>
                </div>
            </Context.Provider>
        </BrowserRouter>
    );
};

export default App;
