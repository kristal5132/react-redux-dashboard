import React, {useEffect} from "react"
import {PageMenu} from "../components/PageMenu/PageMenu"
import {ProjectTitles} from "../components/Projects/ProjectTitles"
import {ProjectItem} from "../components/Projects/ProjectItem";
import {Loader} from "../components/Loader";
import {useSelector,useDispatch} from "react-redux";
import {addProjects, setLoaderOn, setLoaderOff} from "../store/projects/actions";
import {IProject} from "../interfaces";

const axios = require('axios');
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const Projects = () => {
    //TODO: add possibility to remove project, change it on button
    const projects = useSelector((state:any) => state.projects);
    const loader = useSelector((state:any) => state.projects.loader);
    const dispatch = useDispatch();


    useEffect( () => {
        const fetchData = async () => {
            dispatch(setLoaderOn());

            let requestOptions:RequestInit = {
                headers: {
                    "x-access-token": localStorage.token
                },
                redirect: 'follow'
            };

            const response = await axios.get('/api/projects', requestOptions);
            const result = response.data;

            if (projects.data.length === 0) {
                dispatch(addProjects(result));
            }

            dispatch(setLoaderOff());
        };
        fetchData();

        /*return () => {
            dispatch(removeProjects());
        }*/
    },[dispatch, projects.data.length]);

    let countProjects: number = 0;
    if (projects.data.length !== undefined) {
        countProjects = projects.data.length
    } else {
        countProjects = 0
    }

    return (
            <section className="projects">
                <PageMenu projects={countProjects}/>
                <section className="projects-container">
                    <ProjectTitles/>
                    {loader ? (
                        <Loader/>
                        ) :
                            <div className="projects-wrapper">
                                {projects.data.map((obj:IProject) => <ProjectItem key={obj._id} obj={obj}/>)}
                            </div>
                    }
                </section>
            </section>
    )
};