import React, {useState, useEffect} from "react"
import {PageMenu} from "../components/PageMenu"
import {ProjectTitles} from "../components/ProjectTitles"
import {ProjectItem} from "../components/ProjectItem";

export const Projects = (props:{data:any[], setData: any}) => {
    const [isLoading, setIsLoading] = useState(false);

    let countProjects: number = props.data.length;
    useEffect( () => {
        const fetchData = async () => {
            setIsLoading(true);
            let myHeaders = new Headers();
            myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU");

            let requestOptions:RequestInit = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            const response = await fetch("https://geekhub-frontend-js-9.herokuapp.com/api/projects/", requestOptions);
            const result = await response.json();

            console.log(result);

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
                        <div className="loader-wrapper">
                            <div className="lds-ring">
                                <div/>
                                <div/>
                                <div/>
                                <div/>
                            </div>
                        </div>
                        ) :
                            <div className="projects-wrapper">
                                {props.data.map((obj, index) => <ProjectItem key={index} obj={obj}/>)}
                            </div>
                    }
                </section>
            </section>
    )
};