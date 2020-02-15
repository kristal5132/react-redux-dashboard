import React, {useState, useEffect} from "react"
import {PageMenu} from "../components/PageMenu/PageMenu"
import {ProjectTitles} from "../components/Projects/ProjectTitles"
import {ProjectItem} from "../components/Projects/ProjectItem";
import {Loader} from "../components/Loader";

const axios = require('axios');
axios.defaults.baseURL = 'https://geekhub-frontend-js-9.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const Projects = (props:{data:any[], setData: any}) => {
    const [isLoading, setIsLoading] = useState(false);

    let countProjects: number = props.data.length;
    useEffect( () => {
        const fetchData = async () => {
            setIsLoading(true);

            let requestOptions:RequestInit = {
                headers: {
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU"
                },
                redirect: 'follow'
            };

            const response = await axios.get('/api/projects', requestOptions);
            const result = response.data;

            console.log(response);

            props.setData(result.reverse());
            setIsLoading(false);
        };
        fetchData();
    },[]);

    return (
            <section className="projects">
                <PageMenu projects={countProjects}/>
                <section className="projects-container">
                    <ProjectTitles/>
                    {isLoading ? (
                        <Loader/>
                        ) :
                            <div className="projects-wrapper">
                                {props.data.map((obj) => <ProjectItem key={obj._id} obj={obj}/>)}
                            </div>
                    }
                </section>
            </section>
    )
};