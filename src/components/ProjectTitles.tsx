import React from "react"

export const ProjectTitles = () => {
    const projectTitlesText:string[] = ["Project title", "Value", "Deadline", "Time spent", "Progress", "Status", "Assigned to"];
    return (
        <div className="project-titles">
            {projectTitlesText.map(item => <p key={item} className="project-titles__text">{item}</p>)}
        </div>
    )
};