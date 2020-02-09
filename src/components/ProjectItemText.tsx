import React from "react"

export const ProjectItemText = (props:{title:string | undefined, subtitle?:string}) => {
    return (
        <div className="project-text">
            <h2 className="project-text__title">{props.title}</h2>
            {props.subtitle !== undefined &&
                <p className="project-text__subtitle">
                    {props.subtitle}
                </p>
            }
        </div>
    )
};