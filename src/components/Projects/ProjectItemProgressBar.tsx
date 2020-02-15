import React from "react"

export const ProjectItemProgressBar = (props: {value:number}) => {
    return (
        <progress max="100" value={props.value}/>
    )
};