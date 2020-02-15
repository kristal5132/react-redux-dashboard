import React from "react"
import {CloseButton} from "../CloseButton";
import {ProjectCreateModalForm} from "./ProjectCreateModalForm";

export const ProjectCreateModal = (props:{onClose: any}) => {
    return (
        <div className="project-modal">
            <div className="modal-body">
                <CloseButton onClick={props.onClose}/>
                <h2 className="modal-body__title">Add new project</h2>
                <ProjectCreateModalForm/>
            </div>
        </div>
    )
};