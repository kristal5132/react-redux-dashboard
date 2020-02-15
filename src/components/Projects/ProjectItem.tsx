import React from "react"
import {ProjectItemText} from "./ProjectItemText";
import {ProjectItemProgressBar} from "./ProjectItemProgressBar";
import {ProjectItemOptions} from "./ProjectItemOptions";

export const ProjectItem = (props:any) => {
    let months:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];

    let newDate:string | undefined;
    let daysToDeadline:number | undefined;
    if(props.obj.deadline !== undefined) {
        let date:string = props.obj.deadline.slice(0,10);
        let newSplitString:Date = new Date(date);
        newDate = newSplitString.getDate() + " " + months[newSplitString.getMonth()] + " " + newSplitString.getFullYear();
        let dateNow:Date = new Date();
        daysToDeadline = newSplitString.getDate() - dateNow.getDate();
    }
    let cost:string;
    if (!props.obj.cost.includes("$")) {
        cost = `$${props.obj.cost}`
    } else cost = props.obj.cost;

    return (
        <div className="project-container" onClick={() => {
            console.log(props.obj._id)
        }}>
                <ProjectItemText title={props.obj.title} subtitle={props.obj.company}/>
                <ProjectItemText title={cost}/>
                <ProjectItemText title={newDate} subtitle={`${daysToDeadline} days left`}/>
                <ProjectItemText title={`${props.obj.timeSpent} hours`}/>
                <div className="project-progress">
                    <ProjectItemText title={`${props.obj.progress} %`}/>
                    <ProjectItemProgressBar value={props.obj.progress}/>
                </div>
                <ProjectItemText title={props.obj.status}/>
                {props.obj.assigned !== null &&
                    <ProjectItemText title={props.obj.assigned.name} subtitle={props.obj.assigned.position}/>
                }
                <ProjectItemOptions/>
        </div>
    )
};