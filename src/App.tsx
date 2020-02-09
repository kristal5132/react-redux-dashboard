import React, {useState} from 'react';
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {Projects} from "./pages/Projects";
import {Context} from "./components/Context";

const App:React.FC = () => {

    const [data, setData] = useState<any[]>([]);
    const addProject = (project:object) => {
        setData(prev => [project, ...prev])
    };

    return (
        <Context.Provider value={{addProject}}>
            <div className="App">
                <Header/>
                <main className="main">
                    <section className="sidebar">
                        <Sidebar/>
                    </section>

                    {/*pages*/}
                    <Projects data={data} setData={setData}/>
                </main>
            </div>
        </Context.Provider>
    );
};

export default App;
