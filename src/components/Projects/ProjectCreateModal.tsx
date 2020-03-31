import React from "react"
import {CloseButton} from "../CloseButton";
import {ProjectCreateModalForm} from "./ProjectCreateModalForm";
import {addProject} from "../../store/projects/actions";
import {useDispatch} from "react-redux";
import {closeModalAddProject} from "../../store/addProjectToggler/actions";

const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const ProjectCreateModal = (props:{onClose: any}) => {
    const dispatch = useDispatch();
    const sendData = async (title:string, company: string, cost: string, deadline: string, assigned: string) => {
        let data = {
            "title": title,
            "company": company,
            "cost": cost,
            "deadline": deadline,
            "assigned": assigned
        };

        let requestOptions: RequestInit = {
            headers: {
                "x-access-token": localStorage.token
            },
            redirect: 'follow'
        };
        const response = await axios.post('/api/projects/', data, requestOptions);
        const result = response.data;
        console.log(response);

        dispatch(addProject(result))
    };

    return (
        <div className="modal" onClick={(e) => {
            if (e.target === e.currentTarget) {
                dispatch(closeModalAddProject())
            }
        }}>
            <div className="modal-body">
                <CloseButton onClick={props.onClose}/>
                <h2 className="modal-body__title">Add new project</h2>
                <ProjectCreateModalForm sendData={sendData} submitValue="Create project"/>
            </div>
        </div>
    )
};