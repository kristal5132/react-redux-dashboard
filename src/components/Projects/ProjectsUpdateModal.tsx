import React from "react"
import {CloseButton} from "../CloseButton";
import {ProjectCreateModalForm} from "./ProjectCreateModalForm";
import {useDispatch, useSelector} from "react-redux";
import {closeModalOptionsInProjects, closeUpdateProjectModal, updateProject} from "../../store/projects/actions";

const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const ProjectUpdateModal = (props:{onClose: any}) => {
    const dispatch  = useDispatch();
    const selectedProject = useSelector((state:any) => state.projects.selectedProject);
    const sendData = async (title?:string, company?: string, cost?: string, deadline?: string, assigned?: string) => {
        let data: {title?:string, company?: string, cost?: string, deadline?: string, assigned?: string} = {};
        if (title) {
            data["title"] = title
        }
        if(company) {
            data["company"] = company
        }
        if(cost) {
            data["cost"] = cost
        }
        if(deadline) {
            data["deadline"] = deadline
        }
        if(assigned) {
            data["assigned"] = assigned
        }


        console.log(data);

        let requestOptions: RequestInit = {
            headers: {
                "x-access-token": localStorage.token
            },
            redirect: 'follow'
        };

        if(Object.keys(data).length !== 0) {
            const response = await axios.put(`/api/projects/${selectedProject}`, data, requestOptions);
            const result = response.data;
            dispatch(updateProject(result));
        } else alert("You should enter some values");


        dispatch(closeUpdateProjectModal());
        dispatch(closeModalOptionsInProjects())
    };

    return (
        <div className="modal" onClick={(e) => {
            if (e.target === e.currentTarget) {
                dispatch(closeUpdateProjectModal())
            }
        }}>
            <div className="modal-body">
                <CloseButton onClick={props.onClose}/>
                <h2 className="modal-body__title">Update project</h2>
                <ProjectCreateModalForm sendData={sendData} submitValue="Update project"/>
            </div>
        </div>
    )
};