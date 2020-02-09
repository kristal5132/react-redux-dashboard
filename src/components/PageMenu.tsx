import React from "react"
import {PageMenuLink} from "./PageMenuLink";
import {PageMenuFilter} from "./PageMenuFilter";

export const PageMenu = (props:{projects:number}) => {
    const objMenuItems = [
        {
            text: `All Projects (${props.projects})`,
            href: "#"
        },
        {
            text: `Workflow`,
            href: "#"
        }
    ];

    const menuFilterText:string = "Show projects";
    const menuFilterOptions:string[] = ["Select filter", "All", "Active", "Disabled"];

    return (
        <section className="page-menu">
            <div className="page-links">
                {objMenuItems.map(obj => {
                    return (
                        <PageMenuLink key={obj.text} text={obj.text} href={obj.href}/>
                    )
                })}
            </div>
            <div className="page-filter">
                <PageMenuFilter key={menuFilterText} text={menuFilterText} value={menuFilterOptions}/>
            </div>
        </section>
    )
}