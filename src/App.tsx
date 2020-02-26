import React from 'react';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ResetPassword} from "./pages/ResetPassword";
import {Projects} from "./pages/Projects";
import {useSelector} from "react-redux";
import {Messages} from "./pages/Messages";


const App:React.FC = () => {
    const user = useSelector((state:any) => state.user.id);

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <main className="main">
                    {user ? <section className="sidebar">
                        <Sidebar/>
                    </section> : null}

                    {/*pages*/}
                    {user ?
                        <Switch>
                            <Route component={Projects} path="/" exact/>
                            <Route component={Messages} path="/messages"/>
                        </Switch>
                        :
                        <Switch>
                            <Route component={Login} path="/" exact/>
                            <Route component={SignUp} path="/signup"/>
                            <Route component={ResetPassword} path="/resetpass"/>
                        </Switch>
                    }
                </main>
            </div>
        </BrowserRouter>

    );
};

export default App;
