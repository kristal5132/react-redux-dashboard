import React from "react"
import {useDispatch} from "react-redux";
import {openModalOptionsInProjects, setSelectedProjectOption} from "../../store/projects/actions";

export const ProjectItemOptions = (props: {id:string}) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="project-options">
                <button className="project-options__dots" onClick={() => {
                    dispatch(openModalOptionsInProjects());
                    dispatch(setSelectedProjectOption(props.id))
                }}/>
            </div>
        </>
    )
};