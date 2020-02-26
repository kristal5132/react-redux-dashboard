import React from "react"
import {PageMenuLink} from "./PageMenuLink";
import {PageMenuFilter} from "./PageMenuFilter";

export const MessagesMenu = () => {
    const objMenuItems = [
        {
            text: `Inbox`,
            href: "#"
        },
        {
            text: `Sent`,
            href: "#"
        },
        {
            text: `Trash`,
            href: "#"
        }
    ];

    const menuFilterText:string = "Filter messages";
    const menuFilterOptions:string[] = ["Select filter", "Date", "Necessary", "Pointer"];

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
};