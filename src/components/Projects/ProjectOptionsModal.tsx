import React from "react";
import {deleteProjectRequest} from "../../scripts/deleteProject";
import {useDispatch, useSelector} from "react-redux";
import {
    closeModalOptionsInProjects, closeUpdateProjectModal,
    openUpdateProjectModal,
    projectRemove
} from "../../store/projects/actions";
import {ProjectUpdateModal} from "./ProjectsUpdateModal";

export const ProjectOptionsModal = () => {
    const selectedProject = useSelector((state:any) => state.projects.selectedProject);
    const updateModal = useSelector((state:any) => state.projects.isOpenUpdateProject);
    const dispatch = useDispatch();
    const deleteProject = () => {
        const isConfirmed:boolean = window.confirm("You really want to delete this project?");
        if (isConfirmed) {
            deleteProjectRequest(selectedProject);
            dispatch(projectRemove(selectedProject));
            dispatch(closeModalOptionsInProjects());
        }
    };

    function handleCloseModal (e:MouseEvent) {
        e.preventDefault();
        dispatch(closeUpdateProjectModal());
        dispatch(closeModalOptionsInProjects());
    }

    function openUpdateProjectModalFunc () {
        dispatch(openUpdateProjectModal());
    }

    return (
        <>
            <div className="project-options-modal">
                <p className="project-options__text" onClick={() => openUpdateProjectModalFunc()}>Update project</p>
                <p className="project-options__text" onClick={() => deleteProject()}>Delete project</p>
            </div>
            {updateModal ? <ProjectUpdateModal onClose={handleCloseModal}/> : null}
        </>
    )
};